import React from "react";
import PropTypes from "prop-types";

function Brocode({name="bigguy" , age=10}) {
  return (
    <>
      <h1>Hi this is my name {name}</h1>
      <h1>Hi this is my age {age}</h1>
    </>
  );
}

Brocode.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

export default Brocode;
