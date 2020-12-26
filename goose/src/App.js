import logo from './logo.svg';
import './App.css';
import { StyleSheet, StyleResolver } from 'style-sheet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
        className={StyleResolver.resolve([styles.rule])}
        //styles={[styles.rule]}
        >
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const styles = StyleSheet.create({
  rule: {
    display: 'block',
    backgroundColor: 'orange',
    color: 'green',
    '&:hover': {
    backgroundColor: 'red',
      color: 'white'
    }
  },
});

export default App;
