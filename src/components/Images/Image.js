import React from "react";
import "./Image.css";

const Image = (props) => {
    return (
        <div className="pic">
            <div className="img-container" onClick={props.handleClick}>
                <img 
                    src={props.image} 
                    alt={props.name}
                />
            </div>        
        </div>
    );
};

export default Image;