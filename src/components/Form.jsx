import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const Form = props => {
    const {handleSubmit, onChangeHandler, myForm, errors} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Authors Name: </label>
                <input type="text" name="name" onChange={onChangeHandler} value={myForm.name}/>
                {
                    errors.name ? <span>{errors.name.message}</span> : ""
                }
                <input type="submit" value="+"/>
            </form>
        </div>
    );
}

export default Form;