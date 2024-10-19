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