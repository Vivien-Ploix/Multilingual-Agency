import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {FormattedMessage} from "react-intl"
import StudyCase from "./../components/StudyCase";


const Works = () => {
  return (
    <>
      <Router>
        <div className="mx-auto" style={{width: "60%", marginTop: "75px"}}>
          <h1 style={{marginBottom: "50px"}}><FormattedMessage id="works.title" /></h1>
          <p><FormattedMessage id="works.description" /></p>
          <div className="row justify-content-between pr-5 mr-5" style={{marginTop: "50px", marginBottom: "50px"}}>
            <Link className="nav-link h5" to="/works/platon-study-case">Platon</Link>
            <Link className="nav-link h5" to="/works/solane-study-case">Solane</Link>
            <Link className="nav-link h5" to="/works/sedal-study-case">Sedal</Link>
          </div>

          <Switch>
            <Route path="/works/:caseName">
              <StudyCase />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default Works;