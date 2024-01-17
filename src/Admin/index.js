import './Admin.css';
import DynamicTable from "../ClientsTable";
import { useEffect, useState } from 'react';


function Admin() {

    const [data, setData] = useState([]);

    const clients = [];


    /* useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3001/clients', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                // You can include additional headers if needed
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            console.log(result)
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div className="adminPage">
            <div className="title">
                <h1>Clientes</h1>
            </div>
            <div className="filter">
                <input placeholder="Buscar por nombre " />
            </div> 
            <div className="results">
                <DynamicTable data={clients}/>
            </div>
        </div>
    ); */
}

export { Admin };