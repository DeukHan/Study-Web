import React, { Component, useState } from 'react'

function Login (){
    const [ID, setID] = useState(" ")
    const [Password, setPassword] = useState(" ")

    const onIDHandler = (event) => {
        console.log('ID : ', event.currentTarget.value);
        setID(event.currentTarget.value)
    }
    
    const onPasswordHandler = (event) => {
        console.log('Password : ', event.currentTarget.value);
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log('ID', ID);
        console.log('Password', Password);


        let body={
            ID: ID,
            password: Password
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
        <h3>Sign In</h3>
        <div className="mb-3">
            <label>ID</label>
            <input
            type="ID"
            className="form-control"
            placeholder="Enter ID"
            onChange={onIDHandler}
            />
        </div>
        <div className="mb-3">
            <label>Password</label>
            <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={onPasswordHandler}
            />
        </div>
        <div className="mb-3">
            <div className="custom-control custom-checkbox">
            <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
            </label>
            </div>
        </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
        </div>
        <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
        </p>
        </form>
    )
}

export default Login;