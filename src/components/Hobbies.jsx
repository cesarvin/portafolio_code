import React from 'react'

import vg from '../images/videogames.jpg'
import pool from '../images/billar.jpg'
import car from '../images/autos.jpg'
import nf from '../images/netflix.png'

const Hobbies = () => (
  <div className="hob">
    <p className="m-10">
      Además del gusto a la informática, algunos de mis otros intereses son:
    </p>
    <div className="hobbies">
      <ul className="hobbie-container">
        <li className="hobbies-item m-10">
          <div className="polaroid img500">
            <div className="img-contenedor">
              <img className="rotr" src={vg} width="500px" alt="videogames" />
            </div>
            <div className="polaroidtitle">
              <p>
                <strong>
                  Videojuegos
                </strong>
              </p>
            </div>
          </div>
        </li>
        <li className="hobbies-item m-10">
          <div className="polaroid img525">
            <div className="img-contenedor">
              <img className="rotl3" src={pool} width="525px" alt="pool" />
            </div>
            <div className="polaroidtitle">
              <p>
                <strong>
                  Billar
                </strong>
              </p>
            </div>
          </div>
        </li>
        <li className="hobbies-item m-10">
          <div className="polaroid img550">
            <div className="img-contenedor">
              <img className="rotr10" src={nf} width="550px" alt="nf" />
            </div>
            <div className="polaroidtitle">
              <p>
                <strong>
                  Películas
                </strong>
              </p>
            </div>
          </div>
        </li>
        <li className="hobbies-item m-10">
          <div className="polaroid img475">
            <div className="img-contenedor">
              <img className="rotl" src={car} width="475px" alt="autos" />
            </div>
            <div className="polaroidtitle">
              <p>
                <strong>
                  Autos, autodromo, cuarto de milla
                </strong>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
)

export default Hobbies
