import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import animation from '../assets/animation.mp4'
import total from '../assets/total.mp4'
import scroll from '../assets/scroll.png'

function Article01() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_02'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Improve exchanges
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Form
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2021
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            In France, the electricity and gas markets were opened to competition for all customers on July 1, 2007. Today, they are governed by Directives <Link to="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:211:0055:0093:fr:PDF" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">2009/72/EC</Link> and <Link to="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:211:0094:0136:fr:PDF" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">2009/73/EC</Link> of July 13, 2009. The goal was to transition from several independent national markets to a single, integrated European market. This measure aimed to dismantle the state monopoly on energy and allow private companies to thrive in the European market.
                        </div>
                        <div className='content_article_right_text'>
                            By the end of 2021, TotalEnergies had no fewer than 5 million customers. I worked in the Key Accounts department, which dealt exclusively with public sector markets. Various organizations grouped together numerous French administrations to negotiate more favorable electricity supply prices. TotalEnergies had won the largest contract: <Link to="https://www.ugap.fr/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">UGAP</Link>.
                        </div>
                        <div className='content_article_right_text'>
                            Unfortunately, at that time, TotalEnergies lacked the necessary tools to process and analyze the thousands of energy supply points associated with public sector contracts. Handling this crucial information, which was essential to optimize electricity supply, proved to be extremely complicated and led to some rather unusual situations.
                        </div>
                        <div className='content_article_right_video'>
                            <video src={total} autoPlay loop muted playsInline preload="auto" />
                        </div>
                        <div className='content_article_right_subtitle'>
                            TotalErnergie becomes an electricity and gas supplier.
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
                            <img src={scroll} alt="image" className='content_article_right_text_image'/>
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



