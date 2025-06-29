import '../styles/articles.css'
import Article from './Article'
import Controller from '../assets/controller.svg';
import Plancha from '../assets/plancha.svg'
import Saw from '../assets/saw.svg'
import Hat from '../assets/hat.svg'

const title1 = "Learning to See for a Smoother Ride"
const title2 = "Watching Without the Noise"
const title3 = "Teaching a Model to Feel"
const title4 = "Recommending Luxury, One Car at a Time"

const text1 = "Training a U-Net model to detect cars on dashcam footage."
const text2 = "I built a Chrome extension to block YouTube ads, for uninterrupted watching."
const text3 = "Fine-tuning BERT to understand tweet sentiment, positive or negative."
const text4 = "Building a luxury car recommendation algorithm for a premium rental company."

const link1 = "/article_01"
const link2 = "/article_02"
const link3 = "/article_03"
const link4 = "/article_04"

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