export class FizzBuzzExecutor {
    execute(i) {
        let returnValue = "";

        if (i % 3 == 0) {
            returnValue += "Fizz";
        }
        if (i % 5 == 0) {
            returnValue += "Buzz";
        }
        if (returnValue.length == 0) {
            returnValue += i;
        }
        return returnValue;
    }
}