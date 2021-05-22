import React from 'react'

import Muni from '../images/muni.png'
import Uvg from '../images/uvg.png'
import Esolutions from '../images/esolutions.png'

const Job = () => (
  <div className="resume">
    <div className="job">
      <div className="job-logo">
        <img src={Uvg} width="300px" className="img-job" alt="Uvg" />
      </div>
      <div className="job-description">
        <p>
          <strong>
            Programador de sistemas en la Universidad del Valle.
          </strong>
          <br />
          Trabajando para desarrollar nuevas soluciones y dando soporte a los sistemas legacy.
        </p>
      </div>
    </div>
    <hr />
    <div className="job">
      <div className="job-description">
        <p>
          <strong>
            Programador de sistemas en la Municipalidad de Villa Nueva.
          </strong>
          <br />
          Encargado del mantenimiento y la administración de la geodatabase y de los sistemas GIS.
          Desarrollo de aplicaciones a la medida.
        </p>
      </div>
      <div className="job-logo">
        <img src={Muni} width="300px" className="img-job" alt="Muni" />
      </div>
    </div>
    <hr />
    <div className="job">
      <div className="job-logo">
        <img src={Esolutions} width="275px" className="img-job" alt="E-solutions" />
      </div>
      <div className="job-description">
        <p>
          <strong>
            Programador de sistemas en el Banco Industrial (e-Solutions)
          </strong>
          <br />
          Outsoursing de e-Solutions, desarrollo y mantenimiento
          a la aplicación del CRM que utiliza el banco, que fue desarrollada por e-Solutions.
        </p>
      </div>
    </div>
  </div>
)

export default Job
