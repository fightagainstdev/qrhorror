import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  base: './', // 使用相对路径，适合 GitHub Pages
  build: {
    minify: 'terser', // 使用 terser 进行压缩，不需要 Java
    target: 'es2020',
    modulePreload: { polyfill: false },
    assetsInlineLimit: 800,
    assetsDir: '',
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        manualChunks: undefined,
        assetFileNames: `[name].[ext]`
      },
    }
  },
  plugins: [
    {
      name: 'configure-response-headers',
      configureServer: (server) => {
        server.middlewares.use((req, res, next) => {
          if (req.url?.endsWith('.ts')) {
            res.setHeader('Content-Type', 'application/javascript');
          }
          next();
        });
      }
    }
  ]
});
