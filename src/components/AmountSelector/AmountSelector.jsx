import React from 'react';
import NumberFormat from 'react-number-format';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
  },
});

const NumberFormatCustom = ({ inputRef, onChange, ...other }) => (
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

const AmountSelector = ({
  name, handleChange, value, classes,
}) => (
  <div className={classes.root}>
    <TextField
      label={name}
      value={value}
      onChange={handleChange}
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: NumberFormatCustom,
      }}
      fullWidth
    />
  </div>
);

export default withStyles(styles)(AmountSelector);
