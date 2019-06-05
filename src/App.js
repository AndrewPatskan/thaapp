import React, { Component } from 'react';
import sonic from './sonic.png';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.jump = this.jump.bind(this);
    this.goright = this.goright.bind(this);
    this.goleft = this.goleft.bind(this);
    this.infinity = this.infinity.bind(this);
    this.state = {
      pos: 0,
      backpos: 0
    }
  };
  infinity(){
    setInterval(move,50);
    let backk = 0;
    function move(){
          backk -=10;
          const imagge = document.getElementById('road');
          imagge.style.backgroundPosition = backk + 'px';
    }
  }
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
          if(pos>=900){
            this.setState({pos: 0});
          }
          let backk = this.state.backpos;
          backk -=50;
          const imagge = document.getElementById('road');
          imagge.style.backgroundPosition = backk + 'px';
          this.setState({backpos: this.state.backpos - 50});
  }

  goleft(){
    let pos = this.state.pos;
    const box = document.getElementById('son');
      pos-=10;
      box.style.left = pos + 'px';
      this.setState({pos: this.state.pos - 10});
      if(pos===10){
        this.setState({pos: 0});
      }
      let backk = this.state.backpos;
      backk +=100;
      const imagge = document.getElementById('road');
      imagge.style.backgroundPosition = backk + 'px';
      this.setState({backpos: this.state.backpos + 100});
  }

  render() {
    return (
      <div id='container'>
        <div className="App" id='road'>
            <img src={sonic} className="App-logo" id='son' alt="logo" />
        </div>
        <button id='btn' onClick={this.jump} >jump</button>
        <button id='btn' onClick={this.goright} >right</button>
        <button id='btn' onClick={this.goleft} >left</button>
        <button id='btn' onClick={this.infinity} >infinity run</button>
      </div>
    );
  }
}

export default App;
