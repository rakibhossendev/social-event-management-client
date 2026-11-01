import { authClient } from "./auth-client";

export async function getJWTTokenClient(){
   const {data,error} =  await authClient.token();
   if(error){
    console.log(error)
   }
   return data?.token
}