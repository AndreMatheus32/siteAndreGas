import React from 'react';
import deposito from '../img/deposito.jpg';
import { SocialIcon } from 'react-social-icons';
import { AiFillPhone } from "react-icons/ai";



const whatsAPI = "https://api.whatsapp.com/send?phone=5543999789468"

function Home(props) {

    return (
        <div className='homePage'>
            <div className='fixed-whats'>
                <a  href={whatsAPI} target='_blank' rel='noreferrer'><SocialIcon url="https://whatsapp.com/jaketrent" /></a>
            </div>
            <div className='container-contatos' id='contato'>
                <h2 className='h1-home'>Faça Seu Pedido !</h2>
                <div>
                    <a className='contato-list listA whatsapp' href={whatsAPI} target='_blank' rel='noreferrer'><SocialIcon url="https://whatsapp.com/jaketrent" />(43)99978-9468</a>
                    <a className='contato-list listA tel ' href='tel:+554334262369' target='_blank' rel='noreferrer'><AiFillPhone className='fone' /> (43)3426-2369</a>
                    <a className='contato-list listB insta' href='instagram://user?username=andregasapucarana' target='_blank' rel='noreferrer'><SocialIcon url="https://instagram.com/jaketrent" />  andregasapucarana</a>
                    <a className='contato-list listB face' href='https://www.facebook.com/profile.php?id=100010926222693' target='_blank' rel='noreferrer'><SocialIcon url="https://facebook.com/jaketrent" />  André Gás</a>
                </div>
            </div>

            <div className='container-localizao'>

                <img className='depositoImg' src={deposito} alt='foto do deposito' title='foto do deposito'></img>
                <div className='text-localizaçao'>
                    <h1 className='h1-top-foto'>Quem Somos?</h1>
                    <p className='paragrafo1'>
                        O deposito André Gás está presente na vida dos Apucaranenses a mais de 15 anos ,
                        com o nome de Confiança Gás e a mais de 4 anos soba direção do André e da sua mulher Bruna
                        com o nome de André Gás.
                        <br></br>
                        Já são mais de uma decada e meia aquecendo o cafezinho ou assando
                        os pães de queijo de todas as manhãs em várias residências.
                        <br></br>
                        Temos como nossa principal missão, facilitar a vida dos
                        consumidores, pautados sempre no compromisso e na ética,
                        qualidade e excelência são as marcas registradas da empresa.
                        <br></br>
                        Com muito trabalho e comprometimento, conquistamos a confiança dos moradores de Apucarana-PR ,
                        fornecendo produto de forma segura e nos adaptando permanentemente às necessidades de vocês, nos tornando
                        flexíveis e com entrega à domicílio.
                        <br></br>
                        <br></br>
                    </p>
                    <h4>Precisou de Gás de Cozinha?!
                        <br></br>Chame André Gás.</h4>


                </div>
            </div>
            <h3 className='home-h3' id='localizaçao'>Localização</h3>
        </div>
    )
}
export default Home;