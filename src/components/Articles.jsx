import '../styles/articles.css'
import Article from './Article'

function Articles() {
    return (
        <section id='articles_display'>
            <article id='articles'>
                <Article placement="left"/>
                <hr className='vertical_hr'/>
                <Article  placement="center"/>
                <hr className='vertical_hr'/>
                <Article  placement="center"/>
                <hr className='vertical_hr'/>
                <Article  placement="right"/>
            </article>
            
        </section>
    )
}

export default Articles