import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import Vision from '../assets/computer-vision.mp4'
import unet from '../assets/unet.png'
import schema from '../assets/schema.png'
import accuracy from '../assets/accuracy.png'

function Article06() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_06'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Computer Vision 
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://api-vision-computer-782672784164.northamerica-northeast1.run.app/docs" className='content_title_link' target="_blank" rel="noopener noreferrer">
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
                            Computer vision allows for the segmentation of features in images and plays a crucial role in many applications, such as medicine, surveillance, and autonomous driving. The use of convolutional neural networks (CNNs) has proven particularly effective for this task. Among the most efficient architectures, U-Net has emerged as a powerful solution for semantic segmentation.
                        </div>
                        <div className='content_article_right_text'>
                            Among the most effective architectures for semantic segmentation, the U-Net model has established itself as a standard thanks to its ability to capture both the global context and the fine details of an image.
                        </div>

                        <div className='content_article_right_video'>
                            <video src={Vision} autoPlay loop muted playsInline preload="auto" id=''/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Video captured in Valencia (Spain) in my own car and processed with my trained model.
                        </div>
                        <div className='content_article_right_text'>
                            In this project, I focused on training a U-Net model to segment images captured by on-board cameras in order to assist an autonomous driving system.
                        </div>
                        <div className='content_article_right_text'>
                            In-vehicle cameras provide a continuous stream of images requiring rapid and reliable analysis to enable the vehicle to make real-time decisions, while ensuring the safety of passengers and other road users.
                        </div>
                        <div className='content_article_right_text'>
                            My model was trained using the open-source <Link to="https://www.cityscapes-dataset.com/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">CityScapes</Link> dataset, which provides carefully annotated urban images. I used 6,000 annotated dashcam images, where a colored mask indicates, pixel by pixel, the segment to which each element belongs (road, car, sky, vegetation, building, etc.).
                        </div>

                        <div className='content_article_right_title'>
                            U-Net
                        </div>
                        <div className='content_article_right_text'>
                            Its structure consists of a contracting path (Encoder), a series of convolutions and max-pooling that allow to extract contextual features from an image while reducing its size. And an expansive path (Decoder), a series of convolutions and up-sampling that allows to reconstruct the segmented image while recovering fine details.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={unet} alt="image" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_text'>
                            The unique feature of U-Net is the skip connections (bridges) connecting the same-sized layers between the encoder and the decoder, allowing to transfer local details lost during downsampling directly into the reconstruction phase.
                        </div>
                        <div className='content_article_right_text'>
                            This ability to combine global context and local accuracy is what makes U-Net so effective for image segmentation in autonomous driving. 
                        </div>

                        <div className='content_article_right_title'>
                            One-Hot Encoding vs LabelEncoder
                        </div>
                        <div className='content_article_right_text'>     
                            To achieve effective segmentation, it is essential that each pixel in the image is associated with a class label (road, vehicle, sky, vegetation, etc.).
                        </div>
                        <div className='content_article_right_text'>
                            Usually, in this type of project, the One-Hot Encoding method is preferred, which consists of creating, for each pixel, a vector of length equal to the number of classes. Thus, for a 1024x512 image with 5 classes, this generates a tensor of dimension 1024x512x5. This method facilitates the training of the model because it clearly explains the presence of each class, pixel by pixel, and allows the use of the categorical_crossentropy loss function, suitable for multi-class classifications. However, this approach is expensive in memory, because it requires managing several channels in parallel, which can quickly become limiting when processing large volumes of high-definition images.
                        </div>
                        <div className='content_article_right_text'>
                            In my project, I chose to use an alternative approach based on LabelEncoder encoding for segmentation masks. This method assigns each pixel a unique integer corresponding to the pixel's class, which allows to keep the same size as the original image while representing all classes in a single mask. This compact representation allows the use of the loss function sparse_categorical_crossentropy, which is equivalent to categorical_crossentropy but adapted to integer labels.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={schema} alt="image" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_text'>
                            Using LabelEncoder allowed me to simplify data management while optimizing GPU memory usage, making it possible to train my U-Net model on a large number of dashcam images without compromising performance. This approach is particularly useful for in-car segmentation projects in autonomous driving, where memory and inference speed are strong constraints to respect while maintaining satisfactory segmentation quality.
                        </div>
                        <div className='content_article_right_title'>
                            Results
                        </div>
                        <div className='content_article_right_text'>
                            To evaluate the model's performance, I tested U-Net on a dashcam dataset captured in environments similar to the training set (German urban environments).
                        </div>
                        <div className='content_article_right_text'>
                            Here are the class accuracy obtained from the test data:
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={accuracy} alt="" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_text'>
                            These results show that my U-Net trained model performs particularly well on large, homogeneous surfaces such as roads and buildings, but has more difficulty with small moving objects such as vehicles, particularly due to the low number of pixels representing them and variations in shape.
                        </div>

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            This project allowed me to immerse myself in computer vision by thoroughly exploring the U-Net architecture and the detailed workings of an image at the pixel level. I was also able to deploy this model as a serverless API on Cloud Run, making the pipeline accessible and reproducible in production.
                            Using LabelEncoder significantly reduced memory consumption while maintaining good performance, which proved particularly valuable when processing large volumes of dashcam images.
                        </div>
                        <div className='content_article_right_text'>
                            Despite a relatively small dataset, the results obtained are very encouraging and open up many avenues for improvement, such as the use of image tiling to refine the detection of small objects, experimentation with variants such as U-Net++ or Attention U-Net, and optimization of the model with TensorRT or ONNX for real-time deployment on embedded systems.
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



