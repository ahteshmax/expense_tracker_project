import React, { useEffect, useRef,useState } from 'react';
import { Grid } from '@material-ui/core';

import { SpeechState, useSpeechContext } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import { Details, Main } from './components';
import useStyles from './styles';
import formatDate from './utils/formatDate';


import Pdf from "react-to-pdf";

const reff = React.createRef();

var x =15;
var y =15;

const App = () => {
  const classes = useStyles();
  const { speechState } = useSpeechContext();
  const main = useRef(null)
  const date = formatDate(new Date())

  const executeScroll = () => main.current.scrollIntoView()    
  const [pdfSizeX, setPdfSizeX] = useState(0)
  const [pdfSizeY, setPdfSizeY] = useState(0)

  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x =   docElem.clientWidth // || body.clientWidth,
    y = win.innerHeight  //|| docElem.clientHeight|| body.clientHeight;
    const options = {

    orientation: 'portrait',
    unit: 'in',
    format: [Math.floor(document.body.scrollWidth / 50),Math.floor(document.body.scrollHeight / 40)]
  };

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll();
    }
  }, [speechState]);

  return (
    <>
    <div style={{width: "auto", height: "auto", background: 'blue'}} ref={reff} >
      <Grid  className={classes.grid} container spacing={0} alignItems="center" justifyContent="center">
        <Grid  item xs={12} sm={4} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={3} className={classes.main}  >
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop} >
          <Details title="Income"   />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}  >
          <Details title="Expense" />
        </Grid>
        {/* <PushToTalkButtonContainer>
          <PushToTalkButton />
        </PushToTalkButtonContainer> 
        {options.format = [x/15,y/15]}
         */}
        <Pdf targetRef={reff} filename= {date +'PDF.pdf'} options={options} x={0.5} y={0.5} scale={1}>
          {({ toPdf }) => <button style={{fontSize: 18, color: 'grey',  padding: 1 }} onClick={toPdf}>Generate Pdf File</button>}
         </Pdf>
      </Grid>
    </div>
      
    </>
  );
};

export default App;
