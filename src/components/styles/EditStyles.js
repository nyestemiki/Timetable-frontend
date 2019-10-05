import styled from 'styled-components';

const EditStyle = styled.div`
    position: absolute;
    top: 0;
    border: 1px solid red;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, .35);
`;

const MiddleWrapper = styled.div`
    width: 600px;
    margin: 0 auto;
`;

export default EditStyle;
export { MiddleWrapper };