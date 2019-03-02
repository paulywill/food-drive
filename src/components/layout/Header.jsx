import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
        <div id="top-menu" className="ui menu">
        <span className="item"><Link to="/" >Home</Link></span>
        <a className="item" href="mailto:info@barriefoodbank.org">info@barriefoodbank.org</a>
        <a className="item" href="https://www.facebook.com/barriefoodbank/" >Facebook</a>
        <a className="item" href="https://twitter.com/barriefoodbank" >Twitter</a>
        <a className="item" href="https://www.barriefoodbank.org/news-blog/">News &amp; Blog</a>
        <a className="item" href="https://www.barriefoodbank.org/contact/">Contact</a>
        <a className="item" href="https://www.barriefoodbank.org/donating/">Donating</a>
        </div>
    </header>
  )
}

export default Header;