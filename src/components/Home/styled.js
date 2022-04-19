import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
box-sizing: border-box;
align-items: center;
justify-content: center;
/* width: 100%; */
position: relative;
.title{
    font-size: 30px;
    font-family: 'Laila';
    color: wheat;
    margin-bottom: 1rem;
}
`

export const SlideItem = styled.div`
height: 70vh;
`

export const CarWrap = styled.div`
width: 90%;
margin-top: 2rem;
`

export const Container = styled.div`
padding: 5rem 2rem 5rem 2rem;
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
@media (max-width: 1000px){
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
    padding-left: 5vw;
}
`
export const Hours = styled.div`
display: flex;
flex-direction:column;
font-family: 'Laila';
font-size: 20px;
color: wheat;
@media (max-width: 1000px){
    font-size: 3.5vw;
}
`

export const Adress = styled.div`
display: flex;
flex-direction:column;
font-family: 'Laila';
font-size: 20px;
color: wheat;
@media (max-width: 1000px) {
    font-size: 3.5vw;
}
a{
    font-size: 18px;
    text-decoration: none;
    color: #ccba14;
}
`

export const Footer = styled.div`
color: white;
font-size: 15px;
.wrapper{
    border: 3px double white;
    padding: .6rem 1rem;
    border-radius: 50%;
    text-align: center;
}
`