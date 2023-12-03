import { countries, getCountries,reset,search } from "./countries.service.js";
import { getData, likeCountries, updateData } from "./localStorage.service.js";

const searchInput=document.getElementById("search");

const cards=document.getElementById("cards");
searchInput.addEventListener('keyup',(e)=>{
    console.log(e);
reset();
cards.innerHTML='';
if(!e.target.value||e.target.value==''){
    return createCardList();
}
search(e.target.value);
createCardList();
});
const createCard=(country)=>{
    const card=document.createElement('div');
    card.className='card m-2 col-md-3 col-sm-12 p-3';

    const cardImg=document.createElement('img');
    cardImg.className='card-img-top img border rounded shadow mt-2';
    cardImg.src = country.flags.png;

    const cardBody=document.createElement('div');
    cardBody.className='card-body';

    const cardTitle=document.createElement('h3');
    cardTitle.className='card-title';
    cardTitle.textContent=country.name.common;

    const population=document.createElement('p');
    population.className='card-text';
    population.textContent=`population: ${country.population}`;

    const cardFooter=document.createElement('div');
    cardFooter.className='card-footer d-flex justify-content-center';

    const heart=document.createElement('i');
    heart.addEventListener('click',(e)=>{
        updateData(country.name.common);
         if(heart.classList[heart.classList.length-1]=='text-dark'){
            heart.classList='fa fa-heart text-danger'
        }
        else{
             heart.classList='fa fa-heart text-dark'
        }

    });
    let isliked=false;
    getData();
    if(likeCountries.includes(country.name.common)){
      isliked=true;
    }
     heart.className=`fa fa-heart ${isliked? 'text-danger':'text-dark'}`;

    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(population);
    card.appendChild(cardBody);
    cardFooter.appendChild(heart);
    card.appendChild(cardFooter);

    cards.appendChild(card);

}

export const createCardList=async ()=>{
    for(const item of countries){
        createCard(item);
    }
}