function clearInputs() {
    const normList = document.querySelectorAll('.data-input');
    const singleMaterialWeightInput = document.querySelector('#singleMaterialWeight');

    normList.forEach(input => {
        input.value = 0;

    });

}


// calculating functions

function calcFlatBar(width, height, length, norm) {
    const result = ((width * height * length) / 1000000) * norm;
    document.querySelector('#singleMaterialWeight').value = Math.round(result * 1000) / 1000;
}

function calcRoundBar(diameter, length, norm) {
    const pi = 3.14;
    const result = ((pi * Math.pow((diameter / 2), 2) * length) / 1000000) * norm;
    document.querySelector('#singleMaterialWeight').value = Math.round(result * 1000) / 1000;
}

function calcSquareBar(width, length, norm) {
    const result = ((Math.pow((width), 2) * length) / 1000000) * norm;
    document.querySelector('#singleMaterialWeight').value = Math.round(result * 1000) / 1000;
}

function calcHexagonalBar(sideWidth, length, norm) {
    const result = ((((3 * Math.pow((sideWidth / Math.sqrt(3)), 2) * Math.sqrt(3)) / 2) * length) / 1000000) * norm;
    document.querySelector('#singleMaterialWeight').value = Math.round(result * 1000) / 1000;
}



// choosing a steel bar type functions
const calcContainer = document.querySelector('.data-inputs')

function showFlatBar() {
    calcContainer.innerHTML = '';

    const divMaterialWidth = document.createElement('div');
    const divMaterialHeight = document.createElement('div');
    const divMaterialLength = document.createElement('div');

    divMaterialWidth.className = "material-width";
    divMaterialHeight.className = "material-height";
    divMaterialLength.className = "material-length";

    // material width
    const widthLabel = document.createElement('label');
    widthLabel.appendChild(document.createTextNode('Szerokość (mm):'));

    const inputWidth = document.createElement('input');
    inputWidth.type = 'number';
    inputWidth.name = 'material width';
    inputWidth.placeholder = 0;
    inputWidth.id = 'materialWidth';
    inputWidth.className = 'data-input';

    //material height
    const heightLabel = document.createElement('label');
    heightLabel.appendChild(document.createTextNode('Wysokość (mm):'));

    const inputHeight = document.createElement('input');
    inputHeight.type = 'number';
    inputHeight.name = 'material height';
    inputHeight.placeholder = 0;
    inputHeight.id = 'materialHeihght';
    inputHeight.className = 'data-input';

    //material length
    const lengthLabel = document.createElement('label');
    lengthLabel.appendChild(document.createTextNode('Długość (mm):'));

    const inputLength = document.createElement('input');
    inputLength.type = 'number';
    inputLength.name = 'material length';
    inputLength.placeholder = 0;
    inputLength.id = 'materialLength';
    inputLength.className = 'data-input';


    divMaterialWidth.appendChild(widthLabel);
    divMaterialWidth.appendChild(inputWidth);

    divMaterialHeight.appendChild(heightLabel);
    divMaterialHeight.appendChild(inputHeight);

    divMaterialLength.appendChild(lengthLabel);
    divMaterialLength.appendChild(inputLength);

    calcContainer.appendChild(divMaterialWidth);
    calcContainer.appendChild(divMaterialHeight);
    calcContainer.appendChild(divMaterialLength);

    calcContainer.childNodes.forEach(element => {
        console.log(element.childNodes[1])
        element.childNodes[1].addEventListener('change', () => {
            calcFlatBar(document.querySelector('#materialWidth').value, document.querySelector('#materialHeihght').value, document.querySelector('#materialLength').value, norm.value);
        })
    })

}

function showRoundBar() {
    calcContainer.innerHTML = '';


    const divMaterialDiameter = document.createElement('div');
    const divMaterialLength = document.createElement('div');


    divMaterialDiameter.className = "material-diameter";
    divMaterialLength.className = "material-length";

    //material height
    const diameterLabel = document.createElement('label');
    diameterLabel.appendChild(document.createTextNode('Średnica (mm):'));

    const inputDiameter = document.createElement('input');
    inputDiameter.type = 'number';
    inputDiameter.name = 'material diameter';
    inputDiameter.placeholder = 0;
    inputDiameter.id = 'materialDiameter';
    inputDiameter.className = 'data-input';

    //material length
    const lengthLabel = document.createElement('label');
    lengthLabel.appendChild(document.createTextNode('Długość (mm):'));

    const inputLength = document.createElement('input');
    inputLength.type = 'number';
    inputLength.name = 'material length';
    inputLength.placeholder = 0;
    inputLength.id = 'materialLength';
    inputLength.className = 'data-input';



    divMaterialDiameter.appendChild(diameterLabel);
    divMaterialDiameter.appendChild(inputDiameter);

    divMaterialLength.appendChild(lengthLabel);
    divMaterialLength.appendChild(inputLength);

    calcContainer.appendChild(divMaterialDiameter);
    calcContainer.appendChild(divMaterialLength);

    calcContainer.childNodes.forEach(element => {
        element.childNodes[1].addEventListener('change', () => {
            calcRoundBar(document.querySelector('#materialDiameter').value, document.querySelector('#materialLength').value, norm.value);
        })
    })
}

function showSquareBar() {
    calcContainer.innerHTML = '';

    const divMaterialWidth = document.createElement('div');
    const divMaterialLength = document.createElement('div');


    divMaterialWidth.className = "material-width";
    divMaterialLength.className = "material-length";

    //material height
    const widthLabel = document.createElement('label');
    widthLabel.appendChild(document.createTextNode('Szerokość (mm):'));

    const inputWidth = document.createElement('input');
    inputWidth.type = 'number';
    inputWidth.name = 'material width';
    inputWidth.placeholder = 0;
    inputWidth.id = 'materialWidth';
    inputWidth.className = 'data-input';

    //material length
    const lengthLabel = document.createElement('label');
    lengthLabel.appendChild(document.createTextNode('Długość (mm):'));

    const inputLength = document.createElement('input');
    inputLength.type = 'number';
    inputLength.name = 'material length';
    inputLength.placeholder = 0;
    inputLength.id = 'materialLength';
    inputLength.className = 'data-input';



    divMaterialWidth.appendChild(widthLabel);
    divMaterialWidth.appendChild(inputWidth);

    divMaterialLength.appendChild(lengthLabel);
    divMaterialLength.appendChild(inputLength);

    calcContainer.appendChild(divMaterialWidth);
    calcContainer.appendChild(divMaterialLength);

    calcContainer.childNodes.forEach(element => {
        element.childNodes[1].addEventListener('change', () => {
            calcSquareBar(document.querySelector('#materialWidth').value, document.querySelector('#materialLength').value, norm.value);
        })
    })
}

function showHexagonalBar() {
    calcContainer.innerHTML = '';

    const divMaterialWidth = document.createElement('div');
    const divMaterialLength = document.createElement('div');


    divMaterialWidth.className = "material-width";
    divMaterialLength.className = "material-length";

    //material height
    const widthLabel = document.createElement('label');
    widthLabel.appendChild(document.createTextNode('Średnica (mm):'));

    const inputWidth = document.createElement('input');
    inputWidth.type = 'number';
    inputWidth.name = 'material side width';
    inputWidth.placeholder = 0;
    inputWidth.id = 'materialSideWidth';
    inputWidth.className = 'data-input';

    //material length
    const lengthLabel = document.createElement('label');
    lengthLabel.appendChild(document.createTextNode('Długość (mm):'));

    const inputLength = document.createElement('input');
    inputLength.type = 'number';
    inputLength.name = 'material length';
    inputLength.placeholder = 0;
    inputLength.id = 'materialLength';
    inputLength.className = 'data-input';



    divMaterialWidth.appendChild(widthLabel);
    divMaterialWidth.appendChild(inputWidth);

    divMaterialLength.appendChild(lengthLabel);
    divMaterialLength.appendChild(inputLength);

    calcContainer.appendChild(divMaterialWidth);
    calcContainer.appendChild(divMaterialLength);

    calcContainer.childNodes.forEach(element => {
        element.childNodes[1].addEventListener('change', () => {
            calcHexagonalBar(document.querySelector('#materialSideWidth').value, document.querySelector('#materialLength').value, norm.value);
        })
    })
}