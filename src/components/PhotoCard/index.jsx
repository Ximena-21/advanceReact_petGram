import { PhotoCardArticle } from "./PhotoCard.styled"
import { MdFavoriteBorder } from "react-icons/md";
const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png"

export const PhotoCard = ({id, likes=0, src=DEFAULT_IMAGE}) => {
    return (
        <PhotoCardArticle>
            <a href={`/detail/${id}`}>
                <div className='photoCard-imgWrapper'>
                    <img className='photoCard-img' src={src} alt='images' />
                </div>
            </a>

            <button className='photoCard-btn'>
                <MdFavoriteBorder size='32px'/> {likes} likes!
            </button>
        </PhotoCardArticle>
    )
}