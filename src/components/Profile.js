import React, { Component } from 'react';


export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            intervall:null,
        }
    }


        componentDidMount(){
            this.setState({
            intervall:setInterval(()=>{
                this.setState({
                count:this.state.count+1
                })
            },1000)
            })
        }
        componentWillUnmount(){
            clearInterval(this.state.intervall)
    }
        componentDidUpdate(){
            console.log(this.state.count)
        }
    
    render() {
        const {fullName,bio,profession,imgSrc}=this.props
        const {count}=this.state
        return (
        <div>
        <img src={imgSrc} alt="iima" width="200px"/>
        <h1>{fullName}</h1>
        <h2> {bio}</h2>
        <h3>{profession}</h3>
        <h2 className="cnt">{count} </h2>
        </div>
        )
    }
}
