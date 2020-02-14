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
})

const customers = [
  {
    'id' : 1,
    'image' : 'https://placeimg.com/100/100/1',
    'name' : '김중원',
    'birthday' : '961222',
    'gender' : '남자',
    'job' : '대학생'
  },
  {
    'id' : 2,
    'image' : 'https://placeimg.com/100/100/2',
    'name' : '하지원',
    'birthday' : '700214',
    'gender' : '여자',
    'job' : '가수'
  },
  {
    'id' : 3,
    'image' : 'https://placeimg.com/100/100/3',
    'name' : '김가연',
    'birthday' : '901122',
    'gender' : '여자',
    'job' : '보안관'
  }
]

class App extends Component {
  render() {
    const { classes } = this.props;
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
            {
              customers.map(c => {
                return <Customer key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              })
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


