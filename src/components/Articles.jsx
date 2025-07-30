import '../styles/articles.css'
import Article from './Article'
import Total from '../assets/total.png'
import AI from '../assets/AI.png'
import Numbers from '../assets/numbers.png'
import Brain from '../assets/brain.svg'

//const title1 = "Interactivity to support the user"
const title1 = "Memgraph: A Graphical Database"
const title2 = "How to improve exchanges ?"
const title3 = "Chatbot + AI"
const title4 = "Concrete & Quantified improvement"

//const text1 = "I tried to present my journey through an interactive page using differents animations."
const text1 = "Memgraph has enabled us to anticipate customer needs and identify market gaps."
const text2 = "My experience at TotalEnergie made me discover the administrative burden and how to remedy it."
const text3 = "I created the perfect chatbot to find the IT consultant for your project."
const text4 = "How to quantify improvements? Using the right indicators and ensuring effective maintenance."

//const link1 = "/article_01"
const link1 = "/memgraph"
const link2 = "/total-energies"
const link3 = "/chatbot_ai"
const link4 = "/baudry"

function Articles() {
    return (
        <section id='articles_display'>
            <article id='articles'>
                <Article placement="left" image={Brain} title={title1} text={text1} link={link1}/>
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