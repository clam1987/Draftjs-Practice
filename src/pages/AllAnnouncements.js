import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Editor, EditorState, convertFromRaw } from "draft-js"
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import API from "../utils/API";

const useStyles = makeStyles({
announcementContainer: {
    padding: "10px",
    fontFamily: "Arial",
    fontStyle: "normal",
    "&:hover": {
      backgroundColor: "#EBFAFF",
    },
  },
  announcementBody: {
    paddingTop: "10px",
    paddingBottom: "20px",
  },
  noBorder: {
      border: "none"
  }
});

const styleMap = {
    "HIGHLIGHT": {
      backgroundColor: "yellow"
    }
  }

const AnnouncementCard = ({id ,subject, body}) => {
    const classes = useStyles();
    const decodeBody = EditorState.createWithContent(convertFromRaw(JSON.parse(body)))
    const [editorState, setEditorState] = useState(decodeBody);
    return (
    <Grid
      className={classes.announcementContainer}
      container
      justify="flex-start"
      data-active="inactive"
      key={id}
    >
           <Grid item xs={6}>
        <Typography variant="h6" align="left" gutterBottom>
          Subject: {subject}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Editor editorState={editorState} customStyleMap={styleMap} readOnly/>
      </Grid>
    </Grid>
    )
};

const AllAnnouncements = () => {
    const [data, setData] = useState()
    const [body, setBody] = useState(() => EditorState.createEmpty());
    const [subject, setSubject] = useState("");
    
    useEffect(() => {
        API.GET().then(x => setData(x.data))
    }, []);

    if(!data) return (<h1>Loading...</h1>)
    console.log(data)

    const announcementCards = data.map(x => {
        const { id, body, subject } = x
        return <AnnouncementCard id={id} body={body} subject={subject} />
    });
    console.log(announcementCards)
    return (
        <>
        {announcementCards}
        </>
    )
}

export default AllAnnouncements;