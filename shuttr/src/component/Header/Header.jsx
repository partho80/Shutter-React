import React from 'react'
import {Link} from 'react-router-dom'
function Header() {
  return (
      <div>
          <header id="header" className="shuttr-header-area">
    <div className="top-header">
      <div className="container">
        <div className="row mobile-show">
          <div className="mobile-top-wrapper">
            <div className="mble-left">
              <div className="language-choose dropdown">
                <a className="dropdown-toggle" href="#" id="langDropdown-top" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  EN
                </a>
                <div className="dropdown-menu" aria-labelledby="langDropdown-top">
                  <a className="dropdown-item" href="#">EN</a>
                  <a className="dropdown-item" href="#">SP</a>
                </div>
              </div>
            </div>
            <div className="mble-right">
              <ul className="hm-icon-collection">
                <li>
                  <button type="button" className="mble-search-btn" data-toggle="modal" data-target="#searchModal">
                    <i className="fas fa-search"></i>
                  </button>
                </li>
                <li><a href="wishlist.html"><i className="far fa-heart"></i></a></li>
  
                <li data-toggle="modal" data-target="#cartModal"><i className="fas fa-shopping-cart"></i>
                  <p className="count-num">5</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container"> 
      <div className="row">
        <div className="header-menu-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light">
            <a href="index.html" className="header-menu-logo navbar-brand">
              <img src="assets/img/logo.png" alt="Shuttr logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse header-menu hm-collections" id="navbarSupportedContent">
              <div className="main-menu-wrapper">
                <ul className="navbar-nav mr-auto hm-collections">
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="/"  >
                      Home
                    </Link> 
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/">Home 1</Link></li>
                      <li><Link className="dropdown-item" to="/Home_2">Home 2</Link></li> 
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Shop">Shop</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Product">Product</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Blog">Blog</Link>
                  </li>
                  <li className="nav-item dropdown">
                     <Link className="nav-link dropdown-toggle" to="/Contact" > Pages </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item"to="/Contact">Contact</Link></li>
                      <li> <Link className="dropdown-item" to="/About">About Us</Link></li>
                      <li><Link className="dropdown-item" to="/BlogDetails">Blog Details</Link></li>
                      <li><Link className="dropdown-item" to="/Cart">Cart</Link></li>
                      <li><Link className="dropdown-item" to="/Error">404</Link></li>
                      <li className="nav-item dropdown"><a className="dropdown-item dropdown-toggle" href="#"> More...</a>
                        <ul className="submenu dropdown-menu">
                          <li><a className="dropdown-item" href="#">Submenu item 1</a></li>
                          <li><a className="dropdown-item" href="#">Submenu item 2</a></li>
                          <li><a className="dropdown-item" href="#">Submenu item 3</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="header-menu-icon mobile-hide">
                  <ul className="hm-icon-collection">
                    <li className="language-choose dropdown">
                      <a className="dropdown-toggle" href="#" id="langDropdown" role="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        EN
                      </a>
                      <div className="dropdown-menu" aria-labelledby="langDropdown">
                        <a className="dropdown-item" href="#">EN</a>
                        <a className="dropdown-item" href="#">SP</a>
                      </div>
                    </li>
                    <li>
                      <div className="search-box">
                        <button className="btn-search">
                          <i className="fas fa-search"></i>
                        </button>
                        <input type="text" className="input-search-box" placeholder="Type to Search..."/>
                      </div>
                    </li>
                    <li><a href="wishlist.html"><i className="far fa-heart"></i></a></li>

                    <li data-toggle="modal" data-target="#cartModal"><i className="fas fa-shopping-cart"></i>
                      <p className="count-num">5</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header> 
    </div>
  )
}

export default Header