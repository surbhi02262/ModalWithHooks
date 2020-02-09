import React from 'react';
import {FlowModalWrapper} from './UpdateNominee.styles';

const UpdateNominee = ({close,payload}) =>{
    return(
        <FlowModalWrapper title="title here" onBack={() => {}} onClose={close}
        primaryActionHandler={() =>{}}
        primaryActionLabel="Confirm" 
        >{payload.type}</FlowModalWrapper>)
}
export default UpdateNominee;