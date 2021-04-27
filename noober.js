window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  
  // For each iteration of the loop, append HTML and display it on screen 
  // Customize ride display depending on purpe request and no of passengers  
  // Delete the div class in the index.html page when finished 

  // Create a for-loop to iterate through the product data (from 1 to 100)
  for (let i=0; i<json.length; i++){
    let ride = json[i] //for each iteration store details in ride variable
    
    //Passenger information details assigned to variables 
    let noPassengers = ride.numberOfPassengers
    let passengerFirstName = ride.passengerDetails.first
    let passengerLastName = ride.passengerDetails.last
    let passengerPhoneNumber = ride.passengerDetails.phoneNumber

    //Pickup location details assigned to variables
    let pu_address = ride.pickupLocation.address
    let pu_city = ride.pickupLocation.city
    let pu_state = ride.pickupLocation.state
    let pu_zip = ride.pickupLocation.zip

    //Drop-off location details assigned to variables
    let do_address = ride.dropoffLocation.address
    let do_city = ride.dropoffLocation.city
    let do_state = ride.dropoffLocation.state
    let do_zip = ride.dropoffLocation.zip

    //Select the HTML element to append 
    let element = document.querySelector('.rides')

    //Append element and customize it for purple request and no of passengers - different visual looks 
    if (ride.purpleRequested==true){ //Noober Purple request supercedes Noober XL, so we check this first
      //Use design specs to print the ride details for Noober Purple 
      element.insertAdjacentHTML(`beforeend`, `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-900">
      <i class="fas fa-car-side"></i>
      <span>Noober Purple</span>
    </h1>
  
    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>
          <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
            ${noPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pu_address}</p>
          <p>${pu_city}, ${pu_state} ${pu_zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${do_address}</p>
          <p>${do_city}, ${do_state} ${do_zip}</p>
        </div>
      </div>
    </div>`)

    } else if (noPassengers>3) { //If Noober Purple request is false, we check for Noober XL
      //Use design specs to print the ride details for Noober XL
      element.insertAdjacentHTML(`beforeend`, `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-900">
      <i class="fas fa-car-side"></i>
      <span>Noober XL</span>
    </h1>
  
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>
          <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
          ${noPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pu_address}</p>
          <p>${pu_city}, ${pu_state} ${pu_zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${do_address}</p>
          <p>${do_city}, ${do_state} ${do_zip}</p>
        </div>
      </div>
    </div>`)

    } else { //if no of passenegrs is <=3, customize for Noober X
      //Use design specs to print the ride details for Noober X
      element.insertAdjacentHTML(`beforeend`, `<h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl   bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-900">
        <i class="fas fa-car-side"></i>
        <span>Noober X</span>
      </h1>

    <div class="border-4 border-green-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerFirstName} ${passengerLastName}</h2>
          <p class="font-bold text-gray-600">${passengerPhoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-green-600 text-white p-2">
          ${noPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pu_address}</p>
          <p>${pu_city}, ${pu_state} ${pu_zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${do_address}</p>
          <p>${do_city}, ${do_state} ${do_zip}</p>
        </div>
      </div>
    </div>`)
    } 
  }



  
})