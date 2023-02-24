import { useEffect, useState } from 'react';
import './App.css';
import { Table, List } from './components';
import { UserInterface } from './types';

function App() {
  const [loader, setLoader]= useState<boolean>(false);
  const [users, setUsers]= useState<UserInterface[]>([]);
  const [listValue, setListValue]= useState<UserInterface[]>([]);

  useEffect(()=>{
    setLoader(true)
    getTableData().then(res=>{
      setUsers(res); 
      setLoader(false);
    }).catch(err=>{
      console.error("Error ",err);
      setLoader(false);
    });
  },[])

  const getTableData=async ()=>{
    return await fetch("https://63ef74474d5eb64db0c9ad89.mockapi.io/users")
    .then((response) => response.json());
  }

  return (
  <div className='container'>
   
    {loader ? <div className={"spinner"}></div>
      :<>
        <Table data={users} /> 
        <br />
        <button onClick={()=>{
          setListValue([...users]);
          }}> Submit
        </button>
        <br />
        {listValue.length >0 && <List props={users} /> }
      </>}
   </div>
  );
}

export default App;
