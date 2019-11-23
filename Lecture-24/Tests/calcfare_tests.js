const {expect} = require('chai')
const {calculateFare} = require('../fareutils')


describe('fare test',()=>{
    it('shoule be 25 for 0km,0min',()=>{
        let fare = calculateFare(0,0)
        expect(fare).to.be.a('number')
        expect(fare).to.equal(25)
    })

    it('shoule be 33 for 3km,0min',()=>{
        let fare = calculateFare(3,0)
        expect(fare).to.be.a('number')
        expect(fare).to.equal(33)
    })

    it('shoule be 38 for 3km,20min',()=>{
        let fare = calculateFare(3,20)
        expect(fare).to.be.a('number')
        expect(fare).to.equal(38)
    })
})