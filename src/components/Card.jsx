import React from "react";

function Card({data}) {
  return <>
   <div className="row row-cols-4 g-4 p-5 bg-dark">
            <div className="col">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={data.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.courseTittle}</h5>
                  </div>
                </div>
              </div>
              </div>
    </>

}

export default Card;
