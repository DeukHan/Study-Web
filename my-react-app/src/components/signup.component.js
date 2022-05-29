import React, { Component, useState } from 'react'

function SignUp (){

    const [ID, setID] = useState(" ")
    const [Password, setPassword] = useState(" ")
    const [Name, setName] = useState(" ")
    const [ConfirmPassword, setConfirmPassword] = useState(" ")

    const onIDHandler = (event) => {
        console.log('ID : ', event.currentTarget.value);
        setID(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        console.log('Name : ', event.currentTarget.value);
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        console.log('Password : ', event.currentTarget.value);
        setPassword(event.currentTarget.value)
    }
    const onConfirmPasswordHandler = (event) => {
        console.log('Confirm Password : ', event.currentTarget.value);
        setConfirmPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log('ID : ', ID);
        console.log('Password : ', Password);

        if(Password !== ConfirmPassword){
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body={
            ID: ID,
            password: Password,
            name: Name
        }
    }

    return (
        <form onSubmit={onSubmitHandler}>
        <h3>Sign Up</h3>
        <div className="mb-3">
            <label>Name</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="Enter name"
            onChange={onNameHandler}
             />
        </div>
        <div className="mb-3">
            <label>ID</label>
            <input
            type="text"
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
            <label>Confirm Password</label>
            <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={onConfirmPasswordHandler}
            />
        </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-primary">
            Sign Up
            </button>
        </div>
        <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
        </p>
        </form>
    )
}

export default SignUp;