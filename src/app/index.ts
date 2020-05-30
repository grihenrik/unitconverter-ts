
import { CelsiusToFarenheitConverter } from "./converters/temperatures/CelsiusToFarenheitConverter";
import { FarenheitToCelsiusConverter } from "./converters/temperatures/FarenheitToCelsiusconverter";
import { TemperatureConvertersCategory } from "./converters/temperatures/TemperatureConvertersCategory";
import { MeterToMilesConverter } from "./converters/measures/MetersToMilesConverter";
import { MilesToMetersConverter } from "./converters/measures/MilesToMetersConverter";
import { DistanceConvertersCategory } from "./converters/measures/DistanceConvertersCategory";
import { categoriesHandler } from "./categoriesHandler";
let output: string = "Unitconverter starting...";
console.log(output);

// let testTempConv = ()=> {
//     console.log('Testing temp conv');
//     let c2f = new CelsiusToFarenheitConverter('Celsius to Farenheit');
//     let f2c = new FarenheitToCelsiusConverter('Farenheit to Celsius');
//     let c1 = '10';
//     let c2 = '50';
//     console.log(`Conversion from ${c1} ${c2f.getInputUnit()} to ${c2f.convert(c1)} ${c2f.getOutputUnit()}`);
//     console.log(`Conversion from ${c2} ${f2c.getInputUnit()} to ${f2c.convert(c2)} ${f2c.getOutputUnit()}`);
// }

// let testDistConv = ()=>{
    
//         console.log("Testing measure conv");
//         let m2mi =new MeterToMilesConverter('Meter to Miles');
//         let mi2m = new MilesToMetersConverter("Miles to Meters");
//         let m1 = "10000";
//         let m2 = "3";
//         console.log(`Conversion from ${m1} ${m2mi.getInputUnit()} to ${m2mi.convert(m1)} ${m2mi.getOutputUnit()} `);
//         console.log(`Conversion from ${m2} ${mi2m.getInputUnit()} to ${mi2m.convert(m2)} ${mi2m.getOutputUnit()} `);
//     }


// let testAllCategories = ()=>{
//     console.log ('Testing all conversion categories');
//     //let tempConvCat = new TemperatureConvertersCategory();
//     let categories = [(new TemperatureConvertersCategory()),(new DistanceConvertersCategory()),];
//     let inputValue='30';
//     for (let i = 0; i<categories.length; i++){
//         let cat = categories[i];
//         let catitems = cat.getConverters();
//         console.log(`category items: ${cat.getName()}`);
//         for(let j = 0; j <catitems.length; j++){
//             let conv = catitems[j];
//             console.log(`Convertert ${conv.getName()}`);
//             console.log(`Conversion ${inputValue} to ${conv.convert(inputValue)}`);
//         }
//     }
// }
//testTempConv();
//testDistConv();
//testAllCategories();
let cat = new categoriesHandler()