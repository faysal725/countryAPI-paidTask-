import logo from './logo.svg';
import './App.css';
import Search from './Components/Search/Search';
import CountryData from './Components/CountryData/CountryData';
import countryImg from './Components/Image/map-of-the-world-gadc439d09_1920.jpg'
import { useState } from 'react';
import axios from 'axios';
import SearchedData from './Components/SearchedData/SearchedData';

function App() {
  const [countryData, setCountryData] = useState()
  const  [selectedData, setSelectedData] = useState()



  if (countryData === undefined) {
    axios.get(`https://restcountries.com/v3.1/all`)
  .then(res => {
    const country = res.data;
    setCountryData(country);
  })
  }

  
  return (
    <div>
      <div  className="background">
        <div class="headerText">
          <h1>Country API</h1>
          <h3>Choose your preffered country</h3>
        </div>
      </div>
      <div className="container">
        
          
          
          {/* search section */}
          <div className="text-center p-5">
            
            
            {(() => {

            if (countryData !== undefined) {
            return <Search cd={countryData} sd={setSelectedData}></Search>;
            }

            return <Search></Search>
            })()}


          </div>

          {/* Country data  */}
          <div className="container">
              <div class="row d-flex justify-content-between">
              

                {(() => {

                if (countryData !== undefined && selectedData === undefined) {
                return countryData.map(cd => <CountryData key={Math.random()} sd={selectedData}  cdata={cd}></CountryData>) 
                ;
                } 
                else if (selectedData !== undefined) {
                  return <SearchedData sd={selectedData} cdata={countryData}></SearchedData>
                  
                }

                return <h1>Data not found</h1>
                })()}



            
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
