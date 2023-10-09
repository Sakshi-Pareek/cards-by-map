let data = [
    { name: 'sakshi ',
     description: 'description1',
      date: 21, 
      Img: './assets/images/webp/team_1.webp' },
    { name: 'jiya', description: 'description2', date: 19, Img: './assets/images/webp/team_2.webp' },
    { name: 'tanisha', description: 'description3', date: 16, Img: './assets/images/webp/team_3.webp' }

]


const mycontent = document.querySelector(".container")
const newdata = data.map((a) => {
    return `
    <div class="col-lg-4">
        <div class="card">
            <img src=${a.Img} alt="" class="card-img-top">
           <div>
                <h2>${a.name}</h2>
                <p>${a.description}</p>
                <a href="#" class="btn btn-primary">${a.date}</a>
            </div>
        </div>
   </div>
    `
}).join('')
mycontent.innerHTML = newdata
