import { userInfo } from 'os'
import * as user from '../user'

describe('User Handler',()=>{
    it('It should create user',async ()=>{
        const req = {body:{username: 'hello',password:"hi",}}
        const res = {jssonn({token}){
            expect(token).toBeTruthy()
        }}
        const newuser = await user.createNewUser(req,res,()=>{})
    })
})