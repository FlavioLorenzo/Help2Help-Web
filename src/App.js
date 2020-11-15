import React from 'react'
import {Route, Switch, withRouter, Redirect} from 'react-router-dom'

import useDeviceDetect from "./hooks/useDeviceDetect"

import Layout from './hoc/Layout/Layout'
import ExampleComponent from './containers/ExampleComponent/ExampleComponent'

import './App.css'

const app = props => {
  /*
  const {isMobile} = useDeviceDetect()

  let content = (<div>I'm mobile</div>)
  if (!isMobile) {
    content = (<div>I'm web</div>)
  }
  */

  let routes = ( 
    <Switch>
      <Route path="/" exact component={ExampleComponent}/>
      <Redirect to="/"/>
    </Switch>
  )

  /*
  if(this.props.isAuthenticated) {
    routes = ( 
      <Switch>
        <Route path="/" exact component={ExampleComponent}/>
        <Redirect to="/"/>
      </Switch>
    )
  }
  */
  
  return (
    <div>
      <Layout>
        {routes}
      </Layout>
    </div>
  );
}

export default withRouter(
  app
);
