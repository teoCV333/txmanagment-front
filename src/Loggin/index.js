import React from 'react';
import './Loggin.css';
import logo1 from './loginlogo1.png';
import logo2 from './loginlogo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';



function Loggin() {
    const [inputValue, setInputValue] = React.useState('');
    const [showOptions, setShowOptions] = React.useState(false);
    const [error, setError] = React.useState({error: false, errorCode: ''});
    const [data, setData] = React.useState([
        '4444444444444444'
    ]);

    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://3.81.82.209:3001/accounts', {
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

    const handleInputChange = (e) => {
        const sanitizedValue = e.target.value;
        setInputValue(sanitizedValue);
        setShowOptions(true);
        if(data.filter(account => account.accountNumber === sanitizedValue).length === 0) {
            setError({error: false, errorCode: ''});
        }
    };

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            if(data.filter(account => account.accountNumber === inputValue).length === 0) {
                setError({error: true, errorCode: 404});
            } else {
                navigate(`/get-into/${inputValue}`);
            }
        }
        setShowOptions(false);
    };

    const submitIcon = () => {
        if(data.filter(account => account.accountNumber === inputValue).length === 0) {
            setError({error: true, errorCode: 404});
        } else {
            navigate(`/get-into/${inputValue}`);
        }
        setShowOptions(false);
    };

    const selectOption = (option) => {
        setShowOptions(false);
        setInputValue(option);
    }

    return (
        <div className="loggin-content">
            <div className="logo-1">
                <img src={logo1} alt="" />
            </div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Please get into with your user ID."
                    value={inputValue}
                    onChange={(e) => {handleInputChange(e)}}
                    list="autocompleteOptions"
                    onKeyDown={handleEnterKeyPress}
                    onFocus={() => setShowOptions(true)}
                />
                {(showOptions && inputValue != '' && data.filter((option) => option.accountNumber.includes(inputValue)).length > 0) && (
                    <div className="custom-dropdown">
                        {data
                         .filter((option) => option.accountNumber.includes(inputValue))
                        .map((option, index) => (
                            <option key={index} onClick={() => selectOption(option.accountNumber)}>
                                {option.accountNumber}
                            </option>
                        ))}
                    </div>
                )}
                {(error.error) && (<FontAwesomeIcon onClick={() => setInputValue('')} icon={faTimesCircle} className="search-icon" />)}
                {(!error.error) && (
                            <FontAwesomeIcon onClick={() => submitIcon()} className="search-icon" icon={faSearch} />
                )}
                
            </div>
            <div className="logo-2">
                <img src={logo2} alt="" />
            </div>
        </div>
    );
}

export { Loggin };