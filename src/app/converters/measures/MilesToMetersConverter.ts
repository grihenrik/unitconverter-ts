import { UnitConverterBase } from "../../unitConverterBase";

export class MilesToMetersConverter extends UnitConverterBase
{
    constructor(public name: string, public iunit: string = "mi", public ounit: string = "m") {
        super(name, iunit, ounit);
    }

    getInputUnit(){
        return this.iunit;
    }
    getOutputUnit(){
        return this.ounit;
    }
    convert(inValue: string): string{
        let mi = parseFloat(inValue);
        let m=mi*1609.344;
        return m.toFixed(2);
    }
}