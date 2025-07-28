import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import projects from '../assets/projects.png'

function Article13() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_13'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Always Experimenting
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://github.com/HaDock404" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    my Github
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2015
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            As a data scientist by training, I have always sought to plan, organize, and leverage data to improve processes or products using the knowledge I had acquired. Now working in the field of artificial intelligence, I quickly realized that learning is not about staying within your comfort zone.
                        </div>
                        <div className='content_article_right_text'>
                            That’s why I decided to constantly explore new fields: Python, React, Cypher, C++, SaaS development, workflow automation, and building tools that help users work or simply enjoy themselves. This thirst for creation is not just a hobby; it has become a true way of operating to keep progressing in my field.
                        </div>

                        <div className='content_article_right_text_bis'>
                            <img src={projects} alt="" className='content_article_right_text_image'/>
                        </div>

                        <div className='content_article_right_title'>
                            My Experiments
                        </div>
                        <div className='content_article_right_text'>
                            To experiment is to accept starting from a vague idea and moving forward without certainty, to fail, to try again, and sometimes to end up with nothing while still making progress. From both successes and failures, I always take great pleasure in the process, even if I don’t end up with a finished product.
                        </div>
                        <div className='content_article_right_text'>
                            I have built fully automated SaaS platforms, sometimes to solve a specific need, and sometimes just to test a concept that I couldn’t get out of my mind. I’ve developed bots that extract and structure data to feed dashboards, small applications that solve precise problems, content generation tools, and even minimalist games to experiment with interaction mechanics.
                        </div>
                        <div className='content_article_right_text'>
                            Not all of these experiments turn into commercial successes, and that’s perfectly fine. Because with every project, I discover a new library, a more efficient way to organize my work, a new method for error handling, a faster deployment process, or a better way to structure my code. Sometimes, while experimenting with a tool, I discover a new need, a different angle, or a lever I would never have found without getting hands-on.
                        </div>
                        <div className='content_article_right_text'>
                            The most important part is that these projects have never made me want to stop; I learn from my mistakes and firmly believe I will eventually find the product perfectly suited to the needs of a wider audience.
                        </div>
                        
                        <div className='content_article_right_text'>
                            In a world where AI evolves daily, this ability to experiment is a form of insurance. It keeps you adaptable, allows you to quickly understand new technologies, and helps you turn an idea into a working prototype. Knowing that you can build, test, and deploy an idea on your own within a few days radically changes how you approach a project.
                        </div>
                        <div className='content_article_right_text'>
                            Many of these experiences are often transferable to the professional world. They inspire me and help me bring innovative solutions to the projects I work on within a company.
                        </div>
                        

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            What I have learned through these projects is that experimenting is the best way to grow. It doesn’t matter whether the project succeeds or not; every line of code written, every tool tested, every failure encountered builds a new skill, a reflex, and a deeper understanding of the technological world I work in.
                        </div>
                        <div className='content_article_right_text'>
                            Creating is a way to learn continuously, but it is also about giving yourself the freedom to take risks, to fail, and to try again. This dynamic is precious because it fuels curiosity and makes every day exciting. If I had to summarize my approach in one sentence, it would be: never stop experimenting, because it’s how you keep moving forward, even when you don’t realize it.
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

export default Article13



