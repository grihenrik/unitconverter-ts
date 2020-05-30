import { UnitConverterBase } from "../../unitConverterBase";

export class LbsToKgConverter extends UnitConverterBase
{
    constructor(public name: string, public iunit: string = "m", public ounit: string = "mi") {
        super(name, iunit, ounit);
    }

    getInputUnit(){
        return this.iunit;
    }
    getOutputUnit(){
        return this.ounit;
    }
    convert(inValue: string): string{
        let lbs = parseFloat(inValue);
        let kg=lbs/2.204623;
        return kg.toFixed(4);
    }
}