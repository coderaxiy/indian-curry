
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrap = styled.div`
display: flex;
align-items: center;
background-color: #212121;
justify-content: space-between;
`
export const Logo = styled.div`
font-size: 2rem;
font-family: 'Indian';
font-weight: 700;
color: red;
margin-left: 20px;
cursor: pointer;
`

export const DrawerTitle = styled.div`
color: red;
font-family:'Indian';
font-weight: 700;
font-size: 20px;
`

export const LinkWrap = styled.div`
display: flex;
align-items: center;
margin: 20px;
gap: 20px;
.overlay{
    background-color: #ff8200;
    color: #212121;
    font-size: 16px;
    font-family: "Montserrat";
    font-weight: 600;
    padding: 10px 30px;
    border-bottom: 1px solid #212121;
    :hover{
        background-color: wheat;
        opacity: .5;
    }
}
.menuBtn{
    display: none;
    padding: 8px 10px;
    cursor: pointer;
    :hover{
        background-color: rgba(255, 255, 255, 0.2);
    }
    @media (max-width: 1180px) {
        display: flex;
    }
}
.menu{
    display: flex;
align-items: center;
gap: 5px;
font-size: 18px;
font-family: 'Laila';
font-weight: 600;
color: white;
cursor: pointer;
padding: 10px 12px;
border-radius: 12px;
text-decoration: none;
color: ${({active}) => (active ? '#212121' : 'white')};
background-color: ${({active}) => (active ? 'gray' : null)};
:hover{
    background-color: rgba(255, 255, 255, 0.2);
    color: #ff8200;
}
@media (max-width: 1180px) {
    display: none;
}
}
`

export const Links = styled(Link)`
display: flex;
align-items: center;
gap: 5px;
font-size: 18px;
font-family: 'Laila';
font-weight: 600;
color: white;
cursor: pointer;
padding: 10px 12px;
border-radius: 12px;
text-decoration: none;
color: ${({active}) => (active ? '#212121' : 'white')};
background-color: ${({active}) => (active ? 'gray' : null)};
:hover{
    background-color: rgba(255, 255, 255, 0.2);
    color: #ff8200;
}
@media (max-width: 1180px) {
    display: none;
}
`
