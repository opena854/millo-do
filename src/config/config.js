import { lazy } from 'react'
import locales from './locales'
import routes from './routes'
import themes from './themes'
import parseLanguages from 'base-shell/lib/utils/locale'

const config = {
  auth: {
    signInURL: '/signin',
  },
  routes,
  locale: {
    locales,
    defaultLocale: parseLanguages(['en', 'de', 'ru'], 'en'),
    onError: (e) => {
      console.warn(e)
      return
    },
  },
  menu: {
    MenuContent: lazy(() => import('../components/Menu/MenuContent')),
  },
  theme: {
    themes,
    defaultThemeID: 'default',
    defaultIsDarkMode: false,
    defaultIsRTL: false, //change this to true for default Right to Left Language support
  },
  pages: {
    LandingPage: lazy(() => import('../pages/LandingPage/LandingPage')),
    PageNotFound: lazy(() => import('../pages/PageNotFound/PageNotFound')),
  },
  firebase: {
    apiKey: "AIzaSyCfHb4xd5K2BLjfnoR0ar7YRJABo8wPyFw",
    authDomain: "millo-do.firebaseapp.com",
    projectId: "millo-do",
    storageBucket: "millo-do.appspot.com",
    messagingSenderId: "600382027183",
    appId: "1:600382027183:web:476b4cea7548f3a799ab5a",
    measurementId: "G-QJDYVRK7VM"
  },
}

export default config
