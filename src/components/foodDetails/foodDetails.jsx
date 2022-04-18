import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { menu} from '../utils/restaurant'
import { Wrapper } from './style'


const FoodDetails = () => {
    const {id} = useParams()
    const [selected, setSelected] = useState([])
    useEffect(() => {
        let res = menu.filter((v) => v.id == `${id}`.replace(':', ''));
        setSelected(res);
    },[id])
  return (
    <div>
        {
            selected.map((val) => (
                <Wrapper key={[val.id]}>
                    <img src={[val.img]} alt="" />
                    <div className='title-wrap'>
                        <div className='title'>{[val.title]}</div>
                        <div className='price'>{[val.price]}₩</div>
                    </div>
                        <div className='ingredients'>{[val.uzb]}</div>
                        <div className='ingredients'>{[val.eng]}</div>
                        <div className='time'>Time: 10 min</div>
                </Wrapper>
            ))
        }
    </div>
  )
}

export default FoodDetails