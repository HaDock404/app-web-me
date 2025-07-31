import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import fastapi from '../assets/fastapi.png'

function Article06() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_07'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Youtube Downloader 
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://api-youtube-782672784164.northamerica-northeast1.run.app/docs" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Serverless API
                                </Link>
                                <Icon8 />
                            </div>
                        </div>
                        <div className='content_article_left_date'>
                            2020
                        </div>
                    </div>
                </article>

                <article className='content_article_right'>
                    <div className='content_article_right_placement'>
                        <div className='content_article_right_title'>
                            Context
                        </div>
                        <div className='content_article_right_text'>
                            Downloading YouTube videos is a common task, almost a daily one for many people. But when you're looking to do it cleanly, quickly, and most importantly, in high quality, the experience quickly becomes frustrating. Between ad-ridden websites, sketchy software, imposed limitations, and downgraded formats, it becomes a waste of time.
                        </div>
                        <div className='content_article_right_text'>
                            As a video editor and someone who frequently works with content from different sources, I’ve often found myself searching for a solution that is simple, reliable, and able to provide the best possible video quality. Unable to find a tool that truly met my needs, I decided to build my own: a lightweight, fast, and accessible API deployed on Google Cloud Platform, allowing users to easily download any YouTube video in its best available quality.
                        </div>

                        <div className='content_article_right_text_bis'>
                            <img src={fastapi} alt="FastAPI Interface" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            FastAPI Interface.
                        </div>

                        <div className='content_article_right_title'>
                            Project
                        </div>
                        <div className='content_article_right_text'>
                            This project started from a personal need, but I knew from the beginning that it could benefit others facing the same issues. I chose Python for the development, a language I appreciate for its clarity and rich ecosystem. The <Link to="https://pypi.org/project/pytube/7.0.16/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">pytube library</Link> allowed me to interact directly with YouTube and analyze the available video and audio streams. The idea is simple: when a user sends a YouTube URL, the API automatically selects the best available format, merges video and audio if needed, and returns a downloadable link or stream.
                        </div>
                        <div className='content_article_right_text'>
                            For hosting, I went with Google Cloud Platform. I used Cloud Run, which enables deploying containerized applications without managing infrastructure. This solution appealed to me because of its simplicity, scalability, and its ability to respond to requests in just milliseconds. Deployment using Docker and Cloud Build was quick to set up, and I configured environment variables to securely manage access and dynamic settings. The whole system remains lightweight, cost-efficient, and easily reusable.
                        </div>
                        <div className='content_article_right_text'>
                            One of the key advantages of this API is how seamlessly it integrates into my video editing workflow. No more opening browsers, looking for shady converters, or hoping the quality is acceptable. Within seconds, I can access the highest quality version of any video, ready to use in my projects. In the future, I plan to add more features, such as a simple web interface for non-technical users, options to manually select video quality or format, and support for entire playlists. But even in its current version, the API fully meets my initial goal.
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            Creating this API reminded me why I love building custom tools. When existing solutions don’t match your expectations, it’s often easier, faster and much more satisfying to build your own. This project, although relatively quick to develop, allowed me to apply my skills in Python, cloud deployment, and API architecture. Most importantly, it saves me a ton of time on a daily basis.
                        </div>
                        <div className='content_article_right_text'>
                            If you’re interested in this kind of tool, whether for editing, analysis, or any other use, feel free to reach out. I’m always open to feedback, new ideas, and collaboration. And if you’re facing the same kind of frustration I was… maybe it’s time to build your own solution too.
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

export default Article06



