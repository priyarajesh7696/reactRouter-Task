import React from 'react'
import Card from './Card';

function All({data}) {
  return <>
    <h2>All Courses</h2>
    <div className="row row-cols-3 g-4 p-5">
    {data.map((e, i) => {
        return <Card data={e} key={i} />;
     })}
     </div>
  </>
}

export default All