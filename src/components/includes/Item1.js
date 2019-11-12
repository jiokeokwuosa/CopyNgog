import React from 'react';

function Item(props) {
  return (
    <>
       <img src={props.image} className="traffic" alt="alt"/><br/> <span className={props.titleClass}>{props.title}</span><br/><span className="percent2">{props.amount}</span><br/><br/><span className={props.percentageClass}>{props.percentage}</span>
    </>
  );
}

export default Item;
