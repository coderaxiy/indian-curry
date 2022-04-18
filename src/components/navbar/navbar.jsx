import React, { useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { DrawerTitle, Links, LinkWrap, Logo, Wrap } from './style'
import {BiMenuAltRight} from 'react-icons/bi'
import {RiRestaurantLine} from 'react-icons/ri'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import { Drawer } from 'antd'
import 'antd/dist/antd.css';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
import {RiArrowDownSFill} from 'react-icons/ri'
import {Menu, Dropdown} from 'antd'
import {BiCoffeeTogo} from 'react-icons/bi'
import {GiCakeSlice} from 'react-icons/gi'


const menu = (
    <Menu>
      <Menu.Item style={{color:'#212121', padding:'10px 30px', fontSize:'16px', fontFamily:'Montserrat', fontWeight:'600'}}>
          AllDay Menu
      </Menu.Item>
      <Menu.Item style={{color:'#212121', padding:'10px 30px', fontSize:'16px', fontFamily:'Montserrat', fontWeight:'600'}}>
          Beverage Menu
      </Menu.Item>
      <Menu.Item style={{color:'#212121', padding:'10px 30px', fontSize:'16px', fontFamily:'Montserrat', fontWeight:'600'}}>
          Dessert Menu
      </Menu.Item>
    </Menu>
  );

const Navbar = () => {
    const location = useLocation()
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate()
  
    const drawerOpen = () => {
      setVisible(true);
    };
  
    const draweClose = () => {
      setVisible(false);
    };
  return (
      <>
    <Wrap>
        <Logo onClick={() => navigate ('/')}>Indian Curry</Logo>
        <LinkWrap>
          <Dropdown overlay={menu} placement="bottom">
            <div className='menu'> Menus <RiArrowDownSFill size={'1.5rem'} color='wheat' /></div>
            </Dropdown>
            <Links active={location.pathname.includes('/store') ? "active" : null} to='/store'><MdOutlineLocalGroceryStore />Halal Food</Links>
            <div className='menuBtn'>
            <BiMenuAltRight onClick={drawerOpen} size={'2.2rem'} color='white' />
            </div>
        </LinkWrap>
        <Drawer title={<DrawerTitle>Indian Curry</DrawerTitle>} width={'15rem'} maskClosable={'true'} autoFocus={false}
                placement="right" onClose={draweClose} 
                visible={visible} bodyStyle={{backgroundColor:'#282e30', color:'#ff8200', display:'flex', flexDirection:'column'}}
                footerStyle={{height:'50px', backgroundColor:'gray'}} closeIcon={<MdOutlineRestaurantMenu size={'1.2rem'} color='red'/>}
                headerStyle={{backgroundColor:'#282e30', borderBottom:'1px solid red'}}
                >
            <Links onClick={draweClose} style={{display:'flex', alignItems:'center', color:'wheat', 
                         borderBottom:'1px solid', padding:'0',borderRadius:'0'}} to='/salads'><RiRestaurantLine />Salads</Links>
            <Links onClick={draweClose} style={{display:'flex', alignItems:'center', color:'wheat', 
                         borderBottom:'1px solid', padding:'0',borderRadius:'0',marginTop:'10px'}} to='/soups'><BiCoffeeTogo />Soups</Links>
            <Links onClick={draweClose} style={{display:'flex', alignItems:'center', color:'wheat', 
                         borderBottom:'1px solid',padding:'0',borderRadius:'0',marginTop:'10px'}} to='/store'><GiCakeSlice />Desserts</Links>
            <Links onClick={draweClose} style={{display:'flex', alignItems:'center', color:'wheat', 
                         borderBottom:'1px solid',padding:'0',borderRadius:'0',marginTop:'10px'}} to='/store'><MdOutlineLocalGroceryStore />Halal Store</Links>
      </Drawer>
    </Wrap>
    <Outlet />
    </>
  )
}

export default Navbar