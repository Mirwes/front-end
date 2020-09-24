import React from 'react';
import Navbar from './component/Navbar';
import Yoga from './component/Yoga';
import Home from './component/Home';
import Running from './component/Running';
import Boxing from './component/Boxing';
import Cardio from './component/Cardio';
import UserSignUp from './component/ClientSignUp';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> fe672e0fdc852bc5961406f8935a7be7667db24a
import AddFitnessClass from './component/AddClass';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import WeightLifting from './component/WeightLifting';
import Classes from './component/Classes'
=======
<<<<<<< HEAD
// import FitnessClass from './component/Add-Update';
=======
>>>>>>> fe672e0fdc852bc5961406f8935a7be7667db24a
import './App.css';
import WeightLifting from './component/WeightLifting';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

<<<<<<< HEAD
>>>>>>> 4ead518f4d17cb1d94e666ef8e061f35db4c88a6
=======
>>>>>>> fe672e0fdc852bc5961406f8935a7be7667db24a

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
      <Route path='/yoga' component={Yoga}/>
      <Route path='/weightlifting' component={WeightLifting} />
      <Route path='/running' component={Running}/>
      <Route path='/boxing' component={Boxing} />
      <Route path='/cardio' component={Cardio} />
      <Route path='/usersignup' component={UserSignUp}/>
<<<<<<< HEAD
<<<<<<< HEAD
      <Route path='/addclass' component={AddFitnessClass}/>
      <Route path='/classes' component={Classes}/>
=======
      {/* <Route path='/addclass' component={FitnessClass}/> */}
>>>>>>> 4ead518f4d17cb1d94e666ef8e061f35db4c88a6
=======
      <Route path='/addclass' component={AddFitnessClass}/>
      <Route path='/classes' component={Classes}/>

>>>>>>> fe672e0fdc852bc5961406f8935a7be7667db24a
      </Switch>
    </Router>
  );
}

export default App;
