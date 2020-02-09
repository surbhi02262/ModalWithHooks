import React, { useState } from 'react';
import ModalContext from './ModalContext';

const ModalProvider = ({children}) =>{
    const [selectedModal , setSelectedModal] = useState({ action:"",payload:{} })
    return (
        <ModalContext.Provider value={{selectedModal,setSelectedModal }}>
            {children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;