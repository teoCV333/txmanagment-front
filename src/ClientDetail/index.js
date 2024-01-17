import { useParams } from "react-router-dom";
import './ClientDetail.css';

function ClientDetail() {

    const { account } = useParams();

    const client = {
        name: "fulanito",
        lastname: "perez durango",
        address: "7312 N 21ST ST",
        country: 'Pennsylvania',
        city: 'PHILADELPHIA',
        abreviation: 'PA',
        postalCode: '19138',
        aBalance: '148.500,00',
        eCBalance: '0,00',
        pWDBalance: '148.500,00',
        cPBalance: '148.500,00',
        pDCBalance: '148.500,00',
        totalAvailable: '148.500,00',
        bBalanceDate: '02/01',
        bBalance: '148.500,00',
        dAdditions: '0,00',
        wSubtractions: '0,00',
        eBalanceDate: '02/29',
        eBalance: '148.500,00',
        docPassword: '333333'
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('guardado');
    };

    return(
        <div className="client-detail-content">
           <h2 className="title">Detalle del cliente</h2>
           <div className="form-content">
                <form onSubmit={handleSubmit}>
                    <label>Nombre</label>
                    <input value={client.name} />
                    
                    <label>Apellido</label>
                    <input value={client.lastname} />

                    <label>Número de cuenta</label>
                    <input value={account} />

                    <label>Dirección</label>
                    <input value={client.address} />

                    <label>País</label>
                    <input value={client.country} />
                    
                    <label>Ciudad</label>
                    <input value={client.city} />
                    
                    <label>Abreviacion de País</label>
                    <input value={client.abreviation} />
                    
                    <label>Codigo postal</label>
                    <input value={client.postalCode} />

                    <h2>Detalle de cuenta</h2>
                    
                    <label>Available balance:</label>
                    <input value={client.aBalance} />
                    
                    <label>Ending collected balance:</label>
                    <input value={client.eCBalance} />
                    
                    <label>Pending withdrawals/debits:</label>
                    <input value={client.pWDBalance} />
                    
                    <label>Current posted balance:</label>
                    <input value={client.cPBalance} />
                    
                    <label>Pending deposits/credits:</label>
                    <input value={client.pDCBalance} />
                    
                    <label>Total available:</label>
                    <input value={client.totalAvailable} />

                    <h2>Extractos PDF</h2>

                    <label>Beginning balance date (fecha):</label>
                    <input value={client.bBalanceDate} />
                    
                    <label>Beginning balance:</label>
                    <input value={client.bBalance} />
                    
                    <label>Deposits/Additions:</label>
                    <input value={client.dAdditions} />
                   
                    <label>Withdrawals/Subtractions:</label>
                    <input value={client.wSubtractions} />
                    
                    <label>Ending balance date (fecha):</label>
                    <input value={client.eBalanceDate} />
                    
                    <label>Ending balance:</label>
                    <input value={client.eBalance} />

                    <button type="submit">Guardar</button>
                </form>
           </div>
        </div>
    );
}

export { ClientDetail };