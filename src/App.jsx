import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";

import { useState, useEffect } from "react";
import axios from "axios";
import Alienlist from "./component/Alienlist";
import Main from "./component/Main";

function App() {
  // using useState to store fetched data from opensea api into an array
  const [alienListData, setAlienListData] = useState([]);

  const [selectedAlien, setSelectedAlien] = useState(0);

  // when page mounts nfts will get fetched from opensea api
  useEffect(() => {
    async function getMyNfts() {
      // fetching data here
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x48F6e220CD244d881B021F49415f60Dd9D683C18&order_direction=asc"
      );
      // setting useState hook from the default empty array and filling in setstate to data fetched from api here
      const sortedAlienList = openseaData.data.assets
    
      setAlienListData(sortedAlienList.sort((a,b) => a.id - b.id));
      // console.log((openseaData.data.assets).sort((a,b) => a.id - b.id));
      
    }
    getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {alienListData.length > 0 && (
        <>
          <Main alienListData={alienListData} selectedAlien={selectedAlien}/>
          <Alienlist
            alienListData={alienListData}
            setSelectedAlien={setSelectedAlien}
          />
        </>
      )}
    </div>
  );
}

export default App;
