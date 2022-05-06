window.addEventListener('load', () => {

    // working on the JSON file
    const myRequest = new Request('./src/js/data.json');

    fetch(myRequest)
        .then(response => response.json())

    .then(jsonResponse => {

            const material = document.querySelector('#material');
            const norm = document.querySelector('#norm');


            for (const [key, value] of Object.entries(jsonResponse.gestosc[0])) {

                let option = document.createElement('option');
                option.value = key;
                option.text = key;
                material.appendChild(option);
            }


            material.addEventListener('change', () => {

                norm.innerHTML = null;
                // const defaultOption = document.createElement('option');
                // defaultOption.text = "wybierz";
                // norm.appendChild(defaultOption)

                for (const [key, value] of Object.entries(jsonResponse.gestosc[0])) {

                    if (material.value == key) {

                        value.forEach(element => {
                            // console.log(element)
                            let option = document.createElement('option');
                            option.value = element['wartosc'];
                            option.text = `${(element['norma'] == null) ? '' : element['norma'] + ' ~'} ${parseFloat(element['wartosc']).toFixed(4)} kg/dm3`;
                            norm.appendChild(option);
                        });

                    } else continue;
                }
            })
            norm.addEventListener('change', () => {
                clearInputs();
            })
        })
        .catch(console.error);

    // displaying the result of calculation

    const selectTypeContainer = document.querySelector('.bar-type-inputs');

    const barTypes = [
        'pręt płaski',
        'pręt okrągły',
        'pręt kwadratowy',
        'pręt szczeciokątny'
    ];



    barTypes.forEach((element, index) => {
        const radioInput = document.createElement('input');
        const radioLabel = document.createElement('label');
        const div = document.createElement('div');
        radioInput.type = 'radio';
        radioInput.id = 'steelBar-' + index;
        radioInput.className = 'steel-bar-input'
        radioInput.name = 'steelBar';
        radioInput.value = element;
        radioLabel.htmlFor = 'steelBar-' + index;

        radioLabel.appendChild(document.createTextNode(element));

        div.appendChild(radioInput);
        div.appendChild(radioLabel);
        selectTypeContainer.appendChild(div);

        radioInput.addEventListener('change', (e) => {

            switch (e.target.id) {
                case 'steelBar-0':
                    showFlatBar();
                    break;
                case 'steelBar-1':
                    showRoundBar();
                    break;
                case 'steelBar-2':
                    showSquareBar();
                    break;
                case 'steelBar-3':
                    showHexagonalBar();
                    break;
                default:

            }
            clearInputs();
        })
    });

    const materialQuantity = document.querySelector('#materialQuantity');
    const materialTotalMass = document.querySelector('#materialTotalMass');
    const singleMaterialWeight = document.querySelector('#singleMaterialWeight');
    materialQuantity.addEventListener('change', () => {
        materialTotalMass.value = Math.round((materialQuantity.value * singleMaterialWeight.value) * 1000) / 1000;
    })



    const catalogue = 'assets/img/';
    let elements = [];

    var ajax = new XMLHttpRequest()
    ajax.open("GET", catalogue, true)
    ajax.onload = function() {
        let elements = (new DOMParser()).parseFromString(ajax.responseText, "text/html").getElementsByTagName('a');


        for (x of elements) {
            // console.log(x.href.match("assets/img/"))
            if (x.href.match("assets/img/")) {
                console.log(x)
            }
            if (x.href.match(/\.(JPG)$/)) {
                // let img = document.createElement("IMG")
                // img.src = catalogue + x.href
                // document.body.appendChild(img);
                // console.log(elements)
            }
        };
    }
    ajax.send()
})