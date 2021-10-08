import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react/cjs/react.development';



const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      height: '600px',
      width: '500px',
      borderRadius: '8px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



  Modal.setAppElement('#root');

const SearchedData = (props) => {

    
    let allData = props.cdata
    let filteredData = props.sd[0]
    

    
    
    console.log(filteredData.currencies[0])
    console.log(filteredData)

    let total = {
        name: filteredData.name.common,
        capital: filteredData.capital,
        currencies:filteredData.currencies,
        flag: filteredData.flags.svg,
        population: filteredData.population,
        language: filteredData.languages,
        region: filteredData.region,
        subregion: filteredData.subregion

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
        <div className="col-lg-12  p-2 m-2 d-flex justify-content-center">

                <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                
                >
                    <div className="col-lg-12  p-2 m-2 d-flex justify-content-center align-items-center">
                    <div className="border-0 card" style={{width: "18rem"}}>
                        <img src={total.flag}  className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{total.name}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Population: <b>{total.population}</b></li>
                            <li className="list-group-item">Region: <b>{total.region}</b></li>
                            <li className="list-group-item">Capital: <b>{total.capital}</b></li>
                            <li className="list-group-item">Subregion: <b>{total.subregion}</b></li>
                            
                        </ul>
                        <li className="list-group-item text-center">
                            <button className="btn btn-warning" onClick={()=>  closeModal()}>Go back</button>
                        </li>
                    </div>
                    </div>
                </Modal>

            <div className="card" style={{width: "18rem"}}>
                <img src={total.flag}  className="card-img-top" alt="..." />
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
                    <li className="list-group-item text-center">
                        <button className="btn btn-dark" onClick={()=> window.location.reload()}>  Home </button>
                    </li>
                </ul>
            </div>

            
        </div>
    );
};

export default SearchedData;