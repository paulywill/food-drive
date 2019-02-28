import React from 'react'

function Header() {
  return (
    <header>
        <div id="top-menu" class="ui menu">
            <span class="item">705-725-1818</span>
            <a class="item" href="mailto:info@barriefoodbank.org">info@barriefoodbank.org</a>
            <a class="item" href="https://www.facebook.com/barriefoodbank/" > Facebook</a>
            <a class="item" href="https://twitter.com/barriefoodbank" > <span>Twitter</span></a>
            <a class="item" href="https://www.barriefoodbank.org/news-blog/">News &amp; Blog</a>
            <a class="item" href="https://www.barriefoodbank.org/contact/">Contact</a>
            <a class="item" href="https://www.barriefoodbank.org/donating/">Donating</a>
        </div>
    </header>
  )
}

export default Header;