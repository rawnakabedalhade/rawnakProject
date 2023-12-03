let likeCountries=[]; 
const getData=()=>{
let data=localStorage.getItem('countries');
if(!data){
    localStorage.setItem('countries',JSON.stringify(likeCountries));
    data=localStorage.getItem('countries');
}
likeCountries=JSON.parse(data);
}

const updateData=(countryName)=>{
    console.log(likeCountries);
    if(likeCountries.includes(countryName)){
        let filtered=likeCountries.filter((item)=>{
            return item!=countryName;
        });
        likeCountries=filtered;

    }
    else{
        likeCountries.push(countryName);
    }
    localStorage.setItem('countries',JSON.stringify(likeCountries));
}

export {likeCountries,getData,updateData}