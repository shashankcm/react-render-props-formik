import React, { Component } from "react";

export default class Toggel extends Component {
  state = {
    on: false
  };

  toggel = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { render } = this.props;
    return (
      <div>
        {render({
          on: this.state.on,
          toggle: this.toggel
        })}
      </div>
    );
  }
}
