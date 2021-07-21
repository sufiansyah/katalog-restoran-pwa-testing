import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    runtime.register();
    return;
  }
  console.log('Service worker not supported in this browser');
  if ('workbox' in navigator) {
    runtime.register();
    return;
  }
  console.log('workbox berhasil dimuat');
};

export default swRegister;
