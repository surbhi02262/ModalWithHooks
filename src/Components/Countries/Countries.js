import React, { useContext } from 'react';
import ModalContext from '../Modals/ModalContext';

const Countries = () =>{
    const {setSelectedModal} = useContext(ModalContext);

    return(<div>
        <button onClick={() => setSelectedModal({
                action:"UPDATE_NOMINEE",
                payload:{
                    depositId:'12345678',
                    type:"Fd",
                    source:"DepositList"
                }
            })
        }>Open Modal</button>
    </div>)
}
export default Countries;