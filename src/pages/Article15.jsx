import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import Fortnite from '../assets/Fortnite.mp4'
import fortnite from '../assets/fortnite.png'

function Article15() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_15'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Team Cohesion 
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://hadock404.github.io/app-web-fortnite_erwin/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Data Team X Fortnite
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
                            Team cohesion is a critical pillar for maintaining motivation and alignment toward a shared goal in complex application deployment projects. With remote and hybrid work models becoming the norm, maintaining meaningful connections among colleagues has become a strategic challenge for managers.
                        </div>
                        <div className='content_article_right_text'>
                            Teams today are composed of diverse profiles, backgrounds, and age groups, each with different expectations and personalities, making it difficult to find a shared space that resonates with everyone. Throughout my career managing technical teams, I have often found it challenging to preserve and nurture that collective team energy over time, especially when teams are distributed. While traditional team-building activities can help, they often require significant planning, budget, and logistics, which can be hard to sustain regularly.
                        </div>

                        <div className='content_article_right_video'>
                            <video src={Fortnite} autoPlay loop muted playsInline preload="auto" alt='Different activities in Fortnite'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Different activities in Fortnite.
                        </div>

                        <div className='content_article_right_title'>
                            Cohesion
                        </div>
                        <div className='content_article_right_text'>
                            During my time at Erwin Labs, I decided to leverage one of my personal passions, video games, as a unifying tool for team building. Among many options, Fortnite emerged as a surprisingly effective platform for fostering team cohesion within a hybrid workforce. Far beyond its reputation as a popular game, Fortnite offers a dynamic, collective environment that brings together employees across generations in a fun, accessible, and low-barrier context. Available across PC, console, and mobile, it can be installed easily, allowing everyone to participate regardless of their technical familiarity or gaming experience.
                        </div>
                        <div className='content_article_right_text'>
                            What makes Fortnite particularly suitable for corporate team-building is its diverse set of game modes, which can accommodate different comfort levels and play styles, whether through exploration, casual team missions, or lighthearted competitions. This inclusiveness ensures that everyone can actively participate, find their place within the activity, and contribute to the shared experience. The game is structured around squad-based matches, which naturally encourage communication, collaboration, and mutual support as team members develop quick strategies, adapt to challenges, and celebrate small victories together. This dynamic mirrors real-life project collaboration, where effective communication and trust are essential to success.
                        </div>
                        <div className='content_article_right_text'>
                            Beyond the gameplay itself, Fortnite’s colorful graphics, relaxed atmosphere, and creative possibilities, ranging from obstacle course design to collaborative mini-games, transform each session into a moment of shared creativity rather than mere competition. In the context of remote work, where creating moments of informal connection is often challenging, Fortnite provides a practical, scalable solution for building and maintaining relationships across the team. These sessions allow employees to interact in a different context, fostering spontaneous discussions, building empathy, and strengthening trust that translates back into their day-to-day professional interactions.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={fortnite} alt="Home page of Data Team Cohesion" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Home page of Data Team Cohesion.
                        </div>
                        <div className='content_article_right_text'>
                            At Erwin Labs, our Fortnite sessions have created a space for employees to get to know each other beyond their roles, unlocking new ways to communicate and collaborate while reducing the sense of isolation that can come with remote work.
                        </div>
                        <div className='content_article_right_text'>
                            Over time, we observed an increase in informal exchanges among team members, stronger bonds across departments, and an overall improvement in team spirit. This contributed to a more positive work climate, facilitating smoother project collaboration and increasing engagement during technical stand-ups and retrospectives.
                        </div>
                        <div className='content_article_right_text'>
                            So I decided to create an <Link to="https://hadock404.github.io/app-web-fortnite_erwin/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">application</Link> that quickly summarizes the game installation methods and the different activities that can be found directly on the platform.
                        </div>
                        

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            Integrating Fortnite into our team-building practices proved to be a simple yet effective way to strengthen team cohesion, particularly in a hybrid and remote work environment. It became a valuable tool for sustaining motivation and reinforcing our collaborative culture, transforming what could have been an isolated gaming session into a strategic lever for team synergy. At Erwin Labs, these moments of collective play became more than just leisure; they became an integral part of how we build resilient, motivated, and connected teams, ready to tackle complex projects together.
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

export default Article15



