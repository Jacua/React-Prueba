import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGif';


export const useFecthGif = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    useEffect(() =>{

       getGif(category).then(img => {
            setstate({
                data : img,
                loading : false
            });
       });

    },[]);


    return state;
    
}
