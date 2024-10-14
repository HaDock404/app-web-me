import { useState, useEffect } from 'react';
import Logo from '../assets/logo.png'
import Icon2 from './Icon2';
import { Link } from 'react-router-dom';

function Article(props) {

    const [WidthContent, setWidthContent] = useState(20);
    const [MarginLeft, setMarginleft] = useState(10);
    const [MarginRight, setMarginRight] = useState(10);
    const [TotalWidth, setTotalWidth] = useState(0)

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
    }, [placement_article]); // Exécuter ce code lorsque `center_article` change

    return (
        <article 
            className="article"
            style={{
                width: `calc(25% - ${TotalWidth}px)`
            }}
            
            >
            <div 
                className="content_article"
                style={{
                    width: `calc(100% - ${WidthContent}px)`,
                    marginLeft: `${MarginLeft}px`,
                    marginRight: `${MarginRight}px`
                }}>
                <div className='content_box'>
                    <div className='content_box_image_article'>
                        <img className='Logotest' src={props.image} alt="" />
                    </div>
                    <div className='content_box_title'>
                        Example text for title
                    </div>
                    <div className='content_box_text'>
                        Example text for text disposition and test this is a test just a test read my test it's a test.
                    </div>
                </div>
                <div className='link_box'>
                    <div className='icon_box_link'>
                        <Icon2 />
                    </div>
                    <Link to="/" className='link text_box_link'>Read more about</Link>
                    
                    
                </div>
                
            </div>
        </article>
    );
}

export default Article;
