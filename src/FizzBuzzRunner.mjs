import {FizzBuzzExecutor} from "./FizzBuzzExecutor.mjs";
import {FizzBuzzInputGenerator} from "./FizzBuzzInputGenerator.mjs";

export class FizzBuzzRunner {
    main() {
        const fizzBuzzExecutor = new FizzBuzzExecutor();
        const generator = new FizzBuzzInputGenerator();
        let list = generator.generate();
        list.forEach( list => {
            let result = fizzBuzzExecutor.execute(list);
            console.log(result);
        });
    }
}