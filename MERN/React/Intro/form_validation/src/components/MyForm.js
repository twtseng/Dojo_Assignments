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
    let error = null;
    switch(action.type) {
        case "first_name":
            if (action.payload.length < 3) {
                error = "First Name must be at least 3 chars";
            }
        break;
        case "last_name":
            if (action.payload.length < 4) {
                error = "Last Name must be at least 4 chars";
            }
        break;    
        case "email":
            if (action.payload.length < 5) {
                error = "email must be at least 5 chars";
            }
        break;
        default:
            break;
    }
    return {
        ...state,
        [action.type]: { value: action.payload, error: error}
    };
}
const MyForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <form>
            <div>
                <label>First Name</label>
                <input type="text" name="first_name" id="first_name" onChange={e => dispatch({type: 'first_name', payload: e.target.value })} />
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
                <input type="text" name="last_name" id="last_name" onChange={e => dispatch({type: 'last_name', payload: e.target.value })}/>
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
                <input type="text" name="email" id="email" onChange={e => dispatch({type: 'email', payload: e.target.value })}/>
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
