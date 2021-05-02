import axios from "axios";

export const getUserData = async (name)=>{
    try{
        const {data} = await axios.get("https://api.github.com/users/" + name);
        console.log("SUCCESS", data);
    return data;
    }catch(e){
        console.log("FAIL",e);
        return null;
    }
}
