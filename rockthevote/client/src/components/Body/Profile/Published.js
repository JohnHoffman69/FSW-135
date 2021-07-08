import React from "react"
import "./Main.css"

const Published = () => {
    return (
        <section className="panel">
        <h2>Your published issues</h2>
        <ul>
          <li>
            <b>18 </b>Published Issue
          </li>
          <li>
            <b>2456</b> Drafts.
          </li>
          <li>
            Most popular issue: <b>Raise minimum wage? YES/NO? </b>
          </li>
        </ul>
      </section>
    )
}

export default Published