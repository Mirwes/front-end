import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import NamePhoneEmail from './NamePhoneEmail';



const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
`;

const StyledForm = styled.form`
    width: 25%;
    margin: 0 auto;
`

const StyledInput = styled.input`
    margin: 5px;
`

const StyledLabel = styled.label`
    display: block;
`



const InstructorSignUp = () => {

    const initialState = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        mobile: '',
        home: '',
        business: '',
        email: '',
        address: '',
        city: '',
        state: '',
        cardNumber: '',
        expirationDate: '',
        tAndC: ''
    }

    const [post, setPost] = useState([])
    const [instructor, setInstructor] = useState(initialState)
    const [error, setErrors] = useState(initialState)

    const handleChanges = (event) => {
        const newStateObj = {...instructor, [event.target.name]:
            event.target.type === 'checkbox' ? event.target.checked : event.target.value }
        setInstructor(newStateObj)
        // console.log(newStateObj);
    }

    function submitForm (event) {
        event.preventDefault()
        
        axios
        .post('https://reqres.in/api/users', instructor)
        .then(response => {
            setPost(response.data);
            setInstructor(initialState);
        })
        .catch(error => {
            console.log(error);
        })

        setInstructor(initialState);
    }



    return (
        <WrapperDiv>
            <h1>Instructor Sign-up Form</h1>
            <StyledForm onSubmit={submitForm}>
                    <StyledLabel htmlFor='first-name'>First Name:  
                    <StyledInput 
                        id='first-name'
                        type='text'
                        name='firstName'
                        onChange={handleChanges}
                        value={instructor.firstName}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='last-name'>Last Name: 
                    <StyledInput 
                        id='last-name'
                        type='text'
                        name='lastName'
                        onChange={handleChanges}
                        value={instructor.lastName}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='phone-number'>Phone Number: 
                    <StyledInput 
                        id='phone-number'
                        type='tel'
                        name='phoneNumber'
                        onChange={handleChanges}
                        value={instructor.phoneNumber}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='email'>Email: 
                    <StyledInput 
                        id='email'
                        type='email'
                        name='email'
                        onChange={handleChanges}
                        value={instructor.email}
                    />
                    </StyledLabel>
                    <button type='submit'>Sign Up</button>
                    <pre>{JSON.stringify(post, null, 2)}</pre>
            </StyledForm>
        </WrapperDiv>
    )
}

export default InstructorSignUp;
