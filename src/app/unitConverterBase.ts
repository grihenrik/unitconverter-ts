/**
 * Unit converter Base
 * 
 */
import { IunitConverter } from "./templates";

export class UnitConverterBase implements IunitConverter {
    constructor(public name: string, public iunit: string, public ounit: string) {
        
    }
    getName(): string {
        return this.name;
    }
    getInputUnit(): string{
        return this.iunit;
    }
    getOutputUnit(): string{
        return this.ounit;
    }

    convert(inValue:string):string{
        return "converter not yet operating";
    }

}
