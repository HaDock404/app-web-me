import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import memgraph from '../assets/memgraph.png'

function Article14() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_14'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Memgraph at Erwin Labs
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://www.erwin-labs.com/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Erwin Labs
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
                            At Erwin Labs, we’ve always placed data at the heart of our operations. Our work in the consulting world requires us to handle vast amounts of information, often unstructured, and coming from a wide array of sources, anonymized CVs, directories of consulting firms, internal tools, and evolving business taxonomies.
                        </div>
                        <div className='content_article_right_text'>
                            Our need was deceptively simple: connect all this data to gain actionable insights, contextually rich and instantly accessible. But at the scale of hundreds of thousands of nodes and edges, this becomes a true technical challenge. That’s where Memgraph came in, and it has since become the cornerstone of our architecture.
                        </div>

                        <div className='content_article_right_text_bis'>
                            <img src={memgraph} alt="image" className='content_article_right_text_image'/>
                        </div>

                        <div className='content_article_right_title'>
                            Relational Databases
                        </div>
                        <div className='content_article_right_text'>
                            The relational model is powerful and well-suited to many use cases. But when it comes to modeling systems that are dynamic, interconnected, and inherently non hierarchical as is the case in consulting, it starts to buckle. In our domain, everything is linked. A consultant possesses multiple skills, which relate to specific tools and methodologies. These tools vary by project, by client, by seniority, even by industry trends. Add in elements like daily rates (TJM), geographical availability, sector specialization, and company affiliation, and you get a web of relationships that is not easily captured in tables.
                        </div>
                        <div className='content_article_right_text'>
                            What we needed was not a rigid table structure, but a graph. A true network of meaning. Graph databases are designed precisely for this purpose: representing data not as rows, but as entities and relationships that carry weight, structure, and context. With this in mind, we evaluated several graph database options. Memgraph stood out immediately.
                        </div>

                        <div className='content_article_right_title'>
                            Memgraph
                        </div>
                        <div className='content_article_right_text'>
                            From day one, Memgraph met our expectations and exceeded many of them. Its in memory engine delivers blazing, fast performance, even on complex queries involving millions of connections. For our internal use cases, where we often need to cross reference dozens of filters and constraints in real time, this was a critical advantage.
                        </div>
                        <div className='content_article_right_text'>
                            Memgraph also supports Cypher, the graph query language initially developed by Neo4j. This compatibility meant our team could quickly become productive, designing intuitive and expressive queries with minimal friction. We didn’t have to reinvent our workflows to harness the power of graph technology.
                        </div>
                        <div className='content_article_right_text'>
                            Another major benefit was how quickly we could prototype and explore our graph. Memgraph comes with Memgraph Lab, a built-in visualization and querying environment. It allowed us to ingest data-whether via Kafka, APIs, or CSV files and immediately test our models, refine relationships, and iterate visually. This rapid feedback loop was instrumental in shaping a graph that truly mirrored our domain logic.
                        </div>
                        <div className='content_article_right_text'>
                            Finally, Memgraph’s integration with Python and its libraries like <Link to="https://pypi.org/project/pymgclient/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">mgclient</Link> and <Link to="https://pypi.org/project/SQLAlchemy/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">GQLAlchemy</Link> gave us the flexibility to automate ingestion pipelines, enrich nodes dynamically, and perform deeper analyses directly from our notebooks or services.
                        </div>


                        <div className='content_article_right_title'>
                            Consulting Ecosystem
                        </div>
                        <div className='content_article_right_text'>
                            Today, our graph consists of over 150,000 nodes and 800,000 relationships. It revolves around key concepts that define the consulting industry.
                        </div>
                        <div className='content_article_right_text'>
                            At the foundation are anonymized CVs. Each one is linked to skills such as 'React' or 'Data Engineering,' to tools like 'AWS' or 'Airflow,' to sectors like 'Finance' or 'Retail,' to seniority levels, certifications, and past projects. These CVs are not flat records but dynamic entities with histories and context.
                        </div>
                        <div className='content_article_right_text'>
                            Next come the consulting firms. We model them through their specialties, their staff, past projects, rates, tools used, and clients served. The missions, that is, individual consulting assignments, are separate entities of their own. Each mission links to one or more firms, specific tools and skills, clients, security requirements, regulatory constraints, and target industries.
                        </div>
                        <div className='content_article_right_text'>
                            This web of connections allows us to ask questions that would be nearly impossible, or unbearably slow with SQL. We can, for example, search for profiles who know both Kafka and Snowflake, have banking sector experience, are available in Paris, have a daily rate under €750, and have worked with a firm that’s a BNP Paribas supplier. This kind of multi-dimensional query can be resolved in milliseconds through Cypher.
                        </div>
                        <div className='content_article_right_text'>
                            Beyond information retrieval, our graph has become a true tool for analysis and strategy. We use centrality algorithms to identify key skills across profiles. For instance, with PageRank, we evaluate which technologies are most connected across industries and roles. We use community detection algorithms to surface natural clusters of consultants with similar paths or tools. With shortest path algorithms, we can determine how closely linked two companies are based on shared talent, clients, or projects.
                        </div>
                        <div className='content_article_right_text'>
                            Every node and edge contains meaning. When we traverse this graph, we’re not just exploring data, we’re uncovering patterns. We’ve identified unexpected tool combinations that occur in certain industries, non-linear career paths that converge on niche expertise, and emerging technologies that are starting to cluster within new project types.
                        </div>
                        <div className='content_article_right_text'>
                            Our Memgraph database is no longer just a backend component, it is the central hub around which our internal services revolve. It powers our smart search engine for the sales team, a profile recommendation system for recruiters, an interactive graph viewer for project managers, a mission scoring algorithm for staffing decisions, and a set of APIs that expose graph data to our broader microservice architecture.
                        </div>
                        <div className='content_article_right_text'>
                            It has become a single source of truth, a unified, structured, and continuously updated map of our consulting universe.
                        </div>

                        
                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            Adopting Memgraph at Erwin Labs fundamentally changed the way we handle and think about data. Rather than force a rigid structure onto a naturally relational world, we embraced its complexity. The result is not a database, it’s a living system that evolves with us, reflects the state of the industry, and helps us navigate it more intelligently.
                        </div>
                        <div className='content_article_right_text'>
                            Memgraph allowed us to turn raw information into strategic assets. As our graph grows, so does its value. It helps us detect talent trends, anticipate client needs, identify market gaps, and find the right people for the right projects, faster and with more confidence. What began as a technical solution has become a driver of organizational intelligence, allowing us to move from isolated data points to connected insights.
                        </div>
                        <div className='content_article_right_text'>
                            In a field as intricate and dynamic as consulting, the power of a graph lies not only in what it shows, but in what it reveals.
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

export default Article14



