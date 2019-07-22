/* IMPORT */

import * as React from "react";
import { connect } from "overstated";
import Main from "@renderer/containers/main";
import { Component } from "react";

/* TOOLBAR BUTTON TRASH */

class GitButton extends Component {
  state = {
    title: "Git"
  };
  doSync = async () => {
    this.setState({
      title: "Sync..."
    });
    await this.props.sync();
    this.setState({
      title: "Git"
    });
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
    sync: container.note.sync
  })
})(GitButton);
