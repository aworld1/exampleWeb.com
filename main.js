var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var eleven = document.getElementById("eleven");
var twelve = document.getElementById("twelve");
var classA = document.getElementById("classA");
var classB = document.getElementById("classB");
var classC = document.getElementById("classC");
var classD = document.getElementById("classD");
var classE = document.getElementById("classE");
var classF = document.getElementById("classF");
var classG = document.getElementById("classG");
var classH = document.getElementById("classH");
var search = document.getElementById("search");
var header = document.getElementById("header");
var searchImage = document.getElementById("searchImage");
function showEightClasses() {
  hideEverything();
  header.style.visibility = "visible";
  header.style.display = "block";
  classA.style.visibility = "visible";
  classB.style.visibility = "visible";
  classC.style.visibility = "visible";
  classD.style.visibility = "visible";
  classE.style.visibility = "visible";
  classF.style.visibility = "visible";
  classG.style.visibility = "visible";
  classH.style.visibility = "visible";
  classA.style.display = "block";
  classB.style.display = "block";
  classC.style.display = "block";
  classD.style.display = "block";
  classE.style.display = "block";
  classF.style.display = "block";
  classG.style.display = "block";
  classH.style.display = "block";
}
function showOptions() {
  hideEverything();
}
function hideEverything() {
  header.style.visibility = "hidden";
  header.style.display = "none";
  nine.style.visibility = "hidden";
  ten.style.visibility = "hidden";
  eleven.style.visibility = "hidden";
  twelve.style.visibility = "hidden";
  nine.style.display = "none";
  ten.style.display = "none";
  eleven.style.display = "none";
  twelve.style.display = "none";
  classA.style.visibility = "hidden";
  classB.style.visibility = "hidden";
  classC.style.visibility = "hidden";
  classD.style.visibility = "hidden";
  classE.style.visibility = "hidden";
  classF.style.visibility = "hidden";
  classG.style.visibility = "hidden";
  classH.style.visibility = "hidden";
  classA.style.display = "none";
  classB.style.display = "none";
  classC.style.display = "none";
  classD.style.display = "none";
  classE.style.display = "none";
  classF.style.display = "none";
  classG.style.display = "none";
  classH.style.display = "none";
  search.style.visibility = "hidden";
  search.style.display = "none";
  searchImage.style.visibility = "hidden";
  searchImage.style.display = "none";
}
function showOptions() {
  hideEverything();
  search.style.visibility = "visible";
  search.style.display = "block";
  searchImage.style.visibility = "visible";
  searchImage.style.display = "block";
}
var catalogText;
function gettext(pdfUrl){
var pdf = PDFJS.getDocument(pdfUrl);
return pdf.then(function(pdf) { // get all pages text
     var maxPages = pdf.pdfInfo.numPages;
     var countPromises = []; // collecting all page promises
     for (var j = 1; j <= maxPages; j++) {
        var page = pdf.getPage(j);

        var txt = "";
        countPromises.push(page.then(function(page) { // add page promise
            var textContent = page.getTextContent();
            return textContent.then(function(text){ // return content promise
                return text.items.map(function (s) { return s.str; }).join(''); // value page text

            });
        }));
     }
     // Wait for all pages and join text
     return Promise.all(countPromises).then(function (texts) {

       return texts.join('');
     });
});
}
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
function isCode(pdf, placement) {
  var returnVal = true;
  // Check if the char is a number
  for (var j = 0; j < 6; j++) {
    if (isNaN(pdf.charAt(j + placement)) || pdf.charAt(j + placement) == " ") {
      returnVal = false;
    }
  }
  // Check for both hyphen and dash
  if (!(pdf.charAt(placement + 6) == "-" || pdf.charAt(placement + 7) == "-" || pdf.charAt(placement + 6) == "–" || pdf.charAt(placement + 7) == "–")) {
    // Check for & symbol or a space (for single codes)
    if (!(pdf.charAt(placement + 6) == "&" || pdf.charAt(placement + 7) == "&" || pdf.charAt(placement + 6) == " " || pdf.charAt(placement + 7) == " ")) {
      returnVal = false;
    }
  }
  return returnVal;
}
function isClass(pdf, placement) {
  var returnVal = true;
  for (var j = 0; j < 15; j++) {
    // Check for upper case
      if (!(pdf.charAt(j + placement) == pdf.charAt(j + placement).toUpperCase() || (pdf.charAt(j + placement - 1) == "I" && pdf.charAt(j + placement + 1) == "-"))) {
        if (!(pdf.charAt(placement) == "O" && pdf.charAt(placement + 1) == "R" && pdf.charAt(placement + 2) == "C" && pdf.charAt(placement + 3) == "H" && pdf.charAt(placement + 4) == "E")) {
          returnVal = false;
        }
      }
      else if (!((pdf.charAt(j + placement) == " " && j > 0) || pdf.charAt(j + placement) == "–" || (pdf.charAt(j + placement) == "." && j > 0) || pdf.charAt(j + placement) == "’" || (pdf.charAt(j + placement) == "/" && pdf.charAt(j + placement - 1) != "C" && pdf.charAt(j + placement + 1) != "C") || pdf.charAt(j + placement) == "-" || isLetter(pdf.charAt(j + placement)))) {
        if (!(j > 1 && (pdf.charAt(j + placement) == "1" || pdf.charAt(j + placement) == "2" || pdf.charAt(j + placement) == "3" || pdf.charAt(j + placement) == "4" || pdf.charAt(j + placement) == "5" || pdf.charAt(j + placement) == "6" || pdf.charAt(j + placement) == "7" || pdf.charAt(j + placement) == "8" || pdf.charAt(j + placement) == "9" || pdf.charAt(j + placement) == "0" || pdf.charAt(j + placement) == ":" || pdf.charAt(j + placement) == "("))) {
          returnVal = false;
        }
      }
  }
  return returnVal;
}
function cleanDescription() {
  var reachedPeriod;
  var storedCategory = [];
  var currentChar;
  var spaceCount;
  for (var i = 0; i < descriptions.length; i++) {
    reachedPeriod = false;
    storedCategory = [];
    spaceCount = 0;
    while (!reachedPeriod) {
      currentChar = descriptions[i].charAt(descriptions[i].length - 1);
      if (currentChar == "." || spaceCount > 10) {
        reachedPeriod = true;
        if (storedCategory != ""){
          storedCategory.reverse();
          var categoryLength = categories.length;
          categories[categoryLength] = "";
          for (var k = 0; k < storedCategory.length; k++) {
            categories[categoryLength] += storedCategory[k];
          }
          // Check if it is an actual category
          if (!(categories[categoryLength].length > 2 && categories[categoryLength].length < 30 && categories[categoryLength].charAt(0) == categories[categoryLength].charAt(0).toUpperCase() && categories[categoryLength].charAt(1) == categories[categoryLength].charAt(1).toLowerCase())) {
            categories.splice(categoryLength,1);
          }
          else {
            categoryPlacement[categoryPlacement.length] = i;
          }
        }
      }
      else {
        if (isLetter(currentChar)) {
          storedCategory[storedCategory.length] = currentChar;
        }
        if (currentChar == " ") {
          spaceCount++;
        }
        else {
          spaceCount = 0;
        }
        descriptions[i] = descriptions[i].slice(0,-1);
      }
    }
  }
}
function getCategory(placement) {
  var indexOfCategory = -1;
  for (var x = 0; x < categoryPlacement.length; x++) {
    if (placement >= categoryPlacement[x]) {
      indexOfCategory++;
    }
  }
  return categories[indexOfCategory];
}
function classInfo(placement) {
  console.log(getCategory(placement));
  console.log(classes[placement]);
  console.log(codes[placement]);
  console.log(grades[placement]);
  console.log(credits[placement]);
  console.log(universityCredits[placement]);
  console.log(preReqs[placement]);
  console.log(interests[placement]);
  console.log(linkedCourses[placement]);
  console.log(descriptions[placement]);
}
function searchClasses() {
    // Declare variables
    var input, filter;
    for (var u = 0; u < buttons.length; u++) {
      buttons[u].style.display = "none";
      buttons[u].style.visibility = "none"
    }
    buttons = [];
    input = document.getElementById('search');
    filter = input.value.toUpperCase();

    // Loop through all list items, and hide those who don't match the search query
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].toUpperCase().indexOf(filter) > -1 || codes[i].toUpperCase().indexOf(filter) > -1) {
            buttons[buttons.length] = document.createElement("BUTTON");
            document.body.appendChild(buttons[buttons.length - 1]);
            buttons[buttons.length - 1].innerHTML = classes[i];
            buttons[buttons.length - 1].style.width = "90%";
            buttons[buttons.length - 1].style.height = "10vh";
            buttons[buttons.length - 1].style.marginLeft = "5%";
            buttons[buttons.length - 1].style.marginRight = "5%";
            buttons[buttons.length - 1].style.marginTop = "5vh";
            buttons[buttons.length - 1].style.borderRadius = "2vh";
            if (buttons.length % 2 == 0) {
              buttons[buttons.length - 1].style.backgroundColor = "gold";
            }
            else {
              buttons[buttons.length - 1].style.backgroundColor = "black";
              buttons[buttons.length - 1].style.color = "gold";
            }
            buttons[buttons.length - 1].style.fontFamily = "monospace";
            buttons[buttons.length - 1].style.fontSize = "3.5vmin";
            buttons[buttons.length - 1].id = i;
            buttons[buttons.length - 1].onclick = function () { classInfo(this.id) };
        }
    }
}
function cleanOthers() {
  for (var i = 0; i < classes.length;i++) {
    var moveOn = false;
    while (!moveOn) {
      if (classes[i].charAt(classes[i].length - 1) == " ") {
        classes[i] = classes[i].slice(0,-1);
      }
      else {
        moveOn = true;
      }
    }
    moveOn = false;
    grades[i] = grades[i].slice(1);
    while (!moveOn) {
      if (grades[i].charAt(grades[i].length - 1) == " ") {
        grades[i] = grades[i].slice(0,-1);
      }
      else {
        moveOn = true;
      }
    }
    credits[i] = credits[i].slice(1);
    universityCredits[i] = universityCredits[i].slice(1);
    preReqs[i] = preReqs[i].slice(1);
    moveOn = false;
    while (!moveOn) {
      if (preReqs[i].charAt(preReqs[i].length - 1) == " ") {
        preReqs[i] = preReqs[i].slice(0,-1);
      }
      else {
        moveOn = true;
      }
    }
    interests[i] = interests[i].slice(1);
    moveOn = false;
    while (!moveOn) {
      if (interests[i].charAt(interests[i].length - 1) == " ") {
        interests[i] = interests[i].slice(0,-1);
      }
      else {
        moveOn = true;
      }
    }
    linkedCourses[i] = linkedCourses[i].slice(1);
    moveOn = false;
    while (!moveOn) {
      if (linkedCourses[i].charAt(linkedCourses[i].length - 1) == " ") {
        linkedCourses[i] = linkedCourses[i].slice(0,-1);
      }
      else {
        moveOn = true;
      }
    }
  }
}
var buttons = [];
var categories = [];
var categoryPlacement = [];
var classes = [];
var codes = [];
var grades = [];
var credits = [];
var universityCredits = [];
var preReqs = [];
var interests = [];
var linkedCourses = [];
var descriptions = [];
function organizePDF() {
  var headerDone = false;
  var i = 0;
  // Skip header
  while (!headerDone) {
    // First category is English, wait until encounter
    if (catalogText.charAt(i) == "E" && catalogText.charAt(i + 1) == "n" && catalogText.charAt(i + 2) == "g" && catalogText.charAt(i + 3) == "l" && catalogText.charAt(i + 4) == "i" && catalogText.charAt(i + 5) == "s" && catalogText.charAt(i + 6) == "h" && catalogText.charAt(i + 7) == " " && catalogText.charAt(i + 8) == " ") {
      headerDone = true;
      i += 9;
    }
    else {
      i++;
    }
  }
  categories[categories.length] = "English";
  categoryPlacement[categoryPlacement.length] = 0;
  // Start Organizing
  var currentType = "class";
  var storedLetters = "";
  while (i < catalogText.length) {
    // Check to see if the type changed
    // If it did, dump out all of the text into the prev type

    // Checking for type switch

    if (isCode(catalogText,i) && currentType == "class") {
      if (currentType == "class") {
        classes[classes.length] = storedLetters;
        currentType = "code";
      }
      else {
        alert("Something went wrong...1");
      }
      storedLetters = "";
    }
    else if (catalogText.charAt(i) == "G" && catalogText.charAt(i + 1) == "r" && catalogText.charAt(i + 2) == "a" && catalogText.charAt(i + 3) == "d" && catalogText.charAt(i + 4) == "e" && catalogText.charAt(i + 5) == "s" && catalogText.charAt(i + 6) == ":" && currentType == "code") {
      if (currentType == "code") {
        codes[codes.length] = storedLetters;
        currentType = "grade";
        i += 7;
      }
      else {
        alert("Something went wrong...2");
      }
      storedLetters = "";
    }
    else if (catalogText.charAt(i) == "C" && catalogText.charAt(i + 1) == "r" && catalogText.charAt(i + 2) == "e" && catalogText.charAt(i + 3) == "d" && catalogText.charAt(i + 4) == "i" && catalogText.charAt(i + 5) == "t" && catalogText.charAt(i + 6) == "s" && catalogText.charAt(i + 7) == ":" && currentType == "grade") {
      if (currentType == "grade") {
        grades[grades.length] = storedLetters;
        currentType = "credit";
        i += 8;
      }
      else {
        alert("Something went wrong...");
      }
      storedLetters = "";
    }
    else if (catalogText.charAt(i + 1) == "U" && catalogText.charAt(i + 2) == "C" && catalogText.charAt(i + 3) == "/" && catalogText.charAt(i + 4) == "C" && catalogText.charAt(i + 5) == "S" && catalogText.charAt(i + 6) == "U" && catalogText.charAt(i + 7) == ":" && currentType == "credit") {
      if (currentType == "credit") {
        credits[credits.length] = storedLetters;
        currentType = "universityCredit";
        i += 8;
      }
      else {
        alert("Something went wrong...4");
      }
      storedLetters = "";
    }
    else if (catalogText.charAt(i + 1) == "R" && catalogText.charAt(i + 2) == "e" && catalogText.charAt(i + 3) == "c" && catalogText.charAt(i + 4) == "o" && catalogText.charAt(i + 5) == "m" && catalogText.charAt(i + 6) == "m" && catalogText.charAt(i + 7) == "e" && catalogText.charAt(i + 8) == "n" && catalogText.charAt(i + 9) == "d" && currentType == "universityCredit") {
      if (currentType == "universityCredit") {
        universityCredits[universityCredits.length] = storedLetters;
        currentType = "preReq";
        i += 27;
      }
      else {
        alert("Something went wrong...5");
      }
      storedLetters = "";
    }
    else if (catalogText.charAt(i + 1) == "I" && catalogText.charAt(i + 2) == "n" && catalogText.charAt(i + 3) == "t" && catalogText.charAt(i + 4) == "e" && catalogText.charAt(i + 5) == "r" && catalogText.charAt(i + 6) == "e" && catalogText.charAt(i + 7) == "s" && catalogText.charAt(i + 8) == "t" && catalogText.charAt(i + 9) == ":" && (currentType == "preReq" || currentType == "universityCredit")) {
      if (currentType == "preReq") {
        preReqs[preReqs.length] = storedLetters;
        currentType = "interest";
        i += 10;
      }
      else if (currentType == "universityCredit") {
        universityCredits[universityCredits.length] = storedLetters;
        preReqs[preReqs.length] = "";
        currentType = "interest";
        i += 10;
      }
      else {
        alert("Something went wrong...6");
      }
      storedLetters = "";
    }
    else if (catalogText.charAt(i + 1) == "L" && catalogText.charAt(i + 2) == "i" && catalogText.charAt(i + 3) == "n" && catalogText.charAt(i + 4) == "k" && catalogText.charAt(i + 5) == "e" && catalogText.charAt(i + 6) == "d" && catalogText.charAt(i + 7) == " " && catalogText.charAt(i + 8) == "C" && catalogText.charAt(i + 9) == "o" && (currentType == "interest" || currentType == "preReq")) {
      if (currentType == "interest") {
        interests[interests.length] = storedLetters;
        currentType = "linkedCourse";
        i += 15;
      }
      else if (currentType == "preReq") {
        preReqs[preReqs.length] = storedLetters;
        interests[interests.length] = "";
        currentType = "linkedCourse";
        i += 15;
      }
      else {
        alert("Something went wrong...7");
      }
      storedLetters = "";
    }
    else if (catalogText.charAt(i - 1) == " " && catalogText.charAt(i - 2) == " " && catalogText.charAt(i) == catalogText.charAt(i).toUpperCase() && (currentType == "linkedCourse" || currentType == "interest" || currentType == "preReq")) {
      if (currentType == "linkedCourse") {
        linkedCourses[linkedCourses.length] = storedLetters;
        currentType = "description";
      }
      else if (currentType == "interest") {
        interests[interests.length] = storedLetters;
        linkedCourses[linkedCourses.length] = "";
        currentType = "description";
      }
      else if (currentType == "preReq") {
        preReqs[preReqs.length] = storedLetters;
        linkedCourses[linkedCourses.length] = "";
        interests[interests.length] = "";
        currentType = "description";
      }
      else {
        alert("Something went wrong...8");
      }
      storedLetters = "";
    }
    else if (isClass(catalogText,i) & currentType == "description") {
      if (currentType == "description") {
        descriptions[descriptions.length] = storedLetters;
        currentType = "class";
      }
      else {
        alert("Something went wrong...9");
      }
      storedLetters = "";
    }

    // End checking

    else {
        storedLetters += catalogText.charAt(i);
        i++;
    }
  } // Close While loop
  // Final data
  descriptions[descriptions.length] = storedLetters;
  console.log("Done organizing.")
} // Close Function
/* THIS IS WHAT LOADS THE PROGRAM DOWN */
gettext("https://docs.wixstatic.com/ugd/5db6f5_7f8fbcb5bd064026b84356a51b42f5f3.pdf").then(function (text) {
  catalogText = text;
  organizePDF();
  cleanDescription();
  cleanOthers();
  console.log("Done cleaning.")
}, function (reason) {
  console.error(reason);
});
/* THIS IS WHAT LOADS THE PROGRAM UP */
