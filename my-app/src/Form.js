import React from 'react';
import './Form.css'

class Form extends React.Component {
    validateText = function(e){
        var text = document.getElementById('noter-text-area')
        var sentence = text.value;
        if (sentence.length >= 180){
            e.preventDefault();
            alert('over text limit');
        }
    }
    formSubmit = function(e){
        alert('it works!');
        e.preventDefault();
    }
    render() {
        
        return (
            <div className="Form">
            <form id="noter-save-form" method="POST" onSubmit={this.formSubmit}>
                <textarea id="noter-text-area" name="textarea" value={this.props.name} onKeyPress={this.validateText}></textarea>
                <br></br>
                <input className="butn" type="submit" value="Calculate" />
            </form>
            </div>
        );
    }
}

export default Form;