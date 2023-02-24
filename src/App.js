import React, { Component } from 'react';
import "./App.css";
import Profile from './components/Profile';
import myImg from './hkcat.jpeg'


export default class App extends Component {
  constructor(){
    super()
    this.state={
      person:{
      fullName:"khouloud",
      bio:"FullStack JS",
      profession:"web Devloper",
      imgSrc : myImg ,
      
      
      },
      show : false

    }
  }
  handleClick=()=>{
    this.setState({
    show: !this.state.show
    })
}


  render() {
    const {fullName,bio,profession,imgSrc}=this.state.person
    
    return (
      <div className="App">
        {this.state.show?
        (<Profile
          fullName={fullName}
          bio={bio}
          profession={profession}
          imgSrc = {imgSrc}>
            </Profile>)
            :null}
        
        <button onClick={this.handleClick}>
          {this.state.show ? "hide profile" : "show profile"}
        </button>
        
        
      </div>
    )
  }
}

