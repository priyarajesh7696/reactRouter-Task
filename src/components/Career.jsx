import React from "react";
import Card from './Card';

function Career({ data }) {
  return (
    <>
      <h2>Career Courses</h2>
      <div className="row row-cols-3 g-4 p-5">
      {data.map((e, i) => {
        if (e.type == "career") {
          return <Card data={e} key={i} />;
        }
      })}
      </div>
    </>
  )
}

export default Career;
