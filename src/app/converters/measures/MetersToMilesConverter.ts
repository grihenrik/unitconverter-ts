import { UnitConverterBase } from "../../unitConverterBase";

export class MeterToMilesConverter extends UnitConverterBase
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
        let m = parseFloat(inValue);
        let mi=m/1609.344;
        return mi.toFixed(2);
    }
}