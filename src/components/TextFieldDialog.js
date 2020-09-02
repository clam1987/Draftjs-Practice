import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Toolbar from "@material-ui/core/Toolbar";
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import ListIcon from '@material-ui/icons/List';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import HighlightIcon from '@material-ui/icons/Highlight';
import { Editor, EditorState, RichUtils } from "draft-js"
import 'draft-js/dist/Draft.css';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    textBox: {
        paddingTop: ".625em",
        paddingLeft: ".625em",
        paddingRight: ".625em",
      },
      textFieldStyle: {
        border: "1px solid #666666",
        borderRadius: "5px",
      },
}));

const styleMap = {
  "HIGHLIGHT": {
    backgroundColor: "yellow"
  }
}


const TextFieldDialog = () => {
  const [open, setOpen] = useState(false);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

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

  const toggleBulletPoints = e => {
    e.preventDefault();
    let styles = e.currentTarget.getAttribute("data-style");
    const newState = RichUtils.toggleBlockType(editorState, styles)
    if(newState) {
      setEditorState(newState);
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

  const handleClose = () => {
    console.log(`current body is ${editorState}`)
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <Toolbar disableGutters>
            <IconButton onClick={toggleInlineStyles} data-style="BOLD">
              <FormatBoldIcon />
            </IconButton>
            <IconButton onClick={toggleInlineStyles} data-style="ITALIC">
              <FormatItalicIcon />
            </IconButton>
            <IconButton onClick={toggleInlineStyles} data-style="UNDERLINE">
              <FormatUnderlinedIcon />
            </IconButton>
            <IconButton onClick={toggleInlineStyles} data-style="STRIKETHROUGH">
              <StrikethroughSIcon />
            </IconButton>
            <IconButton onClick={toggleBulletPoints} data-style="unordered-list-item">
              <ListIcon />
            </IconButton>
            <IconButton onClick={toggleBulletPoints} data-style="ordered-list-item">
              <FormatListNumberedIcon />
            </IconButton>
            <IconButton onClick={toggleInlineStyles} data-style="HIGHLIGHT">
              <HighlightIcon />
            </IconButton>
          </Toolbar>
          <Editor editorState={editorState} onChange={handleChange} handleKeyCommand={handleKeyCommand} customStyleMap={styleMap}/>
          {/* <TextField
          InputProps={{
            disableUnderline: true,
            classes: { inputMarginDense: classes.textBox },
          }}
          autoFocus
          className={classes.textFieldStyle}
          margin="dense"
          id="name"
          // onChange={handleBodyChange}
          placeholder="Body"
          type="email"
          fullWidth
          multiline
          rows={12}
        /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default TextFieldDialog;