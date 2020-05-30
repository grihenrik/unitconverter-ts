import { IconverterCategory, IunitConverter } from "./templates";
export class converterCategoryBase implements IconverterCategory {
    converters: IunitConverter[]=[];
    constructor(public name:string) {

    }
    getName(): string {
        return this.name;
    };
    getConverters(): IunitConverter[]{
        return this.converters;
    };
    getConverter (name: string):IunitConverter|null {
        for( let i = 0; i<this.converters.length; i++){
            if(this.converters[i].getName()===name){
                return this.converters[i];
            }
        }
        return null;
    }; 
}