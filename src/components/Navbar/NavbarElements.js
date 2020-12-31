import styled from 'styled-components';
//import {DiScala} from 'react-icons/Di';
import mylogo from '../../images/mulogo.png'

export const Nav = styled.nav`
    background: ${({active}) => active ? 'red' : 'linear-gradient(to bottom, rgba(255,1,1,0.7) 0%, transparent)'};
    height: 80px;
    display: flex;
    justify-content:center;
    align-items:center;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index:999;
    // background-color: ${({active}) => active ? '#fff' : '#000'};

@media screen and (max-width: 960px){
    background: ${({click}) => (click ? '	#fff' : 'transparent')};
    transition: 0.5s all ease;


}

`;

export const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height: 80px;
    z-index:1;
    width:100%;
    max-width:1000px;
`;

export const NavLogo = styled.a`
    color:yellow;
    justify-self:flex-start;
    cursor: pointer;
    text-decoration:none;
    font-size: 1.5rem;
    display:flex;
    align-items:center;
`;

export const NavIcon = styled.div`
    background-image:url(${mylogo});
    margin: 0 0.5rem 0 2rem;
    background-color: yellow;
    color: yellow;
`;

export const MobileIcon = styled.div`
    display:none;
   

    @media screen and (max-width:960px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform:translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    
    }
`;

export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    list-style:none;
    text-align:center;

    @media screen and (max-width: 960px){
        display:flex;
        flex-direction:column;
        width:100%;
        height:90vh;
        position:absolute;
       top: ${({click}) => (click ? '100%' : '-1000px')};
        opacity:1;
        transition:all 0.2s ease;
        background: #fff;
    }

`;

export const NavItem = styled.li`
    height: 80px;

    @media screen and (max-width: 960px){
        width:100%;
    }
`;

export const NavLinks = styled.a`
    color: yellow;
    display:flex;
    align-items:center;
    text-decoration:none;
    padding: 0.5rem 1rem;
    height:100%;
    font-family: sans-serif;

@media screen and (max-width: 960px){
    text-align:center;
    padding:2rem;
    width:100%;
    display:table;

    &:hover{
        color: #fff;
        transition: all 0.3s ease;
    }
}

`;
