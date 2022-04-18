import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
background-color: #282e30;
padding: 1rem;
font-family: 'Laila';
.title{
    color: wheat;
}
.title-wrap{
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
}
.price{
    color: red;
}
.ingredients{
    color: #646875;
    font-size: 16px;
}
.time{
    color: #1857c4;
    font-size: 16px;
    margin-top: 2rem;
}
`
