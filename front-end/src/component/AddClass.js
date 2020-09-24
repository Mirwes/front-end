import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';





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





const AddFitnessClass = () => {

    const initialState = {
        name: "",
        type: "",
        intensity: "",
        max_clients: "",
        day: "",
        start_time: "",
        duration: "",
        location: "",
        instructorId: ""
    }

    const [fitClass, setFitClass] = useState(initialState)
    // const [error, setErrors] = useState(initialState)
    const [post ,setPost] = useState([])


    const handleChanges = (event) => {
        const newFormData = {
            ...fitClass, 
            [event.target.name] : event.target.value
        }
        setFitClass(newFormData);
    }

    function submitForm (event) {
        event.preventDefault()
        console.log(fitClass)
        const token = localStorage.getItem("token");
        console.log(token);
        axios
        .post('https://anytime-fitness-database.herokuapp.com/api/fitness/instructors/:instructorId/classes',
             fitClass, {headers: {
            Authorization: token}
        })
        
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <WrapperDiv>
            <h1>Add a Class</h1>
            <StyledForm onSubmit= {submitForm}>
            <StyledLabel htmlFor='name'>Class Name: 
                    <StyledInput 
                        id='name'
                        type='text'
                        name='name'
                        onChange={handleChanges}
                        value={fitClass.name}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='type'>Type: 
                    <StyledInput 
                        id='type'
                        type='text'
                        name='type'
                        onChange={handleChanges}
                        value={fitClass.type}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='intensity'>Intensity Level: 
                    <StyledInput 
                        id='intensity'
                        type='number'
                        name='intensity'
                        onChange={handleChanges}
                        value={fitClass.intensity}
                    /><br />
                    </StyledLabel>
                    <StyledLabel htmlFor='start_time'>Start Time: 
                    <StyledInput 
                        id='start_time'
                        type='text'
                        name='start_time'
                        onChange={handleChanges}
                        value={fitClass.start_time}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='max_clients'>Max Clients: 
                    <StyledInput 
                        id='max_clients'
                        type='number'
                        name='max_clients'
                        onChange={handleChanges}
                        value={fitClass.max_clients}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='day'>Class Day: 
                    <StyledInput 
                        id='day'
                        type='textarea'
                        name='day'
                        onChange={handleChanges}
                        value={fitClass.day}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='duration'>Class Duration: 
                    <StyledInput 
                        id='duration'
                        type='text'
                        name='duration'
                        onChange={handleChanges}
                        value={fitClass.duration}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='location'>Location: 
                    <StyledInput 
                        id='location'
                        type='text'
                        name='location'
                        onChange={handleChanges}
                        value={fitClass.location}
                    />
                    </StyledLabel>
                    <StyledLabel htmlFor='instructorId'>Instructor ID: 
                    <StyledInput 
                        id='instructorId'
                        type='number'
                        name='instructorId'
                        onChange={handleChanges}
                        value={fitClass.instructorId}
                    />
                    </StyledLabel>


                    
                <pre>{JSON.stringify(post, null, 2)}</pre>
                <button type='submit'>Add Class</button>
            </StyledForm>
        </WrapperDiv>
    )
                        
}

export default AddFitnessClass;