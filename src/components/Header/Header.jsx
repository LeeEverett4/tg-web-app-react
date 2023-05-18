import React from 'react';
import Button from "../button/button";
import {useTelegram} from "../../Hooks/useTelegram";


const Header = () => {

 const  { user, onClose} = useTelegram();
    return (
        <div className={'header'}>

            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    );
};

export default Header;