import { UnitConverterBase } from "../../unitConverterBase";

export class FarenheitToCelsiusConverter extends UnitConverterBase {
    constructor(public name: string, public iunit: string = "°F", public ounit: string = "°C") {
        super(name, iunit, ounit);
    }

    getInputUnit(){
        return this.iunit;
    }
    getOutputUnit(){
        return this.ounit;
    }
    convert(inValue: string): string{
        let f = parseFloat(inValue);
        //let f=(c*9/5)+32;
        // c= (f-32)*5/9;
        let c= (f-32)*5/9;
        return c.toFixed(2);
    }
}