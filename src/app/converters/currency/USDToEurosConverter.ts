import { UnitConverterBase } from "../../unitConverterBase";

export class USDToEurosConverter extends UnitConverterBase
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
        let valIn = parseFloat(inValue);
        let valOut=valIn/1.11078;
        return valOut.toFixed(4);
    }
}