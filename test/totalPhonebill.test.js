import assert from "assert";
import totalPhoneBill from "../totalPhonebill.js";


describe('totalPhoneBill Function Testing' , function(){
    it('This should pass' , function(){
        assert.equal("R4.05", totalPhoneBill("sms, sms, call"));

    });
    it('This should pass' , function(){
        assert.equal("R6.15", totalPhoneBill("call, sms, call"));

    });

    it('This should pass' , function(){
        assert.equal("R8.25", totalPhoneBill("call, call, call"));

    });

});

