import React from "react"

class Profile extends React.Component{
    constructor(){
        super()
        this.state={
          fullName: "Skander Hammami",
          bio : "Lorem",
          imgSRC:"htttps:xxxxxxxx",
          profession : "Student",
          
        }
      }


    render() {
        return(

            <div>
                      <ul>
                          <li>{this.state.fullName}</li>
                          <li>{this.state.bio}</li>
                          <li>{this.state.imgSRC}</li>
                          <li>{this.state.profession}</li>
                      
                      
                      </ul>
            </div>
        )
    }
} 

export default Profile