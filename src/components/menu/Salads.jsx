import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../utils/restaurant'
import { Title, Wrap, ItemWrap} from './style'

const Salads = () => {
  return (
    <Wrap>
        <Title>
        <div>Salads</div><span>/</span>
        <div>Salatlar</div><span>/</span>
        <div>샐러드</div>
      </Title>
      <ItemWrap>
          {
            menu.slice(0,4).map((val)=>(
              <div key={val.id}>
              <img  src={val.img} alt="" />
              <Link to={`/salads/:${val.id}`}>View More Details</Link>
              </div>
            ))
          }
      </ItemWrap>
    </Wrap>
  )
}

export default Salads;