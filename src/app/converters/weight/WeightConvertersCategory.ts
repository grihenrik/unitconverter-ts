import {converterCategoryBase as ConverterCategoryBase} from "../../converterCategoryBase";
import {KgToLbsConverter} from './KgToLbsConverter';
import {LbsToKgConverter} from './LbsToKgConverter';

export class WeightConvertersCategory extends ConverterCategoryBase
{
    constructor(name = "Weight") {
        super(name);
        this.converters[0]= new KgToLbsConverter("Kilograms to Pounds");
        this.converters[1]= new LbsToKgConverter("Pounds to Kilograms");
    }
}