import React, { Component } from 'react';
import sonic from './sonic.png';
import './App.css';
import KeyHandler, { KEYPRESS } from 'react-key-handler';

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
  componentDidMount(){
    const mess = document.createElement('h7');
      const node = document.createTextNode('I\'m Fonic, Sonic\'s retarded brother');
      mess.appendChild(node);
      const div = document.getElementById('road');
      div.appendChild(mess);
      setTimeout(diss,5000);
      function diss(){
        div.removeChild(mess);
      }
  }
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
          <img src={sonic} className="fonic" id='son' alt="fonic" />
        </div>
        <h7>jump (w)</h7>
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue = 'w'
          onKeyHandle={this.jump}
        />
        <h7>right/nitro (d)</h7>
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue = 'd'
          onKeyHandle={this.goright}
        />
        <h7>left/nitro (a)</h7>
        <KeyHandler
          keyEventName={KEYPRESS}
          keyValue = 'a'
          onKeyHandle={this.goleft}
        />
        <button id='btn' onClick={this.infinity} >infinity run</button>
      </div>
    );
  }
}

export default App;
