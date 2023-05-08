import React from 'react';
import botijao from '../img/botijao.png';
import industrial from '../img/industrial.png';
import acessorios from '../img/acessorio.png';
import agua from '../img/agua.png';


function Produtos(props) {

    return (
        <div className='produtos-container' id='produtos'>
            <img src="https://cdn.supergasbras.com.br/-/media/sites/brazil/logo/supergasbras-logo.svg?h=1&w=1&la=pt-BR&hash=3F1C9464DCA3AA3EAAC3801954BDF436" height={'50px'} width={'100%'} alt="Logo Supergasbras"></img>
            <h3 className='home-h3'>Produtos</h3>
            <ul>
                <li><img src={botijao} alt='botijao p13' title='botijao de gas' width={'200px'} height={'200px'} /></li>
                <li className='produtos-item-descriçao'>Botijão residencial p13</li>
                
                <li><img src={industrial} alt='gás industrial' title='gás industrial' width={'200px'} height={'200px'} /></li>
                <li className='produtos-item-descriçao'>Botijões Industriais p20 e p45</li>

                <li><img src={acessorios} alt='acessorios de gás' title='acessorios de gás' width={'200px'} height={'200px'} /></li>
                <li className='produtos-item-descriçao'>Todo tipo de Acessórios</li>

                <li><img src={agua} alt='galão de agua' title='galão de agua' width={'200px'} height={'200px'} /></li>
                <li className='produtos-item-descriçao'>Galão de Agua de 20 litros</li>
            </ul>
        </div>)
}

export default Produtos;