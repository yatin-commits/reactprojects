import { useEffect, useState } from 'react';
import './App.css';
import Tours from './tours';
import Loading from './tours/loading';

function App() {
  const [loading,setLoading]=useState(true);
  const [tours,setTours]=useState([]);

  const fetchTours = async()=>
  { 
    setLoading(true);
    const response = await fetch(`https://www.course-api.com/react-tours-project`)
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
    // console.log(tours);
  };
  useEffect(()=>
  {
    fetchTours();

  },[])

  if(loading)return(
    <main><Loading/> </main>
)
  return (
    <>
    <main><Tours tours={tours}/></main>
    
    </>
  );
}

export default App;
