import React from 'react';
import Offer from "./Offer.js";
import "../styles/Offers.css";


const Offers = ({offers}) => {
    return (
        <div className="offersSection"> 
        {offers && offers.map((item,index)=>(
        <Offer key={index} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    )
}

export default Offers