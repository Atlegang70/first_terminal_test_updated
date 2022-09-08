import assert from "assert";
import isWeekDay from "../isWeekday.js";


describe('The isWeekday function', function(){

    it('this should be true with Monday', function(){
        assert.equal(true, isWeekDay('Monday'));
    });
    it('this should be true with Wensday', function(){
        // this test will fail - can you fix it?
        assert.equal(true, isWeekDay('Wensday'));
    });
    it('this should be false with Sunday', function(){
        // this test will fail - can you fix it?
        assert.equal(false, isWeekDay('Sunday'));
    });
});