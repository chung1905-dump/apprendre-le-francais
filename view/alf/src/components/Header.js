import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { levels } = this.props

    let levelDropDown = levels.map((level) => {
      return (
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Level {level}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">À l’hôtel</a>
            <a className="dropdown-item" href="#">Au restaurant</a>
          </div>
        </li>
      )

    })

    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Lawless French</h1>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Home</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Level A1
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">À l’hôtel</a>
                    <a className="dropdown-item" href="#">Au restaurant</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Level A2
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Bise à la française</a>
                    <a className="dropdown-item" href="#">Comment utiliser les toilettes</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Level B1
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Chapeaux en France</a>
                    <a className="dropdown-item" href="#">Chefs cuisiniers célèbres</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Level B2
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Bruxelles</a>
                    <a className="dropdown-item" href="#">Cafetière à piston – comment l’utiliser ?</a>
                  </div>
                </li> */}
                {levelDropDown}
              </ul>
              <ul className="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#"><strong>Sign Up</strong></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><strong>Login</strong></a>
                </li>
              </ul>
            </div>
          </nav>

        </div>
      </div>
    );
  }
}

export default Header;