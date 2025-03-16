import React from 'react'

const Header = () => {
  return (
     <div className="header">
        <div className="header__title">
          <p>Matheus.</p>
        </div>

      <div className="header__links">
          <p>Home</p>
          <p>Sobre Mim</p>
          <p>Tecnologias</p>
          <p>Contato</p>
      </div>

      <div className="header__buttom">
        <p>Contate-me</p>
      </div>
     </div>
  )
}

export default Header