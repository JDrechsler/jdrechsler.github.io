import vituum from 'vituum'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import posthtml from '@vituum/vite-plugin-posthtml'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default {
  base: '/jdrechsler.github.io/',
  build: {
    assetsDir: 'media',
    copyPublicDir: false,
    outDir: 'docs',
  },
  plugins: [
    vituum(),
    posthtml({
      root: './src',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'public',
          dest: '',
        },
      ],
    }),
    tailwindcss(),
  ],
}
