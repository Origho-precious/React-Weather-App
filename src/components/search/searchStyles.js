import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div `
    height: 100vh;
    width: 400px;
    color: #FFF;
    padding: 1rem 1rem;
    background-color: #1E213A;
    position: fixed;
    top: 0;
    left: 0;

    @media(max-width: 1000px){
        max-width: 100%;
    }
`;

export const Close = styled(Link)`
    display: block;
    font-size: 3rem;
    font-weight: 200;
    float: right;
    margin-top: -2rem;
    color: #FFF;
    text-decoration: none;
`;

export const Flexbox = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4rem 0 1rem;
`;

export const Input = styled.input`
    border: 1.2px solid #FFF;
    border-radius: 0.25rem;
    color: #FFF;
    font-size: 1rem;
    width: 70%;
    height: 45px;
    padding: 0 1rem;
    background: transparent;
`;

export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 0.25rem;
    background-color: #3C47E9;
    color: #FFF;
    width: 6rem;
    height: 45px;

    &:hover{
        opacity: 0.8;
    }
`;

export const Alert = styled.p`
    color: red;
    text-align: center;
`;

export const Location = styled.div`
    margin: 2rem 0;
    font-size: 1.5rem;
    padding: 0.7rem 1rem;

    & p{
        display: none;
    }

    &:hover{
        border: 1.2px solid #FFF;
        border-radius: 0.25rem;
    }

    &:hover  p{
        font-size: 3rem;
        font-weight: 200;
        float: right;
        display: block;
        margin-top: -0.5rem;
        font-size: 1.8rem;
    }

`;