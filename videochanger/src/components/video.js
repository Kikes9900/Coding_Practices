import React from "react";

class Video extends React.Component{
    render(){
        return(
            <div>
                <video controls autostart autoPlay muted src={this.props.src}></video>
            </div>
        )
    }
}

export default Video