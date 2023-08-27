const { build } = require('vite');


function run() {
  build({
    build: {
      outDir: './',
      rollupOptions: {
        input:'./main.ts',
        output: {
          format: 'cjs',
          entryFileNames: 'bundle-vite.js'
        }
      }
    }
  })
}
run()