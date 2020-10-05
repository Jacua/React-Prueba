import React,{useState} from 'react';
import ReacDom from 'react-dom';
import { AddCategory } from './component/AddCategory';
import {GifGrid} from './component/GifGrid'


export const GifExpertApp = ()=>{

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['']);
    
    // const handleAdd = () =>{

    //     setCategories(['Batman',...categories]);
    // }

    return(<> 
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr/>
        
        <ol>
            {categories.map( category =>{return <GifGrid key={category} category={category}/> })}
        </ol>
    </>);
}