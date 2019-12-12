import {FizzBuzzExecutor} from "../src/FizzBuzzExecutor.mjs";

describe('FizzBuzzExecutorTest', function () {
    describe("execute", function () {
        let fizzBuzzExecutor = new FizzBuzzExecutor();
        it("should return Fizz for 3", function() {
            fizzBuzzExecutor.execute(3).should.be.equal("Fizz")
        });
        it("should return Buzz for 5", function() {
            fizzBuzzExecutor.execute(5).should.be.equal("Buzz")
        });
        it("should return FizzBuzz for 15", function() {
            fizzBuzzExecutor.execute(15).should.be.equal("FizzBuzz")
        });
    });
});