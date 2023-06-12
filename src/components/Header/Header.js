import React from 'react';
import { useTelegram } from '../../hooks/hooks';

const Header = () => {
    const {user,onClose} = useTelegram()
    return (
        <div>
            <button onClick={onClose}>Close</button>
            <span className='username'>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;