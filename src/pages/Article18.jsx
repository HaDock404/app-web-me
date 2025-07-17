import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import knowledge from '../assets/knowledge.png'

function Article18() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_18'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Learning Support
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://hadock404.github.io/app-web-knowledge/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    my own Knowledge Base
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2022
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            Since the beginning of my journey, I’ve made it a habit to write down what I learn, convinced that no command line or insight worth understanding should vanish in the chaos of a closed tab.
                        </div>
                        <div className='content_article_right_text'>
                            At first, I used notebooks, then scattered notes across my computer or cloud services, but these fragments of knowledge would inevitably get lost, impossible to reconnect when I needed to revisit a topic or share a solution with a colleague.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={knowledge} alt="image" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_text'>
                            It was from this need to easily find what I had learned, and to make it available to others, that the idea of building my own knowledge base was born.
                        </div>
                        
                        <div className='content_article_right_title'>
                            The Project
                        </div>
                        <div className='content_article_right_text'>
                            This project took the shape of a simple, fast React application where you land on a page listing the tools I use in my daily work as a data scientist, engineer, or script tinkerer. An integrated search engine lets you instantly find the tool or command you need without digging through endless pages.
                        </div>
                        <div className='content_article_right_text'>
                            Each article explains not only what the tool does but also how I use it, the commands I rely on most often, and the practical situations where it has saved me time or helped me unlock a problem. It’s a living space that I continuously update as I encounter new challenges or discover small tricks hidden in documentation.
                        </div>
                        <div className='content_article_right_text'>
                            This knowledge base has become my daily work companion, a place where I quickly grab a command too long to remember or revisit a method I’ve forgotten after a few weeks. Gradually, it has turned into a repository of my learnings, where Git commands, SQL queries, scraping tips, and machine learning notes all coexist. It has also found its use beyond my own screen: I’ve shared it with other data scientists and students who, like me, need a reliable place to quickly find recurring commands and essential tools for our work.
                        </div>
                        

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            I deeply believe that our professions advance thanks to the spirit of sharing and the patient contributions of those who take the time to document what they discover. By creating this knowledge base and making it accessible to everyone, I am simply trying to be part of this chain of sharing that helps all of us save precious time, and sometimes, brings us the quiet joy of understanding a little more about what we do.
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

export default Article18



