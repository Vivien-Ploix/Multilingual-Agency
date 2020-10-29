import React from "react"
import { useParams } from "react-router-dom"
import {FormattedMessage} from "react-intl"


const StudyCase = () => {
 let { caseName } = useParams()

 if (caseName === "platon-study-case") {
   return (
    <div className="d-flex justify-content-center flex-column">
      <h1 className="mb-4"><FormattedMessage id="platon.title"/></h1>
      <p><FormattedMessage id="platon.description"/></p>
    </div>
   )
 } else if (caseName === "solane-study-case") {
    return (
    <>
      <h1><FormattedMessage id="solane.title"/></h1>
      <p><FormattedMessage id="solane.description"/></p>
    </>
   )
 } else if (caseName === "sedal-study-case") {
    return (
    <>
      <h1><FormattedMessage id="sedal.title"/></h1>
      <p><FormattedMessage id="sedal.description"/></p>
    </>
   )
 }
}

export default StudyCase;