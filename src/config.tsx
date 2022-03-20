import { NavigateOptions, To } from "react-router-dom"

export const firebase = {
  "apiKey": "AIzaSyCfHb4xd5K2BLjfnoR0ar7YRJABo8wPyFw",
  "authDomain": "millo-do.firebaseapp.com",
  "projectId": "millo-do",
  "storageBucket": "millo-do.appspot.com",
  "messagingSenderId": "600382027183",
  "appId": "1:600382027183:web:476b4cea7548f3a799ab5a",
  "measurementId": "G-QJDYVRK7VM"
}

export interface Page {
  displayName?: string,
  path: To,
  options?: NavigateOptions
}

export const menu : Page[] = [
  { path: "/" },
  { displayName: "Terceros", path: "/thirds" },
  { displayName: "Ventas", path: "/sales" },
  { displayName: "Configuración", path: "/settings" },
]

const config = {
  menu,
  firebase
}

export default config
