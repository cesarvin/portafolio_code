import React, { useEffect, useState, useRef } from 'react'

import Ing from '../images/ing.png'
import Sc from '../images/scrumstudy.svg'

const Experience = () => {
  const [txt, setText] = useState('>')
  const [count, setCount] = useState(0)
  const savedCallback = useRef()
  const title = '>Educación'

  const callback = () => {
    if (count > 15) {
      setCount(0)
    } else {
      setCount(count + 1)
      setText(title.slice(0, count + 1))
    }
  }

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function letter() {
      savedCallback.current()
    }

    const id = setInterval(letter, 250)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="edu">
      <div className="edu-content">
        <h1 className="mb-10">
          {txt}
          <span className="parpadea">_</span>
        </h1>
        <p className="mt-75">
          Actualmente cursando la carrera de
          <strong>
            &nbsp;Ingeniería en Ciencias de la Computación y Tecnologías de la Información
            con especialidad en Seguridad Informática
          </strong>
        </p>
        <div className="edu-logo mt-25 mb-25">
          <img src={Ing} width="200px" className="img-job" alt="Uvg" />
        </div>
        <hr className="hr-y" />
        <p className="mt-75">
          <strong>
            Scrum Fundamentals Certified
          </strong>
        </p>
        <div className="edu-logo mt-25 mb-25">
          <img src={Sc} width="250px" className="img-job" alt="Scrum" />
        </div>
        <hr className="mb-75" />
      </div>
    </div>
  )
}

export default Experience
