// export const GET_ADD = "GET_ADD";
// export const GET_RED = "GET_RED";
// export function getAdd(num) {
//     return{
//         type:GET_ADD,
//         payload:{num}
//     }
// }
//
// export function getRed(num){
//     return{
//         type: GET_RED,
//         payload:{num}
//     }
// }


export const GET_VALUE = "GET_VALUE"

export function getValue(value){
    return{
        type:GET_VALUE,
        payload:{value}
    }
}

export const DONE="DONE"
export function done(doneId){
    return{
        type:DONE,
        payload:{doneId}
    }
}

export const DELETE="DELETE"
export function del(delId){
    return{
        type:DELETE,
        payload:{delId}
    }
}


export const CONFIRM="CONFIRM"
export function confirmation(confirmationId,setConfirmationValue){
    return{
        type:CONFIRM,
        payload:{confirmationId,setConfirmationValue}
    }
}

export const COUNT = "COUNT"
export function countDone(count){
    return{
        type:COUNT,
        payload:{count}
    }
}

export const DELETE_ALL = "DELETE_ALL"
export function deleteAll(){
    return{
        type:DELETE_ALL
    }
}