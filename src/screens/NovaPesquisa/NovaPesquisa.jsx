import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import AmountSelector from '../../components/AmountSelector';
import ComparationSelector from '../../components/CompartionSelector';
import Logotype from '../../components/Logotype';
import options from '../../core/SearchOptions';

const styles = theme => (
  {
    root: {
      padding: `${5 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
    },
    content: {
      width: '100%',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${4 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
    },
    logo: {
      width: 250,
    },
    item: {
      padding: `${1 * theme.spacing.unit}px 0`,
    },
  }
);

function NovaPequisa({ classes, history }) {
  const [amount, setAmount] = useState('');
  const [comparation, setComparation] = useState('');

  const onSubmit = () => {
    history.push(`/pesquisa/${comparation.id}?amount=${amount}`);
  };

  return (
    <Grid container className={classes.root} spacing={0} justify="center">
      <Grid className={classes.content} item sm={10} md={4}>
        <Paper elevation={2} className={classes.paper}>
          <Logotype
            classes={{ root: classes.logo }}
          />
          <AmountSelector
            classes={{ root: classes.item }}
            name="Valor monetário"
            value={amount}
            onChange={event => setAmount(event.target.value)}
          />
          <ComparationSelector
            classes={{ root: classes.item }}
            name="Comparações"
            value={comparation}
            options={options}
            onChange={newCompartion => setComparation(newCompartion)}
          />
          <Button
            variant="contained"
            color="primary"
            disabled={!(amount && comparation)}
            onClick={onSubmit}
            fullWidth
          >
            <DoneIcon />
            Pesquisar
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(withRouter(NovaPequisa));
