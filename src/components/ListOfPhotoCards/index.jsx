import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCars = () => {
    return (
        <ul>
            {
                [1,2,3,4,5].map(id=> <PhotoCard key={id}/>)
            }
        </ul>
    )
}