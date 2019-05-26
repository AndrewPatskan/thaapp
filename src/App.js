import React, { Component } from 'react';
import sonic from './sonic.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.jump = this.jump.bind(this);
    this.goright = this.goright.bind(this);
    this.goleft = this.goleft.bind(this);
    this.state = {
      pos: 0
    }
  };
  jump(){
      const t = setInterval(move,10);
      let pos = 0;
      const box = document.getElementById('son');
      function move(){
        if(pos>=200){
          clearInterval(t);
        }
        else{
        pos+=10;
        box.style.top = pos + 'px';
        }
      }
    }
  goright(){
        let pos = this.state.pos;
        const box = document.getElementById('son');
          pos+=10;
          box.style.left = pos + 'px';
          this.setState({pos: this.state.pos + 10});
          if(pos>=1000){
            this.setState({pos: 0});
          }
  }

  goleft(){
    let pos = this.state.pos;
    const box = document.getElementById('son');
      pos-=10;
      box.style.left = pos + 'px';
      this.setState({pos: this.state.pos - 10});
      if(pos===0){
        this.setState({pos: 0});
      }
  }

  render() {
    return (
      <div id='container'>
        <div className="App">
            <img src={sonic} className="App-logo" id='son' alt="logo" />
        </div>
        <button id='btn' onClick={this.jump} >jump</button>
        <button id='btn' onClick={this.goright} >right</button>
        <button id='btn' onClick={this.goleft} >left</button>
      </div>
    );
  }
}

export default App;
