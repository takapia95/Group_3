import React from 'react'

const Nav = () => {
  return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary nav-fill">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src='https://media.tenor.com/LYftKBBe2csAAAAi/earth-planet.gif' height={30} width={30} />
            </a>

            <div class="collapse navbar-collapse btn-3" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">trackme</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="https://api.nasa.gov/">NASA APIs</a>
                </li>
            </ul>
            <h4> hurricanes and wildfires tracker</h4>
            </div>
        </div>
        </nav>
  )
}

export default Nav