import '../styles/articles.css'
import Article from './Article'
import Car from '../assets/car-vision.svg';
import Emoxion from '../assets/emoxion.svg'
import Cars from '../assets/cars.svg'
import Flat from '../assets/flat.png';

const title1 = "Learning to See for a Smoother Ride"
//const title2 = "Watching Without the Noise"
const title2 = "Interactivity to support the user"
const title3 = "Teaching a Model to Feel"
const title4 = "Recommending Luxury, One Car at a Time"

const text1 = "Training a U-Net model to detect cars on dashcam footage."
//const text2 = "A simple, serverless API for downloading YouTube videos."
const text2 = "I tried to present my journey through an interactive page using differents animations."
const text3 = "Fine-tuning BERT to understand tweet sentiment, positive or negative."
const text4 = "Building a luxury car recommendation algorithm for a premium rental company."

const link1 = "/u-net_model"
//const link2 = "/article_07"
const link2 = "/about-me"
const link3 = "/bert-tweet"
const link4 = "/"

function Articles() {
    return (
        <section id='articles_display'>
            <article id='articles'>
                <Article placement="left" image={Car} title={title1} text={text1} link={link1} alt="GPS"/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={Flat} title={title2} text={text2} link={link2} alt="FLat"/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={Emoxion} title={title3} text={text3} link={link3} alt="Computer"/>
                <hr className='vertical_hr'/>
                <Article  placement="right" image={Cars} title={title4} text={text4} link={link4} alt="Selected cars"/>
            </article>
            
        </section>
    )
}

export default Articles