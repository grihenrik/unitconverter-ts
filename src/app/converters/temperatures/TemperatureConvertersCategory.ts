import { converterCategoryBase } from "../../converterCategoryBase";
import { CelsiusToFarenheitConverter } from "./CelsiusToFarenheitConverter";
import { FarenheitToCelsiusConverter } from "./FarenheitToCelsiusconverter";
export class TemperatureConvertersCategory extends converterCategoryBase{
    constructor(name = "Temperature") {
        super(name);
        this.converters[0]= new CelsiusToFarenheitConverter("Celsius to Farenheit");
        this.converters[1]= new FarenheitToCelsiusConverter("Farenheit to Celsius");
    }

}