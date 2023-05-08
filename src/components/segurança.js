import React from 'react';
import { AiOutlineRight } from "react-icons/ai"



export default function seguranca(props) {

    return (
        <div className='container-segurança' id='segurança'>
            <h1 className='home-h3'>Dicas de Segurança</h1>
            <div className='seguranca-text'>
                <h2>Escolha o botijão dourado para seu gás de cozinha!</h2>
                <p>O gás que você usa em seu dia a dia deve ser o
                    mais seguro e confiável possível. Não quer correr riscos? Escolha o douradinho! Veja algumas dicas
                    de segurança!
                    </p>
                <a href='https://www.supergasbras.com.br/supergasbras/seguranca'
                    target="_blank" rel='noreferrer'><button className='confira-seg'>Confira dicas de segurança!  <AiOutlineRight /></button></a>
            </div>

        </div>)
}