var table = prompt("Enter a Value");            // Unit of table
var operator = 'addition';                     // Type of calculation
var i = 1;                                     // Set counter to 1
var msg = 'Multiplication Table';              // Message

//if (operator === 'addition') {
  // Do addition
  //while (i < 11) {
    //msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    //i++;
  //}
//} else {
  // Do multiplication
  while (i < 11) {
    msg + '<br />' += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
//}

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
