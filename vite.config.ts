// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/zamansheikh/",
//   plugins: [react()],
//   build: {
//     outDir: 'docs', // Specify the output directory here
//   },
// });


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  let outDir = 'dist'; // Default output directory

  if (mode === 'github') {
    outDir = 'docs';
  } else if (mode === 'netlify') {
    outDir = 'dist';
  }

  return {
    base: mode === 'github' ? '/zamansheikh/' : '/',
    plugins: [react()],
    build: {
      outDir, // Use the determined output directory
    },
  };
});


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/",
//   plugins: [react()],
// });