import { Component } from "react";

export default class ToggelRenderPropsChildren extends Component {
  state = {
    on: false
  };

  toggel = () => {
    this.setState({
      on: !this.state.on
    });
  };

  render() {
    const { children } = this.props;
    return children({
      on: this.state.on,
      toggle: this.toggel
    });
  }
}
