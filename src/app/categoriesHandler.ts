import { converterCategoryBase } from "./converterCategoryBase";
import { TemperatureConvertersCategory } from "./converters/temperatures/TemperatureConvertersCategory";
import { DistanceConvertersCategory } from "./converters/measures/DistanceConvertersCategory";
import { WeightConvertersCategory } from "./converters/weight/WeightConvertersCategory";
import { CurrencyConvertersCategory } from "./converters/currency/CurrencyConvertersCategory";

export class categoriesHandler {
    categoriesIndex = 0;
    converterIndex = 0;
    constructor( public categories: converterCategoryBase[] = []) {
        let tempConvCat = new TemperatureConvertersCategory();
        let distConvCat = new DistanceConvertersCategory();
        let weightConvCat = new WeightConvertersCategory();
        let currencyConvCat = new CurrencyConvertersCategory();
        this.categories = [
            tempConvCat,
            distConvCat,
            weightConvCat,
            currencyConvCat,
        ]
        let e = document.getElementById("convertButton") as HTMLInputElement;
        e.addEventListener("click", event =>{
            this.convertButtonClick(event);
        })
        let c = document.getElementById("selectConverter") as HTMLInputElement;
        c.addEventListener("change", event =>{
            this.converterChange(event);
        })
        let cat = document.getElementById("selectCategory") as HTMLInputElement;
        cat.addEventListener("change", event =>{
            this.categoryChange(event);
        })
        let z = this.setCategoriesSelection(this.categories);
        this.setConverterSelection(this.categories[this.categoriesIndex]);

    }
    convertButtonClick(event: Event){
        let eIn = document.getElementById("inputValue") as HTMLInputElement;
        let eOut = document.getElementById("outputValue")as HTMLInputElement;
        let valueIn = eIn.value;
        let valueOut = '';
        if(valueIn!==''){
            let cat = this.categories[this.categoriesIndex];
            let conv = cat.getConverters()[this.converterIndex];
            valueOut = conv.convert(valueIn);
            eOut.value = valueOut;
        }
        event.preventDefault();
        console.log(`Click ${valueIn}`);
    }
    setCategoryIcon(category:number){
        let ico = document.getElementById("category-icon");
        let iconImages = ['<i class="fa fa-thermometer-full fa-3x"></i>','<i class="fa fa-road fa-3x"></i>','<i class="fa fa-user fa-3x"></i>','<i class="fa fa-money fa-3x"></i>'];
        console.log(iconImages[category]);
        if(ico) {
            ico.innerHTML = iconImages[category];
            console.log(ico);
        }
        
    }
    setCategoriesSelection(categories:any){
        let cat = document.getElementById("selectCategory");
        categories.forEach((element:any) => {
            let option = document.createElement("option");
            option.value = element.name;
            option.text = element.name;
            cat?.appendChild(option);
        });
    }
    setConverterSelection(converters:any){
        console.log(converters);
        let conv = document.getElementById("selectConverter");
        let cnt = conv?.childElementCount;
        for( let i = 0; i<=(cnt?cnt:0);i++){
            if(conv?.lastChild)
                conv?.removeChild(conv?.lastChild);
        }
        converters.converters.forEach((element:any) => {
            let option = document.createElement("option");
            option.value = element.name;
            option.text = element.name;
            conv?.appendChild(option);
        });
    }
    categoryChange(event: Event){
        this.resetInput();
        
        event.preventDefault();
        let e = document.getElementById("selectCategory") as any;
        this.categoriesIndex = e.selectedIndex;
        this.setCategoryIcon(this.categoriesIndex);
        this.setConverterSelection(this.categories[this.categoriesIndex]);
    }
    converterChange(event: Event){
        
        event.preventDefault();
        let e = document.getElementById("selectConverter") as any;
        this.converterIndex = e.selectedIndex;
        console.log(this.converterIndex);
        //this.setConverterSelection(this.categories[this.categoriesIndex]);
    }
    resetInput(){
        let eIn = document.getElementById("inputValue") as HTMLInputElement;
        let eOut = document.getElementById("outputValue")as HTMLInputElement;
        eIn.value='';
        eOut.value ='';
    }
}