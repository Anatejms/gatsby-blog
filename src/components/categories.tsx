import React from "react"
import { Link } from "gatsby"

const Categories = ()  => (
  <div className="sidebar-box">
    <h3 className="sidebar-heading">Categories</h3>
    <ul className="categories">
      <li><a href="#">Fashion <span>(6)</span></a></li>
      <li><a href="#">Technology <span>(8)</span></a></li>
      <li><a href="#">Travel <span>(2)</span></a></li>
      <li><a href="#">Food <span>(2)</span></a></li>
      <li><a href="#">Photography <span>(7)</span></a></li>
    </ul>
  </div>
)

export default Categories