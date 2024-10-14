import '../styles/articles.css'
import Article from './Article'
import Flat from '../assets/flat.png';
import Total from '../assets/total.png'
import AI from '../assets/AI.png'
import Numbers from '../assets/numbers.png'

function Articles() {
    return (
        <section id='articles_display'>
            <article id='articles'>
                <Article placement="left" image={Flat}/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={Total}/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={AI}/>
                <hr className='vertical_hr'/>
                <Article  placement="right" image={Numbers}/>
            </article>
            
        </section>
    )
}

export default Articles