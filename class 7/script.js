// // setTimeout(function(){console.log('this is the timeout function')},0);

// // console.log('hello world');

// // let marks = 89;

// // let bike = new Promise(function(res,rej){
// //    if(marks>=90){
// //     setTimeout(function(){res('new bike')},5000)
// //    }
// //    else{
// //     rej('try harder')
// //    }
// // });

// // bike
// // .then(res=>console.log(res))
// // .catch(err=>console.log(err));

// fetch('https://ghibliapi.vercel.app/films')
// .then(res=>{return res.json()})
// .then(res=>{console.log(res)})
// .catch(err=>{console.log('something went wrong '+err)});

let movieBox = document.getElementById('movies')

async function getData(){
    let data  =await fetch('https://ghibliapi.vercel.app/films');
    data = await data.json()
   data.map(function(movie){
      let div = document.createElement('div');
      div.innerHTML = `
      <h3>${movie.title}</h3>
      <h4>${movie.original_title}</h4>
      <img src="${movie.image}" style="width:100%" />
      <p>${movie.description}</p>
      `
      movieBox.appendChild(div);
   })
}

getData()