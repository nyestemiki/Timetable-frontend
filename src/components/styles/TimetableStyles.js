import styled from 'styled-components';

const TimetableStyle = styled.div`
    /* DEV  */
    background: blue;
    
    margin: 40px;
    border-radius: 100px;

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
`;

const TableHeader = styled.div`
    grid-area: head;
    border: 2px solid white;
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    color: white;
    place-items: center; /* Center both vertically and horizontally */
    align-content: stretch;
    justify-content: space-between;
    grid-gap: 20px;

    & > * {
        border: 2px solid red;
    }
`;

const TableTimes = styled.div`
    grid-area: time;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    place-items: center; /* Center both vertically and horizontally */
    align-content: stretch;
    justify-content: space-between;
    grid-gap: 20px;
    color: white;
    margin: 20px;

    border: 1px solid orange;

    & > * {
        border: 2px solid red;
    }
`;

const TableContent = styled.div`
    grid-area: content;
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    place-items: center; /* Center both vertically and horizontally */
    align-content: stretch;
    justify-content: space-between;
    height: calc(100% - 2*20px);

    grid-gap: 20px;
    color: white;

    border: 1px solid yellow;

    & > * {
        border: 2px solid red;
    }
`;

export default TimetableStyle;
export { TableHeader, TableTimes, TableContent };