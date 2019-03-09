const struggleBus = [];

const addPassenger = (name, wallet, isStruggling, seat) => {
  //make a passenger object
  //add it on the bus
  const passenger = {
      name: name,
      wallet: wallet,
      isStruggling: isStruggling
  };
  if (seat === 'back') {
      struggleBus.push(passenger);
  }
  else if (seat === 'front'){
      struggleBus.unshift(passenger);
  }
  else if(seat === 'middle'){
      let midWayMark = struggleBus.length / 2;
      struggleBus.splice(midWayMark, 0, passenger);
  }
}

const unloadPassenger = (bus, seat) => {
  //remove a passenger from the bus
  //return the passenger object
  if (seat === 'front'){
    return bus.shift();
}
  else if(seat === 'back'){
      return bus.pop();
  }
}

const allAboard = (bus) => {
  //loop over the passengers
  //given the bus costs $5
  //if the passenger can afford it, charge them
  //if NOT kick them off the buss
  const busFare = 5;
  const validPassengers = [];

  bus.forEach((passenger) => {
      if(passenger.wallet >= busFare){
          passenger.wallet -= busFare;
          validPassengers.push(passenger);
      }
  })
        return(validPassengers);
}

const printToDom = (id, print) => {
    const selectedDiv = document.getElementById(id);
    selectedDiv.innerHTML = print;
}

const busBuilder = (bus) => {
    //build domString from bus parameter
    domString = '';
    for(let i=0; i<bus.length; i++){
        domString += `<div class="bus-seat">`;
        domString += `<h4>${bus[i].name}</h4>`;
        domString += `<p>${bus[i].wallet}</p>`;
        domString += `<p>${bus[i].isStruggling}</p>`;
        domString += `</div>`;
    }
    printToDom('the-bus', domString);
}

const init = () => {
    addPassenger('Michael', 3, true, 'front');
    addPassenger('Zoe', 20, false, 'back');
    addPassenger('Greg', 4, false, 'back');
    addPassenger('Saul', 12, true, 'front');
    addPassenger('Matt', 5, true, 'front');
    addPassenger('Matt', 3, true, 'front');
    addPassenger('Matt', 15, true, 'front');
    addPassenger('Sarah', 6, true, 'front');
    addPassenger('David', 10, true, 'middle');

    // const firstPassenger = unloadPassenger(struggleBus, 'front');
    // console.log(firstPassenger);

    const busPeople = allAboard(struggleBus);

    busBuilder(busPeople);
    // printToDom('the-bus', addPassenger);
}

init();

var arr = [];
arr[0] = "Jani";
arr[1] = "Hege";
arr[2] = "Stale";
arr[3] = "Kai Jim";
arr[4] = "Borge";

console.log(arr.join());
arr.splice(2, 0, "Lene");
console.log(arr);