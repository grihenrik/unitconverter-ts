import {converterCategoryBase as ConverterCategoryBase} from "../../converterCategoryBase";
import {EurosToUSDConverter} from './EurosToUSDConverter';
import {USDToEurosConverter} from './USDToEurosConverter';

export class CurrencyConvertersCategory extends ConverterCategoryBase
{
    constructor(name = "Currency") {
        super(name);
        this.converters[0]= new EurosToUSDConverter("Euros to US Dollars");
        this.converters[1]= new USDToEurosConverter("US Dollars to Euros");
    }
}