// import {GET_ADD, GET_RED} from "../actions/action";
//
// const initialState = {
//     num:0
// }
//
// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GET_ADD:{
//             return {
//                 ...state,
//                 num:action.payload.num + 1
//             }
//         }
//         case GET_RED:{
//             return {
//                 ...state,
//                 num:action.payload.num - 1
//             }
//         }
//
//         default:{
//             return state;
//         }
//     }
// }


import {CONFIRM, COUNT, DELETE, DELETE_ALL, DONE, GET_VALUE} from "../actions/action";

const initialState = {
    value:"",
    data: JSON.parse(localStorage.getItem('list')) || [],
    count: 0,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_VALUE:{
            const newItem = {
                value: action.payload.value,
                id: new Date().getTime(),
                done: false,
            };

            const updatedData = [...state.data, newItem];
            localStorage.setItem("list", JSON.stringify(updatedData));

            return {
                ...state,
                data:updatedData,

            }
        }
        case DONE:{
              const updatedData = state.data.map((item)=>{
                    if(item.id === action.payload.doneId){
                       return{
                           ...item,
                           done:!item.done,
                       }
                    }
                    return item;
                })

            localStorage.setItem("list", JSON.stringify(updatedData));
            return {
                ...state,
                data:updatedData,
            }
        }
        case DELETE:{
            const updatedData = state.data.filter((item)=>{
                return item.id !== action.payload.delId
            })
            localStorage.setItem("list", JSON.stringify(updatedData));
            return {
                ...state,
                data:updatedData,
            }
        }
        case CONFIRM:{
            const updatedData = state.data.map((item)=>{
                if(item.id === action.payload.confirmationId){
                    return{
                        ...item,
                        value: action.payload.setConfirmationValue,
                    }
                }
                return item;
            })
            localStorage.setItem("list", JSON.stringify(updatedData));
            return {
                ...state,
                data:updatedData,
            }
        }
        case COUNT:{
            const count = state.data.reduce((acc, item)=>acc+item.done, 0);
            return {
                ...state,
                count:count,
            }
        }
        case DELETE_ALL:{
            return {
                ...state,
                data:[]
            }
        }
        default:{
            return state;
        }
    }
}