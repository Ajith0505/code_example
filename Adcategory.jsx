import React from "react";
import "./styles.css"
import Card from "./Adcard";
import advertIcons from "../../user/Adcategory";


function createCard(advertIcon) {
    return (
      <Card
      key={advertIcon.id}
      name={advertIcon.name}
      imgs={advertIcon.imgURL}
      imgss={advertIcon.imgURL2}
      />
    );
  }

const Adcategory = () => {
    return ( <div className="ad-category">{advertIcons.map(createCard)}</div> );
}
export default Adcategory
