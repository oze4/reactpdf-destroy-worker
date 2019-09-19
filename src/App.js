import React from 'react';
import MyPDF from './MyPDF';
import './styles.css';

class App extends React.Component {
  state = {
    show: false,
    message: "",
  }

  handleClick = event => {
    let s = this.state.show;
    let m = s
      ? "Worker has been destroyed - the worker in your browsers task manager should now be gone"
      : "Worker has been created - you should be able to see a worker in your browsers task manager";

    this.setState({
      show: !s,
      message: m,
    });
  }

  render() {
    const { show } = this.state;
    const btnClass = show ? "btn r" : "btn g";
    const liClass = show ? "gt" : "rt";

    return (
      <div>
        <button className={btnClass} onClick={this.handleClick}>
          {show ? 'Destroy Worker' : 'Show PDF'}
        </button>
        <ul>
          {
            this.state.message &&
            <>
              <li className={liClass}>{this.state.message}</li>
              <li><i>You may need to refresh your browsers task manager to see these changes!</i></li>
            </>
          }
        </ul>
        {show ? <MyPDF /> : ""}
      </div>
    );
  }
}

export default App;
