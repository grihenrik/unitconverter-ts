import { UnitConverterBase } from "../../unitConverterBase";

export class KgToLbsConverter extends UnitConverterBase
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
        let kg = parseFloat(inValue);
        let lbs=kg*2.204623;
        return lbs.toFixed(4);
    }
}