import React from "react";
import { useState } from "react";







function Card(props) {
    const [isHovering, setIsHovering] = useState(false)


    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    return (
        <div className="ad-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={isHovering?props.imgss:props.imgs} alt="image-mobile" />
            {props.name}
        </div>
    );
}

export default Card;
