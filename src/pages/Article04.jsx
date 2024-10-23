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
                                <Link to="" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    my Improvement
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
                            In France, the electricity and gas markets were opened to competition for all customers on July 1, 2007. Today, they are governed by Directives <Link to="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:211:0055:0093:fr:PDF" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">2009/72/EC</Link> and <Link to="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2009:211:0094:0136:fr:PDF" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">2009/73/EC</Link> of July 13, 2009. The goal was to transition from several independent national markets to a single, integrated European market. This measure aimed to dismantle the state monopoly on energy and allow private companies to thrive in the European market.
                        </div>
                        <div className='content_article_right_text'>
                            By the end of 2021, <Link to="https://www.totalenergies.fr/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">TotalEnergies</Link> had no fewer than 5 million customers. I worked in the Key Accounts department, which dealt exclusively with public sector markets. Various organizations grouped together numerous French administrations to negotiate more favorable electricity supply prices. TotalEnergies had won the largest contract: <Link to="https://www.ugap.fr/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">UGAP</Link>.
                        </div>
                        <div className='content_article_right_text'>
                            Unfortunately, at that time, TotalEnergies lacked the necessary tools to process and analyze the thousands of energy supply points associated with public sector contracts. Handling this crucial information, which was essential to optimize electricity supply, proved to be extremely complicated and led to some rather unusual situations.
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



