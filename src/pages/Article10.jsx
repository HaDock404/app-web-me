import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import SnakeGame from '../assets/SnakeGame.mp4'
import graph from '../assets/graph.png'

function Article10() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_10'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Data Snake Game 
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://hadock404.github.io/app-game-snake/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Game
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2024
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            One of the main challenges data scientists face is finding relevant, high-quality data on which to experiment, iterate, and build new skills. It is often difficult to access dynamic, evolving datasets that allow end-to-end pipeline exploration while maintaining the playful, exploratory mindset that drives technical curiosity.
                        </div>
                        <div className='content_article_right_text'>
                            During my studies, I developed numerous small games to strengthen my skills across different languages and frameworks, from Python to JavaScript. However, these projects typically ended once the mechanics and design were functional, without evolving into tools capable of generating data or supporting experimentation on analytic pipelines. Although I never aimed to become a game developer, I firmly believe that games are a powerful way to generate dynamic datasets while providing a motivating, structured environment for experimentation.
                        </div>
                        <div className='content_article_right_text'>
                            To bridge this gap, I decided to transform an old school project into a fully integrated data collection and analysis environment, leveraging modern CI/CD, observability, and monitoring practices.
                        </div>

                        <div className='content_article_right_video'>
                            <video src={SnakeGame} autoPlay loop muted playsInline preload="auto" alt='Snake Game video'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            My Snake Game
                        </div>

                        <div className='content_article_right_title'>
                            Architecture
                        </div>
                        <div className='content_article_right_text'>
                            The project revolves around a <Link to="https://github.com/HaDock404/app-game-snake/tree/master" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">Snake Game</Link> built with React and deployed on GitHub Pages, providing a responsive interface that adapts seamlessly to various screen formats. The user controls the snake within a 2D plane, eating apples to grow in size while the game speed increases progressively. This simple mechanic offers a natural increase in difficulty, encouraging players to retry and improve their scores.
                        </div>
                        <div className='content_article_right_text'>
                            To complement the game, I developed a <Link to="https://github.com/HaDock404/api-game-snake" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">FastApi backend</Link> deployed on a local server, which automatically collects game data after each session, including the player’s final position, game duration, score, and user actions during the session. This data is then stored in a PostgreSQL database, ready for analysis and visualization.
                        </div>
                        <div className='content_article_right_text'>
                            With this architecture, I can now perform real behavioral <Link to="https://hadock404.github.io/ai-game-snake/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">data exploration, identify gameplay trends, evaluate user strategies, and analyze patterns</Link> in user abandonment or progression across attempts. Although this project is not intended to scale as a public product, it serves as an excellent playground for implementing full CI/CD pipelines, production-grade data monitoring, and automated reporting via notebooks and dashboards.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={graph} alt="Data diagrams" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Data diagrams.
                        </div>

                        
                        <div className='content_article_right_text'>
                            This project also allowed me to share the game with friends, collecting real user data while adding a social and playful dimension to the technical experiment. More than just a game, this project enabled me to simulate the complete data lifecycle, from generation and collection to analysis and reporting, while incorporating monitoring, optimization, and continuous testing challenges along the way.
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            This experience reinforced my belief that data scientists greatly benefit from understanding and interacting with the entire data production pipeline, from the data-generating application to analytic pipelines, enabling them to design solutions that are truly aligned with production constraints. Exercises like this, seemingly simple but rich in cross-functional learning, are invaluable for sharpening your understanding of modern data architectures and workflows.
                        </div>

                        <div className='content_article_right_title'>
                            Footnotes
                        </div>
                        <div className='content_article_right_text_footer'>
                            <ol>
                                <li>Not always [<Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">ref</Link>]</li>
                            </ol>
                        </div>
                    </div>
                   
                

                </article>
            </section>
        </>
    )
}

export default Article10



