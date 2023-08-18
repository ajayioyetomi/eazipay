import { styled } from "styled-components";


const Btn = (props) =>{
    const label = props.children || props.label || "Button";
    return (
        <button {...props}>
            {label}
        </button>
    )
}



const Button = styled(Btn)`
    padding:15px 40px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 8px;
    background-color: ${props=> props.bg || 'var(--dark-green)'};
    color:${props=> props.color || `var(--white-color)`};
    box-shadow:${props => props.shadow || 'none'};
    border:none;
    outline:none;
    font-size:13px;    
    cursor:pointer;
`

export default Button;