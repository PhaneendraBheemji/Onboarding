import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import CardComponent from './CardComponent';
import './Driver.css';

const Driver = () => {
  const [driverData, setDriverData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch('http://localhost:500/driverData')
      .then((response) => response.json())
      .then((data) => setDriverData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {driverData.map((driver) => (
          <div className="accordion-item" key={driver.id}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${driver.id}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${driver.id}`}
              >
                {driver.name}
              </button>
            </h2>
            <div
              id={`flush-collapse${driver.id}`}
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <CardComponent
                  imageUrl={driver.AA_url}
                  altText={driver.AAname}
                  cardTitle={driver.AAdoc}
                />
                <CardComponent
                  imageUrl={driver.PAN_url}
                  altText={driver.PANname}
                  cardTitle={driver.PANdoc}
                />
                <CardComponent
                  imageUrl={driver.RC_url}
                  altText={driver.RCname}
                  cardTitle={driver.RCdoc}
                />
                <CardComponent
                  imageUrl={driver.DL_url}
                  altText={driver.DLname}
                  cardTitle={driver.DLdoc}
                />
                
                <div className='btncontainer'>
                <button type="button" class="btn btn-success ">Verified</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Driver;
