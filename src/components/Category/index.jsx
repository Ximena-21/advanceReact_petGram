import { Anchor, Image } from "./Category.styled"

// https://imgur.com/dJa0Hpl.jpg
const DEFAULT_IMAGE = 'https://imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?'}) => (

    <Anchor href={path}>
        <Image src={cover} alt="img" />
        {emoji}
        {/* {name} */}
    </Anchor>
)