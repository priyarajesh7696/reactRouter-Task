import React from 'react'
import Card from './Card';

function FullStack({data}) {
  
  return <>
    <h2>FullStack Development Courses</h2>
    <div className="row row-cols-3 g-4 p-5">
    {
    data.map((e,i)=>{
      if(e.type=="fsd")
      {
        
       return <Card data={e} key={i}/>
}
})
                      
                      }
                      </div>
  
  </>
}

export default FullStack