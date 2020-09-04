import React, { useReducer } from 'react';

const initialState = {
    first_name: {
        value: '',
        error: null,
    },
    last_name:  {
        value: '',
        error: null,
    },
    email:  {
        value: '',
        error: null,
    },
}

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}
const MyForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleChange(e) {
        const { name, value } = e.target;
        let error = null;
        switch(name) {
            case "first_name":
                if (value.length < 2) {
                    error = "First Name must be at least 2 chars";
                }
            break;
            case "last_name":
                if (value.length < 3) {
                    error = "Last Name must be at least 3 chars";
                }
            break;    
            case "email":
                if (value.length < 4) {
                    error = "email must be at least 4 chars";
                }
            break;
            default:
                break;
        }
        dispatch({
            type: name,
            payload: { value: value, error: error }
        });
    }
    return (
        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="first_name" id="first_name" onChange={handleChange} />
                {
                    state.first_name.error != null 
                    ?
                    <span style={{color: 'red'}}>{state.first_name.error}</span>
                    :
                    ''
                }
            </div>
            <div>
                <label>Last Name</label>
                <input type="text" name="last_name" id="last_name" onChange={handleChange}/>
                {
                    state.last_name.error != null 
                    ?
                    <span style={{color: 'red'}}>{state.last_name.error}</span>
                    :
                    ''
                }
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email" id="email" onChange={handleChange}/>
                {
                    state.email.error != null 
                    ?
                    <span style={{color: 'red'}}>{state.email.error}</span>
                    :
                    ''
                }
            </div>
        </form>
    )
}

export default MyForm
