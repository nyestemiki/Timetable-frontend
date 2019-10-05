import styled from 'styled-components';

const TimetableStyle = styled.div`
    backdrop-filter: blur(50px);
    background-color: rgba(255, 255, 255, .35);
    
    border-radius: 100px;
    margin: 40px;
    padding: 25px;

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

    /* Mobile */
	@media screen and (max-width: 1000px) {
        border-radius: 0;
        margin: 0;
        padding: 10px;
        height: 100vh;
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

    /* Mobile */
	@media screen and (max-width: 1000px) {
        margin: 0;
        font-size: 1.2rem;
	}
`;

const TableTimes = styled.div`
    /* Positioning */
    grid-area: time;
    margin: 20px;

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

    /* Mobile */
	@media screen and (max-width: 1000px) {
        margin: 0;
        font-size: 1.2rem;
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

    /* Typography */
    color: lightseagreen;
    font-size: 1.5rem;
    font-family: sans-serif;
    letter-spacing: .5px;

    /* Mobile */
	@media screen and (max-width: 1000px) {
        font-size: .8rem;
	}
`;

export default TimetableStyle;
export { TableHeader, TableTimes, TableContent };