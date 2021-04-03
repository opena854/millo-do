import React, { Component } from 'react'
import App from 'base-shell/lib'
import MUIConfig from 'material-ui-shell/lib'
import merge from 'base-shell/lib/utils/config'
import _config from './config'

import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const config = merge(MUIConfig, _config)

firebase.initializeApp(config.firebase);

export default class Demo extends Component {
  render() {
    return <App config={config} />
  }
}
