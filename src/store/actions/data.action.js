import { ADD, GET, DELETE } from "./type"

export const getData = () =>  ({
    type: GET
})

export const addData = (value) =>  ({
   type: ADD,
   data:value
});

export const removeData = () => ({
    type:DELETE
})