import React from 'react';

// si en el componente padre paso el objeto de imagen
// tengo que desesctructurarlo haciendo referencia a
// image: {campos}
// const GifGridItem = ({image:{title, url, id}}) => {
// si en el padre paso la desestructuración así: {..image}
// sólo tendría que desesctructurar de esta forma: {campos}
const GifGridItem = ({title, url, id}) => {

    return (
        <div className={"card animate__animated animate__fadeIn"}>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
};

export default GifGridItem;
