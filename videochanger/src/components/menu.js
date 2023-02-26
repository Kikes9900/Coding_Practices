import React from "react";
import "./menu.css"

class Menu extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        let text = e.target.value;
        this.props.chooseVideo(text);
    }
    render() {
        return(
                <form onClick={this.handleClick} className="menu">
                    <input type="radio" value="Nature" name="src"/>Nature
                    <input type="radio" value="Sky" name="src"/>Sky
                    <input type="radio" value="City" name="src"/>City
                </form>
        )
    }
}
export default Menu