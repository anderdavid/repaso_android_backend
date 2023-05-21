const login =(req,res)=>{
    console.log('login');
    res.status(200).json({
        msg:'hello login'
    })
}

module.exports={
    login
}