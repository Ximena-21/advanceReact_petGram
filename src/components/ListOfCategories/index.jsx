import { ListCategoriesContainer } from "./ListOfCategories.styled"
import {categories as MockCategories } from '../../../api/db.json'
import { Category } from "../Category"
import { useEffect, useState } from "react"


export const ListOfCategories = () => {
    const [categories, setCategories] = useState([])
    const [showFixed, setShowFixed] = useState(false)

    useEffect (()=>{
        const fetchCategories = async () => {
            const response = await window.fetch('https://petgram-server-edsf8xpy2.now.sh/categories')

            const data = await response.json()

            setCategories(data)
        }

        fetchCategories()
    }, [])

    useEffect(()=>{
        const onScroll = e => {
            window.scrollY > 200 ? setShowFixed(true) : setShowFixed(false)
        }
        document.addEventListener('scroll', onScroll)

        //devolver una fx para limpiar los eventos
        return () => {document.removeEventListener('scroll', onScroll)}
    }, [showFixed])

    return (
        <ListCategoriesContainer>
            <ul className={showFixed ? 'fixed' : ''}>
                {
                    //se pasan las props usando el operador rest operator {} para pasar hacia abajo todas las props de ese objeto, 
                    //enviando cada uno de los objetos como props tbm se podria pasar manualmente cover = {category.cover} .... etc
                    categories.map(category=><li key={category.id}><Category {...category}/></li>)
                }
            </ul>
        </ListCategoriesContainer>
    )
}