import React from "react";
import {FormattedMessage} from "react-intl"


const About = () => {
  return (
    <div className="mx-auto" style={{width: "60%", marginTop: "75px"}}>
      <h1 className="my-4"><FormattedMessage id="about.title" /></h1>
      <p style={{marginTop: "50px"}}><FormattedMessage id="about.description" /></p>
    </div>
  )
}

export default About;