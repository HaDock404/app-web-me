import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import animation from '../assets/animation.mp4'
import total from '../assets/total.mp4'
import scroll from '../assets/scroll.png'
import total_figure from '../assets/total_figure.png'

function Article01() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_04'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Quantified improvement
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://github.com/HaDock404/data-production-baudry" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    my Improvement
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2016
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            Since 2011, the furniture market has experienced a significant decline in activity, forcing companies to rethink their production methods. Reducing costs while meeting deadlines tailored to increasingly demanding customers has become a major challenge, both now and in the future.
                        </div>
                        <div className='content_article_right_text'>
                            In this race against time, every inefficiency must be eliminated to ensure the company’s sustainability. Every employee must contribute to improving productivity, as even the smallest loss of time can hinder growth.
                        </div>
                        <div className='content_article_right_text'>
                            To remain competitive and retain a customer base under pressure, Baudry needed to enhance the productivity of its main production workshop, which generated the majority of its revenue. This challenge was crucial to maintaining its market position by balancing quality and performance.
                        </div>
                        <div className='content_article_right_text'>
                            In this context, the Production Director, Mr. Guiet, entrusted me with the task of building upon and furthering the analysis previously conducted by Ms. Marina Isavnina, a production management technician. Her study highlighted a key issue:
                        </div>
                        <div className='content_article_right_text' style={{textAlign: "center", fontStyle: "italic", fontWeight: "bold"}}>
                            "The routing and use of pallets in the Enrobing Workshop must be better organized to optimize their flow and minimize unnecessary handling."
                        </div>
                        <div className='content_article_right_text'>
                            Based on this observation, my mission was to eliminate all unnecessary handling operations, which not only waste time but also increase the risk of quality issues due to repeated manipulations.
                        </div>
                        <div className='content_article_right_text'>
                            In collaboration with my manager, Mr. Desfontaines, we established a primary objective:
                        </div>
                        <div className='content_article_right_text' style={{textAlign: "center", fontStyle: "italic", fontWeight: "bold"}}>
                            "To organize and effectively manage the routing of pallets along the rolling paths to improve their transitions and usage at the various workstations within the workshop."
                        </div>
                        <div className='content_article_right_video'>
                            <video src={total} autoPlay loop muted playsInline preload="auto" />
                        </div>
                        <div className='content_article_right_subtitle'>
                            TotalEnergies becomes an electricity and gas supplier.
                        </div>

                        <div className='content_article_right_title'>
                            An observation
                        </div>
                        <div className='content_article_right_text'>
                            My data team and I quickly identified this issue when processing data from previous, smaller public sector contracts. But when TotalEnergies won the largest French contract, we had to take action.
                        </div>
                        <div className='content_article_right_text'>
                            These data were essential, as they allowed the sales department to adjust market prices and the Trading department to purchase sufficient quantities of energy on the European market at the best price, ensuring a profitable outcome for the company.
                        </div>
                        <div className='content_article_right_text'>
                            I was tasked by the business-to-business managers, <Link to="https://fr.linkedin.com/in/benjamin-salmeron-29ba783a" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">Benjamin Salmeron</Link> and <Link to="https://fr.linkedin.com/in/ikrame-farssi-ba639ab1" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">Ikram Farssi</Link>, with developing a tool to accurately retrieve delivery point data and store it on a server, allowing my team to access and analyze it.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={total_figure} alt="image" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle_bis'>
                            My project data architecture diagram.
                        </div>

                        <div className='content_article_right_title'>
                            Results
                        </div>
                        <div className='content_article_right_text'>
                            This data processing architecture was designed to be easily scalable and accessible to the various teams that required real-time information.
                        </div>
                        <div className='content_article_right_text'>
                            This included the French electricity grid operator, Enedis, responsible for the creation, modification, and analysis of delivery points. Thanks to this data acquisition and transmission method, the processing time for an intervention on a delivery point was reduced from one week to less than a day.
                        </div>
                        <div className='content_article_right_text'>
                            Our internal teams also benefited from this streamlined access to information. For example, the sales department could more easily adjust its market offers based on actual consumption or adjust them according to the predictions of customers who had not yet consumed energy.
                        </div>
                        <div className='content_article_right_text'>
                            The electricity trading department, responsible for purchasing the required energy on the European market, also needed precise information on the amount of energy required for each market to adjust their orders according to the consumption of listed points.
                        </div>
                        <div className='content_article_right_text'>
                            Other departments were also incorporated into this architecture, such as the accounting department, which handled delivery point data with Chorus, and the legal department, which used it to resolve disputes related to the listed points.
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            A well-designed data architecture doesn’t only benefit data teams or data engineers; many other departments within a company can also gain from a simple and accessible data organization. The improvement in collecting electricity supply data has greatly streamlined the work across various teams and enhanced customer satisfaction.
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



