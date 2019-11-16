const passport = require('passport')
const LocalStratergy = require('passport-local').Strategy
const FacebookStratergy = require('passport-facebook').Strategy

const {Users} = require('./db') 

passport.use(new FacebookStratergy({
    clientID:'775579259557095',
    clientSecret:'XXXXXXXXXXXXXXXX',
    callbackURL:'http://localhost:4433/login/facebook/callback'
},async function(token,rt,profile,done){
    let user = await Users.findOne({
        where:{username:profile.displayName}
    })
    if(user){
        return done(null,user) 
    }
    user = await Users.create({
        username:profile.displayName,
        fbId:profile.id,
        fbToken:token
    })
    done(null,user) 
}))


passport.use(new LocalStratergy(
    function(username,password,done){
        Users.findOne({
            where:{username:username} 
        }).then((user)=>{
            if(!user){
                return done(null,false) 
            }
            if(user.password != password){
                return done(null,false) 
            }
            done(null,user) 
        }).catch(done)
    }
))

passport.serializeUser(
    function(user,done){
        done(null,user.id) 
    }
)

passport.deserializeUser(
    function(userId,done){
        Users.findByPk(userId).then((user)=>{
            done(null,user) 
        }).catch(done)
    }
)

module.exports = passport 