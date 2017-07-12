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
var loadIcon = document.getElementById("loadIcon");
var backButton = document.getElementById("backButton");
var searchImage = document.getElementById("searchImage");
var gradeSelected;
var classSelected;
var modalOk = document.getElementById("acceptClass");
function showGrades() {
  gradeSelected = undefined;
  classSelected = undefined;
  hideEverything();
  toggleObjects([nine,ten,eleven,twelve,header],"show");
}
function showEightClasses(grade) {
  classSelected = undefined;
  if (grade) {
    gradeSelected = grade;
  }
  hideEverything();
  toggleObjects([classA,classB,classC,classD,classE,classF,classG,classH,header,backButton],"show");
  checkClasses([classA,classB,classC,classD,classE,classF,classG,classH]);
}
function checkClasses(classesInFunc) {
  for (var j = 0; j < classesInFunc.length; j++) {
    if (myClasses[(((gradeSelected - 9) * 8) + j)] != undefined) {
      classesInFunc[j].innerHTML = myClasses[(((gradeSelected - 9) * 8) + j)];
      classesInFunc[j].style.fontSize = "5vmin";
    }
    else {
      classesInFunc[j].innerHTML = "Select Class";
      classesInFunc[j].style.fontSize = "6vmin";
    }
  }
}
function showOptions(classNo) {
  if (classNo) {
    classSelected = classNo;
  }
  hideEverything();
  toggleObjects([search,searchImage,backButton],"show");
  searchClasses();
}
function hideEverything() {
  toggleObjects([header,nine,ten,eleven,twelve,classA,classB,classC,classD,classE,classF,classG,classH,search,searchImage,loadIcon,backButton],"hide");
  for (var u = 0; u < buttons.length; u++) {
    buttons[u].style.display = "none";
    buttons[u].style.visibility = "none"
  }
  buttons = [];
  modal.style.display = "none";
  document.body.style.overflowY = "scroll";
}
function toggleObjects(array,control) {
  if (control == "show") {
    for (var p = 0; p < array.length; p++) {
      array[p].style.display = "block";
      array[p].style.visibility = "visible";
    }
  }
  else {
    for (var p = 0; p < array.length; p++) {
      array[p].style.display = "none";
      array[p].style.visibility = "hidden";
    }
  }
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
backButton.onclick = function() {
  if (classSelected) {
    showEightClasses();
  }
  else if (gradeSelected) {
    showGrades();
  }
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
        if (!(checkWord("ORCHESTRA",catalogText,placement))) {
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
function checkWord(string,pdf,placement) {
  for (var k = 0; k < string.length; k++) {
    if (!(pdf.charAt(placement + k) == string.charAt(k))) {
      return false;
    }
  }
  return true;
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
              categoryPlacement[categoryPlacement.length] = i + 1;
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
var classP = document.getElementById("classP");
var categoryP = document.getElementById("categoryP");
var codeP = document.getElementById("codeP");
var gradesP = document.getElementById("gradesP");
var creditsP = document.getElementById("creditsP");
var universityCreditsP = document.getElementById("universityCreditsP");
var preReqsP = document.getElementById("preReqsP");
var interestP = document.getElementById("interestP");
var linkedCoursesP = document.getElementById("linkedCoursesP");
var discontinuedP = document.getElementById("discontinuedP");
var descriptionP = document.getElementById("descriptionP");
var savePlacement;
function classInfo(placement) {
  categoryP.innerHTML = getCategory(placement);
  classP.innerHTML = classes[placement];
  codeP.innerHTML = codes[placement];
  gradesP.innerHTML = grades[placement];
  creditsP.innerHTML = credits[placement];
  universityCreditsP.innerHTML = universityCredits[placement];
  preReqsP.innerHTML = preReqs[placement];
  interestP.innerHTML = interests[placement];
  linkedCoursesP.innerHTML = linkedCourses[placement];
  savePlacement = placement;
  if (classes[placement].charAt(0) == "L" && classes[placement].charAt(1) == "/") {
    discontinuedP.innerHTML = "<b>Warning! This class is discontinued and may not be available. Please advise a counsler before taking this class.</b>";
    discontinuedP.innerHTML += "<br/><br/>Any class with <b>'L/'</b> in front of its name is discontinued.</b>";
    discontinuedP.style.color = "red";
  }
  else {
    discontinuedP.innerHTML = "No";
    discontinuedP.style.color = "black";
  }

  descriptionP.innerHTML = descriptions[placement];
  modal.style.display = "block";
  document.body.style.overflowY = "hidden";
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
        if (classes[i].toUpperCase().indexOf(filter) > -1 || codes[i].toUpperCase().indexOf(filter) > -1 || getCategory(i).toUpperCase().indexOf(filter) > -1) {
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
    if (classes[i].substring(0,7) == "ELL 3-4") {
      classes[i] = classes[i].substring(0,7);
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
    credits[i] = credits[i].slice(0,-1);
    codes[i] = codes[i].slice(0,-1);
    universityCredits[i] = universityCredits[i].slice(0,-1);
    preReqs[i] = preReqs[i].slice(0,-1);
    moveOn = false;
    while (!moveOn) {
      if (preReqs[i].charAt(preReqs[i].length - 1) == " ") {
        preReqs[i] = preReqs[i].slice(0,-1);
      }
      else {
        moveOn = true;
      }
    }
    moveOn = false;
    while (!moveOn) {
      if (interests[i].charAt(interests[i].length - 1) == " ") {
        interests[i] = interests[i].slice(0,-1);
      }
      else {
        moveOn = true;
      }
    }
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

// Menu icon setup
var menu = document.getElementById("nav-icon3");
var mainNav = document.getElementById("main-nav");
mainNav.style.display = "none";
menu.onclick = function() {
  menu.classList.toggle("open");
  if (mainNav.style.display == "none") {
    mainNav.style.display = "block"
  }
  else {
    mainNav.style.display = "none"
  }
}
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = "scroll";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}
modalOk.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY = "scroll";
  myClasses[((gradeSelected - 9) * 8) + (classSelected - 1)] = classes[savePlacement];
  saveClasses();
}
function saveClasses() {
  localStorage.myClasses = JSON.stringify(myClasses);
}
function clearClasses() {
  myClasses = "";
  localStorage.removeItem("myClasses");
  localStorage.myClasses;
}
var myClasses = [];
localStorage.myClasses;
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
    if (checkWord("English  ",catalogText,i)) {
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
    else if (checkWord("Grades:",catalogText,i) && currentType == "code") {
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
    else if (checkWord("Credits: ",catalogText,i) && currentType == "grade") {
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
    else if (checkWord("UC/CSU:",catalogText,i) && currentType == "credit") {
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
    else if (checkWord("Recommended Prerequisites:",catalogText,i) && currentType == "universityCredit") {
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
    else if (checkWord("Interest:",catalogText,i) && (currentType == "preReq" || currentType == "universityCredit")) {
      if (currentType == "preReq") {
        preReqs[preReqs.length] = storedLetters;
        currentType = "interest";
        i += 10;
      }
      else if (currentType == "universityCredit") {
        universityCredits[universityCredits.length] = storedLetters;
        preReqs[preReqs.length] = "None";
        currentType = "interest";
        i += 10;
      }
      else {
        alert("Something went wrong...6");
      }
      storedLetters = "";
    }
    else if (checkWord("Linked Course:",catalogText,i) && (currentType == "interest" || currentType == "preReq")) {
      if (currentType == "interest") {
        interests[interests.length] = storedLetters;
        currentType = "linkedCourse";
        i += 15;
      }
      else if (currentType == "preReq") {
        preReqs[preReqs.length] = storedLetters;
        interests[interests.length] = "None";
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
        linkedCourses[linkedCourses.length] = "None";
        currentType = "description";
      }
      else if (currentType == "preReq") {
        preReqs[preReqs.length] = storedLetters;
        linkedCourses[linkedCourses.length] = "None";
        interests[interests.length] = "None";
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
hideEverything();
toggleObjects([loadIcon],"show");
gettext("https://docs.wixstatic.com/ugd/5db6f5_7f8fbcb5bd064026b84356a51b42f5f3.pdf").then(function (text) {
  catalogText = text;
  organizePDF();
  cleanDescription();
  cleanOthers();
  console.log("Done cleaning.");
  showGrades();
  if (localStorage.myClasses != undefined && localStorage.myClasses != "") {
    myClasses = JSON.parse(localStorage.myClasses);
  }
}, function (reason) {
  console.error(reason);
});
/* THIS IS WHAT LOADS THE PROGRAM UP */
