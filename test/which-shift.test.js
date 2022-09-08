import assert from "assert";
import transportFee from "../which-shitft.js";


describe('Transportfee Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal(transportFee('morning'), 'R20');

    });
    it('This should pass' , function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });
    it('This should pass' , function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');


    });

})