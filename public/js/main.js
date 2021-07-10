


const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const city_Name = document.getElementById("city_Name");
const tempInCel = document.getElementById("tempInCel");
const temp_Status = document.getElementById("temp_Status");


const data_hide = document.getElementById("data_hide")

// To display search button whenever click on city Name

submitBtn.style.display = 'none';
cityName.addEventListener('click',()=>{

    
submitBtn.style.display = 'block';

})


const getInfo = async (e) => {
    // alert("Hey ..")

    e.preventDefault();


    let cityVal = cityName.value;
    if (cityVal === "") {

        city_Name.innerText = `Please Write the City Name before You Search.`

     
        

    }

    else if (/^\s+$/.test(cityVal)) {
        // console.log("Contains Spacing");
        city_Name.innerText = `Please Enter City Name Properly :)`
       
        
    }
  

    else {

        try {

            data_hide.style.visibility= "visible";

            
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ffe5065224a4e55cd208c32ad7d6bae8`

            const response = await fetch(url);




            const data = await response.json()
         

            const arrData = [data];
            // console.log(arrData);


            city_Name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            tempInCel.innerText = arrData[0].main.temp;
            // temp_Status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;

            // Condition to check sunny or cloudy
            if (tempMood === "Clear") {
                temp_Status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;" ></i>`
                
            }

            else if (tempMood === "Clouds") {

                temp_Status.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6;" ></i>`
            }

            else if (tempMood === "Rain") {
                temp_Status.innerHTML = `<i class="fas fa-cloud-rain" style="color: #a4b0be;" ></i>`
                
            }

            else {

                temp_Status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;" ></i>`
                
            }

           


           
        }


        catch {
            city_Name.innerText = `Please Enter Your City Name Properly.`
            data_hide.style.visibility= "hidden";
            
        }
    }

    cityName.value =""

}


submitBtn.addEventListener('click', getInfo)




