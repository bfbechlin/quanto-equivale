import React from 'react';
import queryString from 'query-string';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DescriptionCard from '../../components/DescriptionCard';
import options, { outputMessage } from '../../core/SearchOptions';

const styles = theme => (
  {
    root: {
      padding: `${5 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
    },
    content: {
      width: '100%',
    },
    item: {
      padding: `${1 * theme.spacing.unit}px 0`,
    },
    button: {
      marginTop: 4 * theme.spacing.unit,
    },
  }
);

function Pequisa({
  classes, history, match, location,
}) {
  const searchOption = options.find(({ id }) => id === match.params.id);
  const amount = Number(queryString.parse(location.search).amount);
  const redirectNovaPesquisa = () => {
    history.push('/nova-pesquisa');
  };

  return (
    <Grid container className={classes.root} spacing={16} justify="center">
      <Grid className={classes.content} item xs={10} md={4} lg={3}>
        {searchOption && amount
          ? (
            <DescriptionCard
              searchOption={searchOption}
              message={outputMessage(amount, searchOption)}
              shareLink={window.location.href}
            />)
          : (
            <Typography variant="display2" align="center">
            Pesquisa Inválida
            </Typography>)
        }
        <Button
          variant="contained"
          className={classes.button}
          color="primary"
          fullWidth
          onClick={redirectNovaPesquisa}
        >
          Nova Pesquisa
        </Button>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Pequisa);
