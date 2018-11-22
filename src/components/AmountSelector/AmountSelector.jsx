import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
});

function NumberFormatCustom({ inputRef, onChange, ...other }) {
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            value: values.value,
          },
        });
      }}
      thousandSeparator
      prefix="R$"
    />
  );
}

function AmountSelector({
  name, onChange, value, classes,
}) {
  return (
    <div className={classes.root}>
      <TextField
        label={name}
        value={value}
        onChange={onChange}
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        fullWidth
      />
    </div>
  );
}

export default withStyles(styles)(AmountSelector);
