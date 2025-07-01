import '../styles/articles.css'
import Article from './Article'
import Gitlab from '../assets/gitlab.svg';
import Board from '../assets/board.svg'
import Brain from '../assets/brain.svg'
import Rocket from '../assets/rocket.svg'

const title1 = "Letting Pipelines Do the Work"
const title2 = "Tiny Boards, Big Help"
const title3 = "Always Building, Always Learning"
const title4 = "Teaching Transformers to Understand"

const text1 = "Using GitLab CI/CD to automate tests and deployments for smoother workflows."
const text2 = "Building small Arduino programs to automate daily tasks and experiments."
const text3 = "On starting projects and pushing them toward success, one idea at a time."
const text4 = "Exploring RoBERTa for advanced text understanding in personal NLP projects."

const link1 = "/article_11"
const link2 = "/article_02"
const link3 = "/article_03"
const link4 = "/article_04"

function Articles4() {
    return (
        <section id='articles_display'>
            <article id='articles'>
                <Article placement="left" image={Gitlab} title={title1} text={text1} link={link1}/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={Board} title={title2} text={text2} link={link2}/>
                <hr className='vertical_hr'/>
                <Article  placement="center" image={Rocket} title={title3} text={text3} link={link3}/>
                <hr className='vertical_hr'/>
                <Article  placement="right" image={Brain} title={title4} text={text4} link={link4}/>
            </article>
            
        </section>
    )
}

export default Articles4