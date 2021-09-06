import  styled  from 'styled-components';


export const StyledDiv = styled.div`
margin-top: 100px;
display: flex;
align-items: center;
justify-content: center;
.detContainer{
    width: 200px;
    padding: 50px;
    background-color: white;
    border-radius: 15px;
    box-shadow: rgba(181,129,108,0.8) 0px 8px 34px -25px;
    ul{
        padding:10px;
    }
    span{  
        border: none;
        padding: 0.6rem;
        font-family: "Montserrat", sans-serif;
        color: rgb(248, 248, 248);
        background-color: #194350;
        cursor: pointer;
        border-radius: 1rem;
        transition: 0.5s ease;
        cursor: pointer;
      
        :hover {
          background-color: #ff8882;
       
   
    }
}
`

