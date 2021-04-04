/* eslint-disable react/jsx-key */
import React, { lazy } from 'react'
import AuthorizedRoute from 'base-shell/lib/components/AuthorizedRoute/AuthorizedRoute'
import UnauthorizedRoute from 'base-shell/lib/components/UnauthorizedRoute/UnauthorizedRoute'

const SignIn = lazy(() => import('../pages/SignIn/SignIn'))
const Home = lazy(() => import('../pages/Home/Home'))

const routes = [
  <UnauthorizedRoute path="/signin" redirectTo="/" exact component={SignIn} />,
  <AuthorizedRoute path="/home" exact component={Home} />,
]

export default routes
