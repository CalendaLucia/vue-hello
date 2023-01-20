const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello World!',
      image: 'img/horror.jpeg'
    }
  }
}).mount('#app');