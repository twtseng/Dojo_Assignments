import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input name="first_name" id="first_name" onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input name="last_name" id="last_name" onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" id="password" onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input name="confirm_password" id="confirm_password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                </div>
            </form>
            <div>
                <h1>Your form data</h1>
                <h2>First Name: {firstName}</h2>
                <h2>Last Name: {lastName}</h2>
                <h2>Email: {email}</h2>
                <h2>Password: {password}</h2>
                <h2>Confirm Password: {confirmPassword}</h2>
            </div>
        </div>
    );
}

export default Form;