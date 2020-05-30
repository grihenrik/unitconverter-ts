export interface IunitConverter {
    getName: ()=> string,
    getInputUnit:() => string,
    getOutputUnit:()=> string,
    convert: (inValue: string)=>string,
}

export interface IconverterCategory {
    getName: ()=> string,
    getConverters: ()=> IunitConverter[],
    getConverter: (name: string)=> IunitConverter | null, 
}