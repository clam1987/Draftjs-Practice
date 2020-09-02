import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";

const MyEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const toggleInlineStyles = e => {
    e.preventDefault();
    let style = e.currentTarget.getAttribute("data-style");
    const newState = RichUtils.toggleInlineStyle(editorState, style)
    if(newState) {
        setEditorState(newState)
        return "handled"      
    }
    return "not handled"
  }

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if(newState) {
        setEditorState(newState)
        return "handled"
    }
    return "not handled"
  }

  const handleChange = e => setEditorState(e)

  return (
    <>
      <div className="my-little-app">
        <h1>Playing with Draft.js!</h1>
        <input
          type="button"
          value="Bold"
          data-style="BOLD"
          onMouseDown={toggleInlineStyles}
        />
                <input
          type="button"
          value="Italic"
          data-style="ITALIC"
          onMouseDown={toggleInlineStyles}
        />
        <div className="draft-editor-wrapper">
          <Editor editorState={editorState} onChange={handleChange} placeholder="Enter some text here" handleKeyCommand={handleKeyCommand}/>
        </div>
      </div>
    </>
  );
};

export default MyEditor;
