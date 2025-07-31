import '../styles/content.css'
import Icon6 from '../components/Icon6'
import Icon8 from '../components/Icon8'
import { Link } from 'react-router-dom'

import Hack from '../assets/hack.mp4'
import arduino from '../assets/arduino.png'

function Article10() {
    return (
        <>
            <section className="content_section_display">
                <article className='content_article_left' id='article_12'>
                    <Link to="/" className='content_article_left_icon'>
                        <Icon6 />
                    </Link>
                    <div className='content_article_left_placement'>
                        <div className='content_article_left_placement2'>
                            <div className='content_article_left_title'>
                                Easy life with Arduino 
                            </div>
                            <div className='content_article_left_link'>
                                <Link to="https://hadock404.github.io/ai-expert-attiny85_v0/" className='content_title_link' target="_blank" rel="noopener noreferrer">
                                    Bad-USB Tutorial
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
                            With the rise of platforms like Arduino, programming embedded systems has become accessible to everyone, enabling the creation of smart devices at a low cost. Automatically turning on a light, watering plants based on soil moisture, optimizing energy management in a workshop, or even automating resource collection in a video game, these are just a few of the ideas that become achievable thanks to programmable microcontrollers.
                        </div>
                        <div className='content_article_right_text'>
                            In this spirit, I recently created a <Link to="https://hadock404.github.io/ai-expert-attiny85_v0/" className='content_article_right_text_link'  target="_blank" rel="noopener noreferrer">tutorial</Link> using the ATTiny85, a small and affordable microcontroller, to illustrate how to turn an idea into a concrete automation project, even with limited resources.
                        </div>

                        <div className='content_article_right_video'>
                            <video src={Hack} autoPlay loop muted playsInline preload="auto" alt="Terminal video"/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            POV: BadUSB is connected in your computer
                        </div>

                        <div className='content_article_right_title'>
                            My Arduino Use Cases
                        </div>
                        <div className='content_article_right_text'>
                            An embedded system is a self-contained electronic device designed to perform a specific task, using a microcontroller integrated directly into the device. Arduino, with its simple programming environment and strong community support, has democratized embedded systems, making it easier to create smart devices in areas like home automation, robotics, agriculture, and even creative projects.
                        </div>
                        <div className='content_article_right_text'>
                            The classic Arduino is perfect for quickly prototyping ideas, testing concepts, and learning how to program sensors, actuators, and serial communication. The ATTiny85, on the other hand, is an ultra-compact option, ideal when a project is ready to be miniaturized and integrated directly into a final product while maintaining the Arduino programming logic.
                        </div>
                        <div className='content_article_right_text'>
                            To demonstrate the potential of these tools, I used the ATTiny85 for a BadUSB project. A BadUSB is a USB device reprogrammed to automatically execute actions on a computer once it is connected. Unlike regular USB drives that store and transfer files, a BadUSB can impersonate a trusted device such as a keyboard or mouse, allowing it to execute commands or scripts automatically. These actions can include opening network ports, downloading malware, or even stealing sensitive data. This type of attack is particularly dangerous because it is nearly undetectable by traditional security systems, as USB devices are typically considered safe by operating systems.
                        </div>
                        <div className='content_article_right_text'>
                            In my case, I leveraged this concept to automate repetitive actions in a video game, allowing me to execute a sequence of actions repeatedly to gain experience points autonomously. I have also used this device for more complex tasks, such as automated software installations and file transfers between machines.
                        </div>
                        <div className='content_article_right_text_bis'>
                            <img src={arduino} alt="Arduino projects" className='content_article_right_text_image'/>
                        </div>
                        <div className='content_article_right_subtitle'>
                            Some projects with Arduino.
                        </div>
                        <div className='content_article_right_text'>
                            Arduino is not limited to simple or playful automation tasks. It serves as a bridge between data science and embedded systems engineering. With Arduino, it becomes possible to deploy AI models onto physical devices, enabling the testing of their effectiveness in real-world conditions and facilitating the creation of intelligent connected objects adapted to specific environments.
                        </div>
                        

                        <div className='content_article_right_title'>
                            Conclusion
                        </div>
                        <div className='content_article_right_text'>
                            Embedded systems are no longer reserved for engineers working on drones or autonomous vehicles. With Arduino and microcontrollers like the ATTiny85, it is now possible to make our environment smarter and more automated at a low cost. These tools enable you to transform ideas into functional objects quickly and iteratively.
                        </div>
                        <div className='content_article_right_text'>
                            My project with the ATTiny85 is just one example of what can be achieved when diving into embedded systems. It opens the door to countless practical and creative improvements that, when combined, can genuinely simplify daily life while developing valuable skills in electronics, programming, and the integration of AI into the physical world.
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



