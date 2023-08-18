import React from 'react'
import { styled } from 'styled-components';
import gradient from '../../assets/gradients.png';
import bannerImg from '../../assets/banner-image.png';
import { Button } from '../../components';
import aLogo from '../../assets/ios.png';
import iosLogo from '../../assets/andriod.png';

const Banner = () => {
  return (
    <Wrapper>
        <div>
            <div>
                <div>
                    <div>
                        <span className='black'>Run your</span> <span className='green'>payroll</span>
                        <span className='gold'> easily</span> <span className='red'>in</span> <span>seconds</span> 
                    </div>
                    <p>
                        We've built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.
                    </p>
                    <div>
                        <Button shadow="2px 4px 6px 2px rgba(0,0,0,0.15)">
                            Start Using Free, Forever
                        </Button>

                    </div>
                    <div>
                        <span>Download the Eazipay App</span>
                        <div>
                            <a href="#">
                                <img src={iosLogo} />
                                <div>
                                    <span>Download on the</span>
                                    <span>Appstore</span>
                                </div>
                            </a>
                            <a href="#">
                                <img src={aLogo} />
                                <div>
                                    <span>Get on</span>
                                    <span>Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src={bannerImg}/>
            </div>
        </div>
    </Wrapper>
  )
}

export default Banner;

const Wrapper = styled.section`
    background-image: url(${gradient});
    padding:76px 0 40px;
    display: flex;
    justify-content: center;
    height:100vh;
    & > div{
        display: grid;
        grid-template-columns: 0.9fr 1.1fr;
        gap:3vw;
        & > div:first-of-type{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:flex-end;

            & > div{
                width:410px;
                display:flex;
                
                flex-direction: column;
                & div:first-of-type{
                    font-size:55px;
                    font-weight: bold;
                    & > span.green{
                        color:#11453B;
                    }
                    & > span.black{
                        color:#292A29
                    }
                    & > span.red{
                        color:#EA4E4B;
                    }
                    & > span.gold{
                        color:#B4A572;
                    }
                }
                & > p{
                    line-height: 1.5;
                    font-family:var(--font-1);
                    font-size:20px;
                }
                & > div:last-of-type{
                    margin-top:50px;
                    display: flex;
                    flex-direction: column;
                    gap:15px;
                    & > span{
                        font-weight: 500;
                        font-family: var(--font-1);
            
                    }
                    & > div{
                        display: flex;
                        gap:15px;
                        flex:1;
                        & > a{
                            background-color: var(--white-color);
                            flex:0.45;
                            padding:10px;
                            border-radius: 4px;
                            box-shadow:1px 6px 20px 6px rgba(0,0,0,0.085);
                            display:flex;
                            height:fit-content;
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
                        }
                    }
                }
            }


        }
        & > div:nth-of-type(2){
            display: flex;
            & > img{
                width:100%;
                height: auto;
                object-fit: contain;
            }
        }
    }
    

`