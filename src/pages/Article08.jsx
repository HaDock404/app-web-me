import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import Twitter from '../assets/twitter.mp4'
import bert from '../assets/BERT.png'
import schema from '../assets/schema.png'
import accuracy from '../assets/accuracy.png'

function Article08() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_08'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Natural Language Processing
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://api-emoxion-782672784164.northamerica-northeast1.run.app/docs" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Serverless API
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
                            Understanding the sentiment associated with social media content is a major asset in today’s economy. Companies need to monitor market sentiment regarding their brand to anticipate potential crises, manage the constant flow of information, and adjust their communication, financial decisions, and even commercial strategies in real time. Social media platforms generate vast volumes of text, often with inconsistent quality and linguistic nuances that can be challenging for human analysts and artificial intelligence models alike to interpret accurately.
                        </div>
                        <div className='content_article_right_text'>
                            To address this challenge, I trained a BERT-based model on a dataset of 1.6 million tweets, each labeled according to the positive or negative sentiment expressed. This large-scale, sentiment-labeled dataset allowed the model to learn the subtle contextual and semantic variations present in social media language, enabling it to capture irony, slang, abbreviations, and the fragmented syntax typical of online platforms.
                        </div>

                        <div className='content_article_right_video'>
                            <video src={Twitter} autoPlay loop muted playsInline preload="auto" id=''/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            API results of my BERT Trained Model
                        </div>

                        <div className='content_article_right_title'>
                            BERT
                        </div>
                        <div className='content_article_right_text'>
                            BERT, which stands for Bidirectional Encoder Representations from Transformers, is a language representation model developed by Google that pre-trains deep bidirectional representations by jointly conditioning on both left and right context in all layers. This architecture allows BERT to deeply understand the contextual relationships between words, which is particularly critical for sentiment analysis, where the polarity of a statement often depends on its context within the sentence.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={bert} alt="image" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_text'>
                            For this project, I fine-tuned a pre-trained BERT base model specifically for the sentiment classification task, optimizing it on the labeled dataset while applying data cleaning and augmentation strategies to improve the robustness of the model. Tweets were pre-processed to handle hashtags, user mentions, links, and emojis, converting them into formats that preserved semantic information while remaining compatible with the tokenizer used by BERT.
                        </div>
                        <div className='content_article_right_text'>
                            Once trained, the model achieved high accuracy in classifying tweets as positive or negative, even in edge cases where the sentiment was subtle or dependent on cultural references, idiomatic expressions, or humor. This level of performance makes it a valuable tool for companies seeking to monitor brand sentiment, detect early signals of reputational risk, and adjust their communication strategies with agility.
                        </div>

                        <div className='content_article_right_title'>
                            Cloud Run
                        </div>
                        <div className='content_article_right_text'>     
                            To make the model accessible and usable at scale, I deployed the sentiment analysis pipeline as an API using Google Cloud Run, allowing the model to be accessed via HTTP requests in a scalable, serverless environment. This setup ensures that the model can handle large volumes of incoming requests while maintaining low latency, making it suitable for real-time analysis of social media streams or batch processing of historical data for in-depth sentiment trend analysis.
                        </div>
                        <div className='content_article_right_text'>
                            The deployment pipeline was fully automated, using a CI/CD workflow that containerizes the model within a Docker image and deploys it to Cloud Run whenever a new version is validated through automated tests. This structure ensures consistent performance across updates while minimizing operational overhead.
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            Through this project, I witnessed firsthand how advanced NLP models like BERT can be operationalized to deliver actionable insights to businesses in a landscape where public sentiment directly influences financial and strategic decisions. The ability to systematically and accurately interpret social media sentiment empowers organizations to navigate the fast-paced, information-saturated environments in which they operate, transforming unstructured data into a strategic asset.
                        </div>
                        <div className='content_article_right_text'>
                            This experience also reinforced the importance of mastering the entire lifecycle of an AI project, from dataset construction and model training to deployment and monitoring, to ensure that technological solutions are not only performant but also effectively integrated into operational workflows. By combining deep learning expertise with scalable deployment practices, we can unlock the true potential of artificial intelligence in supporting business agility and resilience in an ever-evolving digital ecosystem.
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

export default Article08



