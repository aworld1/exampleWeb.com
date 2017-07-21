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
var creditPage = document.getElementById("creditContainer");
var universityCreditPage = document.getElementById("universityCreditContainer");
var gpaPageContain = document.getElementById("gpaContainer");
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
var inputModal = document.getElementById("inputInfoModal");
function showOptions(classNo) {
  if (classNo) {
    classSelected = classNo;
    if (myClasses[((gradeSelected - 9) * 8) + (classSelected - 1)]) {
      inputModal.style.display = "block";
      headerInputP.innerHTML = classes[getIdByClassName(myClasses[((gradeSelected - 9) * 8) + (classSelected - 1)])];
      if (myGrades[2 * (((gradeSelected - 9) * 8) + (classSelected - 1))] != undefined) {
        gradeDropDownA.innerHTML = "Selected Q1 Grade: <b>" + myGrades[2 * (((gradeSelected - 9) * 8) + (classSelected - 1))] + "</b>";
      }
      else {
        gradeDropDownA.innerHTML = "Select a Q1 grade";
      }
      if (myGrades[2 * (((gradeSelected - 9) * 8) + (classSelected - 1)) + 1] != undefined) {
        gradeDropDownB.innerHTML = "Selected Q2 Grade: <b>" + myGrades[2 * (((gradeSelected - 9) * 8) + (classSelected - 1)) + 1] + "</b>";
      }
      else {
        gradeDropDownB.innerHTML = "Select a Q2 grade";
      }
      return;
    }
  }
  hideEverything();
  toggleObjects([search,searchImage,backButton],"show");
  searchClasses();
}
var englishCredits = [0,40];
var socialScienceCredits = [0,30];
var mathCredits = [0,20];
var physicalScienceCredits = [0,10];
var biologicalScienceCredits = [0,10];
var fineArtCredits = [0,10];
var exerciseCredits = [0,25];
var electiveCredits = [0,85];
var foreignCredits = [0,0];
function myCredits() {
  englishCredits = [0,40];
  socialScienceCredits = [0,30];
  mathCredits = [0,20];
  physicalScienceCredits = [0,10];
  biologicalScienceCredits = [0,10];
  fineArtCredits = [0,10];
  exerciseCredits = [0,25];
  electiveCredits = [0,85];
  foreignCredits = [0,0];
  for (var i = 0; i < 32; i++) {
    if (myClasses[i] != undefined) {
      // If the class exists
      if (credits[getIdByClassName(myClasses[i])].length <= 2 && Number(credits[getIdByClassName(myClasses[i])]) == 20) {
        // If it's a 20 credit class
        if (getCategory(getIdByClassName(myClasses[i])) == "English" || getCategory(getIdByClassName(myClasses[i])) == "EnglishLanguageDevelopment") {
          englishCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "SocialSciences") {
          socialScienceCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "Mathematics") {
          mathCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "PhysicalSciences") {
          physicalScienceCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "BiologicalSciences") {
          biologicalScienceCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "FineArts") {
          fineArtCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "PhysicalEducation") {
          exerciseCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "WorldLanguage") {
          foreignCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
        else {
          electiveCredits[0] += Number(credits[getIdByClassName(myClasses[i])]) / 2;
        }
      }
      if (credits[getIdByClassName(myClasses[i])].length <= 2) {
        // If it's a normal class
        if (getCategory(getIdByClassName(myClasses[i])) == "English" || getCategory(getIdByClassName(myClasses[i])) == "EnglishLanguageDevelopment") {
          englishCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "SocialSciences") {
          socialScienceCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "Mathematics") {
          mathCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "PhysicalSciences") {
          physicalScienceCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "BiologicalSciences") {
          biologicalScienceCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "FineArts") {
          fineArtCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "PhysicalEducation") {
          exerciseCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "WorldLanguage") {
          foreignCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
        else {
          electiveCredits[0] += Number(credits[getIdByClassName(myClasses[i])]);
        }
      }
      else {
        // If it has words in it
        if (checkWord("Varies",credits[getIdByClassName(myClasses[i])],0)) {
          electiveCredits[0] += 10;
        }
        else if (checkWord("10 Math/10 Elective",credits[getIdByClassName(myClasses[i])],0)) {
          electiveCredits[0] += 5;
          mathCredits[0] += 5;
        }
        else if (checkWord("5 Health/5 PE",credits[getIdByClassName(myClasses[i])],0)) {
          exerciseCredits[0] += 10;
        }
        else if (checkWord("10 PE/10 Elect.",credits[getIdByClassName(myClasses[i])],0)) {
          electiveCredits[0] += 5;
          exerciseCredits[0] += 5;
        }
        else if (checkWord("5 PE/15 Fine Art",credits[getIdByClassName(myClasses[i])],0)) {
          exerciseCredits[0] += 2.5;
          fineArtCredits[0] += 7.5;
        }
        else if (checkWord("5 PE/15 Electives",credits[getIdByClassName(myClasses[i])],0)) {
          electiveCredits[0] += 2.5;
          exerciseCredits[0] += 7.5;
        }
      }
    }
  }
  creditArray = [englishCredits,socialScienceCredits,exerciseCredits,mathCredits,fineArtCredits,physicalScienceCredits,biologicalScienceCredits,foreignCredits];
  for (var i = 0; i < creditArray.length; i++) {
    if (creditArray[i][0] > creditArray[i][1]) {
      electiveCredits[0] += Number(creditArray[i][0]) - Number(creditArray[i][1]);
    }
  }
  console.log("Done credit calculation.");
}
function hideEverything() {
  toggleObjects([header,nine,ten,eleven,twelve,classA,classB,classC,classD,classE,classF,classG,classH,search,searchImage,loadIcon,backButton,creditPage,universityCreditPage,gpaPageContain],"hide");
  for (var u = 0; u < buttons.length; u++) {
    toggleObjects([buttons[u]],"hide");
  }
  for (var u = 0; u < homeBoxes.length; u++) {
    toggleObjects([homeBoxes[u]],"hide");
  }
  buttons = [];
  homeBoxes = [];
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
var englishCreditText = document.getElementById("englishCreditText");
var socialCreditText = document.getElementById("socialCreditText");
var mathCreditText = document.getElementById("mathCreditText");
var physicalCreditText = document.getElementById("physicalCreditText");
var bioCreditText = document.getElementById("bioCreditText");
var fineArtCreditText = document.getElementById("fineArtCreditText");
var PECreditText = document.getElementById("PECreditText");
var electiveCreditText = document.getElementById("electiveCreditText");
var langCreditText = document.getElementById("langCreditText");
var creditArray = [englishCredits,socialScienceCredits,exerciseCredits,mathCredits,fineArtCredits,physicalScienceCredits,biologicalScienceCredits,foreignCredits];
function creditsPage() {
  hideEverything();
  myCredits();
  creditPage.style.visibility = "visible";
  creditPage.style.display = "block";
  var creditTextArray = [englishCreditText,socialCreditText,mathCreditText,physicalCreditText,bioCreditText,fineArtCreditText,PECreditText,electiveCreditText,langCreditText];
  var tempCreditArray = [englishCredits,socialScienceCredits,mathCredits,physicalScienceCredits,biologicalScienceCredits,fineArtCredits,exerciseCredits,electiveCredits,foreignCredits];
  for (var j = 0; j < creditTextArray.length; j++) {
    creditTextArray[j].innerHTML = tempCreditArray[j][0] + "/" + tempCreditArray[j][1];
    if (tempCreditArray[j][0] < tempCreditArray[j][1]) {
      document.getElementById("credIcon" + j).style.backgroundImage = 'url("x.png")';
      document.getElementById("credIcon" + j).className = "credIcon animated shake";
    }
    else {
      document.getElementById("credIcon" + j).style.backgroundImage = 'url("checkCred.png")';
      document.getElementById("credIcon" + j).className = "credIcon animated tada";
    }
  }
}
function universityCreditsPage() {
  hideEverything();
  myUniversityCredits();
  universityCreditPage.style.visibility = "visible";
  universityCreditPage.style.display = "block";
  var tempUncredArr = [unCredA,unCredB,unCredC,unCredD,unCredE,unCredF,unCredG];
  for (var j = 0; j < 7; j++) {
    document.getElementById("unCred" + (j + 1)).innerHTML =  tempUncredArr[j][0] + "/" + tempUncredArr[j][1];
    if (tempUncredArr[j][0] < tempUncredArr[j][1]) {
      document.getElementById("uncredIcon" + j).style.backgroundImage = 'url("x.png")';
      document.getElementById("uncredIcon" + j).className = "credIcon animated shake";
    }
    else {
      document.getElementById("uncredIcon" + j).style.backgroundImage = 'url("checkCred.png")';
      document.getElementById("uncredIcon" + j).className = "credIcon animated tada";
    }
  }
}
var unCredA = [0,2];
var unCredB = [0,4];
var unCredC = [0,3];
var unCredD  = [0,2];
var unCredE  = [0,2];
var unCredF = [0,1];
var unCredG = [0,1];
function myUniversityCredits() {
  unCredA = [0,2];
  unCredB = [0,4];
  unCredC = [0,3];
  unCredD  = [0,2];
  unCredE  = [0,2];
  unCredF = [0,1];
  unCredG = [0,1];
  for (var i = 0; i < 32; i++) {
    if (myClasses[i] != undefined) {
      // If the class exists
      if (universityCredits[getIdByClassName(myClasses[i])].length == 1 || universityCredits[getIdByClassName(myClasses[i])].length == 6) {
        if (universityCredits[getIdByClassName(myClasses[i])].charAt(0) == "A") {
          unCredA[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(0) == "B") {
          unCredB[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(0) == "C") {
          unCredC[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(0) == "D") {
          unCredD[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(0) == "E") {
          unCredE[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(0) == "F") {
          unCredF[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(0) == "G") {
          unCredG[0]++;
        }
      }
      if (universityCredits[getIdByClassName(myClasses[i])].length == 6) {
        if (universityCredits[getIdByClassName(myClasses[i])].charAt(5) == "A") {
          unCredA[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(5) == "B") {
          unCredB[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(5) == "C") {
          unCredC[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(5) == "D") {
          unCredD[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(5) == "E") {
          unCredE[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(5) == "F") {
          unCredF[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(5) == "G") {
          unCredG[0]++;
        }
      }
    }
  }
}
var homeBoxes = [];
function homePage() {
  hideEverything();
  toggleObjects([header],"show");
  createHomeBox("info", "AP Classes", "AP classes boost your weighted GPA, but not your unweighted one. It's recommended not to take AP classes if you aren't ready for them.");
  createHomeBox("check", "Add Classes", "Go to the menu and start building your plan!");
  createHomeBox("info", "Credits", "While regular credits are required for graduating high school, university credits are only needed if applying to a UC/CSU college.");
  createHomeBox("feature", "Creator", "The creator of this planner is Aworld Games. The following program is patented.");
  createHomeBox("warning", "Remember", "Remember to keep both GPAs up, weighted and unweighted");
  //loadHomeBoxes();
}
function checkDups(arr) {
	var dupValues = [];
  arr.sort();
	for (var i = 0; i < arr.length - 1; i++) {
  	if (arr[i] == arr[i + 1]) {
    	dupValues.push(arr[i]);
    }
  }
  return dupValues;
}
function loadHomeBoxes() {
  // Load boxes off of a site
  var homeLoaded = false;
  var currentHomeType = "type";
  var t = 0;
  var typeLetters = "";
  var headerDescLetters = "";
  var descLetters = "";
  while (!homeLoaded) {
    if (checkWord("* ",homePageText,t)) {
      currentHomeType = "headerDesc";
      t += 1;
    }
    else if (checkWord("** ",homePageText,t)) {
      currentHomeType = "desc";
      t += 2;
    }
    else if (checkWord("*** ",homePageText,t)) {
      createHomeBox(typeLetters,headerDescLetters,descLetters);
      typeLetters = "";
      headerDescLetters = "";
      descLetters = "";
      currentHomeType = "type";
      t += 3;
    }
    else if (checkWord("*****",homePageText,t)) {
      createHomeBox(typeLetters,headerDescLetters,descLetters);
      typeLetters = "";
      headerDescLetters = "";
      descLetters = "";
      currentHomeType = "type";
      homeLoaded = true;
    }
    else {
      if (currentHomeType == "type") {
        typeLetters += homePageText.charAt(t);
      }
      else if (currentHomeType == "headerDesc") {
        headerDescLetters += homePageText.charAt(t);
      }
      else {
        descLetters += homePageText.charAt(t);
      }
    }
    t++;
  }
}
function createHomeBox(typeBox, headerDesc, description) {
  // Head of Box
  homeBoxes[homeBoxes.length] = document.createElement("DIV");
  document.body.appendChild(homeBoxes[homeBoxes.length - 1]);
  homeBoxes[homeBoxes.length - 1].className = "homeBox animated bounceInLeft";
  homeBoxes[homeBoxes.length - 1].style.marginBottom = "0vh";
  homeBoxes[homeBoxes.length - 1].style.marginTop = "1vh";
  homeBoxes[homeBoxes.length - 1].innerHTML = headerDesc;
  if (typeBox == "info") {
    homeBoxes[homeBoxes.length - 1].style.background = "#42A5FF url('info.png') no-repeat 3vmin";
    homeBoxes[homeBoxes.length - 1].style.borderColor="#3233C4";
  }
  else if (typeBox == "feature") {
    homeBoxes[homeBoxes.length - 1].style.background = "#FFEE4B url('star.jpg') no-repeat 3vmin";
    homeBoxes[homeBoxes.length - 1].style.borderColor="#A09100";
  }
  else if (typeBox == "warning") {
    homeBoxes[homeBoxes.length - 1].style.background = "#FF2D2D url('warning.png') no-repeat 3vmin";
    homeBoxes[homeBoxes.length - 1].style.borderColor="#970000";
  }
  else if (typeBox == "check") {
    homeBoxes[homeBoxes.length - 1].style.background = "#50FF41 url('check.png') no-repeat 3vmin";
    homeBoxes[homeBoxes.length - 1].style.borderColor="#0A7C00";
  }
  homeBoxes[homeBoxes.length - 1].style.backgroundSize = "8vmin 8vmin";
  homeBoxes[homeBoxes.length - 1].style.color = homeBoxes[homeBoxes.length - 1].style.borderColor;

  // Body of Box
  homeBoxes[homeBoxes.length] = document.createElement("DIV");
  document.body.appendChild(homeBoxes[homeBoxes.length - 1]);
  homeBoxes[homeBoxes.length - 1].className = "homeBox animated bounceInRight";
  homeBoxes[homeBoxes.length - 1].innerHTML = description;
  homeBoxes[homeBoxes.length - 1].style.marginBottom = "10vh";
  if (typeBox == "info") {
    homeBoxes[homeBoxes.length - 1].style.background = "#42A5FF";
    homeBoxes[homeBoxes.length - 1].style.borderColor="#3233C4";
  }
  else if (typeBox == "feature") {
    homeBoxes[homeBoxes.length - 1].style.background = "#FFEE4B";
    homeBoxes[homeBoxes.length - 1].style.borderColor="#A09100";
  }
  else if (typeBox == "warning") {
    homeBoxes[homeBoxes.length - 1].style.background = "#FF2D2D";
    homeBoxes[homeBoxes.length - 1].style.borderColor="#970000";
  }
  else if (typeBox == "check") {
    homeBoxes[homeBoxes.length - 1].style.background = "#50FF41";
    homeBoxes[homeBoxes.length - 1].style.borderColor="#0A7C00";
  }
  homeBoxes[homeBoxes.length - 1].style.color = homeBoxes[homeBoxes.length - 1].style.borderColor;
  homeBoxes[homeBoxes.length - 1].style.fontSize = "4vmin";
  homeBoxes[homeBoxes.length - 1].style.textAlign = "left";
  homeBoxes[homeBoxes.length - 1].style.paddingLeft = "2vw";
  homeBoxes[homeBoxes.length - 1].style.paddingRight = "2vw";
  homeBoxes[homeBoxes.length - 1].style.width = "75vw";
  homeBoxes[homeBoxes.length - 1].style.paddingTop = "2vh";
  homeBoxes[homeBoxes.length - 1].style.paddingBottom = "2vh";
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
      /*else if (!((checkSpecialChars(pdf.charAt(j + placement),[" ","."]) && j > 0) || checkSpecialChars(pdf.charAt(j + placement),["–","’","-"]) || (pdf.charAt(j + placement) == "/" && !checkWord("UC/CSU",j + placement - 2)) || isLetter(pdf.charAt(j + placement)))) {
        if (!(j > 1 && checkSpecialChars(pdf.charAt(j + placement),["1","2","3","4","5","6","7","8","9","0","(",":"]))) {
          returnVal = false;
        }
      }*/
  }
  return returnVal;
}
function checkSpecialChars(string,arrayX) {
  for (var f = 0; f < arrayX.length; f++) {
    if (string == arrayX[f]) {
      return true;
    }
  }
  return false;
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
var headerInputP = document.getElementById("headerInputP");
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
var unwCircle = document.getElementById("unweightedGPACirc");
var wCircle = document.getElementById("weightedGPACirc");
function gpaPage() {
  hideEverything();
  gpaPageContain.style.display = "block";
  gpaPageContain.style.visibility = "visible";
  wCircle.innerHTML = Math.round(100*myGPA()[0])/100;
  unwCircle.innerHTML = Math.round(100*myGPA()[1])/100;
}
function myGPA() {
  var gpaTracker = [0,0,0]; // One for GPA, other for amount of grades, and one for unweighted
  for (var i = 0; i < 64; i++) {
      if (myGrades[i] == "A" && checkWord("AP ",myClasses[Math.floor(i/2)],0)) {
        gpaTracker[0] += 5;
        gpaTracker[2] += 4;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "B" && checkWord("AP ",myClasses[Math.floor(i/2)],0)) {
        gpaTracker[0] += 4;
        gpaTracker[2] += 3;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "C" && checkWord("AP ",myClasses[Math.floor(i/2)],0)) {
        gpaTracker[0] += 3;
        gpaTracker[2] += 2;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "D" && checkWord("AP ",myClasses[Math.floor(i/2)],0)) {
        gpaTracker[0] += 2;
        gpaTracker[2] += 1;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "F" && checkWord("AP ",myClasses[Math.floor(i/2)],0)) {
        gpaTracker[0] += 0;
        gpaTracker[2] += 0;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "A" && !(checkWord("AP ",myClasses[Math.floor(i/2)],0))) {
        gpaTracker[0] += 4;
        gpaTracker[2] += 4;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "B" && !(checkWord("AP ",myClasses[Math.floor(i/2)],0))) {
        gpaTracker[0] += 3;
        gpaTracker[2] += 3;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "C" && !(checkWord("AP ",myClasses[Math.floor(i/2)],0))) {
        gpaTracker[0] += 2;
        gpaTracker[2] += 2;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "D" && !(checkWord("AP ",myClasses[Math.floor(i/2)],0))) {
        gpaTracker[0] += 1;
        gpaTracker[2] += 1;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "F" && !(checkWord("AP ",myClasses[Math.floor(i/2)],0))) {
        gpaTracker[0] += 0;
        gpaTracker[2] += 0;
        gpaTracker[1]++;
      }
  }
  if (gpaTracker[1] != 0) {
    gpaTracker[0] /= gpaTracker[1];
    gpaTracker[2] /= gpaTracker[1];
  }
  else {
    gpaTracker[0] == "N/A";
    gpaTracker[2] == "N/A";
  }
  return [gpaTracker[0],gpaTracker[2]];
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
  if (loadedApp) {
    menu.classList.toggle("open");
    if (mainNav.style.display == "none") {
      mainNav.style.display = "block";
    }
    else {
      mainNav.style.display = "none";
    }
  }
}
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close");
var removeClass = document.getElementById("removeClass");
span[0].onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = "scroll";
}
span[1].onclick = function() {
    inputModal.style.display = "none";
    document.body.style.overflowY = "scroll";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
    else if (event.target == inputModal) {
        inputModal.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}
modalOk.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY = "scroll";
  myClasses[((gradeSelected - 9) * 8) + (classSelected - 1)] = classes[savePlacement];
  saveClasses();
  showEightClasses();
}
removeClass.onclick = function() {
  inputModal.style.display = "none";
  document.body.style.overflowY = "scroll";
  myClasses[((gradeSelected - 9) * 8) + (classSelected - 1)] = undefined;
  myGrades[2 * (((gradeSelected - 9) * 8) + (classSelected - 1))] = undefined;
  myGrades[2 * (((gradeSelected - 9) * 8) + (classSelected - 1)) + 1] = undefined;
  saveClasses();
  showEightClasses();
}
function saveClasses() {
  localStorage.myClasses = JSON.stringify(myClasses);
}
function saveGrades() {
  localStorage.myGrades = JSON.stringify(myGrades);
}
function getIdByClassName(string) {
  for (var j = 0; j < 192; j++) {
    if (classes[j] == string) {
      return j;
    }
  }
  return -1;
}
function clearClasses() {
  myClasses = [];
  myGrades = [];
  saveClasses();
  saveGrades();
  localStorage.removeItem("myClasses");
  localStorage.myClasses;
  localStorage.removeItem("myGrades");
  localStorage.myGrades;
}
function addGrade(gradeInput,quarter) {
  quarter--;
  myGrades[2 * (((gradeSelected - 9) * 8) + (classSelected - 1)) + quarter] = gradeInput;
  saveGrades();
  if (gradeInput && quarter == 0) {
    gradeDropDownA.innerHTML = "Selected Q1 Grade: <b>" + gradeInput + "</b>";
  }
  else if (gradeInput && quarter == 1) {
    gradeDropDownB.innerHTML = "Selected Q2 Grade: <b>" + gradeInput + "</b>";
  }
  else if (quarter == 0) {
    gradeDropDownA.innerHTML = "Select a Q1 grade";
  }
  else {
    gradeDropDownB.innerHTML = "Select a Q2 grade";
  }
}
var gradeDropDownA = document.getElementsByClassName("dropbtn")[0];
var gradeDropDownB = document.getElementsByClassName("dropbtn")[1];
var myClasses = [];
var myGrades = [];
localStorage.myClasses;
localStorage.myGrades;
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
        alert("Something went wrong...3");
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
    else if (checkWord("  ",catalogText,i - 2) && catalogText.charAt(i - 3) != ";" && catalogText.charAt(i) == catalogText.charAt(i).toUpperCase() && (currentType == "linkedCourse" || currentType == "interest" || currentType == "preReq")) {
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
var homePageText;
var loadedApp = false;
document.body.style.overflowX = "hidden";
/* THIS IS WHAT LOADS THE PROGRAM DOWN */
hideEverything();
toggleObjects([loadIcon],"show");
gettext("https://docs.wixstatic.com/ugd/5db6f5_7f8fbcb5bd064026b84356a51b42f5f3.pdf").then(function (text) {
  catalogText = text;
  organizePDF();
  cleanDescription();
  cleanOthers();
  gettext("https://docs.wixstatic.com/ugd/5db6f5_114a15c7d47b4cebb2df37e7e1b9c190.pdf").then(function (text) {
    homePageText = text;
    loadedApp = true;
    homePage();
  }, function (reason) {
    console.error(reason);
  });
  console.log("Done cleaning.");
  if (localStorage.myClasses != undefined && localStorage.myClasses != "") {
    myClasses = JSON.parse(localStorage.myClasses);
  }
  if (localStorage.myGrades != undefined && localStorage.myGrades != "") {
    myGrades = JSON.parse(localStorage.myGrades);
  }
}, function (reason) {
  console.error(reason);
});
/* THIS IS WHAT LOADS THE PROGRAM UP */
