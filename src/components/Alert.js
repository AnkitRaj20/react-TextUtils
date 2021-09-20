import React from "react";

const Alert = (props) => {
    //Function to  Capitalize first letter
    const capitalize = word => {
        const lower = word.toLowerCase();
        //lower.charAt(0).toUpperCase():- returns only first letter of word in upper case
        return lower.charAt(0).toUpperCase() +lower.slice(1)
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.type)}!</strong> {props.alert.msg}
    </div>
  );
};

export default Alert;
