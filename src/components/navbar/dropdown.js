import React from "react"
import { Link } from "gatsby"

function NavbarDropdown({ title, links }) {
  const linkItems = links.map((link, index) =>
    <Link href="{link.href}" className="navbar-item" key={index}>{link.title}</Link>
  );

  return (
    <div class="navbar-item has-dropdown is-hoverable">
      <a class="navbar-link">
        {title}
      </a>

      <div class="navbar-dropdown">
        {linkItems}
      </div>
    </div>
  )
}


export default NavbarDropdown
