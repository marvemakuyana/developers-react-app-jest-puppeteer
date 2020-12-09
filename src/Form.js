import React from 'react'

const Form = ( { add }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        let dev = new FormData(event.target)
        add({name: dev.get('name'), role: dev.get('role')})
        event.target.reset()
    }
    return (
        <form onSubmit={handleSubmit} id='devForm'>
            <span>Name: </span>
            <input type='text' name='name' required />
            <span>Role: </span>
            <input type='text' name='role' /><br />
            <input class='submit' type='submit' value='Add Developer' required />
        </form>
    )
}

export default Form;