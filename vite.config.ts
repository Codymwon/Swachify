import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },

  css: {
    postcss: {
      plugins: [],
    },
  },

  // IMPORTANT FIXES BELOW
  root: path.resolve(import.meta.dirname),        // ← root of project
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"), // ← Vercel expects /dist
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // React core and related libraries
          'vendor-react': [
            'react',
            'react-dom',
            'react/jsx-runtime',
          ],
          // Router
          'vendor-router': [
            'wouter',
          ],
          // Animation libraries
          'vendor-animation': [
            'framer-motion',
          ],
          // UI and Icons
          'vendor-ui': [
            'lucide-react',
            '@radix-ui/react-slot',
            '@radix-ui/react-dialog',
            '@radix-ui/react-label',
            '@radix-ui/react-separator',
            'class-variance-authority',
            'clsx',
            'tailwind-merge',
          ],
          // Firebase
          'vendor-firebase': [
            'firebase/app',
            'firebase/firestore',
            'firebase/storage',
          ],
          // Form handling
          'vendor-forms': [
            'react-hook-form',
            '@hookform/resolvers',
            'zod',
          ],
        },
      },
    },
  },

  server: {
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
