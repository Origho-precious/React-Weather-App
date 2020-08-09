import React from 'react';
import { Wrapper } from './highlightStyles';

const Highlights = (props) => {
    return (
        <Wrapper>
            { props.children }
        </Wrapper>
    );
}

export default Highlights;