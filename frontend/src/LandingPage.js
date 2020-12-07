import React, { useState } from 'react'
import axios from 'axios'
import { Container, InputGroup, FormControl, Table, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import MapContainer from './GoogleMaps'

const LandingPage = () => {
  const [result, setResult] = useState({ target_Info: [] })
  const [detail, setDetail] = useState({
    type: 'type',
    lat: 'latl',
    lng: 'lng',
    city: 'city',
    lttud: 'lttud',
    country: 'country',
    airport_name: 'airport_name',
    iata: 'iata',
    icao: 'icao'
  })
  const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 })

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      axios.get('/api/search', {
        params: { search: e.target.value }
      })
        .catch((err) => console.log(err))
        .then((docs) => { setResult(docs.data) })
    }
  }

  const clickHandler = (e) => {
    for (let i = 0; i < result.target_Info.length; i++) {
      if (result.target_Info[i].id === Number(e.target.id)) {
        setDetail(result.target_Info[i])
        setCenter({
          lat: Number(result.target_Info[i].lat),
          lng: Number(result.target_Info[i].lng)
        })
      }
    }
  }

  const ResultTable = (props) => {
    if (result) {
      return (
        <Table striped bordered hover style={{ color: '#ffffff' }}>
          <thead>
            <tr>
              <th>Search Result</th>
            </tr>
          </thead>
          <tbody>
            {result.target_Info.map((item, index) => {
              return (<tr key={index}><td id={item.id} onClick={clickHandler}>{item.airport_name} <Badge variant="secondary">{item.id}</Badge></td></tr>)
            })}
          </tbody>
        </Table>
      )
    }
    else return null
  }

  return (
    <Container className='Landing'>
      <Container className="searcher">
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            type="text"
            placeholder="Keywords you want to find?"
            name="search" onKeyPress={keyHandler} />
        </InputGroup>
        <ResultTable></ResultTable>
      </Container>
      <div className="result">
        <h1>{detail.airport_name}</h1>
        <p>{detail.country},<br />{detail.city}</p>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <td>Type</td>
              <td>IATA Code</td>
              <td>ICAO Code</td>
              <td>Altitude</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detail.type}</td>
              <td>{detail.iata}</td>
              <td>{detail.icao}</td>
              <td>{detail.lttud}</td>
            </tr>
          </tbody>
        </Table>
        <MapContainer center={center}/>
      </div>
    </Container>
  );
}

export default LandingPage;
