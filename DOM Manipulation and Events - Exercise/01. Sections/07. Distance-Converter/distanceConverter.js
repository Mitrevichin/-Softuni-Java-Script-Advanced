function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click', onBtnClick);

    function onBtnClick() {
        let inputDistance = Number(document.getElementById('inputDistance').value);
        let outputDistance = document.getElementById('outputDistance');
        let inputUnits = document.getElementById('inputUnits').value;
        let outputUnits = document.getElementById('outputUnits').value;

        let inputToMeter = 0;
        let result = 0;
        
        switch (inputUnits) {
            case 'km':
                inputToMeter = inputDistance * 1000;
                break;
            case 'm':
                inputToMeter = inputDistance;
                break;
            case 'cm':
                inputToMeter = inputDistance * 0.01;
                break;
            case 'mm':
                inputToMeter = inputDistance * 0.001;
                break;
            case 'mi':
                inputToMeter = inputDistance * 1609.34;
                break;
            case 'yrd':
                inputToMeter = inputDistance * 0.9144;
                break;
            case 'ft':
                inputToMeter = inputDistance * 0.3048;
                break;
            case 'in':
                inputToMeter = inputDistance * 0.0254;
                break;
        }

        switch (outputUnits) {
            case 'km':
                result = inputToMeter / 1000;
                break;
            case 'm':
                result = inputToMeter;
                break;
            case 'cm':
                result = inputToMeter / 0.01;
                break;
            case 'mm':
                result = inputToMeter / 0.001;
                break;
            case 'mi':
                result = inputToMeter / 1609.34;
                break;
            case 'yrd':
                result = inputToMeter / 0.9144;
                break;
            case 'ft':
                result = inputToMeter / 0.3048;
                break;
            case 'in':
                result = inputToMeter / 0.0254;
                break;
        }
        outputDistance.value = result;
    }
}