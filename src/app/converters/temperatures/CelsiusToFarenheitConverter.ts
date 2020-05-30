import { UnitConverterBase } from "../../unitConverterBase";

export class CelsiusToFarenheitConverter extends UnitConverterBase {
    constructor(public name: string, public iunit: string = "°C", public ounit: string = "°F") {
        super(name, iunit, ounit);
    }

    getInputUnit(){
        return this.iunit;
    }
    getOutputUnit(){
        return this.ounit;
    }
    convert(inValue: string): string{
        let c = parseFloat(inValue);
        let f=(c*9/5)+32;
        return f.toFixed(2);
    }
}