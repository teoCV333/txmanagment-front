import React from 'react';
import './Loggin.css';
import logo1 from './loginlogo1.png';
import logo2 from './loginlogo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';



function Loggin() {
    const [inputValue, setInputValue] = React.useState('');
    const [showOptions, setShowOptions] = React.useState(false);
    const [error, setError] = React.useState({error: false, errorCode: ''});
    const [data, setData] = React.useState([]);

    /* const data = [
        '4323 5901 5246 4063',
    ] */

    const navigate = useNavigate();

    React.useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://www.wellsnetback.xyz/accounts', {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
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

    const handleInputChange = (e) => {
        try {
            const inputValue = e.target.value;
            if (inputValue !== undefined) {
                const sanitizedValue = inputValue.replace(/[^0-9\s]/g, '');
                setInputValue(sanitizedValue);
                setShowOptions(true);
        
                if (data.filter(account => {
                    const accountNumber = account.accountNumber;
                    return accountNumber !== undefined && accountNumber.replace(/[^0-9\s]/g, '') === sanitizedValue;
                }).length === 0) {
                    setError({ error: false, errorCode: '' });
                }
            }
        } catch(err) {
            console.error('Error: ', err);
        }
        
    };

    const handleEnterKeyPress = (e) => {
        try {
            if (e.key === 'Enter') {
                if(data.filter(account => account.accountNumber === inputValue).length === 0) {
                    setError({error: true, errorCode: 404});
                } else {
                    navigate(`/get-into/${inputValue}`);
                }
            }
            setShowOptions(false);
        } catch(err) {
            console.error('Error: ', err);
        }
    };

    const submitIcon = () => {
        try {
            if(data.filter(account => account.accountNumber === inputValue).length === 0) {
            setError({error: true, errorCode: 404});
            } else {
                navigate(`/get-into/${inputValue}`);
            }
            setShowOptions(false);
        } catch(err) {
            console.error('Error: ', err);
        }
    };

    const selectOption = (option) => {
        try {
            setShowOptions(false);
            setInputValue(option);
        } catch(err) {
            console.error('Error: ', err);
        }
    };

    return (
        <div className="loggin-content">
            <div className="logo-1">
                <img src={logo1} alt="" />
            </div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Please get into with your user ID."
                    maxLength={19}
                    value={inputValue}
                    onChange={(e) => {handleInputChange(e)}}
                    list="autocompleteOptions"
                    onKeyDown={handleEnterKeyPress}
                    onFocus={() => setShowOptions(true)}
                />
                {(showOptions && inputValue.length >= 14 && data.filter((option) => option.accountNumber && option.accountNumber.includes(inputValue)).length > 0) && (
                    <div className="custom-dropdown">
                        {data
                            .filter((option) => option.accountNumber && option.accountNumber.includes(inputValue))
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