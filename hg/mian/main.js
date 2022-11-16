let url = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=spring&page=1'



async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
  }
  getData();

  let film = document.querySelectorAll('.film')

  console.log(film[0])

async function ter(){
  const res = await fetch(url);
  const data = await res.json();
    
  film[0].innerHTML = 'Название фильма: ' + data.results[Math.floor(Math.random()*5)].original_title;
  film[1].innerHTML = 'Описание фильма: '  + data.results[Math.floor(Math.random()*5)].overview;

  

}
    