import styled from 'styled-components';

const TimetableStyle = styled.div`
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, .35);
    
    border-radius: 100px;
    margin: 40px;
    padding: 20px;

    display: grid;
    grid-template-areas:
        "span head head head head head"
        "time content content content content content"
        "time content content content content content"
        "time content content content content content"
        "time content content content content content"
        "time content content content content content"
        "time content content content content content"
    ;

    /* Half-desktop */
	@media screen and (max-width: 1000px) {
        border-radius: 0;
        background-color: rgba(255, 255, 255, 0);
        margin: 0;
        padding: 10px;
        height: 100vh;
        width: 100vw;
    }
    
    /* Mobile */
	@media screen and (max-width: 850px) {
        border-radius: 0;
        background-color: rgba(255, 255, 255, 0);
        margin: 0;
        padding: 10px;
        height: 100vh;
        width: 100vw;
	}
`;

const TableHeader = styled.div`
    /* Positioning */
    grid-area: head;
    margin: 20px;

    /* Grid */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center; /* Center both vertically and horizontally */
    align-content: stretch;
    justify-content: space-between;
    grid-gap: 20px;

    /* Typography */
    color: whitesmoke;
    font-size: 2rem;
    font-family: sans-serif;
    letter-spacing: 1.5px;

    /* Half-desktop */
	@media screen and (max-width: 1000px) {
        margin: 0;
        font-size: 1rem;
	}
    
    /* Mobile */
	@media screen and (max-width: 850px) {
        margin: 0;
        font-size: .5rem;
	}
`;

const TableTimes = styled.div`
    /* Positioning */
    grid-area: time;
    margin: 20px;
    z-index: 2;

    /* Grid */
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    place-items: center; /* Center both vertically and horizontally */
    align-content: stretch;
    justify-content: space-between;
    grid-gap: 20px;

    /* Typography */
    color: whitesmoke;
    font-size: 2rem;
    font-family: sans-serif;
    letter-spacing: 1.5px;

    /* Half-desktop */
	@media screen and (max-width: 1000px) {
        margin: 0;
        font-size: 1rem;
    }
    
    /* Mobile */
	@media screen and (max-width: 850px) {
        margin: 0;
        font-size: .5rem;
	}
`;

const TableContent = styled.div`
    /* Positioning */
    grid-area: content;
    margin: 20px;
    height: calc(100% - 2*20px);

    /* Grid */
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    place-items: center; /* Center both vertically and horizontally */
    align-content: stretch;
    justify-content: space-between;
    grid-gap: 20px;

    /* Style */
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, .2);
    border-radius: 50px;
    overflow: hidden; /* Clipping what's over the border-radius */

    /* Typography */
    color: lightseagreen;
    font-size: 2rem;
    font-family: sans-serif;
    letter-spacing: .5px;

    /* Half-desktop */
	@media screen and (max-width: 1000px) {
        margin: 0;
        height: 100%;
        font-size: .75rem;
        grid-gap: 10px;
    }
    
    /* Mobile */
	@media screen and (max-width: 850px) {
        margin: 0;
        height: 100%;
        font-size: .35rem;
        grid-gap: 5px;
	}
`;

export default TimetableStyle;
export { TableHeader, TableTimes, TableContent };