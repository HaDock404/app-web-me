import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import animation from '../assets/animation.mp4'
import scroll from '../assets/scroll.png'

function Article01() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_01'>
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
                            This project was initially just an excuse to showcase my professional experience, but I decided to push my thinking further and draw some valuable lessons from it. This reflection stems from my passion for the websites featured on the <Link to="https://www.awwwards.com/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">Awwwards.com</Link> platform.
                        </div>
                        <div className='content_article_right_text'>
                            I am far from having the skills of the artists whose sites grace the top spots every week, but I have taken the time to analyze them.
                        </div>
                        <div className='content_article_right_text'>
                            Each of these websites guides the user through an immersive experience or tells a story, ultimately aiming to lead them to purchase a product (whatever the product may be).
                        </div>
                        <div className='content_article_right_text'>
                            My goal was simple: to tell my story through a <Link to="https://hadock404.github.io/app-bio-about_me/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">web page</Link>. This story needed to be concise, and the navigation had to be as smooth and intuitive as possible. The target user was a human resources director looking for talented profiles to recruit.
                        </div>
                        <div className='content_article_right_video'>
                            <video src={animation} autoPlay loop muted playsInline preload="auto" alt="navigation method"/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Explanation of the navigation method to the user.
                        </div>

                        <div className='content_article_right_title'>
                            The user
                        </div>
                        <div className='content_article_right_text'>
                            Before talking about interactivity, it's crucial to understand who the audience is. There are countless interactive websites, and the best ones are often aimed at children. These sites usually feature a fun animal character that guides the child through the navigation. I’m sure I’m not the only one who played Adibou, a game full of creative ideas for interactivity.
                        </div>
                        <div className='content_article_right_text'>
                            In my case, I was speaking to HR managers—busy, uninterested, and accustomed to fast scrolling through Instagram feeds.
                        </div>
                        <div className='content_article_right_text'>
                            So, I opted for a very simple navigation via scrolling, with various animations to illustrate my story, accompanied by explanatory text.
                        </div>

                        <div className='content_article_right_title'>
                            The method
                        </div>
                        <div className='content_article_right_text'>
                            Two variables are initialized to 0. They are used to adjust the start and end point of the scroll calculation and an event listener fires every time the user scrolls the page.
                        </div>
                        <div className='content_article_right_text'>
                            The --scroll CSS variable updates in real time, allowing animations to be triggered based on the user's location on the page.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={scroll} alt="javascript function" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle_bis'>
                            Function to retrieve the user's location in the web page.
                        </div>

                        <div className='content_article_right_title'>
                            The result
                        </div>
                        <div className='content_article_right_text'>
                            My website was far from perfect. It likely lacked content, and it could have been more interactive. However, it still found some success with HR managers, who consistently seemed interested in my profile after browsing through my experience in this format. I wouldn’t necessarily recommend this type of website to everyone, but focusing on user interactivity to sell something (in my case, my profile) is always a winning strategy.
                        </div>
                        <div className='content_article_right_text'>
                            After that, this project gave me a lot of ideas on how to best interact with users in order to offer them an enriching experience that would lead to success in other applications.
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



