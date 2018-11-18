import React from 'react';
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
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${4 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
      width: '100%',
    },
    logo: {
      width: 250,
    },
    item: {
      padding: `${1 * theme.spacing.unit}px 0`,
    },
    button: {
      margin: theme.spacing.unit,
    },
  }
);

@withRouter
@withStyles(styles)
class NovaPequisa extends React.Component {
  state = {
    amount: '',
    comparation: '',
  };

  onAmountChange = (event) => {
    console.log(event.target.value);
    this.setState({ amount: event.target.value });
  };

  onComparationChange = (value) => {
    this.setState({ comparation: value });
  };

  onSubmit = () => {
    const { history } = this.props;
    const { comparation, amount } = this.state;
    history.push(`/pesquisa/${comparation.id}?amount=${amount}`);
  };

  render() {
    const { amount, comparation } = this.state;
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16} justify="center">
        <Grid item xs={10} md={4}>
          <Paper elevation={2} className={classes.paper}>
            <Logotype
              classes={{ root: classes.logo }}
            />
            <AmountSelector
              classes={{ root: classes.item }}
              name="Valor monetário"
              value={amount}
              onChange={this.onAmountChange}
            />
            <ComparationSelector
              classes={{ root: classes.item }}
              name="Comparações"
              value={comparation}
              options={options}
              onChange={this.onComparationChange}
            />
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              disabled={!(amount && comparation)}
              onClick={this.onSubmit}
            >
              <DoneIcon />
              Pesquisar
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default NovaPequisa;
