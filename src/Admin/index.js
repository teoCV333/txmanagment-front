import React from 'react';
import './Admin.css';
import DynamicTable from "../ClientsTable/index.js";
import { useNavigate } from 'react-router-dom';
import { AuthModal } from '../AuthModal/index.js';


function Admin() {
  const [openModal, setOpenModal] = React.useState(true);
  const [loged, setLoged] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();
  const adminPassword = 'Wellsfargo123.';

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://wellsnetback.xyz/clients-admin', {
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
  }, []);

  const clients = data.map((client) => ({
    "#": client.id,
    "nombre": client.name,
    "apellido": client.lastname,
    "# de cuenta": client.accountNumber
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== adminPassword.toString()) {
        setError(true);
    } else {
        setLoged(true);
        setError(false);
        setOpenModal(false);
        setPassword('');
    }
};

  return (
    <div className="adminPage">
      {openModal &&
        (<AuthModal>
        <form onSubmit={handleSubmit}>
          <span className='close-modal' onClick={() => navigate('/')}>X</span>
          <label className='modal-title'>Admin.</label>
          <input
            className='modal-pass'
            value={password}
            type='password'
            placeholder='Password'
            onChange={(event) => setPassword(event.target.value)}
          />
          {error && (
            <p className='incorrect-pass'>
              <span>Incorrect password.</span>
            </p>
          )}
          <button
            className='modal-btn'
            type='submit'
          >Validate</button>
        </form>
      </AuthModal>)
      }
      {!openModal &&
      (<div className='content'>
        <div className="title">
          <h1>Clientes</h1>
          <button onClick={() => { navigate('/admin/create-client') }}>Agregar cliente</button>
        </div>
        <div className="filter">
          <input placeholder="Buscar por nombre " />
        </div>
        <div className="results">
          <DynamicTable data={clients} />
        </div>
      </div>)}
    </div>
  );
}

export { Admin };