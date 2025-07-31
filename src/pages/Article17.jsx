import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import skatepress from '../assets/skatepress.png'
import skatepressplan from '../assets/skatepressplan.png'


function Article17() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_17'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Woodworking and Project Management
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://github.com/HaDock404/lab-skateboard-press" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    My Board Press
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2013
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            Skateboarding is an object of freedom, creativity, and unfortunately, it is often expensive and of poor quality. Faced with this reality, I decided to embark on a new project: to build my own high-quality skateboards at a low cost while ensuring the process could be replicated if the experiment proved successful.
                        </div>
                        <div className='content_article_right_text'>
                            I started researching industrial skateboard manufacturing methods and discovered that most require heavy molds, complex hydraulic presses, and fully equipped workshops. These constraints were out of my reach. Instead of giving up, I decided to design my own skateboard press, adapted to my means while ensuring a professional result.
                        </div>

                        <div className='content_article_right_text_bis'>
                            <img src={skatepress} alt="My skateboard press build" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            My skateboard press build.
                        </div>

                        <div className='content_article_right_title'>
                            Project Management
                        </div>
                        <div className='content_article_right_text'>
                            My goal was not simply to create a single skateboard but to build a replicable system to manufacture multiple boards with the same quality and shape.
                        </div>
                        <div className='content_article_right_text'>
                            Skateboards are traditionally made from sheets of Canadian maple plywood, known for its strength and lightness. However, other types of wood, such as birch or beech, can also be used depending on needs and availability, offering varying stiffness based on the desired riding style. These are low-cost materials that are easy to find in hardware stores, allowing the large-scale fabrication of my skateboards.
                        </div>
                        <div className='content_article_right_text'>
                            In general, a skateboard consists of 7 to 9 layers of plywood, each around 1.5 mm thick, glued together with high-quality outdoor wood glue. Layer-by-layer gluing allows the plywood to perfectly match the shape given by the press while ensuring the board’s strength and responsiveness.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={skatepressplan} alt="Skateboard press plan" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Skateboard press plan.
                        </div>
                        <div className='content_article_right_text'>
                            Instead of using a monoblock mold, I designed a system based on 10 machined templates that replicate the desired skateboard shape. These templates are fixed between two drilled boards, and 12 threaded rods equipped with washers and wing nuts allow progressive pressure to be applied across the assembly, ensuring a consistent curve during the gluing process.
                        </div>
                        
                        <div className='content_article_right_text'>
                            The plywood layers are coated with glue and positioned between the two parts of the press. To achieve the desired skateboard shape, the wing nuts are gradually tightened, and then it is necessary to wait 48 hours for the glue to fully cure.
                        </div>
                        <div className='content_article_right_text'>
                            To make this project replicable, I applied an almost industrial approach. I created detailed plans for each template, allowing precise machining even in a small woodworking workshop. A parts list, paired with the operating procedures, allows each step of the press’s creation to be followed precisely.
                        </div>
                        <div className='content_article_right_text'>
                            This organization helped me avoid many unforeseen issues, manage the project’s cost more effectively, and precisely document each step so I could share this method with other makers who wish to start crafting their own boards.
                        </div>
                        

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            This skateboard press project taught me that a complex project, even in a personal workshop, can be successfully completed if it is well organized. Each step needs to be carefully considered, planned, and tested before being validated to ensure the final result.
                        </div>
                        <div className='content_article_right_text'>
                            This approach is directly transferable to other projects, particularly in data science, where many sequential steps are required. It taught me how to break down problems into smaller tasks, anticipate material needs, document my progress, and maintain a clear overall vision while moving forward step by step.
                        </div>
                        <div className='content_article_right_text'>
                            Building your own skateboards is not just about making an object. It is about learning how to structure a project, solve technical challenges, and experience the satisfaction of creating something you will use daily, having understood every step of its creation.
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

export default Article17



