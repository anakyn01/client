import React,{Component}from 'react';
import $ from 'jquery';

class Jq extends Component {

    input_alert = (e) => {
        let input_val = $('#inputId').val();
        alert(input_val);
    }
    render() {
        return(
            <>
            <h2>[THIS IS Jquery]</h2>
            <input id="inputId" name="inputName"/>
            <button id="buttonId" onClick={e=>this.input_alert(e)}>
                jquery button
            </button>
            </>
        )
    }
}
export default Jq;