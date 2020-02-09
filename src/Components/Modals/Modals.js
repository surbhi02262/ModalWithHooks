import React, { useContext } from 'react';
import ModalContext from './ModalContext';
import UpdateNominee from '../UpdateNominee/UpdateNominee';

const Modals = () =>{
    const {selectedModal, setSelectedModal} =useContext(ModalContext);

    const toggleModal = () =>{
        setSelectedModal({action:"",payload:{} });
    }
    const ModalMap = {
        "UPDATE_NOMINEE": UpdateNominee
    };

    const Component = ModalMap[selectedModal.action];

    return (
      selectedModal.action && <Component close={toggleModal} payload={selectedModal.payload}/>
    )
}
export default Modals;