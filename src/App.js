import React, { useEffect, useState } from 'react';
import './App.css';

import { getUserItems, deleteItem, addItem } from './api/db'
import TableCard from './components/TableCard'
import NavBar from './components/NavBar'
import AddItemCard from './components/AddItemCard'
import PredictionsCard from './components/PredictionsCard'
import AboutCard from './components/AboutCard'
import { Hub } from 'aws-amplify';
import { Grid } from '@material-ui/core'


function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetchData()

  }, [])

  async function fetchData() {
    setItems(await getUserItems())
  }
  
  Hub.listen('auth', (data) => {
    if (data.payload.event === 'signIn') {
      fetchData()
    }
  });

  return (
    <div className="app">
      <NavBar />
      
      <div className="content">
        <Grid container spacing={3}>
        
            <AboutCard 
              text = "This is an intelligent shopping list!"
              />
            
             <AddItemCard 
            addAction = {
              async (itemName) => {
                const response = await addItem(itemName)
                
                if (response){
                  setItems([...items, response])  
                }
                
              }
            }      />
            
            <PredictionsCard 
              addAction = {
                async (itemName) => {
                  const response = await addItem(itemName)
                
                  if (response){
                    setItems([...items, {
                      timestamp: new Date().getTime(),
                      itemName
                    }])
                  }
                }
              }
            />
            
           <TableCard 
              data={items}
              removeAction={async (id)=>{
                const response = await deleteItem(id)
                if (response) {
                  setItems(items.filter(item => item.id !== id))  
                }
              }}
            />
        </Grid>
      </div>
    </div>
  );
}

export default App;
