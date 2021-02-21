import React, { useState, useEffect } from "react";
import axios from "axios";
import Show from "./components/show";
import Search from "./components/search";
import "./App.css";
import SearchData from "./searchdata";
function App() {
  const [data, setdata] = useState([]);
  const [seachdata, setseachdata] = useState([]);
  const [clientId, setclientId] = useState(
    "dPngNhVJqOhneKOlQJoAoZTlWEVdvLgI_iaIlraLI7A"
  );

  useEffect(() => {
    const url = "https://api.unsplash.com/photos?page=1&client_id=" + clientId;
    axios.get(url).then((res) => setdata(res));
  }, []);
  const onSearch = (d) => {
    setseachdata(d);
  };


  return (
    <div className="App">
      <div className="navi">
        <p className="logo">Image Gallery</p>
      </div>
      <div className="middle">
        <div className="search">
          <Search id={clientId} se={(d) => onSearch(d)} />
        </div>
        { seachdata.length > 0 &&  seachdata!= undefined ? (
          <div className="show">
            <SearchData photo={seachdata} />
          </div>
        ) : (
          <div className="show">
            {data != undefined ? <Show photo={data} id = {clientId}/>: null }
            
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
