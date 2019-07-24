/* IMPORT */

import * as React from "react";
import { connect } from "overstated";
import Main from "@renderer/containers/main";
import { Component } from "react";

/* TOOLBAR BUTTON TRASH */

class GitButton extends Component<{ sync: Function; listener: Function }> {
  state = {
    title: "Git"
  };
  beginSync = () => {
    console.log("begin sync");
    this.setState({
      title: "Sync..."
    });
  };
  endSync = () => {
    this.setState({
      title: "Git"
    });
  };
  componentDidMount() {
    this.props.listener(this.beginSync, this.endSync);
  }
  doSync = async () => {
    await this.props.sync(true);
  };
  render() {
    return (
      <div
        className={`
         button bordered xsmall`}
        title={"Sync"}
        onClick={this.doSync}
      >
        {this.state.title}
      </div>
    );
  }
}
/* EXPORT */

export default connect({
  container: Main,
  selector: ({ container }) => ({
    sync: container.note.sync,
    listener: container.note.listener
  })
})(GitButton);
