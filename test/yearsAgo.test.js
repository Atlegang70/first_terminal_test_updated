import assert from "assert";
import yearsAgo from "../yearsAgo.js";


describe('YearsAgo Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("22", yearsAgo("2000"));

    });
    it('This should pass' , function(){
        assert.equal("23", yearsAgo("1999"));

    });
    it('This should pass' , function(){
        assert.equal("14", yearsAgo("2008"));

    });

})