import React, { useState, useEffect } from "react";
import { StyledDiv, SearchBarDiv, ItemDiv } from "./SearchbarStyles";
import { Link } from "react-router-dom";
import { jobs } from "../../utils/mockData";
import { useDispatch } from 'react-redux';
import { getTechUsersByJobAndZone } from '../../redux/actions/techUsers/index';
import axios from "axios";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
  const [provinces, setProvinces] = useState([])
  const [cities, setCities] = useState([])
  const dispatch = useDispatch()

  useEffect( async ()=> {
    const argCities = await getCities()
    setProvinces(argCities)
  },[])

  const handleChange = async (e) => {
     let departments = await axios.get(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${e.target.value}&campos=nombre&max=100`)
     departments = departments.data.localidades.map(e => e.nombre)
     console.log(departments)
     setCities(departments)
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  const handleClick = () => {
    dispatch(getTechUsersByJobAndZone(select, input));
    setInput("");
  };

  async function getCities(){
    let apiCities = await axios.get('https://apis.datos.gob.ar/georef/api/provincias')
    apiCities = apiCities.data.provincias.map(c => c.nombre)
    return apiCities
  }
 

  return (
    <StyledDiv>
      <SearchBarDiv>
        <ItemDiv>
          <p>¿Qué necesitas?</p>
          <select name="jobs" onChange={handleSelect}>
            <option value=""></option>
            {jobs.map((j, idx) => {
              return <option value={j} key={idx}>{j}</option>
            })}
          </select>
        </ItemDiv>
        <ItemDiv>
          <p>¿Dónde?</p>
          {/* {<input type="text" value={input} onChange={handleChange} />} */}

          <select onChange={handleChange} name="provincias" id="">
            <option value=""></option>
            {provinces && provinces.map((c, idx) => {
              return <option key={idx} value={c}>{c}</option>
            })}
          </select>

          { cities.length > 1 && <select name="departments" id="">
            {cities.map((d, idx) => {
              return <option key={idx} value={d}>{d}</option>
            })}
          </select>
          }

          <Link className="link" to="/home">
            <p onClick={handleClick}>Buscá!</p>
          </Link>
        </ItemDiv>
      </SearchBarDiv>
    </StyledDiv>
  );
};

export default Searchbar;
