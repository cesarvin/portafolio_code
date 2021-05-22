import React from 'react'
import { HashLink } from 'react-router-hash-link'
// import {
//   Link,
// } from 'react-router-dom'

const Menu = () => (
  <div className="menu">
    <ul>
      <li>
        {/* <HashLink className="link_menu" smooth to="/16776/proyectof/index.html?page#abo">
        @cesarvin</HashLink> */}
        <HashLink className="link_menu" smooth to="/portafolio16776/index.html?page#abo">@cesarvin</HashLink>
      </li>
      <li>
        {/* <HashLink smooth to="/16776/proyectof/index.html?page#exp">Experiencia</HashLink> */}
        <HashLink smooth to="/portafolio16776/index.html?page#exp">Experiencia</HashLink>
      </li>
      <li>
        {/* <HashLink smooth to="/16776/proyectof/index.html?page#edu">Educación</HashLink> */}
        <HashLink smooth to="/portafolio16776/index.html?page#edu">Educación</HashLink>
      </li>
      <li>
        {/* <HashLink smooth to="/16776/proyectof/index.html?page#ski">Habilidades</HashLink> */}
        <HashLink smooth to="/portafolio16776/index.html?page#ski">Habilidades</HashLink>
      </li>
      <li>
        {/* <HashLink smooth to="/16776/proyectof/index.html?page#hob">Intereses</HashLink> */}
        <HashLink smooth to="/portafolio16776/index.html?page#hob">Intereses</HashLink>
      </li>
    </ul>
  </div>

)

export default Menu
