import User from ".src/model/userModels.js";

export const create=async(req,res)=>{
    try {
        const userData=new User(req.body);
        const {email}=userData;

        const userExist=await User.findOne({email})
        if(userExist){
            return res.status(400).json({message:"User already exists."}); 
        }
        const savedUser=await userData.save();
        res.status(200).json(savedData);



    } catch (error) {
        res.status(500).json({error:"internak server error"});
    }
}
export const fetch=async(req,res)=>{
    try{
res.json("hello world");
    }catch(error){
        res.status(500).json({error:"internal server error."})
    }
}