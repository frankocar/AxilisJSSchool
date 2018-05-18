import React from "react";

const Pixel = (props) => {
    return (
        <rect 
            width={props.width} 
            height={props.height} 
            fill={props.color} 
            transform={`translate(${props.x}, ${props.y})`}
            onClick={() => props.onClick(props.value)}
        />
    );
  };
  
  export default Pixel;