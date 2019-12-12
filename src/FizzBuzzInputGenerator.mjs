export class FizzBuzzInputGenerator {
    RANGE_END_EXCLUSIVE = 1001;

    generate()
    {
        return Array.from(new Array(this.RANGE_END_EXCLUSIVE), (x,i) => i+1);
    }
}