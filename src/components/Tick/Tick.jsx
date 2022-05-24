import React from 'react';
import styles from './styles.module.css';

class Tick extends React.Component {
    constructor (props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval( () => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({date: new Date()});
    }
  
    render() {
      return (
        <div className={styles.title}>
          <h1>The clock from class</h1>
          <h2>Now {this.state.date.toLocaleTimeString()}</h2>
        </div>
      )
    }
}

export default Tick;