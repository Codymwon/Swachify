import admin from "firebase-admin";

let app = null;

export default {
    async fetch(request, env) {
        // Protect the endpoint
        const apiKey = request.headers.get("x-notify-key");
        if (apiKey !== env.NOTIFY_API_KEY) {
            return new Response("Unauthorized", { status: 401 });
        }

        if (request.method !== "POST") {
            return new Response("Method Not Allowed", { status: 405 });
        }

        const body = await request.json();
        const { docId, collection } = body;

        if (!docId || !collection) {
            return new Response("Missing docId or collection", { status: 400 });
        }

        // Initialize Firebase Admin
        if (!app) {
            const serviceAccount = JSON.parse(env.FIREBASE_SERVICE_ACCOUNT);
            app = admin.initializeApp({
                credential: admin.credential.cert(serviceAccount)
            });
        }

        // Read the document from Firestore
        const snap = await admin.firestore().collection(collection).doc(docId).get();
        if (!snap.exists) {
            return new Response("Document not found", { status: 404 });
        }

        const data = snap.data();

        // Build notification
        let payload = {
            notification: {},
            data: { docId, collection }
        };

        if (collection === "bookings") {
            payload.notification.title = "New Booking";
            payload.notification.body = `${data.name} booked a ${data.serviceCategory}`;
        }

        if (collection === "contacts") {
            payload.notification.title = "New Contact Message";
            payload.notification.body = `${data.firstName} sent a message`;
        }

        // Send notification to topic
        await admin.messaging().sendToTopic(collection, payload);

        return new Response(JSON.stringify({ success: true }), {
            headers: { "Content-Type": "application/json" }
        });
    }
};
