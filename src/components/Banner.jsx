import '../styles/banner.css'
import { useState, useEffect } from 'react';
import Icon2 from './Icon2';
import { Link } from 'react-router-dom';
import Hieroglyph from '../assets/hieroglyphs.png'

function Banner() {
    return (
        <section id='banner_display'>
            <article id='banner'>
                <div className="content_banner">
                    <div className='content_box_banner'>
                        <div className='content_box_banner_title'>
                            Hieroglyphs.io
                        </div>
                        <div className='content_box_banner_text'>
                            Hieroglyphs.io is a passion project. Its primary goal is to make it easy and fast for web developers to access a wide range of optimized icons, ensuring high-quality graphic rendering. Automation is a key component of this project. With a fully automated CI/CD pipeline, project management and deployment are seamless and efficient.
                        </div>
                        <div className='link_box_banner'>
                            <div className='icon_box_link'>
                                <Icon2 />
                            </div>
                            <Link to="/article_05" className='link text_box_banner_link' target="" rel="noopener noreferrer">
                                Read more about
                            </Link>
                        </div>
                    </div>
                    
                    <div className='content_box_image_banner'>
                        <img className='Logotest_banner' src={Hieroglyph} alt="" />
                    </div>
                </div>
            </article>
            
        </section>
    )
}

export default Banner