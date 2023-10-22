import React from 'react';
class Profile extends React.Component {
    constructor(props){
        super(props);
         this.state = {
            userInfo:{
                name:"Dummy name",
                location:"Dummy location",
                company:"Dummy company",
            }
         }
    }


   async componentDidMount(){
       const data = await fetch("https://api.github.com/users/akshaymarch7");
       const json = await data.json();
       this.setState(
       { userInfo: json,}
       )
    }

    render() {
        return (
            <div>
                <h1>this is the class based component</h1>
                <img src ={this.state?.userInfo?.avatar_url}></img>
                <h3>Name. {this.state?.userInfo?.name}</h3>
                <h4 >Count:{this.state?.userInfo?.location}</h4>
                <h4 >Count:{this.state?.userInfo?.company}</h4>
                 
            </div>
        )
    }

}

export default Profile;