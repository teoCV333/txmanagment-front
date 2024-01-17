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

    const navigate = useNavigate();

    const accounts = ['1234 5678 9101 1121', '4444 4444 4444 4444'];

    const autocompleteOptions = ['4444 4444 4444 4444'];

    const handleInputChange = (e) => {
        const sanitizedValue = e.target.value.replace(/[^0-9\s]/g, '');
        setInputValue(sanitizedValue);
        setShowOptions(true);
        if(accounts.filter(account => account.replace(/[^0-9\s]/g, '') === sanitizedValue).length === 0) {
            setError({error: false, errorCode: ''});
        }
    };

    const handleEnterKeyPress = (e) => {
        if (e.key === 'Enter') {
            if(accounts.filter(account => account === inputValue).length === 0) {
                setError({error: true, errorCode: 404});
                console.log(error)
            } else {
                navigate(`/get-into/${inputValue}`);
            }
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
                    onChange={handleInputChange}
                    list="autocompleteOptions"
                    onKeyDown={handleEnterKeyPress}
                    onFocus={() => setShowOptions(true)}
                />
                {showOptions && (
                    <div className="custom-dropdown">
                        {autocompleteOptions.map((option, index) => (
                            <option key={index} onClick={() => selectOption(option)}>
                                {option}
                            </option>
                        ))}
                    </div>
                )}
                {(error.error) && (<FontAwesomeIcon onClick={() => setInputValue('')} icon={faTimesCircle} className="search-icon" />)}
                {(!error.error) && (
                    <Link to={`/get-into/${inputValue}`}  className="search-icon">
                            <FontAwesomeIcon icon={faSearch} />
                    </Link>   
                )}
                
            </div>
            <div className="logo-2">
                <img src={logo2} alt="" />
            </div>
        </div>
    );
}

export { Loggin };