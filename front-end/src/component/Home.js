import React from 'react';
import '../App.css';
import Cards from './Cards';
import Footer from './Footer';
import { Link } from 'react-router-dom';


function Home () {
    return (
        <>

        <div className="class_search">
           
           <Cards />
           <Footer />
           <Link to='/clientsignup'>
                <button>Client Sign-Up</button>
           </Link>
           <Link to='/instructorsignup'>
                <button>Instructor Sign-Up</button>
           </Link>
        </div>
        </>
    );
}

export default Home;