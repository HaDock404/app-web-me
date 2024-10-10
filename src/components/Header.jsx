import { useState, useEffect } from 'react';
import '../styles/header.css'
import { Link } from 'react-router-dom';

function Header() {
    const [textIndex, setTextIndex] = useState(0);
    const texts = [
        '🎵 Listening : Fred again',
        '🎵 Listening : Justice - Heavy Metal',
        '🎮 Playing : Fortnite - BR',
        '👨🏼‍💻 Beep boop boop',
        '📺 Watching : Clouds Atlas',
        '📖 Reading : Isaac Asimov',
        '🎵 Listening : Frank Sinatra - My Way',
        '🎮 Playing : DayZ',
        '📺 Watching : The Game',
        '📺 Watching : From',
        '🎵 Listening : Tom Petty',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <header>
            <div id='header'>
                <div id='part1'>
                    <div id='hobbies'>{texts[textIndex]}</div>

                    <hr id='hr_black1'/>
                </div>
                

                <div id='title_GD'>
                    <div id='h1_GD'>Gael Delescluse</div>
                </div>

                <div id='part3'>
                    <hr id='hr_black2'/>

                    <nav id='nav_link'>
                        <ul>
                            <li>
                                <Link to="https://github.com/HaDock404" className='link link_header'>Github</Link>
                            </li>
                            <hr className='small_hr'/>
                            <li>
                                <Link to="https://www.linkedin.com/in/gael-d-044b34304/" className='link link_header'>LinkedIn</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            
        </header>
    )
}

export default Header