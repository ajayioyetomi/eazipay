import React from 'react'
import { styled } from 'styled-components';
import mask from '../../assets/pattern.png'
import dots from '../../assets/red-dots.png';
import pImg from '../../assets/payment-img.png';
import android from '../../assets/ios.png';
import ios from '../../assets/andriod.png';
import { Link } from 'react-router-dom';

const SalarySection = () => {
  return (
    <Wrapper>
        <img src={dots}/>
        <div>
            <div>
                <div>
                    Free forever for your <span className='red'>salary payment</span> 
                </div>
                <p>Subscribe to Eazilife today</p>
                <div>
                    <Link to="#">
                        <img src={ios} />
                        <div>
                            <span>Download on the</span>
                            <span>Appstore</span>
                        </div>
                    </Link>
                    <Link to="#">
                        <img src={android} />
                        <div>
                            <span>Get on</span>
                            <span>Google Store</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div>
                <img src={pImg} />
            </div>
        </div>
    </Wrapper>
  )
}

export default SalarySection;


const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--pink-bg);
    padding:100px 0;
    background-image: url(${mask});
    position: relative;
    & > img{
        position: absolute;
        top:0;
        left:50px;
    }
    & > div{
        width:var(--main-width);
        padding:20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        & > div{
            width:50%;
            &:first-of-type{
                width:400px;
                & > div:first-of-type{
                    font-size:var(--header-text);
                    color:var(--text-color);
                    font-weight: 900;
                    & > span.red{
                        color:var(--red-color);
                    }
                }
                & > P{
                    font-size:16px;
                    font-family: var(--font-1);
                    margin:30px 0 15px;
                    font-weight: 500;
                }
                & > div:last-of-type{
                    display: flex;
                    gap:20px;
                    & > a{
                        background-color: var(--white-color);
                        flex:0.45;
                        padding:10px;
                        border-radius: 4px;
                        box-shadow:1px 6px 20px 6px rgba(0,0,0,0.085);
                        display:flex;
                        height:fit-content;
                        min-width:120px;
                        gap:10px;
                        & > img{
                            width:35px;
                            height:35px;
                        }
                        & > div{
                            display: flex;
                            flex-direction: column;
                            gap:5px;
                            color:var(--text-color);
                            font-family: var(--font-1);
                            & > span:first-of-type{
                                font-size:13px;
                                font-weight:400;
                            }
                            & > span:nth-of-type(2){
                                font-size:14px;
                                font-weight:bold;
                            }
                        }
                        @media screen and (width <= 767px) {
                            flex:1;
                        }
                        
                    }
                }
            }
            &:nth-of-type(2){
                text-align: right;
                & > img{
                    width:90%;
                }
            }
        }
        @media screen and (width <= 767px) {
            flex-direction: column;
            gap:30px;
            padding:10px 0;
            
            & > div:first-of-type{
                width:100%;
                & > div:first-of-type,& > p{
                    text-align:center;
                }
            }
            & > div:last-of-type{
                text-align:center;
                width:100%;
                & > img{
                    width:80%;
                }
            }
        }
    }
    @media screen and (width <= 600px){
        padding:80px 0;
        & > img{
            width:60px;
        }
    }

    

`