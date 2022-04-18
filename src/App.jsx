import { useEffect, useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import axios from 'axios'
function App() {
  const [toggle,setToggle]=useState(true);
  const [data,setData]=useState([]);
  useEffect(()=>{
    getData();
  },[])
  const sorting =(e)=>{
    console.log(e.target.innerText)
  }
  const getData=()=>{
       axios.get('http://localhost:8080/students')
    .then((res)=>{
      // console.log("res",res)
      setData(res.data);
      // console.log(res.data);
    })
    .catch((err)=>{onsole.log(err.message)})
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={()=>{
        setToggle(toggle?false:true);
      }}>{toggle?"Add Student":"ShowStudents"}</button>
      {toggle?
      <ShowStudents data={data}/>:
      <AddStudent/>}
      
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
