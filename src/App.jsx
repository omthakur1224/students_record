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
  const sorting =({sortBy,order})=>{
    // const {sortBy,order}=value;
    // console.log("by",sortBy,"order",order)
    if(sortBy==='gender' && order==='asc'){
      setData([...data.sort((a, b) => a.gender - b.gender)]);
    }
    
    if(sortBy==='age' && order==='asc'){
      setData([...data.sort((a, b) => a.age - b.age)]);
    }
    if(sortBy==='tenth_score' && order==='asc'){
      setData([...data.sort((a, b) => a.tenth_score - b.tenth_score)]);
    }
    if(sortBy==='twelth_score' && order==='asc'){
      setData([...data.sort((a, b) => a.twelth_score - b.twelth_score)]);
    }
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
      <ShowStudents data={data} sorting={sorting}/>:
      <AddStudent/>}
      
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
