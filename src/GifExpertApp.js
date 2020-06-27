import React, {useState} from 'react';
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = (props) => {
    //const categories = ["One Punch Man", "Samurai X", "Dragon Ball"];
    const [categories, setCategories] = useState(["One Punch Man"]);

    // const handleAdd = () => {
    //     // pueden agregarse así
    //     setCategories([...categories, 'test']);
    //
    //     // o así (Este es muy útil cuando no se quiere enviar el estado
    //     // al otro componente
    //     //setCategories( cats => [...categories, 'tested']);
    // };

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    // siempre debe colocarse un id al elemento
                    // en una iteración, para que react sepa
                    // como identificar el elemento de manera única
                    categories.map(category => (
                        <GifGrid
                            key={category}
                            category={category}/>
                    ))
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
