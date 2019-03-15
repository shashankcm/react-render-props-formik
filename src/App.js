import React, { Component } from "react";
import Toggel from "./components/Toggel.jsx";
import ToggelRenderProps from "./components/ToggelRenderProps.jsx";
import ToggelRenderPropsChildren from "./components/ToggelRenderPropsChildren.jsx";
import Reservation from "./components/MiniFormik.jsx";
import FormikExample from "./components/FormikExample.jsx";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Toggel>
          <h1>Child Ele for Toggel Component</h1>
        </Toggel>
        <br />
        <br />
        <ToggelRenderProps
          render={({ on, toggle }) => (
            <div>
              {on && <h1>Show ME</h1>}
              <button onClick={toggle}>Show Me</button>
            </div>
          )}
        />
        <br />
        <br />
        <ToggelRenderPropsChildren>
          {({ ...Obj }) => (
            <div>
              {Obj.on && <h1>Show ME</h1>}
              <button onClick={Obj.toggle}>Show Me-this.props.children</button>
            </div>
          )}
        </ToggelRenderPropsChildren>
        <br />
        <br />
        <Reservation />
        <br />
        <br />
        <FormikExample />
      </React.Fragment>
    );
  }
}

export default App;
