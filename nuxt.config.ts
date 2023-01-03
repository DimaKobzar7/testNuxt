// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  app: {
    // baseURL: '/tedtNuxt/',
    head: {
      title: 'Perla Helsa',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Piazzolla:ital,opsz,wght@1,8..30,500&display=swap',
        },
        { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
      ],

      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',
        },
      ],
    },
  },
  //   modules: [
  //     // ...
  //     '~/node_modules/bootstrap/dist/js/bootstrap.js',
  //   ],
  css: ['assets/main.scss'],
});

// export default {
//   //   mode: 'static',
//   target: 'static',
//   router: {
//     base: '/tedtNuxt/',
//   },
//   head: {
//     title: 'Perla Helsa',
//     link: [
//       {
//         rel: 'stylesheet',
//         href: 'https://fonts.googleapis.com/css2?family=Piazzolla:ital,opsz,wght@1,8..30,500&display=swap',
//       },
//       { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
//     ],

//     script: [
//       {
//         src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',
//       },
//     ],
//   },

//   css: ['assets/main.scss'],
//   // other config goes here
// };

// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//     router: {
//         base: '/tedtNuxt/'
//     }
// } : {}

// module.exports = {

//   head: {
//     title: 'Perla Helsa',
//     link: [
//       {
//         rel: 'stylesheet',
//         href: 'https://fonts.googleapis.com/css2?family=Piazzolla:ital,opsz,wght@1,8..30,500&display=swap',
//       },
//       { rel: 'icon', type: 'image/svg', href: '/favicon.svg' },
//     ],

//     // ...routerBase,
//     script: [
//       {
//         src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js',
//       },
//     ],
//   },

//   css: ['assets/main.scss'],
// };

// git subtree push --prefix dist origin gh-pages
