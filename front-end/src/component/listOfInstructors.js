import React, { useState } from 'react';
import axios from 'axios';


const ListOfInstructors = () => {
    const [instructor, setInstructors] = useState()


    // axios
    //     .get('http://hp-api.herokuapp.com/api/characters')
    //     .then(response => {
    //         setInstructors(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })












    return(
        <div>
            <h1>Instructors</h1>
            {/* {instructor.map(teacher => {
                return(
                <ul>
                    <li>{teacher}</li>
                </ul>
                )
            })}
        </div> */}
    )    
}

export default ListOfInstructors;
