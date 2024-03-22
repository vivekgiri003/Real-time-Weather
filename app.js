
const result = document.querySelector("#result");
const button = document.querySelector("#btn");
const city = document.querySelector("#city");
const key = "8b7aac3f0c1a1d80973061acd7c6b729";
// fetch detail from weather api

const setValues = (data)=>{
    removeEverythig();

    const output = document.createElement("div");
    output.classList.add("output");
    const h2 = document.createElement("h2");
    const h4_2 = document.createElement("h4");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    const h3 = document.createElement("h3");
    const h3_2 = document.createElement("h3");

    h2.textContent=`${data.name}`;
    h4.textContent=`${data.sys.country}`
    h4_2.textContent=`${data.weather[0].description}`
    h3.textContent="Tempereature";
    h3_2.innerHTML=`${(data.main.temp - 273.15).toPrecision(4)} &#176 C`;
    img.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);

    const extra = document.createElement("div");
    extra.classList.add("extra");



    const extra1 = document.createElement("div");
    extra1.classList.add("extra1");
    const s11 = document.createElement("span");
    s11.classList.add("span");
    s11.innerText = `Temp Min`
    const s12 = document.createElement("span");
    s12.classList.add("span");
    s12.innerHTML = `${(data.main.temp_min-273.15).toPrecision(4)} &#176 C`;
    extra1.append(s11);
    extra1.append(s12);


    const extra2 = document.createElement("div");
    extra2.classList.add("extra2");
    const s21 = document.createElement("span");
    s21.classList.add("span");
    s21.innerText = `Temp Max`;
    const s22 = document.createElement("span");
    s22.classList.add("span");
    s22.innerHTML = `${(data.main.temp_max-273.15).toPrecision(4)} &#176 C`;
    extra2.append(s21);
    extra2.append(s22);


    const extra3 = document.createElement("div");
    extra3.classList.add("extra1");
    const s31 = document.createElement("span");
    s31.classList.add("span");
    s31.innerText = `Humidity`;
    const s32 = document.createElement("span");
    s32.classList.add("span");
    s32.innerText=`${data.main.humidity}`
    extra3.append(s31);
    extra3.append(s32);


    const extra4 = document.createElement("div");
    extra4.classList.add("extra2");
    const s41 = document.createElement("span");
    s41.classList.add("span");
    s41.innerText = `Pressure`;
    const s42 = document.createElement("span");
    s42.classList.add("span");
    s42.innerText=`${data.main.pressure}`;
    extra4.append(s41);
    extra4.append(s42);

    extra.append(extra1);
    extra.append(extra2);
    extra.append(extra3);
    extra.append(extra4);



    output.append(h2);
    output.append(h4);
    output.append(img);
    output.append(h4_2);
    output.append(h3);
    output.append(h3_2);
    output.append(extra);
    result.append(output);
}

const getDetail = () => {
    const cityName = city.value;
    // console.log(cityName)
    if (cityName.length === 0){
        result.innerHTML = `<h2>Please enter city name</h2>`;
    }
    else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        //
        .then((data) =>{
            // console.log(data);
            // result.innerHTML = `${(data.main.temp - 273.15).toPrecision(4)} &#176 C`
            setValues(data);
        })
        // .catch(()=>{
        //     result.innerHTML = "<h2>City name is not found</h2>"
        // })
    }
        
}

const removeEverythig = ()=>{
    const output = document.querySelector(".output");
    if(output == null){
        return;
    }
    output.remove();
}

button.addEventListener("click", getDetail)
