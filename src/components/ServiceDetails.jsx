import React from "react";

const ServiceDetails = (props) => {
  return (
    <div>
      <h1>Service Details: {props.match.params.id}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut porro illo
        et beatae error aliquid ipsum quasi quibusdam quidem minima atque vel,
        accusantium quisquam, libero accusamus iste? Enim, fuga sequi.
      </p>
    </div>
  );
};

export default ServiceDetails;
