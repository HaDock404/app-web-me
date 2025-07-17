import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import CISPA from '../assets/cispa.mp4'
import fortnite from '../assets/fortnite.png'

function Article16() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_16'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Manage a Team 
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://www.cispa.fr/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    CISPA
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2009
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            I learned to sail when I was just eight years old, discovering the subtle dance between the wind, the waves, and the boat. Learning not to capsize, to protect my head during maneuvers, to read the water and anticipate every gust, these are complex concepts for a child, but out on the water, you are the only one in control.
                        </div>
                        <div className='content_article_right_text'>
                            This autonomy shaped me at a young age. Later, as I moved on to catamarans, I continued learning while sharing what I knew with older children, teaching them to listen to the wind and to react quickly without panicking. It became a space where I grew while helping others grow, building confidence with every outing.
                        </div>

                        <div className='content_article_right_video'>
                            <video src={CISPA} autoPlay loop muted playsInline preload="auto" id=''/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Ribou Lake - Cholet
                        </div>

                        <div className='content_article_right_title'>
                            Team Leader
                        </div>
                        <div className='content_article_right_text'>
                            Naturally, during my teenage years, I found myself introducing beginners at my local sailing club to the passion I had for sailing. What might have seemed like a simple summer job quickly became my first experience in team management, but with a very unique team: children, impatient and overflowing with energy, capable of shifting from laughter to fear in a split second.
                        </div>
                        <div className='content_article_right_text'>
                            Supervising a group of young sailors means understanding that they don’t have the same sense of danger, that a sudden gust of wind can cause them to let go of the tiller, that another boat sailing too close can create panic, and that any misstep can be dangerous.
                        </div>
                        <div className='content_article_right_text'>
                            I had to learn to remain calm, to repeat instructions without frustration, and to find simple words so that every child, no matter their level, could understand what to do in a critical moment.
                        </div>
                        <div className='content_article_right_text'>
                            Sailing taught me that you can’t control the wind, but you can always adjust your sails. I discovered the same applies to managing a team: I couldn’t change a child’s personality in one session, but I could adapt my words, my posture, and my teaching style so they would feel confident, take action, and find their place within the group while respecting shared rules.
                        </div>
                        <div className='content_article_right_text'>
                            It was about finding the balance between collective goals and individual progress, maintaining cohesion while encouraging autonomy. I learned to celebrate small victories, to calmly correct mistakes, to foster responsibility, and to listen to their fears while keeping everyone on course.
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            Looking back, I realize that every experience can become a lesson if you take the time to reflect on it.
                        </div>
                        <div className='content_article_right_text'>
                            Being a sailing instructor for children taught me the fundamentals of team management: listening before leading, adapting communication to each person’s needs, maintaining team cohesion despite different paces and personalities, and aiming for a collective goal without erasing individual identities.
                        </div>
                        <div className='content_article_right_text'>
                            On the water, just like in professional life, the ability to manage a team, anticipate risks, and guide without pushing too hard is a precious skill that I continue to apply every day.
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

export default Article16



