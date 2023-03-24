import './SuperiorNavbar.css'
import CartWidget from '../CartWidget/CartWidget'
import face from './assets/facebook.svg'
import whatsapp from './assets/whatsapp.svg'
import ig from './assets/instagram.svg'

const SuperiorNavbar = () => {

    return (

        <div className='SuperiorNavbar'>

            <div style={{alignItems: 'center', margin: '0px'}}>
                <p>central de bebidas</p>
            </div>

            <div>
            <img className='SocialSuperiorNavbar' src= {face} alt ='facebook'/>
            <img className='SocialSuperiorNavbar' src= {whatsapp} alt ='whatsapp'/>
            <img className='SocialSuperiorNavbar' src= {ig} alt ='instagram'/>

            </div>

            <CartWidget />

        </div>

    )



}

export default SuperiorNavbar