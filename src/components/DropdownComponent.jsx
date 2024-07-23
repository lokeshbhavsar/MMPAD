import React, { useState } from 'react';
import './DropdownComponent.css';

const DropdownComponent = ({ StakingIds }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleClick =()=>{
        
    }
    return (
        <div className="detail-card">
            <div className="custom-dropdown">
                <button 
                    className="custom-dropdown-toggle" 
                    type="button" 
                    onClick={toggleDropdown}
                >
                    Staking Id
                </button>
                {isOpen && (
                    <ul className="custom-dropdown-menu">
                        {StakingIds.map((el, id) => (
                            <li key={id}>
                                <a className="custom-dropdown-item" onClick={handleClick}>{el}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DropdownComponent;
