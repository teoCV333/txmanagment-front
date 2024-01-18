import React from "react";
import './CreateClient.css';
import { useNavigate } from "react-router-dom";

function CreateClient() {
    const navigate = useNavigate();
    const [client, setClient] = React.useState(
        {
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
        }
    );

    const handleSubmit = async (e) => {
        e.preventDefault();
        createClient();
    };

    const createClient = async () => {
        try {
            const response = await fetch(`http://localhost:3001/client`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body:  JSON.stringify(client)
            });
    
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            navigate('/admin/');
          } catch (error) {
            console.error('Error fetching data:', error);
          }
    };

    return(
        <div className="client-detail-content">
            <button className="back" onClick={() => navigate('/admin/')}>Volver</button>
            <h2 className="title">Agregar nuevo cliente</h2>
            <div className="form-content">
                <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input required value={client.name} onChange={(e) => setClient({...client, name: e.target.value})} />
                    
                    <label>Apellido</label>
                    <input required value={client.lastname} onChange={(e) => setClient({...client, lastname: e.target.value})} />

                    <label>Número de cuenta</label>
                    <input required maxLength={16} minLength={16} value={client.accountNumber} onChange={(e) => setClient({...client, accountNumber: e.target.value})} />

                    <label>Dirección</label>
                    <input required value={client.address} onChange={(e) => setClient({...client, address: e.target.value})} />

                    <label>País</label>
                    <input required value={client.country} onChange={(e) => setClient({...client, country: e.target.value})} />
                    
                    <label>Ciudad</label>
                    <input required value={client.city} onChange={(e) => setClient({...client, city: e.target.value})} />
                    
                    <label>Abreviacion de País</label>
                    <input required value={client.abreviation} onChange={(e) => setClient({...client, abreviation: e.target.value})} />
                    
                    <label>Codigo postal</label>
                    <input required value={client.postalCode} onChange={(e) => setClient({...client, postalCode: e.target.value})} />

                    <h2>Detalle de cuenta</h2>
                    
                    <label>Available balance:</label>
                    <input required value={client.aBalance} onChange={(e) => setClient({...client, aBalance: e.target.value})} />
                    
                    <label>Ending collected balance:</label>
                    <input required value={client.eCBalance} onChange={(e) => setClient({...client, eCBalance: e.target.value})} />
                    
                    <label>Pending withdrawals/debits:</label>
                    <input required value={client.pWDBalance} onChange={(e) => setClient({...client, pWDBalance: e.target.value})} />
                    
                    <label>Current posted balance:</label>
                    <input required value={client.cPBalance} onChange={(e) => setClient({...client, cPBalance: e.target.value})} />
                    
                    <label>Pending deposits/credits:</label>
                    <input required value={client.pDCBalance} onChange={(e) => setClient({...client, pDCBalance: e.target.value})} />
                    
                    <label>Total available:</label>
                    <input required value={client.totalAvailable} onChange={(e) => setClient({...client, totalAvailable: e.target.value})} />

                    <h2>Extractos PDF</h2>

                    <label>Beginning balance date (fecha):</label>
                    <input required value={client.bBalanceDate} onChange={(e) => setClient({...client, bBalanceDate: e.target.value})} />
                    
                    <label>Beginning balance:</label>
                    <input required value={client.bBalance} onChange={(e) => setClient({...client, bBalance: e.target.value})} />
                    
                    <label>Deposits/Additions:</label>
                    <input required value={client.dAdditions} onChange={(e) => setClient({...client, dAdditions: e.target.value})} />
                   
                    <label>Withdrawals/Subtractions:</label>
                    <input required value={client.wSubtractions} onChange={(e) => setClient({...client, wSubtractions: e.target.value})} />
                    
                    <label>Ending balance date (fecha):</label>
                    <input required value={client.eBalanceDate} onChange={(e) => setClient({...client, eBalanceDate: e.target.value})} />
                    
                    <label>Ending balance:</label>
                    <input required value={client.eBalance} onChange={(e) => setClient({...client, eBalance: e.target.value})} />

                    <label>Contraseña PDF:</label>
                    <input required value={client.docPassword} onChange={(e) => setClient({...client, docPassword: e.target.value})} />

                    <button type="submit">Guardar</button>
                </form>
           </div>
        </div>
    );
}

export { CreateClient };