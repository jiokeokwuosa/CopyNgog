import React from 'react';

function Item(props) {
  return (
    <>
        <span className="btc">{props.title}</span><br/><span className="percent">{props.percentage}</span><br/><span className="percent1">{props.percentage1}</span>
    </>
  );
}

export default Item;
