import '../styles/intro.css'
import Hadock from './Hadock'
import { Link } from 'react-router-dom'

function Intro() {
    return (
        <div id='intro_display'>
            <div id='intro'>
                <div id='element1'><Hadock/></div>
                <div id='element2'>Gael is an engineer, developer, and creator with 10+ years experience building products, brands, and teams. Most recently, he managed the architecture team at <Link to="https://hadock404.github.io/app-web-sodaas/" className='link' target="_blank" rel="noopener noreferrer">sODAAS</Link>. He’s passionate about bridging brand and product, and coming up with new ideas (like icons and fonts) for the industry.</div>
                
            </div>
        </div>
    )
}

export default Intro