import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(
      {
        theme: {
          extend: {
            colors: {
              primary: '#1a237e',
              secondary: '#ff7f50'
            },
            borderRadius: {
              'none': '0px',
              'sm': '4px',
              DEFAULT: '8px',
              'md': '12px',
              'lg': '16px',
              'xl': '20px',
              '2xl': '24px',
              '3xl': '32px',
              'full': '9999px',
              'button': '8px'
            }
          }
        }
      }
    )
  ],
});
