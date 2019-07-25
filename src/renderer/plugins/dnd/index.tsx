/* IMPORT */

import * as React from "react";
import { connect } from "overstated";
import Main from "@renderer/containers/main";
import Note from "@renderer/containers/main/note";

class DnD extends React.Component<{ note: Note }> {
  componentDidMount() {
    const { note } = this.props;
    console.log("DnD init");
    window.ondragover = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };
    window.ondrop = async (e: DragEvent) => {
      e.preventDefault();
      if (e.dataTransfer) {
        const files: string[] = [];
        for (let i = 0; i < e.dataTransfer.files.length; ++i) {
          files.push(e.dataTransfer.files[i].path);
        }
        const olds = note.getAttachments();
        await note.addAttachments(note.state.note, files);
        const text = note
          .getAttachments()
          .filter(file => !olds.includes(file))
          .map(file => `[](../attachments/${file})`)
          .join("\n");

        note.ctx.editor._replaceSelectedText(text);
      }
      return false;
    }; // this.props.note.sync();
  }
  render() {
    return <></>;
  }
}

/* EXPORT */

export default connect({
  container: Main,
  selector: ({ container }) => ({
    note: container.note
  })
})(DnD);
