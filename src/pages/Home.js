import React from 'react'
import Cards from '../components/Cards'
import data from '../data'


export default function Home() {
   
  return (
    <>
    <h1 >Top NetFlix Movies for Free🔥</h1>

<ul className="cards">
  {
data.map((items)=>{
  return <Cards name={items.name} link={items.img_link} description={items.description} logo={items.logo_img}/>

})
  }


</ul>   

    </>
  )
}
