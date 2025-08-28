import React from 'react'
import { Link } from "react-router-dom";


const breadcrumb = () => {
  return (
    <div className="container">
        <div className="tech-breadcrumb">
        <Link className="breadcrumb-Item" to="/">Home /</Link>
        <h3 className="breadcrumb-Item active" href="#">  Technologies</h3>
        </div>
    </div>
  )
}

export default breadcrumb