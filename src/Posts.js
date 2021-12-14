import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from './action';

function Posts(props) {

    const dispatch = useDispatch();

    const value = useSelector((state) =>{
        return state;
    });

    useEffect(()=>{
        console.log('dispatch');
        dispatch(fetchPosts());
    },[dispatch]);

    const renderPosts = () => {
        if(value.loading){
            return<h1>Loading...</h1>
        }else{
            return value.items.map(el => {
                return <h3 key={el.id}>{el.title}</h3>
            })
        }
    }

    return (
        <div>
           {renderPosts()}
        </div>
    )
}
export default Posts;