import React from 'react';
import {FlowModalWrapper,IconCloseButton,FlowModalHeader,FlowModalPrimaryAction, Title, FlowModalFooter,IconButton, FlowModalContent,FlowNavigationHeader} from './FlowModal.styles';

const FlowModal = ({
    children,
    title,
    onBack,
    onClose,
    primaryActionLabel,
    primaryActionHandler,

}) =>{
    return(<FlowModalWrapper>
        <FlowModalHeader>
            <FlowNavigationHeader> 
                <Title>{title} </Title>
                {onBack && <IconButton onClick={onBack}>Back</IconButton>}
               {onClose && <IconCloseButton onClick={onClose}>Close</IconCloseButton>}
            </FlowNavigationHeader>
        </FlowModalHeader>
        <FlowModalContent>{children}</FlowModalContent>
        <FlowModalFooter>
            {primaryActionHandler && <FlowModalPrimaryAction onClick={primaryActionHandler}>
                {primaryActionLabel}
            </FlowModalPrimaryAction>}
        </FlowModalFooter>
    </FlowModalWrapper>)
}
export default FlowModal;