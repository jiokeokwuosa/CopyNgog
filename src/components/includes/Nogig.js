import React from 'react';

const Nogig = props=> {
  return (
    <>
      <div className="col-md-4">
        <div>
            <h4 className="bold">{props.title}</h4>
            <p>{props.content} 
            </p>
        </div>
      </div>
    </>
  );
}

export default Nogig;
