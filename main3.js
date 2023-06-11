const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


//   for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i])

//   }


  // forEach
//   companies.forEach((company) => {
//     console.log(company.category)
//   })
  


  // filter

  // Get 21 and older
//   let canDrink = [];
//   for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
//   }

// const canDrink = ages.filter((age) => {
//     if(age <= 35) {
//         return true;
//     }
// })

// const canDrink = ages.filter((age) => age >= 21 )

// filter retail companies
//const retail = companies.filter((company, index) => company.category === 'Retail')

// const EightiesCompanies = companies.filter((company) => (company.start >= 1980 && company.start <= 1989));

// console.log(EightiesCompanies)

// const lastedTen = companies.filter((company) => (company.end - company.start >= 10));

// console.log(lastedTen)


  // map

  // const companayName = companies.map((company) => {return company.name});

  // console.log(companayName);

  // const testMap = companies.map((company) => `${company.name} [${company.start} - ${company.end}]`)

  // console.log(testMap);

  // const ageMap = ages
  // .map(age => Math.sqrt(age))
  // .map(age => age * 2);

  // console.log(ageMap);





  // sort

  // const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1 ));

  // console.log(sortedCompanies);

  // const sortAges = ages.sort((a, b) => b - a);

  // console.log(sortAges);



  // reduce

  // const ageSum = ages.reduce((total, age) => total + age, 0);

  // console.log(ageSum);

  // combine Methods

  // const combined = ages
  //       .map((age) => age * 2)
  //       .filter((age) => age >= 40)
  //       .sort((a, b) => a - b )
  //       .reduce((a, b) => a + b, 0)

  // console.log(combined);