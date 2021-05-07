import React from 'react'

//Global Style
import GlobalStyle from './compenents/GlobalStyle'

//Components
import AboutUs from './pages/AboutUs'



/*const ledDados = ( ) =>{
  fetch('/api')
  .then(resultado =>{
    console.log("dados do backend", resultado)
  })
}*/

function App() {
  return (
    <div>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
