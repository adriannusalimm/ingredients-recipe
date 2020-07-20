import React from 'react';
import './App.css';

function App() {
  return (
    <div className="cover-container d-flex p-3 flex-column">
      <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Recipes</h3>
          <nav className="nav nav-masthead justify-content-center">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>

      <main role="main" className="inner cover">
        <h1 className="cover-heading">Search Bar</h1>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary">Search</a>
        </p>
      </main>

      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Created 2020.</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
