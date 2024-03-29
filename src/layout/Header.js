import React from 'react';
import './Header.css'

function Header() {
    return (
        <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Recipes</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/Help">Features</a>
            <a className="nav-link" href="/">Contact</a>
          </nav>
        </div>
      </header>
    )
}

export default Header;