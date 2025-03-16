import React from 'react'
import imagemSvg from '../assets/avatar-2.svg';
import Icons from './Icons';
import { faHtml5, faCss3, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'


const Main = () => {
    return (
        <main>
        <div className="container">
            <div className="img">
                <img src={imagemSvg} alt="Imagem SVG" />
            </div>
            <p className="text">Prazer, Matheus 👋</p>
            <p className="container__title">
                estudante de desenvolvimento<br /> Front-End
            </p>
            <p className="container__sub-title">
                sou técnico em análise e desenvolvimento de sistemas<br /> e graduando em ciência da computação
            </p>

            {/* Passando os ícones corretamente */}
            <Icons icons={[faHtml5, faCss3, faJs, faReact, faNodeJs]} />
        </div>
    </main>
    )
}

export default Main