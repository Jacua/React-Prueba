import React from 'react';
import { useFecthGif } from '../hooks/useFecthGif';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data,loading} = useFecthGif(category);

    return (
        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated__flash'>Loading</p>}

            <div className='cardGrid'>   
                {
                    data.map( img => (
                        <GifGridItem 
                        key={img.id} 
                        {...img} //operador spret para desestrucrar parametros
                        />
                    ))
                }
            </div>
        </>
    )
}
