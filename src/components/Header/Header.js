import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    return(
      <header className='header'>
        <div className='header_content'>
          <h1 className='header_title'>Pokedéx</h1>
        </div>
      </header>
    );
  }
}

export default Header;
