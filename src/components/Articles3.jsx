import '../styles/articles.css'
import Article from './Article'
import Controller from '../assets/controller.svg';
import Plancha from '../assets/plancha.svg'
import Saw from '../assets/saw.svg'
import Hat from '../assets/hat.svg'

const title1 = "Building Bonds Through Games"
const title2 = "Learning to Lead on the Water"
const title3 = "Woodworking Taught Me Project Management"
const title4 = "Building My Second Brain"

const text1 = "Using video games to build stronger team bonds and collaboration."
const text2 = "Gaining management skills through coaching at a watersport center."
const text3 = "Crafting complex wood projects taught me to structure software projects."
const text4 = "I collect and share my knowledge to reuse and teach effectively."

const link1 = "/article_15"
const link2 = "/article_16"
const link3 = "/article_03"
const link4 = "/article_18"

function Articles3() {
    return (
        <section id='articles_display'>
            <article id='articles'>
                <Article placement="left" image={Controller} title={title1} text={text1} link={link1}/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={Plancha} title={title2} text={text2} link={link2}/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={Saw} title={title3} text={text3} link={link3}/>
                <hr className='vertical_hr'/>
                <Article  placement="right" image={Hat} title={title4} text={text4} link={link4}/>
            </article>
            
        </section>
    )
}

export default Articles3