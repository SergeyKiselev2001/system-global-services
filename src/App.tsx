import React, { useState } from 'react';

import './styles/App/reset.css';
import classes from './styles/App/App.module.css';


// import { Navbar } from './components/--Navbar';
// import { TodoForm } from './components/--TodoForm';
// import { TodoList } from './components/--TodoList';


import { AboutUs } from './components/AboutUs';
import { Banner } from './components/Banner';
import { ContactUs } from './components/ContactUs';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Portfolio } from './components/Portfolio';


//import { todoType } from './interfaces/interfaces';



const App: React.FC = () => {

  // const [todos, setTodos] = useState<todoType[]>([]);

  // const addHandler = (title: string) => {

  //   let buffer: todoType = {
  //       title: title,
  //       id : 0
  //   }

  //   setTodos([...todos, buffer]);
  // }

  return (
    <div className={classes.app}>
      {/* <h1>HAHAHAHA</h1>
      <Navbar/>
      <TodoForm onAdd={addHandler}/>
      <TodoList todos={todos} /> */}

      <Header/>
      <Banner/>
      <Portfolio/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default App;
