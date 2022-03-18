var cardsData = [
{
    imgUrl: "showcase1.png",
    price: 2500,
    text: "Эвридика",

},

{
    imgUrl: "showcase2.png",
    price: 3290,
    text: "Баллерин",

},

{
    imgUrl: "showcase3.png",
    price: 3500,
    text: "Орфей",

},

{
    imgUrl: "showcase2.png",
    price: 3290,
    text: "Баллерин",

},

{
    imgUrl: "showcase1.png",
    price: 2500,
    text: "Эвридика",

},

{
    imgUrl: "showcase3.png",
    price: 3500,
    text: "Орфей",

},

{
    imgUrl: "showcase1.png",
    price: 2500,
    text: "Эвридика",

},

{
    imgUrl: "showcase2.png",
    price: 3290,
    text: "Баллерин",

},
];

  
let makeElement = function (tagName, className, text) {
    let element = document.createElement(tagName);
    element.classList.add(className);
    if (text) {
      element.textContent = text;
    }
    return element;
}
  
let cardList = document.querySelector('.goods');  

let  renderCards= function (product) {
    for (let i = 0; i< product.length; i++){
        let ListItem = makeElement('li', 'good');
        let title = makeElement ('h2', 'good__description', product[i].text);
        ListItem.appendChild(title);
    
        let picture = makeElement ('img', 'good__image');
        picture.src = product[i].imgUrl;
        ListItem.appendChild(picture);
    
        let price = makeElement('p', 'good__price', product[i].price);
        ListItem.appendChild(price);

        cardList.appendChild(ListItem);
    }
}
  
  
let goodList = renderCards(cardsData)