import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
});

function Logotype({ classes }) {
  return (
    <div className={classes.root}>
      <img className={classes.img} src="assets/logo.png" alt="Quanto Equivale" />
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Logotype);
