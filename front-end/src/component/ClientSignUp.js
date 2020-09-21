import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
// import NamePhoneEmail from './NamePhoneEmail';



const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const StyledForm = styled.form`
    width: 50%;
    margin: 0 auto;
`

const StyledInput = styled.input`
    margin: 5px 0;
`

const StyledLabel = styled.label`
    display: block;
`





const ClientSignUp = () => {

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

    const [client, setClient] = useState(initialState)
    const [error, setErrors] = useState(initialState)

    const handleChanges = (event) => {
        const newStateObj = {...client, [event.target.name]:
            event.target.type === 'checkbox' ? event.target.checked : event.target.value }
        setClient(newStateObj)
        // console.log(newStateObj);
    }

    // function submitForm (event) {
    //     event.preventDefault()
        
    //     axios
    //     .post('https://reqres.in/api/users', client)
    //     .then(response => {
    //         setClient(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })

    //     setClient(initialState);
    // }



    return (
        <WrapperDiv>
            <h1>Client Sign-up Form</h1>
            <StyledForm onSubmit= ''>
            <StyledLabel htmlFor='first-name'>First Name: 
                    <StyledInput 
                        id='first-name'
                        type='text'
                        name='firstName'
                        onChange={handleChanges}
                        // value={}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='last-name'>Last Name: 
                    <StyledInput 
                        id='last-name'
                        type='text'
                        name='lastName'
                        onChange={handleChanges}
                        // value={}
                    />
                    </StyledLabel>

                    <StyledLabel htmlFor='phone-number'>Phone Number:
                    <StyledInput 
                        id='phone-number'
                        type='tel'
                        name='phoneNumber'
                        onChange={handleChanges}
                        // value={}
                    />
                    </StyledLabel>
                    
                        
                        {/* <StyledLabel htmlFor='mobile'>Mobile </StyledLabel>
                        <StyledInput 
                            id='mobile'
                            type='radio'
                            name='mobile'
                            onChange={handleChanges}
                            // value={}
                        />
                        <StyledLabel htmlFor='home'>Home </StyledLabel>
                        <StyledInput 
                            id='home'
                            type='radio'
                            name='home'
                            onChange={handleChanges}
                            // value={}
                        />
                        <StyledLabel htmlFor='business'>Business </StyledLabel>
                        <StyledInput 
                            id='business'
                            type='radio'
                            name='business'
                            onChange={handleChanges}
                            // value={}
                        /> */}

                    <StyledLabel htmlFor='email'>Email: 
                    <StyledInput 
                        id='email'
                        type='email'
                        name='email'
                        onChange={handleChanges}
                        // value={}
                    />
                    </StyledLabel>

                <h1>Billing Information</h1>
                <StyledLabel htmlFor='street-address'>Street Address: 
                <StyledInput 
                    id='street-address'
                    type='text'
                    name='address'
                    onChange={handleChanges}
                    // value={}
                /><br />
                </StyledLabel>
                <StyledLabel htmlFor='city'>City: 
                <StyledInput 
                    id='city'
                    type='text'
                    name='city'
                    onChange={handleChanges}
                    // value={}
                />
                </StyledLabel>
                <label htmlFor='state'>State: </label>
                <select id='state' name='state' onChange={handleChanges}>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select><br />
                <StyledLabel htmlFor='card-number'>Card Number: 
                <input 
                    id='card-number'
                    type='number'
                    name='state'
                    onChange={handleChanges}
                    // value={}
                /><br />
                </StyledLabel>
                <StyledLabel htmlFor='expiration-date'>Expiration Date: 
                <input 
                    id='expiration-date'
                    type='date'
                    name='expDate'
                    // max={new Date(year, month, day)}
                    onChange={handleChanges}
                    // value={}
                /><br />
                </StyledLabel>
                <div id='termsAndConditions'>
                    <StyledLabel htmlFor='terms-and-conditions'><p>Yes, I Accept the terms and conditions</p>
                    <input 
                        id='terms-and-conditions'
                        type='checkbox'
                        name='tAndC'
                        onChange={handleChanges}
                        // value={}
                    />
                    </StyledLabel>
                    
                </div>
                <button type='submit'>Sign Up</button>
            </StyledForm>
        </WrapperDiv>
    )

}

export default ClientSignUp;