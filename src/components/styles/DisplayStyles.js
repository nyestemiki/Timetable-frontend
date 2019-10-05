import styled from 'styled-components';

const DisplayStyle = styled.div`
    display: flex;
    flex-direction: column;

    /* Half-desktop */
	@media screen and (max-width: 1000px) {
        border-radius: 0;
        margin: 0;
        padding: 10px;
        height: 100vh;
        width: 100vw;
    }
    
    /* Mobile */
	@media screen and (max-width: 850px) {
        border-radius: 0;
        margin: 0;
        padding: 10px;
        height: 100vh;
        width: 100vw;
	}  
`;

const DisplayStyleContainer = styled.div`    
    flex: 1;
    margin: 40px;
    border-radius: 100px;
    padding: 25px;

    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, .35);

    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Area = styled.div`
    margin: 25px;
`;

const AreaTitle = styled.div`
    color: white;
    font-size: 1.5rem;
    margin-bottom: 5px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1.2rem;
    color: lightseagreen;
    background-color: rgba(255, 255, 255, 0.45);
    padding: 20px;
    margin: 10px;
    border-radius: 25px;
    flex: 1;
    text-align: center;
    transition: all .3s;

    &:hover, &:focus {
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`;

const ButtonAbsence = styled.div`
    cursor: pointer;
    font-size: 1.2rem;
    color: lightseagreen;
    background-color: rgba(255, 255, 255, 0.45);
    padding: 20px;
    margin-bottom: 40px;
    border-radius: 25px;
    flex: 1;
    text-align: center;
    transition: all .3s;

    &:hover, &:focus {
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`;

const Options = styled.select`
    font-size: 1.2rem;
    color: lightseagreen;
    background-color: rgba(255, 255, 255, 0.45);
    height: 50px;
    border-radius: 25px;
    width: 100%;
    text-align: center;

    transition: all .3s;

    &:hover, &:focus {
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`;

export default DisplayStyle;
export { DisplayStyleContainer, Area, AreaTitle, Buttons, Button, ButtonAbsence, Options };