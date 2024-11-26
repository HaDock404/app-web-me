import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import animation from '../assets/animation.mp4'
import baudry from '../assets/baudry.mp4'
import scroll from '../assets/scroll.png'
import ishikawa from '../assets/ishikawa.png'

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
                            <video src={baudry} autoPlay loop muted playsInline preload="auto" />
                        </div>
                        <div className='content_article_right_subtitle'>
                            Baudry company specialized in the coating of wooden profiles.
                        </div>

                        <div className='content_article_right_title'>
                            Improvements
                        </div>
                        <div className='content_article_right_text'>
                            After an in-depth analysis of production capacity, including detailed measurements for each task, the study of the Overall Equipment Effectiveness (OEE), and the identification of the need to reduce handling times during production, it became essential to implement significant improvements in the production process.
                        </div>
                        <div className='content_article_right_text'>
                            A detailed study of task times proved to be a valuable tool for easily identifying anomalies and uncovering opportunities for improvement. By observing a representative production launch, I analyzed time losses at various stages. This analysis allowed me to propose relevant improvements aimed at optimizing production times.
                        </div>
                        <div className='content_article_right_text'>
                            The conclusions of this study, which you can find in<Link to="https://github.com/HaDock404/data-production-baudry" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer"> detail</Link>, resulted in several concrete changes:
                        </div>
                        <div className='content_article_right_text'>
                            <strong>- Reorganizing machinery:</strong> Certain machines were relocated to minimize unnecessary operator movement and streamline production flows.
                        </div>
                        <div className='content_article_right_text'>
                            <strong>- Introducing new tools:</strong> Specific equipment was added to enhance ergonomics and reduce the physical strain on workers.
                        </div>
                        <div className='content_article_right_text'>
                            <strong>- Optimizing production flows:</strong> The product workflow was reorganized to make it more logical and aligned with the sequence of operations to be performed.
                        </div>
                        <div className='content_article_right_text'>
                            To analyze the root causes of excessive handling, I used the Ishikawa diagram, also known as the fishbone diagram. This tool, commonly used in quality management, graphically represents potential causes of a problem by categorizing them into key groups (methods, machines, materials, manpower, environment, etc.). This approach allowed me to structure my observations and prioritize improvement areas.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={ishikawa} alt="image" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle_bis'>
                            Ishikawa Diagram Example of my project.
                        </div>
                        <div className='content_article_right_text'>
                            The OEE, which measures the overall efficiency of a machine or process by considering availability, performance, and quality, was used as the primary indicator to evaluate the outcomes of the implemented changes. By tracking its evolution before and after the adjustments, I was able to demonstrate a significant increase in production efficiency, validating the relevance of the improvements made.
                        </div>

                        <div className='content_article_right_title'>
                            Results
                        </div>
                        <div className='content_article_right_text'>     
                            The implemented improvements significantly reduced the challenges related to handling and flow management. Handling tasks were reduced by 6%, thanks to better task organization and optimized tools. Additionally, pallet flow decreased by 36%, primarily due to the reorganization of machines and a more coherent management of production flows.
                        </div>
                        <div className='content_article_right_text'>
                            The total cost of these improvements amounted to €148,000, with an annual return on investment estimated at €100,000. While not all proposed improvements could be implemented, those that were deployed had a substantial impact not only on productivity but also on workers' well-being, creating a more ergonomic and enjoyable work environment.
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            In conclusion, having well-adapted production tracking tools is essential for accurately measuring improvements and ensuring continuous process optimization. These tools transform raw data into actionable insights, which are critical for making informed decisions. In this project, the use of key performance indicators such as Overall Equipment Effectiveness (OEE) was instrumental in objectively evaluating the impact of implemented changes. By measuring availability, performance, and quality, OEE provided a comprehensive and precise view of the gains achieved.
                        </div>
                        <div className='content_article_right_text'>
                            Additionally, complementary methodologies like 5S proved invaluable in enhancing organization and workflow efficiency. By structuring production spaces around the principles of sorting, setting in order, shining, standardizing, and sustaining discipline, the 5S approach not only reduced time wastage but also significantly improved worker well-being and engagement by offering a more ergonomic and structured work environment. This type of approach serves as a powerful lever to boost both productivity and team satisfaction.
                        </div>
                        <div className='content_article_right_text'>
                            Other tools, such as the Ishikawa diagram, also added significant value by identifying and categorizing the root causes of inefficiencies. This analytical method allowed us to prioritize actions based on their potential impact, ensuring an optimal allocation of resources.
                        </div>
                        <div className='content_article_right_text'>
                            More broadly, implementing a rigorous tracking system and leveraging proven methodologies such as 5S and flow mapping provide a critical advantage in driving industrial process transformation. These approaches not only measure the effectiveness of improvements but also foster a culture of continuous improvement within teams. This creates a virtuous cycle where productivity gains, workplace well-being, and product quality reinforce one another.
                        </div>
                        <div className='content_article_right_text'>
                            Ultimately, investing in the right tools and methodologies is not just an operational benefit but also a strategic opportunity to build efficient, sustainable production systems aligned with the expectations of both employees and customers.
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



