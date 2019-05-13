import React,{useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import { async } from 'q';

function Item({match}) {

  useEffect(() => {
    pegarItem();
  },[]);

  const [item, setItem] =  useState({
      images: {}
  });

  const pegarItem = async () =>{
      const dataItem = await fetch(
          `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`
      );
      const item = await dataItem.json();
      console.log(item);
      setItem(item);  
  }

  return (
    <div >
      <h1>{item.name}</h1>
      <img src={item.images.transparent}/>
    </div>
  );
}

export default Item;
