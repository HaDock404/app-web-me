import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import Gitlab from '../assets/gitlab.mp4'
import gitlab from '../assets/gitlab.png'

function Article10() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_11'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                GitLab CI/CD 
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://www.youtube.com/watch?v=_tmrvwVn-Ps" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Youtube Explanation
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2024
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            Data scientists are sometimes confined to their analytical environment, focusing solely on model development without engaging with the architecture and deployment workflows that bring these models to life. Yet, understanding these workflows is essential for delivering robust, usable products. Personally, I have always been drawn to the principles of DevOps, the orchestration of structured, automated steps that enable a project to progress seamlessly from development to deployment.
                        </div>
                        <div className='content_article_right_text'>
                            To deepen my understanding of CI/CD pipelines and to take on the role of a DevOps engineer while deploying a machine learning tool for housing price prediction, I chose to leverage GitLab as the backbone of this workflow.
                        </div>

                        <div className='content_article_right_video'>
                            <video src={Gitlab} autoPlay loop muted playsInline preload="auto" id=''/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            GitLab Server & Project
                        </div>

                        <div className='content_article_right_title'>
                            Architecture
                        </div>
                        <div className='content_article_right_text'>
                            The project itself was a straightforward AI application designed to predict housing prices based on various features. To execute this project from end to end, I deliberately assumed multiple roles that one typically finds in a real-world machine learning product team.
                        </div>
                        <div className='content_article_right_text'>
                            I began by taking on the role of Infrastructure Engineer, setting up a self-hosted GitLab CI/CD server, configuring runners, defining user roles, and managing permissions to simulate a realistic multi-contributor environment. This allowed me to understand how to structure access and pipelines for a collaborative ML project.
                        </div>
                        <div className='content_article_right_text'>
                            Stepping into the Developer role, I built a <Link to="https://github.com/HaDock404/app-housing-prices" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">React</Link> application within a dedicated GitLab repository, organizing the workflow into development and production branches to maintain clean, stable releases. As a Data Scientist, I sourced, cleaned, and explored the dataset before training a linear regression model to predict housing prices, focusing on building a <Link to="https://github.com/HaDock404/ai-housing-prices" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">model</Link> that was simple, interpretable, and efficient enough for integration.
                        </div>
                        <div className='content_article_right_text'>
                            Shifting to Backend Development, I created a <Link to="https://github.com/HaDock404/app-housing-prices" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">FastApi</Link> backend that served the trained model, providing an endpoint for the React frontend to fetch predictions dynamically based on user input. This step required thoughtful handling of serialization, dependency management, and lightweight API design to ensure responsiveness.
                        </div>
                        <div className='content_article_right_text'>
                            Finally, as DevOps Engineer and Project Lead, I managed the merging of feature branches into production while overseeing the progressive deployment of the application using CI/CD pipelines. I designed and iterated on YAML configuration files to automate testing, containerization, and deployment to a local server, ensuring that each push triggered validation steps, linting, and deployment checks before going live.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={gitlab} alt="" className='content_article_right_text_image'/>
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            This project was particularly valuable because it allowed me to understand how each contributor’s work integrates within a real deployment pipeline, reinforcing the importance of version control, structured branching, and automated testing at every stage of the project lifecycle. It highlighted the often-overlooked operational aspects of delivering an AI product, emphasizing that building a predictive model is only a part of the journey—delivering it in a reliable, scalable manner is what transforms it into a usable product.
                        </div>
                        <div className='content_article_right_text'>
                            Completing this project gave me immense satisfaction, as it allowed me to step outside the traditional boundaries of a data scientist and take on a broader project management and DevOps perspective. It demonstrated how a holistic understanding of development, infrastructure, and deployment workflows can empower data scientists to contribute more effectively to the success of the projects they work on, equipping them to collaborate seamlessly with developers and DevOps engineers to bring models from experimentation to production
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

export default Article10



