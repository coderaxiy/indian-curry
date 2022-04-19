import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import React from 'react'
import { Adress, CarWrap,  Container, Footer, Hours,  SlideItem, Wrapper } from './styled'
import { images } from '../utils/restaurant';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {FaTelegram} from 'react-icons/fa'
import halal from '../assets/images/halal.png'


const actions = [
  { icon: <a style={{marginTop:'8px'}} href='https://www.instagram.com/indiancurry_daejeon/'><RiInstagramFill size={'1.5rem'} color='#a10d0d'/></a> },
  { icon: <a style={{marginTop:'8px'}} href="https://t.me/TvIsloh"><FaTelegram size={'1.5rem'} color='skyblue' /></a>}
];





const Home = () => {
  return (
    <Wrapper>
      <CarWrap>
      <Carousel infiniteLoop={true} autoPlay={true} interval={2000} showStatus={false} showThumbs={false}>
                {
                  images.map((val,id) => (
                    <SlideItem key={id}>
                      <img src={val.img}  alt="" />
                    </SlideItem>
                  ))
                }
            </Carousel>
      </CarWrap>
      <Container>
        <Hours>
        <div className='title'>Working Hours</div>
          <div>Monday ~ Sunday - 10:00 am - 10:00 pm</div>
          <div>Tuesday ~ Day Off</div>
          <div className='attent'>Kitchen closes 30 minutes before closing time</div>
          <div>Reservations - 042-825-9937</div>
        </Hours>
        <Adress>
        <div className='title'>Our Location</div>
          <div>Indian Curry N9</div>
          <div>대전광역시 유성구 대학로 169 Daejeon</div>
          <div>Click to navigation link below</div> <span> <a href=" http://kko.to/Gyk85dNhW"><FaMapMarkerAlt /> Kakao map</a></span>
        </Adress>
        {/* <Footer>
          <div className='wrapper'>
            <div>حلال</div>
            <div>Halal</div>
          </div>
      </Footer> */}
      </Container>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action, index) => (
          <SpeedDialAction
            key={index+1}
            icon={action.icon}
          />
        ))}
      </SpeedDial>
    </Wrapper>
  )
}

export default Home;