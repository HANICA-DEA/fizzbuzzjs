import {FizzBuzzExecutor} from "../src/FizzBuzzExecutor.mjs";
import {FizzBuzzInputGenerator} from "../src/FizzBuzzInputGenerator.mjs";
import {FizzBuzzRunner} from "../src/FizzBuzzRunner.mjs";

describe('FizzBuzzRunnerTest', function () {
    let fizzBuzzRunner = new FizzBuzzRunner();

    describe("execute", function () {
        it("should call FizzBuzzExecutor and FizzBuzzInputGenerator", function() {
            // Arrange
            const spyExecutor = sinon.spy(FizzBuzzExecutor.prototype, "execute");
            const spyGenerator = sinon.spy(FizzBuzzInputGenerator.prototype, "generate");

            // Act
            fizzBuzzRunner.main()

            // Assert
            spyExecutor.called.should.be.equal(true)
            spyExecutor.callCount.should.be.equal(1001)
            spyGenerator.called.should.be.equal(true);
            spyGenerator.callCount.should.be.equal(1)

            spyExecutor.restore()
            spyGenerator.restore()
        });

        it("should not call FizzBuzzExecutor when FizzBuzzInputGenerator generates empty list", function() {
            // Arrange
            const spyExecutor = sinon.spy(FizzBuzzExecutor.prototype, "execute");
            const spyGenerator = sinon.stub(FizzBuzzInputGenerator.prototype, "generate").returns([]);

            // Act
            fizzBuzzRunner.main()

            // Assert
            spyExecutor.called.should.be.equal(false)
        });
    });
});
