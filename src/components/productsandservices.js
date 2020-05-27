import React from "react"
import { Link } from "gatsby"

function ProductsAndServices() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="is-size-2 is-uppercase has-text-weight-bold"
        style={{ marginBottom: '.5rem' }}>Servicios</h2>
        <div className="columns">
          <div className="column">
            <Link to="#">
              <figure className="image is-5by3">
                <img src="https://bulma.io/images/placeholders/800x480.png" />
              </figure>
            </Link>
          </div>
          <div className="column">
            <Link to="#">
              <figure className="image is-5by3">
                <img src="https://bulma.io/images/placeholders/800x480.png" />
              </figure>
            </Link>
          </div>
          <div className="column">
            <Link to="#">
              <figure className="image is-5by3">
                <img src="https://bulma.io/images/placeholders/800x480.png" />
              </figure>
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}


export default ProductsAndServices
