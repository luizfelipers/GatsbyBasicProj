import styled from 'styled-components'

export const Button = styled.button`
    border-radius:5px;
    background: ${({primary}) => (primary ? 'red' : 'blue')};
    white-space:nowrap;
    padding: ${({big}) => (big ? '16px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    border:none;
    cursor: pointer;
    outline:none;
    font-family:sans-serif;

&:hover{
    transition: all 0.4s ease;
    background: ${({primary}) => (primary ? 'orange' : 'purple')};
    color: ${({primary}) => (primary ? 'black' : 'white')};
    border-radius:15px;
    
}

@media screen and (max-width:960px){
    width: 100%;
}

`;