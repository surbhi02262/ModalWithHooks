import styled from 'styled-components';

export const FlowModalWrapper = styled.section`
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
    top:0;
    background: gray;
    z-index:97;
    overflow-x:hidden;
    overflow-y:auto;
`;
export const FlowModalHeader = styled.header`
    display: flex;
    position: relative;
    align-items:center;
    justify-content:space-between;
    flex:0 0 80px;

`;
export const IconButton = styled.button`
    flex-grow:1;
`;
export const FlowModalContent = styled.section`
    padding: 100px 40px 40px;
    flex-grow:1;
    box-sizing:border-box;
`;
export const FlowModalFooter = styled.div`
    display: flex;
    justify-content:center;
    flex-direction:column;
    padding-bottom:40px;
    align-items:center;
`;
export const FlowModalPrimaryAction = styled.button``;
export const FlowNavigationHeader = styled.div`
width:100%;
`;
export const Title = styled.span``;
export const IconCloseButton = styled.button`

`;