import logo from './logo.svg';
import './App.css';
const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

function App2() {
  if (user!=null) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

export default App2;
