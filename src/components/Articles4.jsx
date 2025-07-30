import '../styles/articles.css'
import Article from './Article'
import Gitlab from '../assets/gitlab.svg';
import Board from '../assets/board.svg'
import Rocket from '../assets/rocket.svg'
import Youtube from '../assets/youtube.svg'

const title1 = "Letting Pipelines Do the Work"
const title2 = "Tiny Boards, Big Help"
const title3 = "Always Building, Always Learning"
//const title4 = "Memgraph: A Graphical Database"
const title4 = "Watching Without the Noise"

const text1 = "Using GitLab CI/CD to automate tests and deployments for smoother workflows."
const text2 = "Building small Arduino programs to automate daily tasks and experiments."
const text3 = "On starting projects and pushing them toward success, one idea at a time."
//const text4 = "Memgraph allowed us detect talent trends, anticipate client needs and identify market gaps."
const text4 = "A simple, serverless API for downloading YouTube videos."

const link1 = "/gitlab-CI_CD"
const link2 = "/arduino"
const link3 = "/saas"
//const link4 = "/article_14"
const link4 = "/youtube-downloader"

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
                <Article  placement="right" image={Youtube} title={title4} text={text4} link={link4}/>
            </article>
            
        </section>
    )
}

export default Articles4