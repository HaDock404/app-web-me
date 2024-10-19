import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

function Article01() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Interactivity to support the user
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://hadock404.github.io/app-bio-about_me/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    My About Me
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2020
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            The project
                        </div>
                        <div className='content_article_right_text'>
                            This project was initially just an excuse to showcase my professional experience, but I decided to push my thinking further and draw some valuable lessons from it. This reflection stems from my passion for the websites featured on the <Link to="https://www.awwwards.com/" className='content_article_right_text_link'>Awwwards</Link> platform.
                        </div>
                        <div className='content_article_right_text'>
                            I am far from having the skills of the artists whose sites grace the top spots every week, but I have taken the time to analyze them.
                        </div>
                        <div className='content_article_right_text'>
                            Each of these websites guides the user through an immersive experience or tells a story, ultimately aiming to lead them to purchase a product (whatever the product may be).
                        </div>
                        <div className='content_article_right_text'>
                            My goal was simple: to tell my story through a web page. This story needed to be concise, and the navigation had to be as smooth and intuitive as possible. The target user was a human resources director looking for talented profiles to recruit.
                        </div>

                        <div className='content_article_right_title'>
                            The gap
                        </div>
                        <div className='content_article_right_text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus, reprehenderit dicta eius quasi harum quis beatae quibusdam! Error, corrupti cupiditate! Libero repellat illum minima iste quod saepe est amet!
                        </div>

                        <div className='content_article_right_title'>
                            The gap
                        </div>
                        <div className='content_article_right_text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus, reprehenderit dicta eius quasi harum quis beatae quibusdam! Error, corrupti cupiditate! Libero repellat illum minima iste quod saepe est amet!
                        </div>
                        <div className='content_article_right_text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus, reprehenderit dicta eius quasi harum quis beatae quibusdam! Error, corrupti cupiditate! Libero repellat illum minima iste quod saepe est amet!
                        </div>

                        <div className='content_article_right_title'>
                            The gap
                        </div>
                        <div className='content_article_right_text'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus, reprehenderit dicta eius quasi harum quis beatae quibusdam! Error, corrupti cupiditate! Libero repellat illum minima iste quod saepe est amet!
                        </div>
                    </div>
                   
                

                </article>
            </section>
        </>
    )
}

export default Article01