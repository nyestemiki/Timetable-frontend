import styled from 'styled-components';

const IntervalStyle = styled.div`
    align-self: stretch;
    justify-self: stretch;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: rgba(255, 255, 255, .45);
    }
`;

const Edit = styled.div`
    background: rgba(255, 255, 255, .65);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const IntervalDiv = styled.div`
    width: 100%;
    height: 100%;
`;

export default IntervalStyle;
export { Edit, IntervalDiv };