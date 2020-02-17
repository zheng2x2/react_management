import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width : '100%',
    // marginTop : theme.spacing.unit * 3,
    marginTop : theme.spacing(3),
    overflowX : "auto"
  },
  table: {
    minWidth : 1080
  }
});


class App extends Component {

  state = {
    customers: "" //변경될수있는데이터를처리하려고 할때
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({customers : res}))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props; //props : 변경될수없는데이터명시
    return (
      <Paper className={classes.root} >
        <Table className={classes.table} >
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>사진</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { this.state.customers ?
              this.state.customers.map(c => {
                return <Customer key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              }) : ""
            }
          </TableBody>
        </Table>
        <div className="App-header">
          <img src={logo} className="App-logo" lat="logo"alt="logo" />
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);


