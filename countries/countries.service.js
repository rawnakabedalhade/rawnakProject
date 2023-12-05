export const getCountries= async ()=>{
    const res=await fetch('https://restcountries.com/v3.1/all');
    const data=await res.json();
    return data;
}

const countriesFull=await getCountries();
let countries =[...countriesFull];
 countries.sort((a, b) => a.name.common.localeCompare(b.name.common));

const search=(text)=>{
countries=countries.filter((item)=>{
   const name= item.name.common.toLowerCase();
   return name.includes(text.toLowerCase());
})
}
const reset=()=>{
    countries=[...countriesFull];
}
export{countries, reset,search};