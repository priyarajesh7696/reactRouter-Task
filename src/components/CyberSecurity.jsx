import React from 'react'
import Card from './Card';

function CyberSecurity({data}) {
  return <>
    <h2>CyberSecurity Courses</h2>
    <div className="row row-cols-3 g-4 p-5">
    {data.map((e, i) => {
      if (e.type == "cs") {
        return <Card data={e} key={i} />;
      }
    })}
    </div>
  </>
}

export default CyberSecurity