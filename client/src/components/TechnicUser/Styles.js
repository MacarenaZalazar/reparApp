import styled from "styled-components";

export const StyledDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 15px;
height: 150px;
width: 600px;
border-radius: 15px;
box-shadow: rgba(181, 129, 108, 0.8) 0px 8px 34px -25px;
background-color: white;
.infoContainer{
    display:flex;
    flex-direction: column;
    align-items: center;
    jutify-content: space-between;
    margin: 5px;
    .name{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #ced4da;
        margin: 5px;
    }
    label{
        font-size: 15px;
    }
}

ul{
    font-size: 15px;
    list-style: none;
}
img{
    margin: 10px;
    max-width: 100px;
    border-radius: 10px;
}

`