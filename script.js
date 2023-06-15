const convert = ()=>{

        let inputValue = document.getElementById("input-field").value; 

    let selectOptionInput  = document.getElementById("input-select");
    let selectValueInput =  selectOptionInput.value;
    let selectValueOutput = document.getElementById("output-select").value;

    let convertedTemperature;
    if(selectValueInput ==="Celsius"){
        if(selectValueOutput === "Celsius"){
            convertedTemperature = inputValue;
        }
        else if(selectValueOutput === "Fahrenheit"){
            convertedTemperature = ((parseFloat(inputValue) * 9/5) + 32).toFixed(2);
            console.log(convertedTemperature);
        }
        else{
            convertedTemperature = parseFloat(inputValue) + 273.15;
            // console.log("" + convertedTemperature);
        }
    }
    else if(selectValueInput ==="Fahrenheit"){
        if (selectValueOutput === "Celsius") {
      convertedTemperature = ((inputValue - 32) * 5/9).toFixed(2);
    } else if (selectValueOutput === "Fahrenheit") {
      convertedTemperature = inputValue;
    } else if (selectValueOutput === "Kelvin") {
      convertedTemperature = ((parseFloat(inputValue) - 32) * 5/9 + 273.15).toFixed(2);
    }
    }
    else if(selectValueInput ==="Kelvin"){
        if (selectValueOutput === "Celsius") {
      convertedTemperature = parseFloat(inputValue) - 273.15;
    } else if (selectValueOutput === "Fahrenheit") {
      convertedTemperature = ((parseFloat(inputValue) - 273.15) * 9/5 + 32).toFixed(2);
      console.log("" + convertedTemperature);
    } else if (selectValueOutput === "Kelvin") {
      convertedTemperature = inputValue;
    }
    }
    document.getElementById("result").innerHTML=`<p>Temperature in ${selectValueInput} is ${inputValue}</p><p>Temperature converted to ${selectValueOutput} is ${convertedTemperature}</p><br><p>Thanks for using ♥<p/> `;
    
    }
    
