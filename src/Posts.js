import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts } from './action';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Posts.css';

function Posts() {

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
            console.log(value);
            return<h1>Loading...</h1>
        }else{
            return value.items.articles.map((el, index) => {
                return (
                    <div className="posts-container" key={index}>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>{el.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                <img src={el.urlToImage} width="200" height="200" alt="/logo.svg"></img><br></br>
                                {el.description}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )       
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