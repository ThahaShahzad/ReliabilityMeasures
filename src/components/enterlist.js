import React, { useState, useEffect } from 'react'
import axois from 'axios'



function Enterlist() {
    const [newItem, setNewItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [std, setstd] = useState([]);


    const handleSubmit = e => {
      e.preventDefault();
      if (!itemList) return;
      setItemList([...itemList, parseInt(newItem)]);
      setNewItem("");
    };
    let userlist = {elements: itemList};

    useEffect(()=>{
        axois.get('http://127.0.0.1:5000/')
        .then(res => {
            console.log(res)
            setstd(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    return (
      <div>
        {itemList.map(item => (
          <div>{ }</div>
        ))}
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            value={newItem}
            placeholder="Enter list"
            onChange={e => setNewItem(e.target.value)}
          />
        </form>
        <div>{JSON.stringify(userlist)}</div>
        <div>
            {std.map(std =>(
                <li key={std.id}>{std.title}</li>
            ))}
        </div>
      </div>
    );  
  }

  export default Enterlist