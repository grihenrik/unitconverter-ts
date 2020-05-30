
import {converterCategoryBase as ConverterCategoryBase} from "../../converterCategoryBase";
import {MeterToMilesConverter} from './MetersToMilesConverter';
import {MilesToMetersConverter} from './MilesToMetersConverter';

export class DistanceConvertersCategory extends ConverterCategoryBase
{
    constructor(name = "Distance") {
        super(name);
        this.converters[0]= new MeterToMilesConverter("Meters to Miles");
        this.converters[1]= new MilesToMetersConverter("Miles to Meters");
    }
}

