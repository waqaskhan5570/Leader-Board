import React, {Component} from 'react';
import './student.css'

class Student extends Component{

    constructor(){
        super();
        this.state ={
            score : 0,
            success :false,
            failure : false
        }
    }

    componentDidMount(){
        this.setState({
            score: this.props.score
        });
    }

    addScore(){
        this.setState({
            score : this.state.score + 1 
        } ,
        () => {
            if (this.state.score >= 350){
                this.setState({success : true})
            }
        }
        
        )
        
    }

    subtractScore(){
        this.setState({
            score : this.state.score -1

        }, 
        () => {
            if (this.state.score <=330){
                this.setState({ failure  :true} )
            }
        }
        )
    }

    render(){

        const isSuccess = this.state.success;
        let text;
        if(isSuccess){
            text = <span id="successSpan">Success</span> 
        }
        else{
            
        }

        const isFailure  =this.state.failure;
        let failureText;
        if(isFailure){
            failureText = <span id="failureSpan"> Failed</span> 
        }
        else{

        }

        return(
            <div className="student"> 
                <div className="left">
                <h2 className="studentName">
                    {this.props.name}
                    <button className="scoreButton addbtn" onClick={() => this.addScore()} >+</button> 
                    <button className="scoreButton subtractbtn" onClick={() => this.subtractScore()} >-</button> 
                    </h2> 
                <p className="universityName">{this.props.university}{text}{failureText}</p>
                </div> 

                <div className="right"> 
                    <div className="score">{this.state.score}</div> 
                </div>
            </div>

        );
    }
}

export default Student; 