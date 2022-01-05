import axios from "axios"

export const fetchPosts = () => async(dispatch,getState) => {
    
    dispatch({type: "FETCH_POSTS_REQUEST"});

    try{
        const response = await axios.get('https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2022-01-05&' +
        'sortBy=popularity&' +
        'apiKey=54b167ab970142b488123d59fe062475');
        dispatch ({type: "FETCH_POSTS_SUCCESS",payload: response.data});
        console.log(response.data);
    }
    catch(error){
        dispatch({type: "FETCH_POSTS_FAILURE", error});
    }
    
}