import VModal from 'vue-js-modal/dist/ssr.nocss'

export default function (Vue, options, { isServer: disabled, router }) {
  if(process.isClient) {
    Vue.use(VModal, {
      router,
      disabled,
      ...options
    })
  }
}
