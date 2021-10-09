var elWrapper = $_('.js-wrapper')

pokemons.forEach(element => {
    var elDiv = createElement('div', 'card w-25', ' ', elWrapper);
    var images = createElement('img', "card-img-top pokemon__img", '', elDiv);
    images.setAttribute('src', element.img);
    images.setAttribute('width', '200');
    images.setAttribute('height', '200');
    var objName = createElement('h5', 'h4 card-title text-center', element.name, elDiv);
    var objType = createElement('p', 'card-text h6 text-center mb-3', element.type.join(' '), elDiv);
});
