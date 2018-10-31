import React, { Component } from React;


class Header extends Component {
    render() {
     return (
        <div className="container">
        <div className="jumbotron">
          <h1>Lawless French</h1>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">Home</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Level A1
                    <span className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">À l’hôtel</a></li>
                    <li><a href="#">Au restaurant</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Level A2
                    <span className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Bise à la française</a></li>
                    <li><a href="#">Comment utiliser les toilettes</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Level B1
                    <span className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Chapeaux en France</a></li>
                    <li><a href="#">Chefs cuisiniers célèbres</a></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                    Level B2
                    <span className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Bruxelles</a></li>
                    <li><a href="#">Cafetière à piston – comment l’utiliser ?</a></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-user" />Sign Up</a></li>
                <li><a href="#"><span className="glyphicon glyphicon-log-in" />Login</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
     );
    }
}

export default Header;