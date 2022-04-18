import styled from "styled-components";
import { memo } from "react";


export const  Wrap  = memo( styled.div`
display: flex;
flex-direction: column;
background-color: #212121;
padding: 5rem 3rem;
color: wheat;
`)

export const Title = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
font-size: 25px;
font-family: 'Laila';
font-size: ${(soup)=>(soup ? '20px':'25px')};
margin-top: ${(soup)=>(soup ? '30px':'0')};
`

export const ItemWrap = styled.div`
margin-top: 2rem;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 20px;
img{
    width: 20rem;
    height: 16rem;
}
`
