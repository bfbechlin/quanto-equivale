import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Logo from '../../assets/logo.png';

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

const Logotype = ({ classes }) => (
  <div className={classes.root}>
    <img className={classes.img} src={Logo} alt="Quanto Equivale" />
  </div>
);

export default withStyles(styles, { withTheme: true })(Logotype);
