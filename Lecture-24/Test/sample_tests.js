const {expect} = require('chai')

describe('sample test',()=>{
    it('should be a string',()=>{
        expect('1234').to.be.a('string')
    })

    it('should be a number',()=>{
        expect(1234).to.be.a('number')
    })
})