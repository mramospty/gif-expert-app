import React/*, {useEffect, useState}*/ from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import {getGifs} from "../helpers/getGifs";

const GifGrid = ({category}) => {


    // ********************* NOTA: LO COMENTADO CORRESPONDE AL USO NORMAL DE HOOKS *****************************
    // ********************* SE COMENTÓ PARA IMPLEMENTAR EL CUSTOM HOOK Y LO DEJÉ COMO REFERENCIA **************

    // // use effect con dependencias []
    // // permite llamar el método getGifs únicamente cuando el componente
    // // es renderizado por primera vez
    // useEffect(() => {
    //
    //     // getGifs retorna una promesa, por ende podemos resolverla aquí
    //     // La sentencia anterior toma un parámetro y lo pasa a la función
    //     // como no hace más nada lo podemos resumir así:
    //     getGifs( category )
    //         .then( setImages );
    //     // Esto sería equivalente a la siguiente expresión
    //     // .then( images => setImages( images ) )
    //     // donde el primer argumento images se envía a la función y por defecto
    //     // quedando de forma simple: .then( setImages )
    //
    //     // si dejamos las dependencias así: []
    //     // nos dará un warning ya que la cateogoría pudiese cambiar y no lo estamos
    //     // considerando, por ende ponemos category como dependencia y listo
    // }, [category]);
    //
    // const [images, setImages] = useState([]);

    //implementación con custom hooks
    // al igual que la desestructuración de un campo anidado, también
    // podemos cambiar el nombre de un campo en la desestructuración
    const {data: images, loading} = useFetchGifs(category);

    return (
        <>
            <h3 className={"animate__animated animate__fadeIn"}>{category}</h3>
            {loading  && <p className={"animate__animated animate__flash"}>Loading</p>}

            <div className={"card-grid"}>
                <span></span>
                {images.map((imagen) => (
                    <GifGridItem
                        key={imagen.id}
                        // si lo envío de la siguiente manera:
                        // image={imagen}
                        // en el componente hijo lo debo desestructurar
                        // así : {image: {title, url, id} }
                        // puedo mandarlo también de la siguiente manera
                        // que ya está desestructurado
                        {...imagen}
                        // y en el componente hijo sólo necesitaria obtenerlo
                        // de esta forma: {url, id, title}

                    />
                ))
                }
            </div>


            {/* Implementación antigua sin custom hook*/}

            {/*<div className={"card-grid"}>*/}
            {/*    {images.map((imagen) => (*/}
            {/*        <GifGridItem*/}
            {/*            key={imagen.id}*/}
            {/*            // si lo envío de la siguiente manera:*/}
            {/*            // image={imagen}*/}
            {/*            // en el componente hijo lo debo desestructurar*/}
            {/*            // así : {image: {title, url, id} }*/}
            {/*            // puedo mandarlo también de la siguiente manera*/}
            {/*            // que ya está desestructurado*/}
            {/*            {...imagen}*/}
            {/*            // y en el componente hijo sólo necesitaria obtenerlo*/}
            {/*            // de esta forma: {url, id, title}*/}

            {/*        />*/}
            {/*    ))*/}
            {/*    }*/}
            {/*</div>*/}
        </>
    )
};

export default GifGrid;
