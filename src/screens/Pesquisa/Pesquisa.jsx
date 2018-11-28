import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DescriptionCard from '../../components/DescriptionCard';
import options from '../../core/SearchOptions';

const styles = theme => (
  {
    root: {
      padding: `${5 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
    },
    item: {
      padding: `${1 * theme.spacing.unit}px 0`,
    },
    button: {
      margin: theme.spacing.unit,
    },
  }
);

function Pequisa({
  classes, history, match, location,
}) {
  const searchOption = options.find(({ id }) => id === match.params.id);

  const redirectNovaPesquisa = () => {
    history.push('/nova-pesquisa');
  };

  return (
    <Grid container className={classes.root} spacing={16} justify="center">
      <Grid item xs={10} md={4}>
        {searchOption
          ? (
            <DescriptionCard
              searchOption={searchOption}
            />)
          : (
            <Typography variant="display4">
            Pesquisa inválida
            </Typography>)
        }
      </Grid>
      <Grid item xs={10} md={4}>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={redirectNovaPesquisa}
        >
          Nova Pesquisa
        </Button>
      </Grid>
    </Grid>
  );
}


export default withStyles(styles)(Pequisa);
