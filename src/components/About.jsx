import React from 'react'
import imagemJpeg from '../assets/photo.jpeg';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const About = () => {
  return (
    <div className="about_me">
      <div className="about__title">
        <h3>introdução</h3>
        <h1>sobre mim</h1>
      </div>
      <div className="about__main">
        <div className="about__geral">
          <div className="about__img">
            <img src={imagemJpeg} alt="" />
          </div>
          <div className="about__info">
            <div className="about__text">
              <p>Técnico em análise e desenvolvimento de sistemas pela ETEVAV e atualmente cursando ciência da computação na UniAnchieta. Tenho conhecimentos em HTML, CSS, Javascript, React e Node. Além de noções de Python, C# e SQL. Meu atual objetivo é ser uma referência na área da tecnologia contribuindo ativamente nas soluções que resolvam problemas das pessoas.  </p>

            </div>
            <div className="about__cards">
              <div className="about__card">
                <div className="about__cards-icon">
                  <FontAwesomeIcon icon={faGraduationCap} size='2x' />
                  <h4>educação</h4>
                </div>
                <div className="about__cards-p">

                  <p>etecvav</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
