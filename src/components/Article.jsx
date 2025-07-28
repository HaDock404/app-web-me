import { useState, useEffect } from 'react';
import Icon2 from './Icon2';
import Icon5 from './Icon5';
import { Link } from 'react-router-dom';

function Article(props) {

    const [WidthContent, setWidthContent] = useState(20);
    const [MarginLeft, setMarginleft] = useState(10);
    const [MarginRight, setMarginRight] = useState(10);
    const [TotalWidth, setTotalWidth] = useState(0)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const placement_article = props.placement;

    useEffect(() => {
        if (placement_article === "left") {
            setWidthContent(10);
            setMarginleft(0);
            setTotalWidth(10)
        } else if (placement_article === "right") {
            setWidthContent(10);
            setMarginRight(0);
            setTotalWidth(10)
        } else {
            setWidthContent(20);
            setMarginleft(10);
            setMarginRight(10);
            setTotalWidth(0)
        }
        const handleResize = () => setWindowWidth(window.innerWidth);
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [placement_article]); // Exécuter ce code lorsque `center_article` change

    return (
        <article 
            className="article"
            style={{
                width: window.innerWidth > 800 ? `calc(25% - ${TotalWidth}px)` : '100%'
            }}
            
            >
            <div 
                className="content_article"
                style={{
                    width: window.innerWidth > 800 ? `calc(100% - ${WidthContent}px)` : '100%',
                    marginLeft: window.innerWidth > 800 ? `${MarginLeft}px` : '0px',
                    marginRight: window.innerWidth > 800 ? `${MarginRight}px` : '0px',

                }}>
                <div className='content_box'>
                    <div className='content_box_image_article'>
                        <img className='Logotest' src={props.image} alt="" />
                    </div>
                    <div className='content_box_title'>
                        {props.title}
                    </div>
                    <div className='content_box_text'>
                        {props.text}
                    </div>
                </div>
                <div className='link_box'>
                    <div className='icon_box_link'>
                        <Icon2 />
                    </div>
                    <Link to={props.link} className='link text_box_link' target="" rel="noopener noreferrer">Read more about</Link>
                    
                    
                </div>
                
            </div>
        </article>
    );
}

export default Article;
