const URL = '';

const btn = document.getElementById('btn');
const cards = document.getElementById('cards');

btn.addEventListener('click',function(){
    fetch(URL)
    .then(function(res){return res.json() })
    .then(function(data){
        const horas  = data.hourly.time.slice(0,3)
          const temps  = data.hourly.temperature_2m.slice(0,3)

          let html =''
        for(let i =0; i < horas.length; i++){
            html += `
            <div class="card">
  <div class="card-body">
    <h5 class="card-title">${temps[i]}°c</h5>
    <h5 class="card-title">Hora:${horas[i]}°c</h5>
  </div>
</div>
            `
        }
        cards.innerHTML = html;
    }).catch(function(){
        alert('Error')
    })

})