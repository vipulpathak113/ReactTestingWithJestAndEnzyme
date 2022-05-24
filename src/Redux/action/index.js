import {types} from './types'
import axios from 'axios'

export const fetchData =()=>{

    return async (dispatch)=>{
        await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then(res=>{
            dispatch({
                type: types.GET_TYPES,
                payload : res.data
            })
        }).catch(err=>{
            console.log(err);
        })
    }

}