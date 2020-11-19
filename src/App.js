import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiPhoneNumber from 'material-ui-phone-number';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import {FormControl,FormControlLabel,FormLabel,Radio,RadioGroup,} from '@material-ui/core';

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix='₹'
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

export default function SignUp() {
  const [state, setState] = React.useState();
  const [value , setValue] = React.useState('female');
  const [values , setValues] = React.useState();
  const classes = useStyles();


  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <form className={classes.form} >
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                name="user name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="User Name"
                autoComplete="name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <MuiPhoneNumber           
                  name="phone"
                  label="Phone Number"
                  data-cy="user-phone"
                  defaultCountry={"in"}
                  variant="outlined"
                  value={state}
                  onChange={(e)=>{setState({contact:e});}}
                  fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="standard-read-only-input"
                label="Address"
                defaultValue="Bangalore Urban district"
                InputProps={{
                  readOnly: true,
                }}
               variant="outlined"                
               fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={(e)=>setValue(e.target.value)}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                variant="outlined"
                label="Salary"
                value={values}
                onChange={(e)=>setValues(e.target.value)}
                name="numberformat"
                id="formatted-numberformat-input"
                InputProps={{
                  inputComponent: NumberFormatCustom,
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registration
          </Button>
        </form>
      </div>
    </Container>
  );
}
