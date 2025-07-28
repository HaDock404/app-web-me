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
                                <Link to="https://werner.erwin-labs.com/login" className='content_title_link' target="_blank" rel="noopener noreferrer">
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
                            <img src={flowchart} alt="" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Flowchart to diagram the data extraction pipeline.
                        </div>

                        <div className='content_article_right_title'>
                            Data Architecture
                        </div>
                        <div className='content_article_right_text'>
                            At the core of this project lies a powerful and finely structured database, designed to represent the rich and complex landscape of IT consulting services. Each consulting firm is profiled with detailed attributes, including specialized domains, technical skills, business expertise, industry focus, and geographic footprint. This comprehensive data model allows for precise and contextualized matching between company capabilities and project needs.
                        </div>
                        <div className='content_article_right_text'>
                            To enhance search and recommendation quality, the database integrates semantic vector embeddings and fuzzy search algorithms alongside traditional SQL queries. This hybrid approach enables the system to understand nuanced user intents even when queries are imprecise, incomplete, or expressed in natural language and return highly relevant results that go beyond exact keyword matches.
                        </div>
                        <div className='content_article_right_text'>
                            The chatbot interface is directly connected to this database. It captures the user's expectations through natural conversation and translates them into intelligent queries. Whether a procurement team is looking for "a cybersecurity firm with public sector experience" or "a mid-sized data engineering consultancy based in Lyon," the system interprets the request, navigates the structured and vectorized data, and proposes the most aligned consulting firms available.
                        </div>
                        <div className='content_article_right_text'>
                            This intelligent backend transforms the chatbot into more than just a search tool, it becomes a strategic sourcing assistant, capable of uncovering opportunities, revealing hidden expertise across the market, and ultimately accelerating and securing the selection process for IT consulting partners.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={mcd} alt="" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle_bis'>
                            My project data architecture diagram.
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            The chatbot interface transforms access to this data into a smooth and intuitive experience, allowing users to describe their needs in natural language. It guides them toward the most relevant partners, bridging the gap between business expectations and market offerings.
                        </div>
                        <div className='content_article_right_text'>
                            This solution significantly reduces the time and effort required to identify the right firms, while improving the strategic quality of sourcing decisions. It levels the playing field by surfacing specialized consulting firms that might otherwise go unnoticed.
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



