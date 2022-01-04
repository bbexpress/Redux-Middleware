import axios from "axios"

export const fetchPosts = () => async(dispatch,getState) => {
    
    dispatch({type: "FETCH_POSTS_REQUEST"});

    try{
        const response = await axios.get('https://trends.google.com/trends/api/widgetdata/multiline?hl=en-GB&tz=-60&req=%7B%22time%22:%222018-05-29+2019-05-29%22,%22resolution%22:%22WEEK%22,%22locale%22:%22en-GB%22,%22comparisonItem%22:%5B%7B%22geo%22:%7B%22country%22:%22US%22%7D,%22complexKeywordsRestriction%22:%7B%22keyword%22:%5B%7B%22type%22:%22BROAD%22,%22value%22:%22sports+cars%22%7D%5D%7D%7D%5D,%22requestOptions%22:%7B%22property%22:%22%22,%22backend%22:%22IZG%22,%22category%22:0%7D%7D&token=APP6_UEAAAAAXO-yaYekqJ7Tf2nuoLBAigMSW7axoLTL&tz=-60');
        dispatch ({type: "FETCH_POSTS_SUCCESS",payload: response.data});
    }
    catch(error){
        dispatch({type: "FETCH_POSTS_FAILURE", error});
    }
    
}