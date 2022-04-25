import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../utils/restaurant'
import { Title, Wrap, ItemWrap} from './style'

const Salads = () => {
  return (
    <Wrap>
        <Title>
          <div className='title-wrap'>
            <div>Salads</div><span>/</span>
            <div>Salatlar</div><span>/</span>
            <div>샐러드</div>
        </div>
      </Title>
      <ItemWrap>
        <div className='flex-wrap'>
          {
            menu.slice(0,4).map((val)=>(
              <div className='image-wrap' key={val.id}>
              <Link to={`/soups/:${val.id}`}><img  src={val.img} alt="" /></Link>
              </div>
            ))
          }
          </div>
      </ItemWrap>
    </Wrap>
  )
}

export default Salads;