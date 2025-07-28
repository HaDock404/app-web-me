import '../styles/banner.css'
import { Link } from 'react-router-dom';
import Banner from '../assets/banner3.png'

function Banner2() {
    return (
        <section id='banner_display'>
            <article id='banner'>
                <Link to="/article_10" className="content_banner_link">

                    <img className='Logotest_banner' src={Banner} alt="" />
                    
                </Link>
            </article>
            
        </section>
    )
}

export default Banner2