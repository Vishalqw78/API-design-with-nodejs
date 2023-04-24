import merge from "lodash.merge";

// make sure NODE_ENV is set
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const stage = process.env.STAGE || 'local';

let envConfig;

if(stage==='production'){
    envConfig = require('./prod').default
}else if(stage==='testing'){
    envConfig = require('./teesting').default
}else{
    envConfig = require('./local').default
}

export default merge({
    stage,
    env: process.env.NODE_ENV,
    port : 8314,
    secrets:{
        jwt : process.env.JWT_SECRET,
        dburl : process.env.DATABASE_URL
    }
},envConfig)