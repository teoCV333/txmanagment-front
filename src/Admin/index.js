import './Admin.css';
import DynamicTable from "../ClientsTable/index.js";
import { useNavigate } from 'react-router-dom';


function Admin() {

    const navigate = useNavigate();

    const data = [
     {
       id: 1,
       name: "prueba",
       lastname: "prueba",
       accountNumber: "6666 6666 6666 6666"
      }
    ];

    /* useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://wellsnetback.xyz:3001/clients', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); */

      const clients = data.map((client) =>({
        "#":client.id,
        "nombre":client.name,
        "apellido":client.lastname,
        "# de cuenta":client.accountNumber
      }));

    return (
        <div className="adminPage">
            <div className="title">
                <h1>Clientes</h1>
                <button onClick={() => { navigate('/admin/create-client')}}>Agregar cliente</button>
            </div>
            <div className="filter">
                <input placeholder="Buscar por nombre " />
            </div> 
            <div className="results">
                <DynamicTable data={clients}/>
            </div>
        </div>
    );
}

export { Admin };