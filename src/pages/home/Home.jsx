import React from 'react'
import News from '../../components/news/News'
import Score from '../../components/score/Score'
import SectionContainer from '../../components/sectionContainer/SectionContainer'
import SiteSection from '../../components/siteSection/SiteSection'
import SiteSectionBg from '../../components/siteSectionBg/SiteSectionBg'
function Home() {
  return (
   <div className="site-wrap">
  <div className="hero overlay" style={{backgroundImage: 'url("assets/images/bg_3.jpg")'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5 ml-auto">
          <h1 className="text-white">World Cup Event</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
          <div id="date-countdown" />
          <p>
            <a href="#" className="btn btn-primary py-3 px-4 mr-3">Book Ticket</a>
            <a href="#" className="more light">Learn More</a>
          </p>  
        </div>
      </div>
    </div>
  </div>
  <Score/>
  <News/>
  <SiteSectionBg/>
  <SiteSection/>
  <SectionContainer/>
 
</div>

  )
}

export default Home