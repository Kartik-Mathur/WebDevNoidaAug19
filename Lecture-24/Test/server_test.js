const {expect} = require('chai') 
const {app} = require('../server')
const axios = require('axios') 
const BASE_URL = 'http://localhost:4343'
let serv 
describe('server test',()=>{
    before(()=>{
        serv = app.listen(4343)
    })

    it('should be 25 for 0km,0min',(done)=>{
        axios.get(`${BASE_URL}/fare?km=0&min=0`)
        .then((response)=>{
            expect(response.data.fare).to.be.a('number')
            expect(response.data.fare).to.equal(25) 
            done()
        }).catch((err)=>{
            done(err) 
        })
    })
    
    it('should be Hello',(done)=>{
        axios.get(`${BASE_URL}/hi`)
        .then((response)=>{
            // expect(response.data.fare).to.be.a('string')
            // expect(response.data.fare).to.equal('Hello') 
            done()
        }).catch((err)=>{
            done(err) 
        })
    })
    after(()=>{
        serv.close() 
    })
})

