import '../styles/articles.css'
import Article from './Article'
import Flat from '../assets/flat.png';
import Total from '../assets/total.png'
import AI from '../assets/AI.png'
import Numbers from '../assets/numbers.png'

const title1 = "Interactivity to support the user"
const title2 = "How to improve exchanges ?"
const title3 = "AI everywhere"
const title4 = "Concrete & Quantified improvement"

const text1 = "I tried to present my journey through an interactive page using differents animations."
const text2 = "My experience at TotalEnergie made me discover the administrative burden and how to remedy it."
const text3 = "Why ? Because it's fashionable but not only that: 10 uses of AI in my jobs."
const text4 = "How to quantify improvements? Using the right indicators and ensuring effective maintenance."

const link1 = "/article_01"
const link2 = "/"
const link3 = "/"
const link4 = "/"

function Articles() {
    return (
        <section id='articles_display'>
            <article id='articles'>
                <Article placement="left" image={Flat} title={title1} text={text1} link={link1}/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={Total} title={title2} text={text2} link={link2}/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={AI} title={title3} text={text3} link={link3}/>
                <hr className='vertical_hr'/>
                <Article  placement="right" image={Numbers} title={title4} text={text4} link={link4}/>
            </article>
            
        </section>
    )
}

export default Articles