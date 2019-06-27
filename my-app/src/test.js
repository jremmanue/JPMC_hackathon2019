import React from 'react'

class Overlay extends React.Component{
    hideOverlay = function(e){
        document.getElementById("overlay").style.display = "none";
        document.getElementById("navbar").style.display="block";
    }
    render(){
        return(
            <div>
                <div id="overlay" onClick={this.hideOverlay}>
                    <img id="overlay_pic" src={require("./logo.png")}></img>
                    <div id="text">Click to Enter!</div>
                </div>     
            </div>
        )
    }
    
}

export default Overlay
