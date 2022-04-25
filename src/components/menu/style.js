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
justify-content: center;
font-family: 'Laila';
font-size: ${(soup)=>(soup?'30px':null)};
margin-top: ${(soup)=>(soup ? '30px':'0')};
.title-wrap{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    font-size: 30px;
    @media (max-width:1200px){
        width: unset;
        font-size: 25px;
    }
}
`

export const ItemWrap = styled.div`
margin-top: 2rem;
img{
    width: 20rem;
    height: 16rem;
}
.image-wrap{
   position: relative;
}
:hover .image-wrap .link{
    display: flex;
    z-index: 10;
}
:hover .image-wrap img {
    filter: blur(4px);
    transition: all .3s;
}

@keyframes hover {
    from{display: flex;
         transition: all .3s;
    }
    to{display: none; 
        transition: all .3s;
    }
}
.flex-wrap{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    align-items: center;
    gap: 2rem;
}
`
