import React from "react"
import Navbar from "./navbar"

const Hero = () => (
  <section className="hero is-large"
    style={{
      backgroundImage: "linear-gradient(to right, #3ea8dd, #2f98d3, #2587c8, #2077bd, #2166b0, #1a6db7, #0f75bd, #007cc3, #009dd9, #00bde7, #00ddee, #5ffbf1)"
    }}>
    <div class="hero-head">
      <Navbar siteTitle="Home" />
    </div>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Large title
      </h1>
        <h2 className="subtitle">
          Large subtitle
      </h2>
      </div>
    </div>
  </section>
)

export default Hero
