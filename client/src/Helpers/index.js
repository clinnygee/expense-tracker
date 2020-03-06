const capitalize = (string) => {
    if (typeof string !== 'string') return '';
    
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const createRandomHexColour = () => {
    const literals = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9','A','B','C','D','E','F'];

    let hexColor = ['#'];

    for(let i =0; i< 6; i++){
        hexColor.push(literals[getRandomInt(0, 16)])
    };

    return hexColor.join('');

};

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max-min) + min);
}

export {capitalize, createRandomHexColour}