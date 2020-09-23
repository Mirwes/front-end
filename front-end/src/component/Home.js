import React from 'react';
import '../App.css';
import Cards from './Cards';
import Footer from './Footer';
// import Home2 from '../2ndComponent/Home2';

function Home () {
    return (
        <>

        <div className="class_search">
           
           <Cards />
           <Footer />
           {/* <Home2 /> */}
        </div>
        </>
    );
}

export default Home;