import { useState, useEffect } from 'react'
import './App.css'
import Title from './Title'
import Input_box from './Input_box'

function App() {
  const LOCAL_STORAGE_KEY ="form";
  const[form,setForm] = useState( 
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? [])
  

  const Add_details =(forms)=>{
        console.log(forms);
        setForm({...form,forms});
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form));
  }, [form]);

  return (
   <div>
   
    <Title />
    <Input_box Add_details={Add_details}/>
   </div>
   
   
  );
}

export default App
