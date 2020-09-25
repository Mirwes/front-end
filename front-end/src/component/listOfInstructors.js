import React, { useEffect, useState } from 'react';
import axios from 'axios';


function ListOfInstructors() {
    // const [isLoaded, setIsLoaded] = useState(false);
    const [instructor, setInstructors] = useState([]);
    // const [error, setError] = useState(null);

    useEffect(async () => {
        const response = await axios("http://hp-api.herokuapp.com/api/characters",
        );
           setInstructors(response.data);
    }, [])



    return(
        <div>
            <h1>Our current instructors</h1>
            <ul>
                {instructor.map(item => (
                    <li key={item.dateOfBirth}>
                        {item.name} 
                    </li>
                ))}
            </ul>
            {/* {console.log(instructor)} */}
             {/* {instructor.map(teacher => {
                return(
                <ul>
                    <li>{teacher}</li>
                </ul>
                )
            })} */}
        </div>
    )    
}

export default ListOfInstructors;
