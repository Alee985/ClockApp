import React from 'react';
class Formt extends React.Component{
    constructor(props){
        super(props);
        this.state={value:""};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        this.setState({value:event.target.value})
    }
    handleSubmit(event){
        alert("You have typed " + this.state.value);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>   
                 Enter your name
                 <input type="text" value={this.state.value} onChange={this.handleChange} />   
                </form>
                <input type="submit" value="Submit"/>

            </div>
        );
    };
}
export default Formt;