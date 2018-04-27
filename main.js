var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
  ];
   
  var planetsList = document.getElementById('planets');
  var popped;
  $('#checkBox').click(function(){
    if (checkBox.checked){
      popped = planets.pop();
      alert(popped);
      alert(planets);
    } else {
      planets.push(popped);
      alert(planets);
    }
      });

 
   planets.reverse().forEach(function(item) {
      var opt = document.createElement('option');
      opt.innerHTML = item[0];
      planetsList.appendChild(opt);
  });



  function calculateWeight (weight, planetName) {
    for(var i=0; i<planets.length;i++){
      if(planetName == planets[i][0]){
        var multiplier = planets[i][1];
      }
      
    }
  return weight*multiplier;

  }



  function handleClickEvent() {
    // 3. Create a variable called userWeight and assign the value of the user's weight.
     var userWeight = $('#user-weight').val();
    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down.
    var planetName = $('#planets').val();
    // 5. Create a variable called result and assign the value of the new calculated weight.
    var result = calculateWeight(userWeight, planetName);
    

    // 6. Write code to display the message shown in the screenshot.
    $('#output').text("If you were on " + planetName + ", you would weigh "  + result +"lbs!");
  };
  
  // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
  $('#calculate-button').click(handleClickEvent);
  
  // Bonus Challenges
  // 8. Reverse the drop down order so that the sun is first.
  // 9. Make it look nice using bootstrap (http://getbootstrap.com/getting-started/)