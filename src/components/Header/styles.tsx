import styled from 'styled-components';
import image from '../../assets/images/pattern-bg.png'

export const Background = styled.header`
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    height: 260px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding: 3rem 38rem;
`
export const Title = styled.h1`
    color: #FFF;
    font-weight: 500;
`
export const ContainerInput = styled.div`
    width: 100%;
    height: 50px;
    background-color: #FFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    display: block;
    width: 92%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border-radius: 10px 0px 0px 10px;
    padding: 1.5rem;
    font-size: 1.2rem;
    font-weight: 400;

    &::placeholder {
       color: #bebebe;
       font-size: 0.9em
   }
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8%;
    height: 100%;
    background-color: #000;
    border-radius: 0px 10px 10px 0px;
    transition: all 0.2 ease-in-out;


    &:hover{
        transition: all 0.2 ease-in-out;
        background:#3f3f3f
    }

`