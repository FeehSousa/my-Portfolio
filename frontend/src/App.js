import React from 'react'

//Global Style
import GlobalStyle from './compenents/GlobalStyle'

//Components
import AboutUs from './pages/AboutUs'
import Portfolio from './pages/Portfolio'
import ContactMe from './pages/ContactMe'
import Nav from './pages/Nav'

//Roteamento
import {Route, Switch} from 'react-router-dom'

//Icons

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

/*const ledDados = ( ) =>{
  fetch('/api')
  .then(resultado =>{
    console.log("dados do backend", resultado)
  })
}*/

function App() {

  library.add(fab, fas)
  return (
    <div>
      <GlobalStyle />
      <Nav />
        <Switch>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route path={['/portfolio:id', '/portfolio']}>
            <Portfolio />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
