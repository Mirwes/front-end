import React from 'react';
import '../App.css';
import Cards from './Cards';
import Footer from './Footer';
import { Link } from 'react-router-dom';


function Home () {
    return (
        <>

        <div className="class_search">
            <Link to='/usersignup'>
                <button>Client Sign-Up</button>
           </Link>
           <Link to='/instructorsignup'>
                <button>Instructor Sign-Up</button>
           </Link>
           <Cards />
           <Footer />

        </div>
        </>
    );
}

export default Home;