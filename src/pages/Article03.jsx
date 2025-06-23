import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import flowchart from '../assets/flowchart.png'
import mcd from '../assets/MCD.png'

function Article01() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_03'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Chatbot + AI
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://werner.erwin-labs.com/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Werner Chatbot
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
                            The IT services market is highly complex and saturated. Companies often struggle to identify providers with the precise skills and experience required for their projects. At the same time, many consulting firms, especially smaller or more specialized ones, find it difficult to stand out against large industry players that dominate market visibility.
                        </div>
                        <div className='content_article_right_text'>
                            In this context, <Link to="https://www.totalenergies.fr/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">Erwin Labs</Link> offers an innovative solution: an intelligent, structured, and optimized directory that maps all the key players in the IT consulting ecosystem. The goal is to simplify and accelerate the connection between business needs and the right expertise.
                        </div>
                        <div className='content_article_right_text'>
                            To build this tool, I designed a data extraction pipeline capable of automatically collecting information from thousands of consulting firms. The pipeline includes several key stages:
                        </div>
                        <div className='content_article_right_text' style={{textAlign: "center", fontStyle: "italic", fontWeight: "bold"}}>
                            Scraping websites to extract company descriptions and unique value propositions,
                        </div>
                        <div className='content_article_right_text' style={{textAlign: "center", fontStyle: "italic", fontWeight: "bold"}}>
                            Structuring and enriching the data to build a reliable and searchable database,
                        </div>
                        <div className='content_article_right_text' style={{textAlign: "center", fontStyle: "italic", fontWeight: "bold"}}>
                            Querying government APIs (e.g., Sirene, Insee) to retrieve official details such as legal structure, contact information, company size, and revenue.
                        </div>
                        <div className='content_article_right_text'>
                            The flowchart below illustrates the overall workflow of the data extraction and processing pipeline.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={flowchart} alt="image" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Flowchart to diagram the data extraction pipeline.
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
                            <img src={mcd} alt="image" className='content_article_right_text_image'/>
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



