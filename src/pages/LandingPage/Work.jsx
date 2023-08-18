import React from 'react'
import { styled } from 'styled-components';
import phoneBg from '../../assets/phone-bg.png';
import phone from '../../assets/phone.png';
import leftStep from '../../assets/left-step.png';
import rightStep from '../../assets/right-step.png';

const list = [
    {
        title:"Create your free account",
        description:"Click here to set up your Eazipay account."
    },
    {
        title:"Add Employee data",
        description:"Your employee information is 100% safe and secure.",
    },
    {
        title:"Prepare your Transaction",
        description:"Run payroll: Bulk Salaries and Compliance are done at once!"
    }
]

const Work = () => {
  return (
    <Wrapper>
        <div>
            <div>
                <div>How Eazipay Works</div>
                <p>Get started in 3 simple steps.</p>
            </div>
            <div>
                <div>
                    <img src={phoneBg} />
                    <img src={phone} />
                </div>
                <div>
                    {list.map(({title,description},index) =>
                        <Card key={index}>
                            {index == 0 ? <img src={leftStep} />: index == 1?
                            <img src={rightStep} />
                            :''}
                            <span>{index+1}</span>
                            <div>{title}</div>
                            <div>{description}</div>
                        </Card>
                    )}

                </div>

            </div>
        </div>

    </Wrapper>
  )
}

export default Work

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    padding:50px 0;
    & > div{
        width:var(--main-width);
        display: grid;
        grid-template-columns: 1fr;
        gap:50px;
        & > div:first-of-type{
            display:flex;
            flex-direction: column;
            gap:20px;
            & > div{
                text-align: center;
                font-size:var(--header-text);
                color:var(--dark-green);
                font-weight: 900;
            }
            & > p{
                margin:0;
                text-align:center;
                font-size:18px;
                font-family:var(--font-1);
                font-weight:500;


            }
        }
        & > div:nth-of-type(2){
            display: flex;
            gap:20px;
            align-items: center;
            justify-content: center;
            gap:15vw;
            & > div:first-of-type{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                & > img{
                    z-index: 2;
                    height:80vh;
                    &:first-of-type{
                        position: absolute;
                        z-index: 1;
                        /* left:0; */
                        width:390px;
                        height: 390px;
                        animation: animate-circle 0.9s infinite forwards linear alternate-reverse;
                        
                    }
                }
            }
            @media screen and (width <= 767px) {
                flex-direction: column;
                padding:10px 40px;
                & > div:first-of-type{
                    width:100%;
                    & > img{
                        height:65vh;
                        &:first-of-type{
                            width:60%;
                            height:auto;
                        }
                    }

                }
                
            }
            @media screen and (width <= 500px) {
                flex-direction: column;
                padding:10px 30px;
                & > div:first-of-type{
                    width:100%;
                    & > img{
                        height:55vh;
                        &:first-of-type{
                            width:90%;
                            height:auto;
                        }
                    }

                }
                
            }
        }
    }
    

`

const Card = styled.div`
    width:200px;
    height:130px;
    position:relative;
    padding:30px 10px 0;
    display:flex;
    flex-direction: column;
    gap:5px;
    cursor:pointer;
    &:first-of-type > img{
        height:100%;
        width:30px;
        display: inline-block;
        position:absolute;
        left:-20px;
        top:0;
    }
    &:nth-of-type(2) > img{
        height:calc(100% + 10px);
        width:130px;
        display: inline-block;
        position:absolute;
        right:-10px;
        top:-8px;
    }
    & > span{
        position:absolute;
        display: flex;
        width:40px;
        height:40px;
        border-radius: 12px;
        background-color: #eee;
        top:-30px;
        left:30px;
        justify-content: center;
        align-items:center;
        font-weight: bold;
    }
    &:hover{
        & > span{
            background-color: var(--dark-green) !important;
            color:var(--white-color) !important;
            box-shadow: var(--shadow);
        }
    }
    font-family: var(--font-1);
    & > div:first-of-type{
        font-weight: bold;
        font-size:15px;
    }
    & > div:nth-of-type(2){
        font-size:12px;
    }
    
`