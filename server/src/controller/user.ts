import pool from '../util/db.js';

export const getUserData = (req:any,res:any)=>{

    pool.query('SELECT * from users',(q_err:any,q_res:any)=>{
        if(q_err){
            console.log(q_err);
            res.code = 404
            res.json("some error occur",q_err);
        }
        res.json(q_res.rows);
    })
}

export const deleteUser = (req:any,res:any)=>{
    const {id} = req.params
    pool.query('DELETE FROM users WHERE userId = $1',[id],(q_err:any,q_res:any)=>{
        if(q_err){
            console.log(q_err);
            res.code = 404
            res.json("some error occur",q_err);
        }
        res.json(q_res);    
    })
}
export const createUser = (req:any,res:any)=>{
    const data = [req.body.firstName,req.body.middleName,req.body.lastName,req.body.email,req.body.phoneNumber,req.body.role,req.body.address,req.body.createdDate];
    pool.query('insert into users (firstName,middleName,lastName,email,phoneNumber,role,address,createdDate) values ($1,$2,$3,$4,$5,$6,$7,$8)',data,(q_err:any,q_res:any)=>{
        if(q_err){
            console.log(q_err);
            res.code = 404
            res.json("some error occur",q_err);
        }
        pool.query('select user_id from users order by user_id desc limit 1',(q_err1:any,q_res1:any)=>{res.json(q_res1)})  
    })
}

export const updateUser = (req:any,res:any)=>{
    const {id} = req.params
    const data = [req.body.firstName,req.body.middleName,req.body.lastName,req.body.email,req.body.phoneNumber,req.body.role,req.body.address,req.body.createdDate];
    pool.query('UPDATE users SET firstName=$1,middleName=$2, lastName=$3, email=$4, phoneNumber=$5, role=$6, address=$7, createdDate=$8 WHERE userId=$9',[...data,id],(q_err:any,q_res:any)=>{
        if(q_err){
            console.log(q_err);
            res.code = 404
            res.json("some error occur",q_err);
        }
        res.json(q_res);
    })
}