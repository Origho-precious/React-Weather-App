import styled from 'styled-components';
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
    background-color: #1E213A;
    color: #FFF;
    height: 250px;
    padding: 1rem 2rem;
    text-align: center;

    & h4{
        font-weight: 500;
    }
`;

export const Image = styled.img.attrs(props => ({
    src: props.src
}))`
    max-width: 100px;
    margin: 1rem 0 2rem;
`;

export const Flexbox = styled.div`
    display: flex;
    justify-content: space-between;
`;

