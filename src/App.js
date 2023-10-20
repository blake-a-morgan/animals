import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';

//function to get a random animal from an array of animals
function getRandomAnimal(){
    const animals = ['bird','cat','cow','dog','gator','horse'];
    return animals[Math.floor(Math.random() * animals.length)];
}

function App(){
    // const handleClick = () => {
    //     console.log('Button was clicked')
    // };
    //state for setting an array of animals
    const [animals,setAnimals] = useState([]);
    //when button is clicked the animals array is adding the new random animal selected from function above, and page is rerendering on the button click and displaying the new animal
    const handleClick = () => {
        setAnimals([...animals,getRandomAnimal()]);
        
    };
    // map array of random animals to a new list that will be used to render on the page from the AnimalShow component
    const renderedAnimals = animals.map((animal,index) => {
        return <AnimalShow type={animal} key={index} />

    });
//JSX
    return( 
    <div className="app">
        <button onClick={handleClick}>Add Animal!</button>
        <div className="animal-list"> {renderedAnimals} </div>
    </div>
    );
}

export default App;