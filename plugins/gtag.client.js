// https://medium.com/@yashashr/add-google-analytics-to-your-nuxt-3-app-in-under-a-minute-67ce727e9e2a
export default defineNuxtPlugin(() => {
    const { gtagId } = useRuntimeConfig().public;
    
    function gtag() {
      window.dataLayer.push(arguments);
    }
    
    window.dataLayer = window.dataLayer || [];
    
    gtag("js", new Date());
    gtag("config", gtagId);
    
    useHead({
      script: [
        {
          src: `https://www.googletagmanager.com/gtag/js?id=${gtagId}`,
          async: true,
        },
      ],
    });
  });