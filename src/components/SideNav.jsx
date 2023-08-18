import React from 'react'
import { styled } from 'styled-components';
import logo from '../asset2/account-logo.png';
import dashoard from '../asset2/dashboard.png';
import wallet from '../asset2/wallet.png';
import employee from '../asset2/user-plus.png';
import payroll from '../asset2/payroll.png';
import compliance from '../asset2/compliance.png';
import loan from '../asset2/loan.png';
import book from '../asset2/book.png';
import support from '../asset2/support.png';
import settings from '../asset2/settings.png';
import { Link } from 'react-router-dom';
import {BsChevronDown as DownIcon} from 'react-icons/bs';



const list = [
  {
    id:1,
    name:'Dashboard',
    path:'dashboard',
    icon1:dashoard,
    icon2:''
  },
  {
    id:2,
    name:'Wallet',
    path:'wallet',
    icon1:wallet,
    icon2:''
  },
   {
    id:3,
    name:'Employee Management',
    path:'employee-management',
    icon1:employee,
    icon2:''
  },
    {
    id:4,
    name:'Payroll',
    path:'payroll',
    icon1:payroll,
    icon2:''
  },
   {
    id:5,
    name:'Compliance',
    path:'compliance',
    icon1:compliance,
    icon2:''
  },
    {
    id:6,
    name:'Quick Loan',
    path:'quick-loan',
    icon1:loan,
    icon2:''
  },
   {
    id:7,
    name:'Book Keeping',
    path:'book-keeping',
    icon1:book,
    icon2:''
  }

]

const SideNav = () => {
  return (
    <Wrapper>
      <div>
        <img src={logo} />
      </div>
      <SideLinks>
        {
          list.map(({id,name,path,icon1,icon2})=>
            <Link to={path} key={id} className={id==1?'active':''}>
              <img src={icon1} />
              <span>{name}</span>
              <DownIcon />
            </Link>
          )
        }

      </SideLinks>
      <div>
        <Link>
          <img src={support} />
          <span>Support</span>
          <DownIcon />
        </Link>
        <Link>
          <img src={settings} />
          <span>Settings</span>
          <DownIcon />
        </Link>
      </div>
    </Wrapper>
  )
}

export default SideNav


const Wrapper = styled.aside`
    box-shadow: 1px 0 10px 2px rgba(0,0,0,0.01);
    height:100%;
    display: flex;
    flex-direction: column;
    gap:30px;
    & > div{
      &:first-of-type{
        & > img{
          width:100%;
        }
      }
      &:last-of-type{
        display: grid;
        grid-template-columns: 1fr;
        & > a{
          height:50px;
          font-family: var(--font-1);
          border-bottom: 1px solid #ddd;
          padding-right:5px;
          position: relative;
          color:#333;
          &::before{
            content:'';
            width: 3px;
            display:inline-block;
            height:100%;
            
          }
          &.active,&:hover{
            background-color: #fafafa;
            color:var(--dark-green);
            &::before{
              background-color: var(--dark-green);
            }
          }
          display: flex;
          align-items: center;
          gap:12px;
          & > span{
            font-size:13.5px;
            font-weight: 500;
            color:#333;

          }
          &.active > span{
            color:var(--dark-green);
          }
          & > svg{
            position:absolute;
            right:3px;
            font-size:12px;
          }
          
        }
      }
    }
    
`

const SideLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  & > a{
    height:50px;
    font-family: var(--font-1);
    border-bottom: 1px solid #ddd;
    padding-right:5px;
    position: relative;
    color:#333;
    &::before{
      content:'';
      width: 3px;
      display:inline-block;
      height:100%;
      
    }
    &.active,&:hover{
      background-color: #fafafa;
      color:var(--dark-green);
      &::before{
        background-color: var(--dark-green);
      }
    }
    display: flex;
    align-items: center;
    gap:12px;
    & > span{
      font-size:13.5px;
      font-weight: 500;
      color:#333;

    }
    &.active > span{
      color:var(--dark-green);
    }
    & > svg{
      position:absolute;
      right:3px;
      font-size:12px;
    }
    
  }


`