import React from 'react'

// Imágenes
import Logo from '../assets/Logo.svg';

// CSS


export const Header = () => {
  return (
    <header>
        <ul>
            <img src={Logo} alt="" />
        </ul>
    </header>  
    )
}
