import React, { useState } from 'react';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameAlert, setFirstNameAlert] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameAlert, setLastNameAlert] = useState("");
    const [email, setEmail] = useState("");
    const [emailAlert, setEmailAlert] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAlert, setPasswordAlert] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordAlert, setConfirmPasswordAlert] = useState("");

    const validateFirstName = (e) => {
        let firstName = e.target.value;
        if (firstName.length < 3) {
            setFirstNameAlert("First name must be at least 3 chars");
            setFirstName("");
        } else {
            setFirstNameAlert("");
            setFirstName(firstName);
        }
    }
    const validateLastName = (e) => {
        let inputval = e.target.value;
        if (inputval.length < 3) {
            setLastNameAlert("Last name must be at least 3 chars");
            setLastName("");
        } else {
            setLastNameAlert("");
            setLastName(inputval);
        }
    }
    const validateEmail = (e) => {
        let inputval = e.target.value;
        if (inputval.length < 6) {
            setEmailAlert("Last name must be at least 6 chars");
            setEmail("");
        } else {
            setEmailAlert("");
            setEmail(inputval);
        }
    }
    const validatePassword = (e) => {
        let inputval = e.target.value;
        if (inputval.length < 8) {
            setPasswordAlert("Password must be at least 8 chars");
            setPassword("");
        } else {
            setPasswordAlert("");
            setPassword(inputval);
        }
    }
    const validateConfirmPassword = (e) => {
        let inputval = e.target.value;
        if (inputval !== password) {
            setConfirmPasswordAlert("Passwords do not match");
            setConfirmPassword("");
        } else {
            setConfirmPasswordAlert("");
            setConfirmPassword(inputval);
        }
    }
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input name="first_name" id="first_name" onChange={ validateFirstName }/>
                </div>
                { 
                    firstNameAlert !== "" ?
                    <div style={{color: "red"}}>{firstNameAlert}</div> :
                    <div />
                }
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input name="last_name" id="last_name" onChange={ validateLastName } />
                </div>
                {
                    lastNameAlert !== "" ?
                    <div style={{color: "red"}}>{lastNameAlert}</div> :
                    <div />
                }
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" onChange={ validateEmail } />
                </div>
                { 
                    emailAlert !== "" ?
                    <div style={{color: "red"}}>{emailAlert}</div> :
                    <div />
                }                
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={ validatePassword } />
                </div>
                { 
                    passwordAlert !== "" ?
                    <div style={{color: "red"}}>{passwordAlert}</div> :
                    <div />
                }
                <div>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input type="password" name="confirm_password" id="confirm_password" onChange={ validateConfirmPassword } />
                </div>
                { 
                    confirmPasswordAlert !== "" ?
                    <div style={{color: "red"}}>{confirmPasswordAlert}</div> :
                    <div />
                }                
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