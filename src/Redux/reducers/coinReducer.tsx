import { ActionType } from '../types'

const initialState = {
    list: [],
    count: 0,
    loading: true
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case ActionType.GET_COIN_LIST:
            return {
                ...state,
                list: action.payload,
                loading: false
            }
        case ActionType.GET_COIN_COUNT:
            return {
                ...state,
                count: action.payload,
                loading: false
            }
        case ActionType.COIN_LIST_ERROR:
            return {
                loading: false,
                error: action.payload
            }
        default: return state
    }

}