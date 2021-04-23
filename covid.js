
       let form = document.getElementById('formdata');
       let result = document.getElementById('result');
       let countryname = document.getElementById('searchcountry');
      

       // adding event listener to button

       let select = document.getElementById("searchcountry");
      let countries = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];


for(let i = 0; i < countries.length; i++)
{
   let option = document.createElement("OPTION"),
       txt = document.createTextNode(countries[i]);
   option.appendChild(txt);
   option.setAttribute("value",countries[i]);
   select.insertBefore(option,select.lastChild);
}

// selecting loading div
const loader = document.querySelector("#loading");

// showing loading
function displayLoading() {
    loader.classList.add("display");
    result.innerHTML = '';
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 100000);
}

// hiding loading 
function hideLoading() {
    loader.classList.remove("display");
}

window.onload = (event) => {
  console.log('page is fully loaded');
  
  fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(json => {

    result.innerHTML = `
    <div class="m-0 py-5 text-center"><span class="h1">Total Global Cases</span>
      
      <p>${json.Global.Date}</p>
      <p class="text-center b">Date:</p>
    </div>

    <div class="card text-center  text-dark  mx-2">
   
    <div class="card-body">
    <h3>${json.Global.TotalConfirmed}</h3>
    <span class="text-center">Total Confirmed Cases :</span>
    </div>
    <div class="card-footer text-muted bg-danger  p-1">
     
    </div>
  </div>
     

  <div class="card text-center  text-dark mx-2">
   
  <div class="card-body">
  <h3>${json.Global.NewConfirmed}</h3>
  <span class="text-center">Total Active Cases :</span>
  </div>
  <div class="card-footer text-muted bg-warning  p-1">
   
  </div>
</div>


<div class="card text-center  text-dark mx-2">
   
<div class="card-body">
<h3>${json.Global.TotalDeaths}</h3>
<span class="text-center">Total Deaths Cases :</span>
</div>
<div class="card-footer text-muted bg-dark  p-1">
 
</div>
</div>
  


<div class="card text-center text-dark mx-2">
   
<div class="card-body">
<h3>${json.Global.TotalRecovered}</h3>
<span class="text-center">Total Recovered Cases :</span>
</div>
<div class="card-footer text-muted bg-success p-1">

</div>
</div> `;

let TotalConfirmed = json.Global.TotalConfirmed;
let NewConfirmed = json.Global.NewConfirmed;
let TotalDeaths = json.Global.TotalDeaths;
let TotalRecovered = json.Global.TotalRecovered;

      let ctx = document.getElementById("myChartglobal").getContext('2d');
      let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['TotalConfirmed', 'NewConfirmed', 'TotalDeaths', 'TotalRecovered'],
            datasets: [{
                label:['Total'] ,
                data: [TotalConfirmed, NewConfirmed, TotalDeaths, TotalRecovered],
                backgroundColor: [
                    'rgba(255, 99, 132, 5)',
                    'rgba(54, 162, 235, 5)',
                    'rgba(255, 206, 86, 5)',
                    'rgba(75, 192, 192, 5)'
                    
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
  })
};
 
///////////////////Global Chart///////////////////////////////









/////////////////////////////////////////////////////////////////////////////////////////////////////
//execute search 
  let country = document.getElementById('searchcountry').value; 
        countryname.addEventListener('change',()=>{
       let getname = country = document.getElementById('searchcountry').value;
       document.getElementById("myChartglobal").style.display = "none"; 
          displayLoading();
          sendPostRequest(getname); 
         getdata(getname);
           
        })

        const getdata = async (url) => {
          try {
    
        
            const resp = await axios({
              method: 'get',
              url: 'https://api.covid19api.com/total/dayone/country/'+url

          });
         
          countryname.append(`${country}`)
          let data = resp.data;
          let length = data.length;
            let index = length - 1;
            hideLoading();
            
         

        
            result.innerHTML = `
          <div class="m-0 py-5 text-center"><span class="h1">${data[index].Country}</span></div>

          <div class="card text-center  text-dark  mx-2">
         
          <div class="card-body">
          <h3>${data[index].Confirmed}</h3>
          <span class="text-center">Total Confirmed Cases :</span>
          </div>
          <div class="card-footer text-muted bg-danger  p-1">
           
          </div>
        </div>
           

        <div class="card text-center  text-dark mx-2">
         
        <div class="card-body">
        <h3>${data[index].Active}</h3>
        <span class="text-center">Total Active Cases :</span>
        </div>
        <div class="card-footer text-muted bg-warning  p-1">
         
        </div>
      </div>


      <div class="card text-center  text-dark mx-2">
         
      <div class="card-body">
      <h3>${data[index].Deaths}</h3>
      <span class="text-center">Total Deaths Cases :</span>
      </div>
      <div class="card-footer text-muted bg-dark  p-1">
       
      </div>
    </div>
        

      
    <div class="card text-center text-dark mx-2">
         
    <div class="card-body">
    <h3>${data[index].Recovered}</h3>
    <span class="text-center">Total Recovered Cases :</span>
    </div>
    <div class="card-footer text-muted bg-success p-1">
     
    </div>
  </div>

     
            `;
          } catch (err) {
            // Handle Error Here
            console.log(err);
        }
        }
      


   ///////////////////////////////////////////

   
   const sendPostRequest = async (url) => {
    try {
      const resp = await axios({
        method: 'get',
        url: 'https://api.covid19api.com/total/dayone/country/'+url

    });
        let mydata = resp.data;
      

             let mapping = Object.values(mydata.filter(function (e) {
                 return e;
                 
               }));
              
             let values = mapping.map(function (e) {
                 return (e.Confirmed);
             });
             let Active = mapping.map(function (e) {
               return (e.Active);
           });
           let Deaths = mapping.map(function (e) {
             return (e.Deaths);
         });
     
             let labels = mapping.map(function (e) {
               return (e.Date);
           });
     
     
           console.log(JSON.stringify(labels));  
             BuildChart(labels, values,Active,Deaths, "Real Time Covid"); // Pass in data and call the chart
       
    } catch (err) {
        // Handle Error Here
        console.log(err);
    }
};
      
  




///////////////////////////////////////

function BuildChart(labels, values,Active,Deaths, chartTitle) {

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
type: 'line',
data: {
labels: labels,
datasets: [{
  
   label: "Confirmed",
  
   data: values,
   borderWidth: 2,
   backgroundColor: "rgba(6, 167, 125, 0.1)",
   borderColor: "rgba(6, 167, 125, 1)",
   pointBackgroundColor: "rgba(225, 225, 225, 1)",
   pointBorderColor: "rgba(6, 167, 125, 1)",
   pointHoverBackgroundColor: "rgba(6, 167, 125, 1)",
   pointHoverBorderColor: "#fff"
}, {
  
   label: "Active",
   
   data: Active,
   borderWidth: 2,
   backgroundColor: "rgba(26, 143, 227, 0.1)",
   borderColor: "rgba(26, 143, 227, 1)",
   pointBackgroundColor: "rgba(225, 225, 225, 1)",
   pointBorderColor: "rgba(26, 143, 227, 1)",
   pointHoverBackgroundColor: "rgba(26, 143, 227, 1)",
   pointHoverBorderColor: "#fff"
}, {
  label: "Deaths",
  
  data: Deaths,
  borderWidth: 2,
  backgroundColor: "rgba(255, 50, 71,0.1)",
  borderColor: "rgba(255, 50, 71, 1)",
  pointBackgroundColor: "rgba(255, 50, 71, 1)",
  pointBorderColor: "rgba(255, 50, 71, 1)",
  pointHoverBackgroundColor: "rgba(255, 50, 71, 1)",
  pointHoverBorderColor: "#fff"
}]
},
options: { elements: {
  point:{
      radius: 0
  }
},
responsive: true, // Instruct chart JS to respond nicely.
maintainAspectRatio: true, // Add to prevent default behavior of full-width/height 
scales: {
  
  yAxes: [{
    label: chartTitle,
    ticks: {
        beginAtZero: true
    }
  }], xAxes: [ {
    display: true,
    type: 'time',
    time: {
      parser: 'YYYY-MM-DD',
      tooltipFormat: 'YYYY-MM-DD',
      unit: 'month',
      unitStepSize: 1,
      displayFormats: {
        'month': 'YYYY-MM-DD'
      }
    }
  }
],
},
}
});
return myChart;
}

