import React from "react";

function Testimonial(props) {
  return (
    <article className="tesCont ">
      <strong className="tesRating spanAll">
        {props.reviewInfo.starRating} / 5
      </strong>
      <img className="tesImg" src={props.reviewInfo.imgSrc} />
      <h3 className="tesPersName">{props.reviewInfo.name}</h3>
      <p className="descText tesOpinion spanAll">{props.reviewInfo.opinion}</p>
    </article>
  );
}

export default Testimonial;
