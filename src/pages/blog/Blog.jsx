import React from 'react'
import News from '../../components/news/News'
import Score from '../../components/score/Score'
function Blog() {
  return (
    <div>
      <div className="hero overlay" style={{backgroundImage: 'url("assets/images/bg_3.jpg")'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-5 mx-auto text-center">
        <h1 className="text-white">Blog Posts</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, molestias repudiandae pariatur.</p>
      </div>
    </div>
  </div>
</div>
<News/>

    </div>
  )
}

export default Blog