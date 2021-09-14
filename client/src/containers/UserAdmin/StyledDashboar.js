import styled  from 'styled-components';

export const StyledDashContainer = styled.div`
display:flex;
flex-direction: column;
align-items: center;
padding: 50px;
height: 100%;
.reported{
    margin: 15px;
    padding: 15px;
    background-color:#194350;
    border-radius: 15px;

    :hover{
        color: white;
        font-weight: bold
    }
}
.works{
    padding: 15px;


    .workContainer{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        .addJob{
            margin: 20px;
            display: flex; 
            align-items: center;
        }
    }
}


`
