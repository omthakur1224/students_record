import {nanoid} from 'nanoid'
import { useState } from "react";
export const ShowStudents = ({data}) => {
  const [handleSort,setHandleSort]=useState({
    sortBy:"",
    order:""
  })
  const handleChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <div className="controls">
        <div  onChange={handleChange}>
          Sort By:{" "}
          <select
           
            id="sortBy"
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div  onChange={handleChange}>
          Order:
          <select
           
            id="order"
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
        {data.map((e)=>
           <tr className="row" key={nanoid()}>
           <td className="first_name">{e.first_name}</td>
           <td className="last_name">{e.last_name}</td>
           <td className="email">{e.email}</td>
           <td className="gender">{e.gender}</td>
           <td className="age">{e.age}</td>
           <td className="tenth_score">{e.tenth_score}</td>
           <td className="twelth_score">{e.twelth_score}</td>
           <td className="preferred_branch">{e.preffered_branch}</td>
         </tr>
        )}
          {/* populate all rows like below: */}
         
        </tbody>
      </table>
    </div>
  );
};
