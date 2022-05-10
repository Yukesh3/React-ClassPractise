import React from 'react'

export default function Cards(props) {
  return (
    <>


  <li>
    <a href="/" className="card">
      <img src={props.link? props.link:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spidermannowayhome_onesheet_rating.jpg?itok=tjZOthvB"} className="card__image" alt="" />
      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>                     
          <img className="card__thumb" src={props.logo? props.logo:"https://cdn.mos.cms.futurecdn.net/GNdXbxaRQP4aGLwxc53zZ9.jpg"} alt="" />
          <div className="card__header-text">
            <h3 className="card__title">{ props.name }</h3>            
            <span className="card__status">1 hour ago</span> 
          </div>
        </div>
        <p className="card__description">{props.description}</p>
      </div>
    </a>      
  </li>


    </>
  )
}
