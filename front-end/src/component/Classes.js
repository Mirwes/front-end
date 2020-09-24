import React from 'react';
import axios from 'axios';

// Get axios call for classes using .map
axios
    .get('https://anytime-fitness-database.herokuapp.com/api/fitness/classes')
    .then(response => {
        console.log(response.data)
        response.data.map()
    })
    .catch(error => {
        console.log(error)
    })
// Sort classes into other components
// if (class_name === 'Zumba') {
//    <Zumba {class} />
//  } else if {
//(class_name === 'Boxing)
//<Boxing {class} />
//

const Classes = () => {
return (
    <h1>Classes</h1>
    )
}

export default Classes;