import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

// const customer = {
//   'id' : 1,
//   'image' : 'https://placeimg.com/64/64/any',
//   'name' : '김중원',
//   'birthday' : '961222',
//   'gender' : '남자',
//   'job' : '대학생'
// }

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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" lat="logo"alt="logo" />
          <Customer
            id={customers[0].id}
            image={customers[0].image}
            name={customers[0].name}
            birthday={customers[0].birthday}
            gender={customers[0].gender}
            job={customers[0].job}
          />
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
        </header>

        
      </div>
    )
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer" >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


