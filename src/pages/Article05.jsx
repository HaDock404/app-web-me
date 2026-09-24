import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import hieroglyphs from '../assets/hieroglyphs.mp4'
import doough from '../assets/doough.png'

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
                                Building my Own App
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://doough.app/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    doough.app
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
                            Sharing meals is one of the simplest ways people connect, yet deciding what to eat week after week has quietly become one of the most tedious chores of daily life. It's a small decision repeated endlessly, made harder when several people, with different tastes, diets, and constraints, have to agree. With that in mind, I set out to develop an ambitious personal project: building a mobile app that turns weekly meal planning into something collaborative, personalized, and genuinely enjoyable.
                        </div>
                        <div className='content_article_right_text'>
                            Doough generates tailored weekly menus for a whole household, lets everyone vote on and swap dishes, and automatically transforms the final menu into a ready-to-use shopping list.
                        </div>

                        <div className='content_article_right_text_bis'>
                            <img src={doough} alt="Doough.app" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Doough.app
                        </div>

                        <div className='content_article_right_title'>
                            The engine
                        </div>
                        <div className='content_article_right_text'>
                            One of the key challenges was turning individual preferences into menus that actually feel right for everyone. Each user builds a taste profile, favorite ingredients, dietary restrictions, allergies, religious rules, and the app weighs all of these against a large recipe catalog to recommend the dishes most likely to please the group.
                        </div>
                        <div className='content_article_right_text'>
                            From there, I developed a recommendation system that balances relevance with variety, so the weekly menu feels personal without ever becoming repetitive. Menus are collaborative by design: any member can vote on a dish, request a swap, or regenerate a day, and the changes propagate to everyone in real time. The moment a menu is settled, it's converted into a smart shopping list, quantities scaled to the number of guests and grouped by day, ready to check off in-store.
                        </div>
                        <div className='content_article_right_text'>
                            Beyond the features themselves, this project was also an opportunity to explore how much of the "mental load" of everyday life can be handled by thoughtful software. I built the app on a real-time, multi-user foundation so that a family or a group of roommates can plan together, from different phones, without ever stepping on each other's changes, all backed by strict data isolation so each group's information stays private.
                        </div>

                        <div className='content_article_right_title'>
                            Results
                        </div>
                        <div className='content_article_right_text'>     
                            To me, this project represents much more than just a technical exercise. It embodies the meeting point between something deeply human, cooking and eating together, and the structured discipline of software development. It allowed me to bridge everyday habits with personalization, individual tastes with collective decisions.
                        </div>
                        <div className='content_article_right_text'>
                            More importantly, it's a way to give something back to daily life: fewer arguments about dinner, less food waste, and a little more room to actually enjoy cooking.
                        </div>
                        <div className='content_article_right_text'>
                            By building Doough, I hope to offer a thoughtful, elegant tool for anyone who wants to spend less time planning meals and more time sharing them.
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



