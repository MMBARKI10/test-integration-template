import React from 'react'
import News from '../../components/news/News'
import Score from '../../components/score/Score'
import SectionContainer from '../../components/sectionContainer/SectionContainer'
import SiteSection from '../../components/siteSection/SiteSection'
import SiteSectionBg from '../../components/siteSectionBg/SiteSectionBg'


function Matches() {
  return (
      <div className="matches">
    <div className="hero overlay" style={{backgroundImage: 'url("assets/images/bg_3.jpg")'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 mx-auto text-center">
        <h1 className="text-white">Matches</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
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

export default Matches