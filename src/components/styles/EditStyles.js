import styled from 'styled-components';

const EditStyle = styled.div`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, .35);
`;

const MiddleWrapper = styled.div`
    width: 600px;
    margin: 0 auto;

    @media screen and (max-width: 1000px) {
        width: 100vw;
        margin: 0;
    }
`;

const X = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 75px;
    height: 75px;
    background: rgba(255, 255, 255, 0.75);
    border-radius: 100%;
    margin: 10px;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(0, 0, 0, 0.75);
    font-weight: 100;
`;

export default EditStyle;
export { MiddleWrapper, X };