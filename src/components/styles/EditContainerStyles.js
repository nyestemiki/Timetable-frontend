import styled from 'styled-components';

const EditContainerStyle = styled.div`
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

const EditContainerStyleContainer = styled.div`    
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

    @media screen and (max-width: 850px) {
        margin: 5px;
    }
`;

const AreaTitle = styled.div`
    color: rgba(0, 0, 0, 0.6);
    font-size: 1rem;
    margin-bottom: 5px;

    @media screen and (max-width: 1000px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 850px) {
        font-size: .5rem;
    }
`;

const TextInput = styled.textarea`
    font-size: 1rem;
    color: lightseagreen;
    background-color: rgba(255, 255, 255, 0.45);
    padding: 20px;
    margin: 10px;
    border-radius: 25px;
    flex: 1;
    text-align: center;
    transition: all .3s;
    width: 100%;
    resize: none;
    height: 5vh;
    overflow: hidden;
    outline: none;

    &:hover, &:focus {
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 15px lightseagreen;
    }

    &:active {
        box-shadow: 0 0 20px lightseagreen;
    }

    @media screen and (max-width: 850px) {
        font-size: .65rem;
        margin: 2px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1rem;
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
        box-shadow: 0 0 15px lightseagreen;
    }

    &:active {
        box-shadow: 0 0 20px lightseagreen;
    }

    @media screen and (max-width: 1000px) {
        font-size: .85rem;
    }

    @media screen and (max-width: 850px) {
        font-size: .65rem;
        margin: 2px;
    }
`;

const Delete = styled.div`
    box-sizing: border-box;
    cursor: pointer;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.45);
    color: red;
    padding: 20px;
    margin: 10px;
    border-radius: 25px;
    flex: 1;
    text-align: center;
    transition: all .3s;

    &:hover, &:focus {
        background-color: rgba(255, 255, 255, 0.85);
        box-shadow: 0 0 15px red;
    }

    &:active {
        box-shadow: 0 0 20px red;
    }

    @media screen and (max-width: 1000px) {
        font-size: .85rem;
    }

    @media screen and (max-width: 850px) {
        font-size: .65rem;
        margin: 2px;
    }
`;

export default EditContainerStyle;
export { EditContainerStyleContainer, Area, AreaTitle, TextInput, Buttons, Button, Delete };