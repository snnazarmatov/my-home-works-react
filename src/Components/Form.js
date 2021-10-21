import React, { useState } from 'react';
import "./Form.css";

function Form(props){
    const [name, setName] = useState('')
    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    function NameChangeHandler(e){
        setName(e.target.value)
    }
    function TextChangeHandler(e){
        setText(e.target.value)
    }
    function DateChangeHandler(e){
        setDate(e.target.value)
    }
    function Submitchik(e){
        e.preventDefault();
        let data = {
            name: name,
            comment: text,
            date: date
        }
        props.add(data)
        setDate('')
        setName('')
        setText('')
    }
    return(
        
        <form className="form-container" onSubmit={() => {Submitchik()}}>
            
            <div className="input-container">
                <p>Name</p>
                <input type='text' onChange={(e) => NameChangeHandler(e)} value={name}/>
        <div className="input-container">
                <p>text</p>
                <input type='text' onChange={(e) => TextChangeHandler(e)} value={text}/>
            </div>
        <div className="input-container">

                <p>Date</p>
                <input type='date' onChange={(e) => DateChangeHandler(e)} value={date}/>
            </div>
            <div className="button-container">
            <button className="button" type='submit' onClick={(e) => {Submitchik(e)}}>add</button>
        </div>
        </div>
        </form>
    )
}
export default Form