import styled from 'styled-components';
import cloudImg from '../../assets/Cloud-background.png'
import { Link } from 'react-router-dom';
import Clear from '../../assets/Clear.png';
import Hail from '../../assets/Hail.png';
import HeavyCloud from '../../assets/HeavyCloud.png';
import HeavyRain from '../../assets/HeavyRain.png';
import LightCloud from '../../assets/LightCloud.png';
import LightRain from '../../assets/LightRain.png';
import Shower from '../../assets/Shower.png';
import Sleet from '../../assets/Sleet.png';
import Snow from '../../assets/Snow.png';
import Thunderstorm from '../../assets/Thunderstorm.png';


export const weatherImages = {
    s: Shower,
    sn: Snow,
    c: Clear,
    h: Hail,
    hc: HeavyCloud,
    hr: HeavyRain,
    lc: LightCloud,
    lr: LightRain,
    sl: Sleet,
    t: Thunderstorm
}


export const Wrapper = styled.div`
    height: 100vh;
    width: 550px;
    padding: 1rem 1rem;
    background-color: #1E213A;
    position: relative;
    text-align: center;

    @media(max-width: 1000px){
        max-width: 100%;
        height: 100%;
    }
`;

export const Background = styled.div`
    height: 100%;
    max-width: 100vw;
    margin: auto;
    background: url(${cloudImg}) no-repeat top center;
    opacity: 0.4;
    top: 4rem;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
`;

export const SearchButton = styled(Link)`
    display: block;
    text-decoration: none;
    border: none;
    border-radius: 0.5rem;
    background-color: #6e707a;
    color: #fff;
    font-size: 1rem;
    padding: 1rem 0;
    width: 200px;

    &:hover{
        opacity: 0.9;
    }

    @media(max-width: 1000px){
        width: 100%;
    }
`;

export const Image = styled.img.attrs(props => ({
    src: props.src 
}))`
    max-width: 200px;
`;

export const Temp = styled.h1`
    font-size: 5rem;
    font-weight: 500;
    margin: 2rem 0;

    & span{
        font-size: 3rem;
    }
`;

export const Description = styled.h3`
    font-size: 2rem;
    margin: 2rem 0;
`;

export const Date = styled.p`
    font-size: 1.2rem;
`;

export const Location = styled.p`
    font-size: 1.2rem;
    margin: 1rem 0;
`;

