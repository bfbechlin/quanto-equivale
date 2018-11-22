import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';

function useDelayText(text, TIMEOUT) {
  const [displayedText, setDisplayedText] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDisplayedText(text);
      setShow(true);
    }, TIMEOUT);
    return () => { setShow(false); };
  }, [text]);

  return {
    displayedText,
    show,
  };
}

function DescriptionViewer({ text, TIMEOUT = 250 }) {
  const { displayedText, show } = useDelayText(text, TIMEOUT);

  return (
    <Collapse in={show} unmountOnExit mountOnEnter timeout={TIMEOUT}>
      <Typography variant="body1">
        {displayedText}
      </Typography>
    </Collapse>
  );
}

export default DescriptionViewer;
