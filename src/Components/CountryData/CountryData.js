import React from 'react';
import { useState } from 'react/cjs/react.development';
import Modal from 'react-modal';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height: '600px',
      width: '500px',
      borderRadius: '8px',
      textAlign: 'center',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  Modal.setAppElement('#root');

  const CountryData = (props) => {
    

    let filteredData = props.sd
    let allData = props.cdata

    let total = {
        name: allData.name.common,
        capital: allData.capital,
        currencies:allData.currencies,
        flag: allData.flags.svg,
        population: allData.population,
        language: allData.languages,
        region: allData.region,
        subregion: allData.subregion

    }


    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    
    function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal() {
        setIsOpen(false);
      }

    return (
        <div className="col-lg-4 col-md-5 col-sm-12 p-2 align-items-center">

<Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <div className="col-lg-12  p-2 m-2 d-flex justify-content-center align-items-center">

        <div className="card" style={{width: "18rem"}}>
                <img src={allData.flags.svg}  className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{total.name}</h5>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: <b>{total.population}</b></li>
                    <li className="list-group-item">Region: <b>{total.region}</b></li>
                    <li className="list-group-item">Capital: <b>{total.capital}</b></li>
                    <li className="list-group-item">Subregion: <b>{total.subregion}</b></li>
                    <li className="list-group-item text-center">
                        <button 
                        className="btn btn-warning" 
                        onClick={()=>  closeModal()}
                        > 
                        Go back 
                        </button>
                    </li>
                </ul>
            </div>
         </div>
      </Modal>
            

            <div className="card" style={{width: "18rem"}}>
                <img src={allData.flags.svg}  className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{total.name}</h5>
            </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Population: <b>{total.population}</b></li>
                    <li className="list-group-item">Region: <b>{total.region}</b></li>
                    <li className="list-group-item">Capital: <b>{total.capital}</b></li>
                    <li className="list-group-item">Subregion: <b>{total.subregion}</b></li>
                    <li className="list-group-item text-center">
                        <button className="btn btn-warning" onClick={()=> openModal()}>More Info</button>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default CountryData;