import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var headline = this.props.data.headline;
      var blurb = this.props.data.blurb;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">{headline}</h1>
            <h3>{blurb}</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

   </header>
    );
  }
}

export default Header;
