import React from "react";

function Card(props){
    console.log(props);
    return (
        <>
        <div className="cards">
            <div className="image_card">
              <img src={props.imgscr} alt="mypic" className="image_deg" />
                <div className="card_info">
              
                <span className="card_catagory">{props.tile}</span>
               
                <h3 className="card_title">{props.sname}</h3>
                <a href={props.link} target="blank">
                <button>Watch Now</button>
                </a>
            </div>
        </div>
        </div>
        </>
    );
}
export default Card;