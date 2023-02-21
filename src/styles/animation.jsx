import styled, { keyframes, css } from "styled-components";
//keyframes -----> utilidad de styled, que permiite creae los keyframes para hacer animaciones en nustras imagenes y estilos
//css --> 


//fx para hacer reutilizable la animacion 
//{time = '1s', type = 'ease'} = {} ----> el valor por defecto de todos los parametros es un {}
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
    css`animation: ${time} ${fadeInKeyframes} ${type} ;`

const fadeInKeyframes = keyframes`
    //empieza la animacion
        from {
            filter: blur(5px); //desenfoque en la animacion
            opacity: 0;
            margin-bottom: 0;
        }

    //termina la animacion
        to {
            filter: blur(0);
            opacity: 1;
            margin-bottom: 0;
        }
    `


export const fadeTop = ({ time = '1s', type = 'ease' } = {}) =>
    css`animation: ${time} ${topBottomAnimation} ${type} ;`

const topBottomAnimation = keyframes`
    from {
            /* filter: blur(5px); //desenfoque en la animacion */
            opacity: 0;
            transform: translateY(-20%)
            /* margin-top: 100%; */
        }

    //termina la animacion
        to {
            /* filter: blur(0); */
            opacity: 1;
            transform: translateY(0);
            /* margin-top: 0; */
        }
`