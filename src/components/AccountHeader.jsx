import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import logo from '../asset2/c-logo.png';
import notice from '../asset2/notice.png';
import profile from '../asset2/profile.png';
import {BsChevronRight as RightIcon} from 'react-icons/bs';

const AccountHeader = () => {
  return (
    <Wrapper>
      <Link to="/account/dashboard">
        <img src={logo} />
      </Link>
      <div>
        <div>
          <img src={notice} />
          <div>

          </div>
        </div>
        <div>
          <img src={profile} />
          <div>
            <span>Kalu Abasiama</span>
            <div>
              <span>Admin</span>
              <RightIcon />

            </div>
          </div>
        </div>

      </div>
    </Wrapper>

  )
}

export default AccountHeader


const Wrapper = styled.header`
  position: fixed;
  width:calc(100% - 230px);
  right:0;
  top:0;
  background-color: var(--white-color);
  box-shadow: 0 1px 10px 1px rgba(0,0,0,0.09);
  height: 55px;
  padding:10px 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a{
    height:100%;
    
    & > img{
      height:100%;
    }
  }
  & > div{
    display: flex;
    gap:30px;
    align-items: center;
    & > div:first-of-type{
      & > img{
        width:25px;
      }
    }
    & > div:last-of-type{
      display: flex;
      align-items: center;
      min-width: 200px;
      gap:10px;
      & img{
        width:30px;
        
      }

      & > div{
        flex:1;
        display: grid;
        grid-template-columns: 1fr;
        font-family: var(--font-1);
        font-size: 13px;
        font-weight: bold;
        cursor:pointer;

        & > div{
          font-weight: 300;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }

`