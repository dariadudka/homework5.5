import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCount } from './Redux/counterSlice';
import React from 'react';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import CatalogComponent from './components/CatalogComponent'
import BasketComponent from './components/BasketComponent'

import { debug } from 'console';
import { makeAutoObservable } from 'mobx';
import { observer } from "mobx-react"
import { difficultTimer } from './index';
import { Button } from 'react-bootstrap';


const AppComponent = observer(() => {

  const navigate = useNavigate();


  const handlerNavigate = (page : string) => {

    if (page == 'home') {
      navigate('/');
      return;
    }
    if(page == 'catalog'){
      navigate('catalog')
      return;
    }
    if(page == 'basket'){
      navigate('basket')
      return;
    }
  }
  

  return (
      <>
        <div className="App">
          Items in Basket: {difficultTimer.basket.length}
          <Button className='my-btn' onClick={() => handlerNavigate('home')}> Home </Button>
          <Button className='my-btn' onClick={() => handlerNavigate('catalog')}> Catalog </Button>
          <Button className='my-btn' onClick={() => handlerNavigate('basket')}> Basket </Button>
        </div>

        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="catalog" element={<CatalogComponent />} />
          <Route path="basket" element={<BasketComponent />} />
        </Routes>
      </>
  );
});

export default AppComponent;
