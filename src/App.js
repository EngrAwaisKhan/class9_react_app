import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button, Checkbox, Switch } from '@material-ui/core';
import Navbar from './Components/NavBar';
import Barchart from './Components/BarChart';
import PieChart from './Components/PieChart';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 350,
    margin: "auto",
    marginTop: 50,
    // textAlign: "center", 
    padding: 25
  },
  input: {
    width: "97%",
    marginBottom: 10
  },
  title:{
    textAlign:"center"
  }
}));

function App() {

  const [switchstatus, setswitchstatus] = useState([]);

  const getvalue = (e, val) => {
    let status = switchstatus;
    status.push(val);
    setswitchstatus(status);
    console.log(switchstatus);
  }

  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Paper elevation={3} className={classes.paper}>
        <h1 className={classes.title}>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <TextField label="Enter Password" className={classes.input} />
          <span> <Checkbox color="primary" className={classes.check} onChange={getvalue} />I'm not a robot</span>
          {/* <Switch color="primary" onChange={getvalue}/> */}
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper>
      <Barchart/>
      <PieChart/>
    </div>
  );
}

export default App;
