import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cars from './Cars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThermometerFull } from '@fortawesome/free-solid-svg-icons';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import busquedaCars from './BusquedaCars';



function ListaCars() {


  const [ciudades, setCiudades] = useState([]);
  const [carsUsuarios, setcarsUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [histotial, setHistorial] = useState([]);

  useEffect(() => {

    getCiudades();

  }, [])

  const handleChange = e => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar = (terminoBusqueda) => {
    let resultadosBusqueda = carsUsuarios.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        || elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setCiudades(resultadosBusqueda);
    console.log(resultadosBusqueda);
  }


  const getCiudades = async () => {

    // let url = "https://localhost:44362/api/tiempo" 
    // const data = await fetch(url)
    // const json = await data.json();
    // setCiudades(json);
    // setcarsUsuarios(json);
    // console.log(json);
    await axios.get("https://localhost:44362/api/tiempo")
      .then(Response => {

        setCiudades(Response.data);
        setcarsUsuarios(Response.data);

        console.log(Response.data);

      }).catch(error => {
        console.error();
      })

  }


  return (
    <div className="App">

      <div className="containerInput">
        <input
          className="form-control inputBuscar"
          value={busqueda}
          placeholder="Búsqueda por Nombre Ciudad"
          onChange={handleChange}

        />
        <br></br>
        {/* <button className="btn btn-primary">
          <FontAwesomeIcon title="Buscar" icon={faSearch} />
        </button> */}

      </div>

      {ciudades.map(cars =>

        <Cars Name={cars.name} Codigo={cars.codigo} Temp={cars.temp}
          Pressure={cars.pressure} Humidity={cars.humidity} Temp_min={cars.temp_min}
          Temp_max={cars.temp_max} Description={cars.description}

        ></Cars>

      )}

      <busquedaCars>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ciudad</TableCell>
                <TableCell align="right">Codigo</TableCell>
                <TableCell align="right">Humedad</TableCell>
                <TableCell align="right">Descripción</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ciudades.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.codigo}</TableCell>
                  <TableCell align="right">{row.humidity}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </busquedaCars>

    </div>

  );
}

export default ListaCars;
