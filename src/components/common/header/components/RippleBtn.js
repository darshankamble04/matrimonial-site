import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../css/rippleBtn.css'
function RippleBtn(props) {
    const buttonRef = useRef(null);

    useEffect(() => {
        const button = buttonRef.current;
        button.addEventListener('click', handleClick);
        return () => {
            button.removeEventListener('click', handleClick);
        };
    }, []);
 
    const handleClick = (event) => {
        const x = event.clientX - event.target.offsetLeft;
        const y = event.clientY - event.target.offsetTop;
        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        buttonRef.current.appendChild(ripple);
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    };
    return (
        <Link to={props.link} className='rippleBtn mx-1' ref={buttonRef}>
            {props.text}
        </Link>
    )
}

export default RippleBtn