import React from 'react'
import Card from './Card';

function DataScience({data}) {
  return <>
    <h2>DataScience courses</h2>
    <div className="row row-cols-3 g-4 p-5">
    {data.map((e, i) => {
      if (e.type == "ds") {
        return <Card data={e} key={i} />;
      }
    })}
    </div>
  </>
}

export default DataScience