// API KEY:  ec8e8c03d112ac938a13a11e407ab961;

var app = document.getElementById('app');

fetch('https://developers.zomato.com/api/v2.1/search', {
    headers : {
        'user-key' : 'ec8e8c03d112ac938a13a11e407ab961',
        'accept': 'application/json'
    }
}).then(data => {
    data.json().then(res => {
        console.log(res);

        res.restaurants.map(e => {
            var card =  document.createElement('div');
            var img = document.createElement('img');
            var cardBody = document.createElement('div');
            var heading = document.createElement('h5');
            var content = document.createElement('p');
            var button = document.createElement('button');
     
            img.src =  e.restaurant.thumb;
            heading.innerHTML = e.restaurant.name;
            content.innerHTML = e.restaurant.cuisines;
            button.innerText = "Details" 
            
            card.className = "card";
            img.className = "card-img-top";
            cardBody.className = "card-body";
            heading.className = "card-title";
            content.className = "card-text";
            button.className =  "btn btn-primary"

            cardBody.appendChild(heading);
             cardBody.appendChild(content);
             cardBody.appendChild(button);
     
             card.appendChild(img);
             card.appendChild(cardBody);
     
             app.appendChild(card);

        })



    });


})