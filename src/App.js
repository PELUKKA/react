import { BrowserRouter, Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import Galeria from "./pages/Galeria";
import Productos from "./pages/Productos";
import Layout from "./pages/Layout";
import Producto from "./pages/producto";
import "./App.css";
import { useEffect,useState } from "react";
import { db } from "./config/firebase";
import { collection }  from "firebase/firestore";
import { useEffect } from "react";
import {db} from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {

  return (
    <BrowserRouter>      
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="galeria"  element={<Galeria/>}/>
          <Route path="productos" element={<Productos/>}/>
          <Route path="productos/:productoId" element={<Producto/>}/>
          
          
        </Route>        
        <Route path="*" element={<h1>404 no encontrado</h1>} />
      </Routes>        
    </BrowserRouter>
    )
  
}

function App(){



  const itemsCollectionRef = collection(db, "Items");

  useEffect(()=>{
      const getItemList = async ()=>{

          const data = await getDocs(itemsCollectionRef);
          console.log(data);

          const filteredData = data.docs.map( (doc)=>({
              ...doc.data(),
              id:doc.id
          }))
  
          console.log(filteredData);
          
          
      }

      getItemList();
  }, [])

  return (
      <div>
      
        <div>
          <h1>App</h1>
          
          </div>
      </div>
  )
}


export default App;




