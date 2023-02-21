import React from 'react'

function News() {
  const news = [
    {
      id: 0,
      name: "Mellissa Allison",
      img:"assets/images/img_1.jpg",
      text: "Romolu to stay at Real Nadrid?",
      date:"May 19, 2020  Sports"
    },
    {
      id: 1,
      name: "Mellissa Allison",
      img:"assets/images/img_3.jpg",
      text: "Kai Nets Double To Secure Comfortable Away Win",
      date:"May 19, 2020  Sports"
    },
    {
      id: 2,
      name: "Mellissa Allison",
      img:"assets/images/img_2.jpg",
      text: "Dogba set for Juvendu return?",
      date:"May 19, 2020  Sports"
    },
  ];
  return (
    <div>
        <div className="latest-news">
    <div className="container">
      <div className="row">
        <div className="col-12 title-section">
          <h2 className="heading">Latest News</h2>
        </div>
      </div>
      <div className="row no-gutters">
      {news.map((item)=>(
        <div className="col-md-4" key={item._id}>

       <div className="post-entry">
            <a href="#">
              <img src={item.img} alt="Image" className="img-fluid" />
            </a>
            <div className="caption">
              <div className="caption-inner">
                <h3 className="mb-3">{item.text}</h3>
                <div className="author d-flex align-items-center">
                  <div className="img mb-2 mr-3">
                    <img src="assets/images/person_1.jpg" alt />
                  </div>
                  <div className="text">
                    <h4>{item.name}</h4>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </div> 
          </div>
          
        </div>
          )) }
      </div>
    </div>
  </div>
    </div>
  )
}

export default News