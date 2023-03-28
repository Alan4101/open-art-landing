import { deleteAsync } from "del";

export const reset = (done) =>{
    deleteAsync(["dist"]);
    done();
} 
