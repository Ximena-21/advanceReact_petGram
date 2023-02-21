import styled from "styled-components"
import { fadeIn } from "../../styles/animation"

export const PhotoCardArticle = styled.article.attrs({
    className: "PhotoCard"
})`
    .photoCard-imgWrapper{
        width: 100%;
        height: 0;
        display: block;
        padding: 56.25% 0 0 0; //relacion 16:9
        position: relative;
        overflow: hidden;
        border-radius: 10px;
    }

    .photoCard-img{
        width: 100%;
        height: 100%;

        object-fit: cover; //se adapate al espacio que tiene
        position: absolute;
        top: 0;

        box-shadow: 0 10px 14px rgba(0,0, 0, .2);

        ${fadeIn()}
    }

    .photoCard-btn{
        display: flex;
        align-items: center;
        padding-top: 8px;
        border: none;
        background: none;

        & svg {
            margin-right: 4px;
        }
    }
`
