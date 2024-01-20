import './ClientDetail.css';
import React from "react";
import { useNavigate } from "react-router-dom";

function ClientDetail() {
  const navigate = useNavigate();

  const [client, setClient] = React.useState({
    name: "",
    lastname: "",
    accountNumber: "",
    address: "",
    country: "",
    city: "",
    abreviation: "",
    postalCode: "",
    aBalance: "",
    eCBalance: "",
    pWDBalance: "",
    cPBalance: "",
    pDCBalance: "",
    totalAvailable: "",
    bBalanceDate: "",
    bBalance: "",
    dAdditions: "",
    wSubtractions: "",
    eBalanceDate: "",
    eBalance: "",
    docPassword: ""
  });
  
  try {
    /* React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`https://wellsnetback.xyz:3001/client/${account}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
              },
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
    
            const result = await response.json();
            setClient(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []); */

    const handleSubmit = (e) => {
        e.preventDefault();
        updateClient();
        navigate('/admin/');
    };

    const updateClient = async () => {
        try {
            const response = await fetch(`54.158.104.250:3001/client/${client.id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body:  JSON.stringify(client)
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };

    const deleteClient = async () => {
        const confirmed = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
        if (confirmed) {
        try {
            const response = await fetch(`http://54.158.104.250:3001/client/${client.id}`, {
              method: 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              }            
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            navigate('/admin/');
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
    };

    return(
        <div className="client-detail-content">
            <button className="back" onClick={() => navigate('/admin/')}>Volver</button>
           <h2 className="title">Detalle del cliente</h2>
           <button className="delete" onClick={() => deleteClient()}>Borrar</button>
           <div className="form-content">
                <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input value={client.name} onChange={(e) => setClient({...client, name: e.target.value})} />
                    
                    <label>Apellido</label>
                    <input value={client.lastname} onChange={(e) => setClient({...client, lastname: e.target.value})} />

                    <label>Número de cuenta</label>
                    <input value={client.accountNumber} onChange={(e) => setClient({...client, accountNumber: e.target.value})} />

                    <label>Dirección</label>
                    <input value={client.address} onChange={(e) => setClient({...client, address: e.target.value})} />

                    <label>País</label>
                    <input value={client.country} onChange={(e) => setClient({...client, country: e.target.value})} />
                    
                    <label>Ciudad</label>
                    <input value={client.city} onChange={(e) => setClient({...client, city: e.target.value})} />
                    
                    <label>Abreviacion de País</label>
                    <input value={client.abreviation} onChange={(e) => setClient({...client, abreviation: e.target.value})} />
                    
                    <label>Codigo postal</label>
                    <input value={client.postalCode} onChange={(e) => setClient({...client, postalCode: e.target.value})} />

                    <h2>Detalle de cuenta</h2>
                    
                    <label>Available balance:</label>
                    <input value={client.aBalance} onChange={(e) => setClient({...client, aBalance: e.target.value})} />
                    
                    <label>Ending collected balance:</label>
                    <input value={client.eCBalance} onChange={(e) => setClient({...client, eCBalance: e.target.value})} />
                    
                    <label>Pending withdrawals/debits:</label>
                    <input value={client.pWDBalance} onChange={(e) => setClient({...client, pWDBalance: e.target.value})} />
                    
                    <label>Current posted balance:</label>
                    <input value={client.cPBalance} onChange={(e) => setClient({...client, cPBalance: e.target.value})} />
                    
                    <label>Pending deposits/credits:</label>
                    <input value={client.pDCBalance} onChange={(e) => setClient({...client, pDCBalance: e.target.value})} />
                    
                    <label>Total available:</label>
                    <input value={client.totalAvailable} onChange={(e) => setClient({...client, totalAvailable: e.target.value})} />

                    <h2>Extractos PDF</h2>

                    <label>Beginning balance date (fecha):</label>
                    <input value={client.bBalanceDate} onChange={(e) => setClient({...client, bBalanceDate: e.target.value})} />
                    
                    <label>Beginning balance:</label>
                    <input value={client.bBalance} onChange={(e) => setClient({...client, bBalance: e.target.value})} />
                    
                    <label>Deposits/Additions:</label>
                    <input value={client.dAdditions} onChange={(e) => setClient({...client, dAdditions: e.target.value})} />
                   
                    <label>Withdrawals/Subtractions:</label>
                    <input value={client.wSubtractions} onChange={(e) => setClient({...client, wSubtractions: e.target.value})} />
                    
                    <label>Ending balance date (fecha):</label>
                    <input value={client.eBalanceDate} onChange={(e) => setClient({...client, eBalanceDate: e.target.value})} />
                    
                    <label>Ending balance:</label>
                    <input value={client.eBalance} onChange={(e) => setClient({...client, eBalance: e.target.value})} />

                    <label>Contraseña PDF:</label>
                    <input value={client.docPassword} onChange={(e) => setClient({...client, docPassword: e.target.value})} />

                    <button type="submit">Guardar</button>
                </form>
           </div>
        </div>
    );
  } catch(err) {
    console.error('Client detail Error: ', err);
  }
}

export { ClientDetail };