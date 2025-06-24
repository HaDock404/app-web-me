import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import hieroglyphs from '../assets/hieroglyphs.mp4'
import ishikawa from '../assets/ishikawa.png'

function Article01() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_05'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Designing my Own Icons
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://hadock404.github.io/app-web-hieroglyphs/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    hieroglyphs.io
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2025
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            Visual consistency and graphic identity have become essential elements in interface design. They not only strengthen a product’s personality but also enhance the user experience. With that in mind, I set out to develop an ambitious personal project: building a website that showcases and distributes a collection of original icons I designed myself.
                        </div>
                        <div className='content_article_right_text'>
                            These icons are fully customizable, made available through the npm platform, and integrated into a complete CI/CD pipeline to automate updates and distribution.
                        </div>

                        <div className='content_article_right_video'>
                            <video src={hieroglyphs} autoPlay loop muted playsInline preload="auto" id=''/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Hieroglyphs.io
                        </div>

                        <div className='content_article_right_title'>
                            Automation
                        </div>
                        <div className='content_article_right_text'>
                            One of the key challenges was turning these hand-crafted designs into components that developers could easily use in modern environments. Each icon was vectorized, cleaned, and optimized as an SVG file.
                        </div>
                        <div className='content_article_right_text'>
                            From there, I developed an automated system to convert each SVG into a reusable component. These components are designed to be flexible and easily customizable, whether adjusting colors, sizes, or styles, making them adaptable to a wide range of visual identities.
                        </div>
                        <div className='content_article_right_text'>
                            Beyond the visual aspect, this project was also an opportunity to explore a DevOps-oriented approach applied to a creative process. I implemented a continuous integration and deployment pipeline that triggers automatically with every icon update. 
                        </div>
                        <div className='content_article_right_text'>
                            The system runs quality checks, converts SVGs into components, publishes the updated package to npm, and refreshes the live demo site with the latest icons and their documentation.
                        </div>

                        <div className='content_article_right_title'>
                            Results
                        </div>
                        <div className='content_article_right_text'>     
                            To me, this project represents much more than just a technical exercise. It embodies the meeting point between the artistic world of illustration and the structured discipline of software development. It allowed me to bridge visual intuition with automation, manual creation with scalable deployment.
                        </div>
                        <div className='content_article_right_text'>
                            More importantly, it’s a way to give life to these icons, evolving, accessible, and ready to be integrated into the projects of other creators.
                        </div>
                        <div className='content_article_right_text'>
                            By sharing this library, I hope to provide a thoughtful, elegant tool for anyone looking to bring more personality and style to their user interfaces.
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

export default Article01



