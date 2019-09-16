// Step1) Add an event listener to each of the input box. When you hit the "ENTER" button, we will trigger the function called doDaMaths.

// This is for input A
document.getElementById("a").addEventListener("keyup", function(e) {
  if (e.which === 13) {
    doDaMaths();
  }
});
// This is for input B
document.getElementById("b").addEventListener("keyup", function(e) {
  if (e.which === 13) {
    doDaMaths();
  }
});
// This is for input C
document.getElementById("c").addEventListener("keyup", function(e) {
  if (e.which === 13) {
    doDaMaths();
  }
});

// Step 2) This is the main function.
function doDaMaths() {
  var a = document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;

  // Step 3) This is basically a series of if statements. If ONLY input-box A is left empty, calculate A. If ONLY input-box-B is empty, calculate B... And bonus point for two sets of error messages. One error for when you typed in ALL THREE fields. And the other error if you only have one or none typed in.

  if (a == "" && b != "" && c != "") {
    var sumARaw = c / b * 100;
    var sumA = parseFloat(sumARaw.toFixed(2));
    document.getElementById("a").value = sumA.toLocaleString("en-US");
  } else if (a != "" && b == "" && c != "") {
    var sumBRaw = c / (a / 100);
    var sumB = parseFloat(sumBRaw.toFixed(2));
    document.getElementById("b").value = sumB.toLocaleString("en-US");
  } else if (a != "" && b != "" && c == "") {
    var sumCRaw = a / 100 * b;
    var sumC = parseFloat(sumCRaw.toFixed(2));
    document.getElementById("c").value = sumC.toLocaleString("en-US");
  } else if (a != "" && b != "" && c != "") {
    document.getElementById("error-msg").innerHTML =
      "** It looks like you entered all three fields!! **";
  } else {
    document.getElementById("error-msg").innerHTML =
      "** Don't forget to enter x2 fields **";
  }
}

// Notice the "Clear" button is handled inside the html file.
