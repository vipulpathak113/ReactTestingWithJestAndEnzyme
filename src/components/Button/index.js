import React, { Component } from "react";
import PropTypes from "prop-types";

class CustomButton extends Component {
  render() {
    const { buttonText } = this.props;

    return <button data-test="buttonComponent">{buttonText}</button>;
  }
}

CustomButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default CustomButton;
