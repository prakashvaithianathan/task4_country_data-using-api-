const request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);


request.send();

const first = document.querySelector(".first");
request.onload = ()=>{
    let data = JSON.parse(request.response);



    //! GET COUNTRIES FROM ASIA CONTINENTS FROM
   let asiaContinent = data.filter((element,i,arr)=>{
         return element.region == 'Asia' ;  
   })
   let asiaC = asiaContinent.map((element)=>{
    const coun = document.createElement("span");
    coun.setAttribute("class","coun");
    coun.innerHTML =element.name+",";
    var last = asiaContinent.length-1;
    
    if(element.name==asiaContinent[last].name){
      coun.innerHTML=element.name+".";
    }
    first.appendChild(coun);
        return element.name;
         
   })
   
   const second = document.querySelector('.second');
   //!GET LESS THAN 2LAKH POPULATION
  let lessPopulation = data.filter(function(element){
      return element.population>200000;
  })
  let lessP = lessPopulation.map((element)=>{
    const popu = document.createElement("span");
   popu.setAttribute("class","popu");
   popu.innerHTML=element.name+",";
   var lastt = lessPopulation.length-1;
   
   if(element.name==lessPopulation[lastt].name){
    popu.innerHTML=element.name+".";
  }
   second.appendChild(popu);
    return element.name;
})

let container = document.querySelector('.container');
  //!PRINT THE NAME, CAPITAL, AND FLAG
  data.forEach((element,i,arr)=>{
    //   console.log(element.name,element.capital,element.flag);
      const imageDiv = document.createElement("img");
      imageDiv.setAttribute("src",element.flag);
      imageDiv.setAttribute('class',"card flagStyle");
      const mainBox = document.createElement("div");
      mainBox.setAttribute('class','mainBox');
      mainBox.appendChild(imageDiv);
      container.appendChild(mainBox);
      const backSide = document.createElement("div");
      backSide.setAttribute('class','card backSide');
      const countryName = document.createElement("h3");
      countryName.innerHTML=  `COUNTRY : ${element.name}`;
      backSide.appendChild(countryName);
       mainBox.appendChild(backSide);
       const capitalName = document.createElement("h3");
       capitalName.innerHTML = `CAPITAL: ${element.capital}`;
       backSide.appendChild(capitalName)
      
  })


  //!PRINT THE TOTAL POPULATION OF COUNTRIES
const population = document.querySelector('.population');
const totalPopulation =data.reduce((previous,current)=>{
          return previous +=current.population;
},0)
var y=totalPopulation;
var ress= y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
population.innerHTML=ress;


//!TOTAL POPULATION OF COUNTRIES IN ASIA 
const asiaPopulation = document.querySelector(".asiaPopulation");
const totalAsiaPopulation = data.filter((value)=>{
     return value.region=="Asia"
})
    const tot=  totalAsiaPopulation.map((value,i)=>{
              return value.population;
      })

      const tP = tot.reduce((previous,current)=>{
         return previous += current;
      },0)
      var x=tP;
var res= x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

     asiaPopulation.innerHTML=res;
}




// var x=12565778;
// var res= x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

// console.log(res);