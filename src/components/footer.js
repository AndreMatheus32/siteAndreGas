import React from 'react';
import logoAndreGas from '../img/andregas.jpg';

function footer(props) {

    return (<footer>
        
        <div className='footer-container'>
        <img className='footer-foto-logo' src={logoAndreGas} alt='logo-andregas' title='logo-andreGas'></img>
            <div className='footer-text'>
                <h3 className='h3-footer'>Empresa</h3>
                <div className='footer-p'>
                    <p>André Gás está sempre buscando o melhor atendimento para seu cliente,
                        com tempo e muito serviço conquistamos  a confiança dos
                        moradores de Apucarana-PR . </p>
                    <p>Para melhorar nosso atendimento você pode nos enviar
                        dicas , reclamações e outras mensagens no nosso e-mail.
                    </p>
                    <a className='mail' href='mailto:andregasapucarana@gmail.com' target='_blank' rel='noreferrer'>andregasapucarana@gmail.com</a>
                </div>

            </div>
            <ul className='footer-list-horario'>
                <h3 className='h3-horario'>horarios de atendimento</h3>
                <li>Segunda-feira : das 08:00 as 21:00</li>
                <li>  terça-feira : das 08:00 as 21:00</li>
                <li>Quarta-feira  : das 08:00 as 21:00</li>
                <li>Quinta -feira : das 08:00 as 21:00</li>
                <li>  Sexta-feira : das 08:00 as 21:00</li>
                <li>       Sábado : das 08:00 as 20:00</li>
                <li>      Domingo : das 08:00 as 13:00</li>
            </ul>
            <p className='bottom'> 2023 André Gás Apucarana - PR<br></br>
              Criado por André Matheus Lima - AM Lima  Sites Profissionais e Marketing Digital
            </p>
        </div>
    </footer>)
}

export default footer;