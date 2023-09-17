import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react()],
    server:{
      port: process.env.REACT_APP_PORT,
    },
    define: {
      'process.env.REACT_APP_API_URL': JSON.stringify(env.REACT_APP_API_URL),
    },
  };
});
