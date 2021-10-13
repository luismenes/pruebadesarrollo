import './App.css';
// import React, { useState, useEffect } from 'react';
import ListaCars from './ListaCars';
import PageWrapper from './PageWrapper';
import Container from '@material-ui/core/Container'
import busquedaCars from './BusquedaCars';


function App() {


  return (
    <div className="App">

      <Container>
        <PageWrapper>

          <ListaCars></ListaCars>
          <busquedaCars></busquedaCars>

        </PageWrapper>


      </Container>

    </div>

  );
}

export default App;
