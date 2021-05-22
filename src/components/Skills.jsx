import React from 'react'

import win from '../images/icons/ventanas.svg'
import ubu from '../images/icons/ubuntu.svg'
import lin from '../images/icons/centos.svg'
import db from '../images/icons/database.svg'
import sql from '../images/icons/sql.svg'
import js from '../images/icons/031-js.svg'
import php from '../images/icons/php.svg'
import html from '../images/icons/html.svg'
import dll from '../images/icons/dll.svg'
import exe from '../images/icons/exe.svg'
import ts from '../images/icons/031-ts.svg'
import doc from '../images/icons/docker.svg'
import ng from '../images/icons/nginx.svg'
import py from '../images/icons/py.svg'

const Experience = () => (
  <div className="habilidades">
    <h1 className="mb-10 mt-10">
      &gt;Sistemas operativos
      <span className="parpadea">_</span>
    </h1>
    <ul className="flex-container">
      <li className="flex-item">
        <div className="item-content">
          <img src={win} width="48px" alt="windows" />
          <span className="ml-10">Windows</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={ubu} width="48px" alt="ubuntu" />
          <span className="ml-10">Ubuntu</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={lin} width="48px" alt="linux" />
          <span className="ml-10">CentOS</span>
        </div>
      </li>
    </ul>
    <h1 className="mb-10 mt-10">
      &gt;Base de datos
      <span className="parpadea">_</span>
    </h1>
    <ul className="flex-container">
      <li className="flex-item">
        <div className="item-content">
          <img src={db} width="48px" alt="database" />
          <span className="ml-10">SQLServer</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={db} width="48px" alt="database" />
          <span className="ml-10">PostgreSQL</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={db} width="48px" alt="database" />
          <span className="ml-10">SQLlite</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={db} width="48px" alt="database" />
          <span className="ml-10">Mongo</span>
        </div>
      </li>
    </ul>
    <h1 className="mb-10 mt-10">
      &gt;Lenguajes y frameworks
      <span className="parpadea">_</span>
    </h1>
    <ul className="flex-container">
      <li className="flex-item">
        <div className="item-content">
          <img src={sql} width="48px" alt="sql" />
          <span className="ml-10">SQL</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={sql} width="48px" alt="sql" />
          <span className="ml-10">PL/PgSQL</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={dll} width="48px" alt="dll" />
          <span className="ml-10">.NET v08 v10</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={exe} width="48px" alt="vb" />
          <span className="ml-10">VB6</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={exe} width="48px" alt="cf" />
          <span className="ml-10">C#</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={html} width="48px" alt="html" />
          <span className="ml-10">Html</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={js} width="48px" alt="js" />
          <span className="ml-10">Javascript</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={js} width="48px" alt="js" />
          <span className="ml-10">NodeJs</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={js} width="48px" alt="js" />
          <span className="ml-10">AngularJS</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={ts} width="48px" alt="ts" />
          <span className="ml-10">Angular</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={php} width="48px" alt="php" />
          <span className="ml-10">php</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={py} width="48px" alt="python" />
          <span className="ml-10">Python</span>
        </div>
      </li>
    </ul>
    <h1 className="mb-10 mt-10">
      &gt;Otras habilidades
      <span className="parpadea">_</span>
    </h1>
    <ul className="flex-container">
      <li className="flex-item">
        <div className="item-content">
          <img src={doc} width="48px" alt="docker" />
          <span className="ml-10">Dockers</span>
        </div>
      </li>
      <li className="flex-item">
        <div className="item-content">
          <img src={ng} width="48px" alt="nginx" />
          <span className="ml-10">Nginx</span>
        </div>
      </li>
    </ul>
    <hr className="mt-75" />
  </div>
)

export default Experience
