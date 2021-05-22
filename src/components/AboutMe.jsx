import React, { useEffect, useState, useRef } from 'react'

import ln from '../images/linkedin.png'
import fb from '../images/facebook.png'
import wp from '../images/whatsapp.png'
import gh from '../images/github.png'
import tw from '../images/twitter.png'
import desarrollo from '../images/desarrollo.png'

const AboutMe = () => {
  const [txt, setText] = useState('>')
  const [count, setCount] = useState(0)
  const savedCallback = useRef()
  const title = '>Hola mundo, soy César!'

  const callback = () => {
    if (count > 30) {
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
    <div className="home">
      <div className="content">
        <h1 className="mb-10">
          {txt}
          <span className="parpadea">_</span>
        </h1>

        <div className="descripcion">
          <div className="descripcion-resume">
            <p className="fadein">
              Programador de sistemas, con experiencia en desarrollo de software a la medida
              utilizando diferentes tecnologías y aplicando metodologías ágiles para el desarrollo
            </p>
          </div>
          <div className="descripcion-img">
            <img src={desarrollo} alt="desarrollo" width="400px" />
          </div>
        </div>
      </div>
      <div className="redes">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
          <img className="redicon" src={ln} alt="Linkedin" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img className="redicon" src={fb} alt="Facebook" />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
          <img className="redicon" src={wp} alt="Whatspapp" />
        </a>
        <a href="https://www.github.com/" target="_blank" rel="noreferrer">
          <img className="redicon" src={gh} alt="Github" />
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
          <img className="redicon" src={tw} alt="Twitter" />
        </a>
      </div>
    </div>
  )
}

export default AboutMe
