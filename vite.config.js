import vituum from 'vituum'
import tailwindcss from '@vituum/vite-plugin-tailwindcss'
import posthtml from '@vituum/vite-plugin-posthtml'

export default {
  plugins: [
    vituum(),
    posthtml({
      root: './src',
    }),
    tailwindcss(),
  ],
}
