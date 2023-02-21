import styled from "styled-components";
import { fadeTop } from "../../styles/animation";

export const ListCategoriesContainer = styled.div.attrs({
    className: "listOfCategories"
})`

    ul{
        display:flex;
        overflow: scroll;
        width: 100%;
        
        &::-webkit-scrollbar {
            display: none;
        }

        &.fixed {
            background: #fff;
            border-radius: 60px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
            left: 0;
            margin: 0 auto;
            right: 0; // se usa junto al left y el margin, centrar horizontalmente
            max-width: 400px;
            padding: 5px;
            position: fixed;
            top: -20px;
            transform: scale(.5); //modifica tama;o a la mitad
            z-index: 1;
            ${fadeTop()}
        }
    }

    li{
        padding: 0 8px;
    }
    
`