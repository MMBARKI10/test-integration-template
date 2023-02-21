import React from 'react'

function SiteSection() {
  const sections = [
    {
      id: 0,
      img:"assets/images/img_1.jpg",
      text: "Dogba set for Juvendu return?",
    },
    {
      id: 1,
      img:"assets/images/img_2.jpg",
      text: "Kai Nets Double To Secure Comfortable Away Win",
    },
    {
      id: 2,
      img:"assets/images/img_3.jpg",
      text: "Romolu to stay at Real Nadrid?",
    },
    {
      id: 3,
      img:"assets/images/img_1.jpg",
      text: "Dogba set for Juvendu return?",
    },
    {
      id: 4,
      img:"assets/images/img_2.jpg",
      text: "Kai Nets Double To Secure Comfortable Away Win",
    },
    {
      id: 5,
      img:"assets/images/img_3.jpg",
      text: "Romolu to stay at Real Nadrid?",
    },
  ];
  return (
    <div>
          <div className="site-section">
    <div className="container">
      <div className="row">
        <div className="col-6 title-section">
          <h2 className="heading">Videos</h2>
        </div>
        <div className="col-6 text-right">
          <div className="custom-nav">
            <a href="#" className="js-custom-prev-v2"><span className="icon-keyboard_arrow_left" /></a>
            <span />
            <a href="#" className="js-custom-next-v2"><span className="icon-keyboard_arrow_right" /></a>
          </div>
        </div>
      </div>
      <div className="owl-4-slider owl-carousel">
      { sections.map((item)=>(
       <div className="item" key={item._id}>
          <div className="video-media">
            <img src={item.img} alt="Image" className="img-fluid" />
            <a href="https://vimeo.com/139714818" className="d-flex play-button align-items-center" data-fancybox>
              <span className="icon mr-3">
                <span className="icon-play" />
              </span>
              <div className="caption">
                <h3 className="m-0">{item.text}</h3>
              </div>
            </a>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
    </div>
  )
}

export default SiteSection