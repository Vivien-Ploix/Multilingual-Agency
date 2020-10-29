import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Works from "./pages/works"
import 'bootstrap/dist/css/bootstrap.css'

import { IntlProvider } from "react-intl"
import messagesFr from "./translation/fr"
import messsagesEn from "./translation/en"

const messages = {
  fr: messagesFr,
  en: messsagesEn
}



const App = () => {
  const [language, setLanguage] = useState("fr")

  useEffect(() => {
    if (localStorage.getItem('chosenLanguage')) {
      setLanguage(localStorage.getItem('chosenLanguage'))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('chosenLanguage', language);
    console.log(localStorage.getItem('chosenLanguage'))
  }, [language])

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <main>
          <Navbar onClickFrench={() => setLanguage("fr")} onClickEnglish={() => setLanguage("en")}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/works">
              <Works />
            </Route>

          </Switch>
        </main>
      </Router>
    </IntlProvider>
  )

}

export default App;
ReactDOM.render(<App/>, document.querySelector('#root'))