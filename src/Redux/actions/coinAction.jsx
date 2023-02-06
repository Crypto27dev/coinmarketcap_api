import { ActionType } from '../types'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL || "";
const API_KEY = process.env.REACT_APP_API_KEY || "";

export const fetchCoinList = (start, limit) => async dispatch => {
    try {
        const res = await axios.get(API_URL,
            {
                params: {
                    sort: 'cmc_rank',
                    start: start,
                    limit: limit
                },
                headers: {
                    "X-CMC_PRO_API_KEY": API_KEY
                }
            }
        )
        dispatch({
            type: ActionType.GET_COIN_LIST,
            payload: res.data
        })
    }
    catch (error) {
        dispatch({
            type: ActionType.COIN_LIST_ERROR,
            payload: error,
        })
    }
}

export const fetchCoinCount = () => async dispatch => {
    try {
        const res = await axios.get(API_URL,
            {
                headers: {
                    "X-CMC_PRO_API_KEY": API_KEY
                }
            }
        )
        dispatch({
            type: ActionType.GET_COIN_COUNT,
            payload: res.data.data.length
        })
    }
    catch (error) {
        dispatch({
            type: ActionType.COIN_LIST_ERROR,
            payload: error,
        })
    }
}

