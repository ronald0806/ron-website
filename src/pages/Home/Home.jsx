import './Home.css'
import HeaderImage from '../../assets/header.jpg'

// FontAwesome import
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Router dom link
import {Link} from 'react-router-dom'


export default function Home() {
    return (
        <header>
         <div className = "container container-lg header-container">
            <img src={HeaderImage} alt="" />
         
            <div className= "header-right">
                <h1>
                    <span>Ronald Chatelier</span>
                    
                </h1>
                <h2>
                Software Engineer
                </h2>
                <Link className = 'btn' to={'/about'}>
                    About Me
                    <span><FontAwesomeIcon icon={faArrowRight}/></span>
                </Link>
            </div>
         </div>
        </header>
    )
}
