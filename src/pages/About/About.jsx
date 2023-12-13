import './About.css'
import CV from '../../assets/CV.pdf'

//FontAwesome Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'


// Components Import
import HeadingText from '../../components/HeadingText/HeadingText'
import Tools from '../../components/Tools/Tools'

export default function About() {
    return (
        <>
        <section className= 'About'>
        <HeadingText title= {'About Me'}/>

        <div className="container about-container">
         <div className="about-left">
         <p>
            My name is Ronald Chatelier, a Software Engineer from Southwest Florida. 
            I attended Florida Gulf Coast University and received a Bachelor's of Science in 
            Software Engineering with a Minor in Mathematics. I enjoy collaborative problem-solving 
            and focus on how to manage with software. Currently I am finding opportunites that will allow
            me to develop as an engineer. 
         </p>
         <a href={CV} download className='btn'>
            Resume <span><FontAwesomeIcon icon={faDownload} /> </span>
         </a>
        </div>
    

        <div >
        
        </div>
        </div>
        </section>
        <Tools />
        </>
    )
}
