import '../styles/banner.css'
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
                            Doough.app
                        </div>
                        <div className='content_box_banner_text'>
                            Doough is a passion project. Its primary goal is to bring people together around food: households and roommates plan their weekly meals as a group, vote on dishes, share their own recipes, and generate shopping lists automatically. It blends smart meal recommendations with a social feed, making cooking together simple and fun.
                        </div>
                        <div className='link_box_banner'>
                            <div className='icon_box_link'>
                                <Icon2 />
                            </div>
                            <Link to="/hieroglyphs" className='link text_box_banner_link' target="" rel="noopener noreferrer">
                                Read more about
                            </Link>
                        </div>
                    </div>
                    
                    <div className='content_box_image_banner'>
                        <img className='Logotest_banner' src={Hieroglyph} alt="doough.app" />
                    </div>
                </div>
            </article>
            
        </section>
    )
}

export default Banner