import React from 'react';
import { NavLink } from 'react-router-dom';

import dialogsStyleClasses from './Dialogs.module.css';

const Dialogs = (props) => {
  return (
    <div className={dialogsStyleClasses.dialogs}>
        <div className={dialogsStyleClasses.dialogItems}>
          <div className={`${dialogsStyleClasses.dialog} ${dialogsStyleClasses.active}`}>
            <NavLink to='/dialogs/1'>Vadim</NavLink>
          </div>
          <div className={dialogsStyleClasses.dialog}>
            <NavLink to='/dialogs/2'>John</NavLink>
          </div>
        </div>
        <div className={dialogsStyleClasses.messages}>
          <div className={dialogsStyleClasses.message}>
            Hi
          </div>
          <div className={dialogsStyleClasses.message}>
            Hello
          </div>
        </div>
    </div>
  );
};

export default Dialogs;