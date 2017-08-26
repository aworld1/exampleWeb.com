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
var triClasses = document.getElementById("triClasses");
var triOne = document.getElementsByClassName("triOne");
var triTwo = document.getElementsByClassName("triTwo");
var triThree = document.getElementsByClassName("triThree");
var creditPage = document.getElementById("creditContainer");
var universityCreditPage = document.getElementById("universityCreditContainer");
var gpaPageContain = document.getElementById("gpaContainer");
var counselorContainer = document.getElementById("counselorContainer");
var loadIcon = document.getElementById("loadIcon");
var backButton = document.getElementById("backButton");
var searchImage = document.getElementById("searchImage");
var optionsContain = document.getElementById("optionsContain");
var gradeSelected;
var classSelected;
var numberOfClasses;
var modalOk = document.getElementById("acceptClass");
function showGrades() {
  gradeSelected = undefined;
  classSelected = undefined;
  hideEverything();
  toggleObjects([nine,ten,eleven,twelve,header],"show");
}
var popUpDiv = document.getElementById("popUpDiv");
var timeoutOfDiv;
var otherTimeoutOfDiv;
var popUpPic = document.getElementById("picOfPopUp");
var descPopUp = document.getElementById("descOfPopUp");
function fadeInFadeOut(passBool,time,desc) {
  if (localStorage.optionFade == "Fast") {
    time /= 1.5;
  }
  else if (localStorage.optionFade == "Hidden") {
    return;
  }
  clearTimeout(timeoutOfDiv);
  clearTimeout(otherTimeoutOfDiv);
  descOfPopUp.innerHTML = desc;
  toggleObjects([popUpPic,popUpDiv],"show");
  if (passBool) {
    popUpPic.style.backgroundImage = 'url("check.png")';
    document.getElementById("descOfPopUp").style.borderColor = "green";
    document.getElementById("descOfPopUp").style.color = "green";
  }
  else {
    popUpPic.style.backgroundImage = 'url("x.png")';
    document.getElementById("descOfPopUp").style.borderColor = "red";
    document.getElementById("descOfPopUp").style.color = "red";
  }
  popUpDiv.className = "animated fadeIn";
  timeoutOfDiv = setTimeout(function() {
    popUpDiv.className = "animated fadeOut";
    otherTimeoutOfDiv = setTimeout(function() {toggleObjects([popUpPic,popUpDiv],"hide"); },1000)
  },time);
}
var triClassA = document.getElementById("triClassA");
var triClassB = document.getElementById("triClassB");
var triClassC = document.getElementById("triClassC");
var triClassD = document.getElementById("triClassD");
var triClassE = document.getElementById("triClassE");
var triClassF = document.getElementById("triClassF");
var triClassG = document.getElementById("triClassG");
var triClassH = document.getElementById("triClassH");
var triClassI = document.getElementById("triClassI");
var triClassJ = document.getElementById("triClassJ");
var triClassK = document.getElementById("triClassK");
var triClassL = document.getElementById("triClassL");
var triClassM = document.getElementById("triClassM");
var triClassN = document.getElementById("triClassN");
var triClassO = document.getElementById("triClassO");
function showEightClasses(grade) {
  classSelected = undefined;
  if (grade) {
    gradeSelected = grade;
  }
  hideEverything();
  if (numberOfClasses == 32) {
    toggleObjects([classA,classB,classC,classD,classE,classF,classG,classH,header,backButton],"show");
    checkClasses([classA,classB,classC,classD,classE,classF,classG,classH]);
  }
  else if (numberOfClasses == 60) {
    toggleObjects([triClasses,header,backButton],"show");
    for (var x = 0; x < 15; x++) {
      checkClasses([triClassA,triClassB,triClassC,triClassD,triClassE,triClassF,triClassG,triClassH,triClassI,triClassJ,triClassK,triClassL,triClassM,triClassN,triClassO]);
    }
  }
}
function checkClasses(classesInFunc) {
  for (var j = 0; j < classesInFunc.length; j++) {
    if (myClasses[(((gradeSelected - 9) * (numberOfClasses/4)) + j)] != undefined) {
      classesInFunc[j].innerHTML = myClasses[(((gradeSelected - 9) * (numberOfClasses/4)) + j)];
      if (classesInFunc[j].innerHTML.length < 20) {
        if (numberOfClasses == 32) {
          classesInFunc[j].style.fontSize = "5vmin";
        }
        else if (numberOfClasses == 60) {
          classesInFunc[j].style.fontSize = "4vmin";
        }
      }
      else {
        if (numberOfClasses == 32) {
          classesInFunc[j].style.fontSize = "3vmin";
        }
        else if (numberOfClasses == 60) {
          classesInFunc[j].style.fontSize = "2.5vmin";
        }
      }
    }
    else {
      classesInFunc[j].style.fontSize = "6vmin";
      if (numberOfClasses == 60) {
        classesInFunc[j].style.fontSize = "5vmin";
      }
      classesInFunc[j].innerHTML = "Select Class";
    }
  }
}
var inputModal = document.getElementById("inputInfoModal");
function showOptions(classNo) {
  cleanGrades();
  if (classNo) {
    classSelected = classNo;
    if (myClasses[((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)]) {
      inputModal.style.display = "block";
      if (numberOfClasses == 60) {
        toggleObjects([gradeDropDownB],"hide");
      }
      headerInputP.innerHTML = classes[getIdByClassName(myClasses[((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)])].name;
      if (myGrades[2 * (((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1))] != undefined) {
        gradeDropDownA.innerHTML = "Selected Q1 Grade: <b>" + myGrades[2 * (((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1))] + "</b>";
        if (numberOfClasses == 60) {
          gradeDropDownA.innerHTML = "Selected Grade: <b>" + myGrades[2 * (((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1))] + "</b>";
        }
      }
      else {
        gradeDropDownA.innerHTML = "Select a Q1 grade";
        if (numberOfClasses == 60) {
          gradeDropDownA.innerHTML = "Select a Grade";
        }
      }
      if (myGrades[2 * (((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)) + 1] != undefined) {
        gradeDropDownB.innerHTML = "Selected Q2 Grade: <b>" + myGrades[2 * (((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)) + 1] + "</b>";
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
  addingClass = true;
}
var addingClass = false;
var englishCredits = [0,40];
var socialScienceCredits = [0,30];
var mathCredits = [0,20];
var physicalScienceCredits = [0,10];
var biologicalScienceCredits = [0,10];
var fineArtCredits = [0,10];
var exerciseCredits = [0,25];
var electiveCredits = [0,85];
var foreignCredits = [0,0];
function createMailLink(thisemail,thissubject,thisBody) {
	var mailLink = "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=";
  mailLink += thisemail;
  mailLink += "&su=";
  mailLink += thissubject.split(' ').join('+');
  mailLink += "&body=";
  mailLink += thisBody.split(' ').join('+');
  mailLink += "+&ui=2&tf=1&shva=1";
  return mailLink;
}
function myCredits() {
  englishCredits[0] = 0;
  socialScienceCredits[0] = 0;
  mathCredits[0] = 0;
  physicalScienceCredits[0] = 0;
  biologicalScienceCredits[0] = 0;
  fineArtCredits[0] = 0;
  exerciseCredits[0] = 0;
  electiveCredits[0] = 0;
  foreignCredits[0] = 0;
  if (localStorage.school == "Westview") {
    for (var i = 0; i < numberOfClasses; i++) {
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
  }
  else if (localStorage.school == "Del Norte") {
    for (var i = 0; i < numberOfClasses; i++) {
      if (myClasses[i] != undefined) {
        if (getCategory(getIdByClassName(myClasses[i])) == "ENGLISH") {
          englishCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "SOCIAL SCIENCE") {
          socialScienceCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "MATHEMATICS") {
          mathCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "SCIENCES") {
          if (myClasses[i].indexOf("Physic") > -1) {
            physicalScienceCredits[0] += 5;
          }
          else if (myClasses[i].indexOf("Bio") > -1) {
            biologicalScienceCredits[0] += 5;
          }
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "ELECTIVES – FINE ARTS") {
          fineArtCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])).indexOf("PHYSICAL EDUCATION") > -1 || getCategory(getIdByClassName(myClasses[i])) == "HEALTH" || getCategory(getIdByClassName(myClasses[i])) == "PE / ATHLETICS") {
          exerciseCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "WORLD LANGUAGES") {
          foreignCredits[0] += 5;
        }
        else {
          electiveCredits[0] += 5;
        }
      }
    }
  }
  else if (localStorage.school == "Poway") {
    for (var i = 0; i < numberOfClasses; i++) {
      if (myClasses[i] != undefined) {
        if (getCategory(getIdByClassName(myClasses[i])) == "English") {
          englishCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "US History" || getCategory(getIdByClassName(myClasses[i])) == "World History" || getCategory(getIdByClassName(myClasses[i])) == "Civics" || getCategory(getIdByClassName(myClasses[i])) == "Civics/Econ" || getCategory(getIdByClassName(myClasses[i])) == "Economics") {
          socialScienceCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "Math") {
          mathCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "Physical Science") {
          physicalScienceCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "Life Science") {
          biologicalScienceCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])).indexOf("Fine Art") > -1) {
          fineArtCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "Health" || getCategory(getIdByClassName(myClasses[i])) == "Physical Education") {
          exerciseCredits[0] += 5;
        }
        else if (getCategory(getIdByClassName(myClasses[i])) == "Foreign Language") {
          foreignCredits[0] += 5;
        }
        else {
          electiveCredits[0] += 5;
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
  if (electiveCredits[0] > 120) {
    addAchieve(1,3);
  }
  console.log("Done credit calculation.");
}
var achievementInput = document.getElementById("achievementInput");
achievementInput.onkeyup = function () {
  if (achievementInput.value == "iMETPLANpal!") {
    addAchieve(2,0);
  }
  else if (achievementInput.value == "iHelpeD") {
    addAchieve(2,1);
  }
  else if (achievementInput.value == "NewACHieveBYmE") {
    addAchieve(2,2);
  }
  else if (achievementInput.value == "iRePorteDPROBlemBuG") {
    addAchieve(2,3);
  }
  else if (achievementInput.value == "RECOmmENDEDpLANpALTOaScHooL") {
    addAchieve(2,4);
  }
  achievementPage();
}
function hideEverything() {
  toggleObjects([helpContain,achievementContainer,schoolHead,header,triClasses,nine,ten,eleven,twelve,classA,classB,classC,classD,classE,classF,classG,classH,search,searchImage,loadIcon,backButton,creditPage,universityCreditPage,gpaPageContain,verifyHead,counselorContainer,optionsContain,popUpDiv],"hide");
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
  unCredA[0] = 0;
  unCredB[0] = 0;
  unCredC[0] = 0;
  unCredD[0] = 0;
  unCredE[0] = 0;
  unCredF[0] = 0;
  unCredG[0] = 0;
  for (var i = 0; i < numberOfClasses; i++) {
    if (myClasses[i] != undefined && localStorage.school == "Westview") {
      // If the class exists
      if (classes[getIdByClassName(myClasses[i])].universityCredit.length == 1 || classes[getIdByClassName(myClasses[i])].universityCredit.length == 6) {
        if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(0) == "A") {
          unCredA[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(0) == "B") {
          unCredB[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(0) == "C") {
          unCredC[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(0) == "D") {
          unCredD[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(0) == "E") {
          unCredE[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(0) == "F") {
          unCredF[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(0) == "G") {
          unCredG[0]++;
        }
      }
      if (classes[getIdByClassName(myClasses[i])].universityCredit.length == 6) {
        if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(5) == "A") {
          unCredA[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(5) == "B") {
          unCredB[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(5) == "C") {
          unCredC[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(5) == "D") {
          unCredD[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(5) == "E") {
          unCredE[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(5) == "F") {
          unCredF[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(5) == "G") {
          unCredG[0]++;
        }
      }
    } // Westview ends
    else if (myClasses[i] != undefined && localStorage.school == "Poway") {
      if (classes[getIdByClassName(myClasses[i])].universityCredit.indexOf('“') > -1) {
        if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.indexOf('“') + 1) == "A") {
          unCredA[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.indexOf('“') + 1) == "B") {
          unCredB[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.indexOf('“') + 1) == "C") {
          unCredC[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.indexOf('“') + 1) == "D") {
          unCredD[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.indexOf('“') + 1) == "E") {
          unCredE[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.indexOf('“') + 1) == "F") {
          unCredF[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.indexOf('“') + 1) == "G") {
          unCredG[0]++;
        }
      }
      if (classes[i].universityCredit.replace(/[^“]/g, "").length > 1) {
        if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.lastIndexOf('“') + 1) == "A") {
          unCredA[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.lastIndexOf('“') + 1) == "B") {
          unCredB[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.lastIndexOf('“') + 1) == "C") {
          unCredC[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.lastIndexOf('“') + 1) == "D") {
          unCredD[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.lastIndexOf('“') + 1) == "E") {
          unCredE[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.lastIndexOf('“') + 1) == "F") {
          unCredF[0]++;
        }
        else if (classes[getIdByClassName(myClasses[i])].universityCredit.charAt(classes[getIdByClassName(myClasses[i])].universityCredit.lastIndexOf('“') + 1) == "G") {
          unCredG[0]++;
        }
      }
    } // Poway ends
  } // For loop
}
var helpContain = document.getElementById("helpContainer");
function helpPage() {
  hideEverything();
  toggleObjects([helpContain],"show");
}
function counselorPage() {
  hideEverything();
  counselorContainer.style.display = "block";
  counselorContainer.style.visibility = "visible";
}
function searchPage() {
  hideEverything();
  toggleObjects([search,searchImage,backButton],"show");
  searchClasses();
  addingClass = false;
}
var counselorEmail = document.getElementById("studentInput");
var studentCode = document.getElementById("counselorInput");
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function sendToCounselor() {
  if (validateEmail(counselorEmail.value)) {
    location.assign(createMailLink(counselorEmail.value,"Counselor Review for School Plan", document.getElementById("counselorEmailText").innerHTML + encodeClasses()));
  }
  else {
    fadeInFadeOut(false,1000,"Invalid Email");
  }
}
var decodeSuccessBool;
function refreshToCode() {
  decodeSuccessBool = true;
  decodeClasses(studentCode.value);
  if (decodeSuccessBool) {
    myClasses = decodeClasses(studentCode.value)[0];
    myGrades = decodeClasses(studentCode.value)[1];
    cleanGrades();
    fadeInFadeOut(true,1000,"Classes Inserted");
  }
  else {
    fadeInFadeOut(false,1000,"Invalid Code");
  }
}
function optionsPage() {
  hideEverything();
  toggleObjects([optionsContain],"show");
  document.getElementById("optionFadeHead").innerHTML = "Result Pop-Up Fade Speed (" + localStorage.optionFade + ")";
}
function encodeClasses() {
  var myCode = "";
  for (var i = 0; i < numberOfClasses; i++) {
    if (!getIdByClassName(myClasses[i])) {
      myCode += "000";
    }
    else if (getIdByClassName(myClasses[i]) >= 100) {
      myCode += getIdByClassName(myClasses[i]);
    }
    else if (getIdByClassName(myClasses[i]) >= 10) {
      myCode += ("0" + getIdByClassName(myClasses[i]));
    }
    else if (getIdByClassName(myClasses[i]) >= 1) {
      myCode += ("00" + getIdByClassName(myClasses[i]));
    }
    else {
      myCode += "0*1";
    }
  }
  for (var i = 0; i < numberOfClasses*2; i++) {
    if (myGrades[i]) {
      myCode += myGrades[i];
    }
    else {
      myCode += "0";
    }
    if (numberOfClasses == 60) {
      i++;
    }
  }
  return myCode;
}
function decodeClasses(code) {
  decodedClasses = [];
  decodedGrades = [];
  if ((code.length == numberOfClasses*5 && numberOfClasses == 32) || (code.length == numberOfClasses*4 && numberOfClasses == 60)) {
    for (var i = 0; i < numberOfClasses; i++) {
      if (code.charAt(i*3) == "0" && code.charAt(i*3+1) == "*" && code.charAt(i*3+2) == "1") {
        decodedClasses.push(undefined);
      }
      else if (code.charAt(i*3) == "0" && code.charAt(i*3+1) == "0" && code.charAt(i*3+2) == "0") {
        decodedClasses.push(classes[0]);
      }
      else if (code.charAt(i*3) == "0" && code.charAt(i*3+1) == "0") {
        decodedClasses.push(classes[Number(code.charAt(i*3+2))]);
      }
      else if (code.charAt(i*3) == "0") {
        decodedClasses.push(classes[Number(code.charAt(i*3+1) + code.charAt(i*3+2))]);
      }
      else {
        decodedClasses.push(classes[Number(code.charAt(i*3) + code.charAt(i*3+1) + code.charAt(i*3+2))]);
      }
    }
    if (numberOfClasses == 32) {
      for (var i = numberOfClasses*3; i < numberOfClasses*5; i++) {
        if (code.charAt(i) == "0") {
          decodedGrades.push(undefined);
        }
        else {
          decodedGrades.push(code.charAt(i));
        }
      }
    }
    else if (numberOfClasses == 60) {
      for (var i = numberOfClasses*3; i < numberOfClasses*4; i++) {
        if (code.charAt(i) == "0") {
          decodedGrades.push(undefined);
          decodedGrades.push(undefined);
        }
        else {
          decodedGrades.push(code.charAt(i));
          decodedGrades.push(undefined);
        }
      }
    }
    return [decodedClasses,decodedGrades];
  }
  decodeSuccessBool = false;
}
var homeBoxes = [];
function homePage() {
  hideEverything();
  toggleObjects([header],"show");
  loadHomeBoxes();
  if (homeBoxes.length == 0) {
    createHomeBox("warning","No Internet Connection","There was no internet connection and therefore no notifications were loaded. Try refreshing the home page.");
  }
}
function checkDups(arr) {
  var sorted_arr = arr.concat().slice().sort();
  var results = [];
  for (var i = 0; i < arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
          results.push(sorted_arr[i]);
      }
  }
  return results;
}
function parseClasses() {
  if (localStorage.myClasses != undefined && localStorage.myClasses != "") {
    myClasses = JSON.parse(localStorage.myClasses);
  }
  if (localStorage.myGrades != undefined && localStorage.myGrades != "") {
    myGrades = JSON.parse(localStorage.myGrades);
  }
}
function parseAchievements() {
  if (localStorage.myAchievements != undefined && localStorage.myAchievements != "") {
    myAchievements = JSON.parse(localStorage.myAchievements);
  }
}
function loadHomeBoxes() {
  // Load boxes off of a site
  var homeLoaded = false;
  var currentHomeType = "type";
  var t = 0;
  var typeLetters = "";
  var headerDescLetters = "";
  var descLetters = "";
  while (!homeLoaded || t >= homePageText.length) {
    if (checkWord("#",homePageText,t) && currentHomeType == "type") {
      currentHomeType = "headerDesc";
      t += 1;
    }
    else if (checkWord("#",homePageText,t) && currentHomeType == "headerDesc") {
      currentHomeType = "desc";
      t += 1;
    }
    else if (checkWord("#",homePageText,t) && currentHomeType == "desc") {
      createHomeBox(typeLetters,headerDescLetters,descLetters);
      typeLetters = "";
      headerDescLetters = "";
      descLetters = "";
      currentHomeType = "type";
      t += 1;
    }
    else if (checkWord("*END*",homePageText,t)) {
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
  if (addingClass) {
    if (classSelected) {
      showEightClasses();
    }
    else if (gradeSelected) {
      showGrades();
    }
  }
  else {
    homePage();
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
var verifyHead = document.getElementById("verifyHead");
function verifyPage() {
  hideEverything();
  verifyHead.style.display = "block";
  verifyHead.style.visibility = "visible";
  verifyClasses();
}
function cleanGrades() {
  for (var i = 0; i < numberOfClasses*2; i++) {
    if (myClasses[Math.floor(i/2)] && (myGrades[i] != "A" && myGrades[i] != "B" && myGrades[i] != "C" && myGrades[i] != "D" && myGrades[i] != "F")) {
      myGrades[i] = undefined;
    }
  }
  if (numberOfClasses == 60) {
    for (var i = 1; i < numberOfClasses*2; i+=2) {
      myGrades[i] = undefined;
    }
  }
}
function verifyClasses() {
  var duplicateClasses = checkDups(myClasses);
  var offRollBool = false
  for (var i = 0; i < duplicateClasses.length; i++) {
    if (duplicateClasses[i]) {
      if (i == 0) {
        createVerifyBox("Duplicate Class: " + duplicateClasses[i]);
      }
      else if (homeBoxes[homeBoxes.length - 1].innerHTML != "Duplicate Class: " + duplicateClasses[i]) {
        createVerifyBox("Duplicate Class: " + duplicateClasses[i]);
      }
    }
    else if (!offRollBool) {
      createVerifyBox("You are taking more than one Off Roll, this is not recommended");
      offRollBool = true;
    }
  }
  if (!(checkCategory("English",0,numberOfClasses/4-1))) {
    createVerifyBox("You must take an English class in 9th Grade");
  }
  if (!(checkCategory("Mathematics",0,numberOfClasses/4-1))) {
    createVerifyBox("You must take a Math class in 9th Grade");
  }
  if (!(checkCategory("PhysicalEducation",0,numberOfClasses/4-1))) {
    createVerifyBox("You must take a Physical Education class in 9th Grade");
  }
  if (!(checkClass(myClasses,"ENS 1-2",0,numberOfClasses/4-1) || checkClass(myClasses,"ENS 1-2 ONLINE",0,numberOfClasses/4-1)) && localStorage.school != "Poway") {
    createVerifyBox("You must take ENS 1-2 in 9th Grade");
  }
  if (!(checkCategory("English",numberOfClasses/4,numberOfClasses/2-1))) {
    createVerifyBox("You must take an English class in 10th Grade");
  }
  if (!(checkCategory("Mathematics",numberOfClasses/4,numberOfClasses/2-1))) {
    createVerifyBox("You must take a Math class in 10th Grade");
  }
  if (!(checkCategory("SocialSciences",numberOfClasses/4,numberOfClasses/2-1))) {
    createVerifyBox("You must take a Social Science class in 10th Grade");
  }
  if (!(checkCategory("English",numberOfClasses/2,numberOfClasses/4*3-1))) {
    createVerifyBox("You must take an English class in 11th Grade");
  }
  if (!(checkCategory("SocialSciences",numberOfClasses/2,numberOfClasses/4*3-1))) {
    createVerifyBox("You must take a Social Science class in 11th Grade");
  }
  if (!(checkCategory("English",numberOfClasses/4*3,numberOfClasses-1))) {
    createVerifyBox("You must take an English class in 12th Grade");
  }
  if (!(checkCategory("SocialSciences",numberOfClasses/4*3,numberOfClasses-1))) {
    createVerifyBox("You must take a Math class in 12th Grade");
  }
  if (!creditsComplete()) {
    createVerifyBox("Your credits are not complete, check them in the menu");
  }
  if (homeBoxes.length == 0) {
    createVerifyBox("Your schedule is perfect!");
    addAchieve(1,1);
  }
}
function createVerifyBox(name) {
  homeBoxes[homeBoxes.length] = document.createElement("DIV");
  document.body.appendChild(homeBoxes[homeBoxes.length - 1]);
  homeBoxes[homeBoxes.length - 1].className = "verifyBox animated bounceInUp";
  homeBoxes[homeBoxes.length - 1].innerHTML = name;
}
function creditsComplete() {
  myCredits();
  for (var i = 0; i < creditArray.length; i++) {
    if (creditArray[i][0] < creditArray[i][1]) {
      return false;
    }
  }
  return true;
}
function checkClass(classArr, classname, numberStart, numberEnd) {
  for (var x = numberStart; x < numberEnd; x++) {
    if (classArr[x] == classname) {
      return true;
    }
  }
  return false;
}
function checkCategory(categoryName,numberStart,numberEnd) {
  for (var x = numberStart; x <= numberEnd; x++) {
    if (getIdByClassName(myClasses[x]) != -1) {
      if (getCategory(getIdByClassName(myClasses[x])).toUpperCase() == categoryName.toUpperCase()) {
        return true;
      }
    }
  }
  return false;
}
function isClass(pdf, placement) {
  var returnVal = true;
  var amountOfCheck;
  if (localStorage.school == "Poway") {
    amountOfCheck = 12;
  }
  else {
    amountOfCheck = 15;
  }
  for (var j = 0; j < amountOfCheck; j++) {
    // Check for upper case
      if (!(pdf.charAt(j + placement) == pdf.charAt(j + placement).toUpperCase() || (pdf.charAt(j + placement - 1) == "I" && pdf.charAt(j + placement + 1) == "-"))) {
        if (!(checkWord("ORCHESTRA",catalogText,placement) || checkWord("AVID 1-8",catalogText,placement) || checkWord("TALL FLAGS ",catalogText,placement) || checkWord("DRAMA ",catalogText,placement) || checkWord("SOCIOLOGY ",catalogText,placement) || checkWord("CIVICS ",catalogText,placement) || checkWord("ECONOMICS ",catalogText,placement))) {
          returnVal = false;
        }
      }
      else if (!((pdf.charAt(j + placement) == " " && j > 0) || pdf.charAt(j + placement) == "–" || (pdf.charAt(j + placement) == ")" && pdf.charAt(j + placement - 2) == "(") || (pdf.charAt(j + placement) == "." && j > 0) || pdf.charAt(j + placement) == "’" || (pdf.charAt(j + placement) == "/" && pdf.charAt(j + placement - 1) != "C" && pdf.charAt(j + placement + 1) != "C") || pdf.charAt(j + placement) == "-" || isLetter(pdf.charAt(j + placement)))) {
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
  for (var i = 0; i < classes.length; i++) {
    reachedPeriod = false;
    storedCategory = "";
    spaceCount = 0;
    while (!reachedPeriod) {
      currentChar = classes[i].description.charAt(classes[i].description.length - 1);
      if (localStorage.school == "Westview") {
        if (currentChar == "." || spaceCount > 10) {
          reachedPeriod = true;
          if (storedCategory != ""){
            storedCategory = storedCategory.split("").reverse().join("");
            // Check if it is an actual category
            if (storedCategory.length > 2 && storedCategory.length < 30 && storedCategory.charAt(0) == storedCategory.charAt(0).toUpperCase() && storedCategory.charAt(1) == storedCategory.charAt(1).toLowerCase()) {
              category = storedCategory;
            }
          }
          classes[i].category = category;
        }
        else {
          if (isLetter(currentChar)) {
            storedCategory += currentChar;
          }
          if (currentChar == " ") {
            spaceCount++;
          }
          else {
            spaceCount = 0;
          }
          classes[i].description = classes[i].description.slice(0,-1);
        }
      }
      else if (localStorage.school == "Del Norte") {
        if (classes[i].description.charAt(classes[i].description.length - 1) != "." && classes[i].description != "") {
          classes[i].description = classes[i].description.slice(0,-1);
        }
        else {
          if (classes[i].description == "") {
            classes[i].description = "None";
          }
          reachedPeriod = true;
        }
      }
      else if (localStorage.school == "Poway") {
        classes[i].description = classes[i].description.trim();
        if (classes[i].description == "") {
          classes[i].description = "None";
        }
        reachedPeriod = true;
      }
    } // While reachedPeriod
  } // For loop
}
function getCategory(placement) {
  return classes[placement].category;
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
  categoryP.innerHTML = classes[placement].category;
  classP.innerHTML = classes[placement].name;
  codeP.innerHTML = classes[placement].code;
  gradesP.innerHTML = classes[placement].grade;
  creditsP.innerHTML = classes[placement].credit;
  universityCreditsP.innerHTML = classes[placement].universityCredit;
  preReqsP.innerHTML = classes[placement].preReq;
  interestP.innerHTML = classes[placement].interest;
  linkedCoursesP.innerHTML = classes[placement].linkedCourse;
  savePlacement = placement;
  if (classes[placement].name.charAt(0) == "L" && classes[placement].name.charAt(1) == "/") {
    discontinuedP.innerHTML = "<b>Warning! This class is discontinued/only available for special education students and may not be available. Please advise a counselor before taking this class.</b>";
    discontinuedP.innerHTML += "<br/><br/>Any class with <b>'L/'</b> in front of its name is discontinued.</b>";
    discontinuedP.style.color = "red";
  }
  else {
    discontinuedP.innerHTML = "No";
    discontinuedP.style.color = "black";
  }

  descriptionP.innerHTML = classes[placement].description;
  modal.style.display = "block";
  document.body.style.overflowY = "hidden";
  toggleObjects([document.getElementById("addClassFooter")],"show");
  if (!addingClass) {
    toggleObjects([document.getElementById("addClassFooter")],"hide");
  }
}
var unwCircle = document.getElementById("unweightedGPACirc");
var wCircle = document.getElementById("weightedGPACirc");
var achievementContainer = document.getElementById("achievementContainer");
function achievementPage() {
  hideEverything();
  toggleObjects([achievementContainer],"show");
  for (var i = 0; i < myAchievements.length; i++) {
    for (var j = 0; j < myAchievements[i].length; j++) {
      if (myAchievements[i][j] && i == 0) {
        document.getElementById("bronzeMedal" + (j+1)).style.backgroundColor = "#47E52D";
      }
      else if (i == 0) {
        document.getElementById("bronzeMedal" + (j+1)).style.backgroundColor = "white";
      }
      if (myAchievements[i][j] && i == 1) {
        document.getElementById("silverMedal" + (j+1)).style.backgroundColor = "#47E52D";
      }
      else if (i == 1) {
        document.getElementById("silverMedal" + (j+1)).style.backgroundColor = "white";
      }
      if (myAchievements[i][j] && i == 2) {
        document.getElementById("goldMedal" + (j+1)).style.backgroundColor = "#47E52D";
      }
      else if (i == 2) {
        document.getElementById("goldMedal" + (j+1)).style.backgroundColor = "white";
      }
    }
  }
}
function gpaPage() {
  hideEverything();
  cleanGrades();
  gpaPageContain.style.display = "block";
  gpaPageContain.style.visibility = "visible";
  wCircle.innerHTML = Math.round(100*myGPA()[0])/100;
  unwCircle.innerHTML = Math.round(100*myGPA()[1])/100;
  if (isInt(myGPA()[0])) {
    wCircle.innerHTML += ".0";
  }
  if (isInt(myGPA()[1])) {
    unwCircle.innerHTML += ".0";
  }
}
function myGPA() {
  var gpaTracker = [0,0,0]; // One for GPA, other for amount of grades, and one for unweighted
  var isAp;
  for (var i = 0; i < numberOfClasses*2; i++) {
      if (myClasses[Math.floor(i/2)]) {
        isAp = (checkWord("AP ",myClasses[Math.floor(i/2)],0) || checkWord("ADVANCED PLACEMENT ",myClasses[Math.floor(i/2)],0) || classes[getIdByClassName(myClasses[Math.floor(i/2)])].description.indexOf("A=5, B=4, C=3") > -1);
      }
      if (myGrades[i] == "A" && isAp) {
        gpaTracker[0] += 5;
        gpaTracker[2] += 4;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "B" && isAp) {
        gpaTracker[0] += 4;
        gpaTracker[2] += 3;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "C" && isAp) {
        gpaTracker[0] += 3;
        gpaTracker[2] += 2;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "D" && isAp) {
        gpaTracker[0] += 2;
        gpaTracker[2] += 1;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "F" && isAp) {
        gpaTracker[0] += 0;
        gpaTracker[2] += 0;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "A" && !isAp) {
        gpaTracker[0] += 4;
        gpaTracker[2] += 4;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "B" && !isAp) {
        gpaTracker[0] += 3;
        gpaTracker[2] += 3;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "C" && !isAp) {
        gpaTracker[0] += 2;
        gpaTracker[2] += 2;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "D" && !isAp) {
        gpaTracker[0] += 1;
        gpaTracker[2] += 1;
        gpaTracker[1]++;
      }
      else if (myGrades[i] == "F" && !isAp) {
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
  if (gpaTracker[0] == 5) {
    addAchieve(0,3);
  }
  else if (gpaTracker[2] <= 0.1) {
    addAchieve(0,2);
  }
  return [gpaTracker[0],gpaTracker[2]];
}
function isInt(n) {
   return n % 1 === 0;
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
        if (classes[i].name.toUpperCase().indexOf(filter) > -1 || classes[i].code.toUpperCase().indexOf(filter) > -1 || classes[i].category.toUpperCase().indexOf(filter) > -1) {
            buttons[buttons.length] = document.createElement("BUTTON");
            document.body.appendChild(buttons[buttons.length - 1]);
            buttons[buttons.length - 1].innerHTML = classes[i].name;
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
var schoolHead = document.getElementById("schoolHead");
function schoolPage() {
  hideEverything();
  toggleObjects([schoolHead],"show");
  for (var u = 0; u < buttons.length; u++) {
    buttons[u].style.display = "none";
    buttons[u].style.visibility = "none"
  }
  buttons = [];
  var schools = ["Del Norte","Poway","Westview"];
  for (var i = 0; i < schools.length;i++) {
    createSchoolButton(schools[i]);
  }
}
function createSchoolButton(schoolName) {
  buttons[buttons.length] = document.createElement("BUTTON");
  document.body.appendChild(buttons[buttons.length - 1]);
  buttons[buttons.length - 1].innerHTML = schoolName;
  if (schoolName == localStorage.school) {
    buttons[buttons.length - 1].innerHTML = "Current School: " + schoolName;
  }
  buttons[buttons.length - 1].style.width = "90%";
  buttons[buttons.length - 1].style.height = "10vh";
  buttons[buttons.length - 1].style.marginLeft = "5%";
  buttons[buttons.length - 1].style.marginRight = "5%";
  buttons[buttons.length - 1].style.marginTop = "5vh";
  buttons[buttons.length - 1].style.borderRadius = "2vh";
  if (buttons.length % 2 == 0) {
    buttons[buttons.length - 1].style.backgroundColor = "gold";
    buttons[buttons.length - 1].className = "animated bounceInLeft";
  }
  else {
    buttons[buttons.length - 1].style.backgroundColor = "black";
    buttons[buttons.length - 1].style.color = "gold";
    buttons[buttons.length - 1].className = "animated bounceInRight";
  }
  buttons[buttons.length - 1].style.fontFamily = "monospace";
  buttons[buttons.length - 1].style.fontSize = "3.5vmin";
  buttons[buttons.length - 1].onclick = function () { confirmTask('changeSchool("' + schoolName + '")'); };
}
function changeSchool(schoolName) {
  if (localStorage.school != schoolName) {
    localStorage.school = schoolName;
    clearClasses();
    location.reload();
  }
  else {
    fadeInFadeOut(false,1000,"Already Chosen");
  }
}
function cleanOthers() {
  if (localStorage.school == "Westview") {
    for (var i = 0; i < classes.length;i++) {
      var moveOn = false;
      while (!moveOn) {
        if (classes[i].name.charAt(classes[i].name.length - 1) == " ") {
          classes[i].name = classes[i].name.slice(0,-1);
        }
        else {
          moveOn = true;
        }
      }
      if (classes[i].name.substring(0,7) == "ELL 3-4") {
        classes[i].name = classes[i].name.substring(0,7);
      }
      moveOn = false;
      classes[i].grade = classes[i].grade.slice(1);
      while (!moveOn) {
        if (classes[i].grade.charAt(classes[i].grade.length - 1) == " ") {
          classes[i].grade = classes[i].grade.slice(0,-1);
        }
        else {
          moveOn = true;
        }
      }
      classes[i].credit = classes[i].credit.slice(1);
      classes[i].credit = classes[i].credit.slice(0,-1);
      classes[i].code = classes[i].code.slice(0,-1);
      classes[i].universityCredit = classes[i].universityCredit.slice(0,-1);
      classes[i].preReq = classes[i].preReq.slice(0,-1);
      moveOn = false;
      while (!moveOn) {
        if (classes[i].preReq.charAt(classes[i].preReq.length - 1) == " ") {
          classes[i].preReq = classes[i].preReq.slice(0,-1);
        }
        else {
          moveOn = true;
        }
      }
      moveOn = false;
      while (!moveOn) {
        if (classes[i].interest.charAt(classes[i].interest.length - 1) == " ") {
          classes[i].interest = classes[i].interest.slice(0,-1);
        }
        else {
          moveOn = true;
        }
      }
      moveOn = false;
      while (!moveOn) {
        if (classes[i].linkedCourse.charAt(classes[i].linkedCourse.length - 1) == " ") {
          classes[i].linkedCourse = classes[i].linkedCourse.slice(0,-1);
        }
        else {
          moveOn = true;
        }
      }
    }
  }
  else if (localStorage.school == "Del Norte") {
    for (var x = 0; x < classes.length; x++) {
      if (classes[x].name.indexOf("COURSE TITLE COURSE NUMBER") > -1) {
        category = classes[x].name.slice(0,classes[x].name.indexOf("COURSE TITLE COURSE NUMBER") - 2);
        if (checkWord("PE / ATHLETICS",category,0)) {
          category = "PE / ATHLETICS";
        }
        if (checkWord("PHYSICAL EDUCATION St",category,0)) {
          category = "PHYSICAL EDUCATION";
        }
        classes[x].name = classes[x].name.slice(classes[x].name.indexOf("COURSE TITLE COURSE NUMBER") + 26,classes[x].name.length);
      }
      classes[x].category = category;
    }
    for (var i = 0; i < classes.length;i++) {
      classes[i].name = classes[i].name.trim();
      if (checkWord("CAHSEE.",classes[i].name,0)) {
        classes[i].name = classes[i].name.substr(7);
        classes[i].name = classes[i].name.trim();
        if (checkWord("51",classes[i].name,0)) {
          classes[i].name = classes[i].name.substr(2);
          classes[i].name = classes[i].name.trim();
        }
      }
      if (checkWord("D COMPUTER ANIMATION",classes[i].name,0)) {
        classes[i].name = "3" + classes[i].name;
      }
      else if (checkWord("VID ",classes[i].name,0)) {
        classes[i].name = "A" + classes[i].name;
      }
      else if (checkWord("NTRO ",classes[i].name,0)) {
        classes[i].name = "I" + classes[i].name;
      }
      else if (checkWord("ORK ",classes[i].name,0)) {
        classes[i].name = "W" + classes[i].name;
      }
      else if (checkWord("IBRARY ",classes[i].name,0)) {
        classes[i].name = "L" + classes[i].name;
      }
      else if (checkWord("FFICE ",classes[i].name,0)) {
        classes[i].name = "O" + classes[i].name;
      }
    }
    for (var i = 0; i < classes.length; i++) {
      if (checkWord("EALTH",classes[i].category,0)) {
        classes[i].category = "H" + classes[i].category;
      }
    }
  }
  else if (localStorage.school == "Poway") {
    for (var i = 0; i < classes.length; i++) {
      if (checkWord("O.C.I.S. PE program.",classes[i].name,0)) {
        classes[i].name = classes[i].name.substring(27);
      }
      else if (checkWord("OUN",classes[i].name,0)) {
        classes[i].name = classes[i].name.substring(3);
      }
      else if (checkWord("AB.",classes[i].name,0)) {
        classes[i].name = classes[i].name.substring(3);
      }
      else if (checkWord("BC.",classes[i].name,0)) {
        classes[i].name = classes[i].name.substring(3);
      }
      else if (checkWord("D COMPUTER",classes[i].name,0)) {
        classes[i].name = "3" + classes[i].name;
      }
      else if (checkWord("AGRICULTURE",classes[i].name,0) && i==0) {
        classes[i].name = classes[i].name.substring(11);
      }
      if (classes[i].category == "") {
        classes[i].category = "Elective";
      }
      else if (classes[i].category == "ife Science") {
        classes[i].category = "Life Science";
      }
      else if (classes[i].category == "ine Art") {
        classes[i].category = "Fine Art";
      }
      else if (classes[i].category == "lective") {
        classes[i].category = "Elective";
      }
      classes[i].name = classes[i].name.trim();
      classes[i].universityCredit = classes[i].universityCredit.trim();
      classes[i].grade = classes[i].grade.trim();
      classes[i].preReq = classes[i].preReq.trim();
      classes[i].category = classes[i].category.trim();
      if (classes[i].name.indexOf("  ") > -1) {
        classes[i].name = classes[i].name.substring(classes[i].name.indexOf("  "));
        classes[i].name = classes[i].name.trim();
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
var confirmModal = document.getElementById("confirmModal");
var confirmOk = document.getElementById("confirmButton");
var confirmTaskToDo;
function confirmTask(task) {
  toggleObjects([confirmModal],"show");
  typeConfirm.value = "";
  confirmTaskToDo = task;
}
span[0].onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = "scroll";
}
span[1].onclick = function() {
    inputModal.style.display = "none";
    document.body.style.overflowY = "scroll";
}
span[2].onclick = function() {
    confirmModal.style.display = "none";
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
    else if (event.target == confirmModal) {
        confirmModal.style.display = "none";
        document.body.style.overflowY = "scroll";
    }
}
var typeConfirm = document.getElementById("typeConfirm");
confirmOk.onclick = function () {
  if (typeConfirm.value == "CONFIRM") {
    confirmModal.style.display = "none";
    document.body.style.overflowY = "scroll";
    eval(confirmTaskToDo);
    if (confirmTaskToDo == "parseClasses()") {
      fadeInFadeOut(true,1000,'Reverted Classes');
    }
    else if (confirmTaskToDo == "saveClasses()") {
      fadeInFadeOut(true,1000,'Classes Saved');
    }
  }
  else {
    fadeInFadeOut(false,1000,'CONFIRM not typed');
  }
}
modalOk.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY = "scroll";
  myClasses[((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)] = classes[savePlacement].name;
  saveClasses();
  showEightClasses();
  fadeInFadeOut(true,1000,"Class Added");
}
removeClass.onclick = function() {
  inputModal.style.display = "none";
  document.body.style.overflowY = "scroll";
  myClasses[((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)] = undefined;
  myGrades[2 * (((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1))] = undefined;
  myGrades[2 * (((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)) + 1] = undefined;
  saveClasses();
  showEightClasses();
  fadeInFadeOut(true,1000,"Class Removed");
}
function saveClasses() {
  localStorage.myClasses = JSON.stringify(myClasses);
}
function saveGrades() {
  localStorage.myGrades = JSON.stringify(myGrades);
}
function saveAchievements() {
  localStorage.myAchievements = JSON.stringify(myAchievements);
}
function optionFadeUpdate(update) {
  localStorage.optionFade = update;
  document.getElementById("optionFadeHead").innerHTML = "Result Pop-Up Fade Speed (" + update + ")";
}
function getIdByClassName(string) {
  for (var j = 0; j < classes.length; j++) {
    if (classes[j].name == string) {
      return j;
    }
  }
  return -1;
}
function addAchieve(a,b) {
  myAchievements[a][b] = true;
  saveAchievements();
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
function clearAchievements() {
  myAchievements = [[],[],[]];
  saveAchievements();
}
function addGrade(gradeInput,quarter) {
  quarter--;
  myGrades[2 * (((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)) + quarter] = gradeInput;
  cleanGrades();
  saveGrades();
  if (gradeInput && quarter == 0) {
    gradeDropDownA.innerHTML = "Selected Q1 Grade: <b>" + gradeInput + "</b>";
    if (numberOfClasses == 60) {
      gradeDropDownA.innerHTML = "Selected Grade: <b>" + gradeInput + "</b>";
    }
  }
  else if (gradeInput && quarter == 1) {
    gradeDropDownB.innerHTML = "Selected Q2 Grade: <b>" + gradeInput + "</b>";
  }
  else if (quarter == 0) {
    gradeDropDownA.innerHTML = "Select a Q1 grade";
    if (numberOfClasses == 60) {
      gradeDropDownA.innerHTML = "Select a Grade"
    }
  }
  else {
    gradeDropDownB.innerHTML = "Select a Q2 grade";
  }
}
var gradeDropDownA = document.getElementsByClassName("dropbtn")[0];
var gradeDropDownB = document.getElementsByClassName("dropbtn")[1];
var myClasses = [];
var myGrades = [];
var classes = [];
localStorage.myClasses;
localStorage.myGrades;
if (!localStorage.optionFade) {
  localStorage.optionFade = "Normal";
}
var buttons = [];
function newClass(category,name,code,grade,credit,universityCredit,preReq,interest,linkedCourse,description) {
  this.category = category;
  this.name = name;
  this.code = code;
  this.grade = grade;
  this.credit = credit;
  this.universityCredit = universityCredit;
  this.preReq = preReq;
  this.interest = interest;
  this.linkedCourse = linkedCourse;
  this.description = description;
}
var category;
function organizePDF() {
  var headerDone = false;
  var i = 0;
  var currentType = "class";
  var storedLetters = "";
  var name,code,grade,credit,universityCredit,preReq,interest,linkedCourse,description;
  if (localStorage.school == "Westview") {
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
    category = "English";
    // Start Organizing
    while (i < catalogText.length) {
      // Check to see if the type changed
      // If it did, dump out all of the text into the prev type

      // Checking for type switch

      if (isCode(catalogText,i) && currentType == "class") {
        if (currentType == "class") {
          name = storedLetters;
          currentType = "code";
        }
        else {
          alert("Something went wrong...1");
        }
        storedLetters = "";
      }
      else if (checkWord("Grades:",catalogText,i) && currentType == "code") {
        if (currentType == "code") {
          code = storedLetters;
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
          grade = storedLetters;
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
          credit = storedLetters;
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
          universityCredit = storedLetters;
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
          preReq = storedLetters;
          currentType = "interest";
          i += 10;
        }
        else if (currentType == "universityCredit") {
          universityCredit = storedLetters;
          preReq = "None";
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
          interest = storedLetters;
          currentType = "linkedCourse";
          i += 15;
        }
        else if (currentType == "preReq") {
          preReq = storedLetters;
          interest = "None";
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
          linkedCourse = storedLetters;
          currentType = "description";
        }
        else if (currentType == "interest") {
          interest = storedLetters;
          linkedCourse = "None";
          currentType = "description";
        }
        else if (currentType == "preReq") {
          preReq = storedLetters;
          linkedCourse = "None";
          interest = "None";
          currentType = "description";
        }
        else {
          alert("Something went wrong...8");
        }
        storedLetters = "";
      }
      else if (isClass(catalogText,i) && currentType == "description") {
        if (currentType == "description") {
          description = storedLetters;
          currentType = "class";
          classes.push(new newClass(category,name,code,grade,credit,universityCredit,preReq,interest,linkedCourse,description));
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
    description = storedLetters;
    console.log("Done organizing.");
  }
  else if (localStorage.school == "Poway") {
    // Skip Header
    var countOfAgri = false;
    while (!headerDone) {
      // First category is English, wait until encounter
      if (checkWord("AGRICULTURE",catalogText,i)) {
        if (countOfAgri) {
          headerDone = true;
        }
        else {
          countOfAgri = true;
          i++;
        }
      }
      else {
        i++;
      }
    }
    while (!checkWord("INDEX  ",catalogText,i)) {
      // Check to see if the type changed
      // If it did, dump out all of the text into the prev type

      // Checking for type switch

      if ((checkWord("Meets the UC/CSU",catalogText,i) || checkWord("Meets UC/CSU",catalogText,i) || checkWord("Pending board approval to meet the UC/CSU",catalogText,i) || checkWord("This course will be offered pending PUSD Board approval",catalogText,i) || checkWord("Pending approval to meet the UC/CSU",catalogText,i) || checkWord("This course will be offered pending",catalogText,i) || checkWord("Meets  UC/CSU ",catalogText,i)) && currentType == "class") {
        if (currentType == "class") {
          name = storedLetters;
          currentType = "universityCredit";
        }
        else {
          alert("Something went wrong...1");
        }
        storedLetters = "";
      }
      else if (checkWord("Grade Level: ",catalogText,i) && (currentType == "class" || currentType == "universityCredit")) {
        if (currentType == "class") {
          name = storedLetters;
          universityCredit = "None";
          currentType = "grade";
          i += 13;
        }
        else if (currentType == "universityCredit") {
          universityCredit = storedLetters;
          currentType = "grade";
          i += 13;
        }
        else {
          alert("Something went wrong...2");
        }
        storedLetters = "";
      }
      else if ((checkWord("Prerequisite: ",catalogText,i) || checkWord("Prerequisites: ",catalogText,i)) && currentType == "grade") {
        if (currentType == "grade") {
          grade = storedLetters;
          currentType = "preReq";
          i += 14;
        }
        else {
          alert("Something went wrong...4");
        }
        storedLetters = "";
      }
      else if ((checkWord("PHS: ",catalogText,i) || checkWord("PHS ",catalogText,i)) && currentType == "preReq") {
        if (currentType == "preReq") {
          preReq = storedLetters;
          currentType = "category";
          i += 5;
        }
        else {
          alert("Something went wrong...4");
        }
        storedLetters = "";
      }
      else if (checkWord(" ",catalogText,i) && !(checkWord(" Art",catalogText,i) || checkWord(" and Elective",catalogText,i) || checkWord(" Elective",catalogText,i) || checkWord(" Education",catalogText,i) || checkWord(" Science",catalogText,i) || checkWord(" History",catalogText,i) || checkWord(" Language",catalogText,i)) && currentType == "category") {
        if (currentType == "category") {
          category = storedLetters;
          currentType = "description";
        }
        else {
          alert("Something went wrong...8");
        }
        storedLetters = "";
      }
      else if (isClass(catalogText,i) && currentType == "description") {
        if (currentType == "description") {
          description = storedLetters;
          currentType = "class";
          classes.push(new newClass(category,name,code,grade,credit,universityCredit,preReq,interest,linkedCourse,description));
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
    // Final Data
    description = storedLetters;
    for (var x = 0; x < classes.length; x++) {
      classes[x].credit = 5;
      classes[x].code = "Poway HS does not provide Class Code information";
      classes[x].interest = "Poway HS does not provide Class Interest information";
      classes[x].linkedCourse = "Poway HS does not provide Linked Course information";
    }
    console.log("Done organizing.");
  } // Close If Statement
  else if (localStorage.school == "Del Norte") {
    // Skip Header
    while (!headerDone) {
      // First category is English, wait until encounter
      if (checkWord("ENGLISH  ",catalogText,i)) {
        headerDone = true;
      }
      else {
        i++;
      }
    }
    while (i < catalogText.length) {
      // Check to see if the type changed
      // If it did, dump out all of the text into the prev type

      // Checking for type switch

      if (isCode(catalogText,i) && currentType == "class") {
        if (currentType == "class") {
          name = storedLetters;
          currentType = "code";
        }
        else {
          alert("Something went wrong...1");
        }
        storedLetters = "";
      }
      else if (checkWord("Recommended Completion of: ",catalogText,i) && currentType == "code") {
        if (currentType == "code") {
          code = storedLetters;
          currentType = "preReq";
          i += 27;
        }
        else {
          alert("Something went wrong...2");
        }
        storedLetters = "";
      }
      else if (checkWord("Grade ",catalogText,i) && currentType == "preReq") {
        if (currentType == "preReq") {
          preReq = storedLetters;
          currentType = "grade";
          i += 6;
        }
        else {
          alert("Something went wrong...4");
        }
        storedLetters = "";
      }
      else if (checkWord("  ",catalogText,i - 2) && !checkWord("  Physics strongly recommended",catalogText,i - 2) && catalogText.charAt(i) == catalogText.charAt(i).toUpperCase() && (currentType == "grade" || currentType == "preReq")) {
        if (currentType == "grade") {
          grade = storedLetters;
          currentType = "description";
        }
        else if (currentType == "preReq") {
          preReq = storedLetters;
          grade = "Not Specified";
          i++;
        }
        else {
          alert("Something went wrong...8");
        }
        storedLetters = "";
      }
      else if (isClass(catalogText,i) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i - 1) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i - 2) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i - 3) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i - 4) && (currentType == "description" || currentType == "preReq")) {
        if (currentType == "description") {
          description = storedLetters;
          currentType = "class";
        }
        else if (currentType == "preReq") {
          preReq = storedLetters;
          description = "None";
          grade = "Not Specified";
          currentType = "class";
        }
        else {
          alert("Something went wrong...9");
        }
        classes.push(new newClass(category,name,code,grade,credit,universityCredit,preReq,interest,linkedCourse,description));
        storedLetters = "";
      }

      // End checking

      else {
          storedLetters += catalogText.charAt(i);
          i++;
      }
    } // Close While loop
    // Final Data
    description = storedLetters;
    for (var x = 0; x < classes.length; x++) {
      classes[x].credit = 5;
      classes[x].linkedCourse = "Del Norte does not provide Linked Course information";
      classes[x].universityCredit = "Del Norte does not provide UC/CSU Credit information";
      classes[x].interest = "Del Norte does not provide Class Interest information";
    }
    console.log("Done organizing.");
  } // Close If Statement
} // Close Function
var homePageText;
var myAchievements = [[],[],[]];
function readHomeFiles() {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", "http://planpalapp.com/homeNotifications.txt", true);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        var allText = rawFile.responseText;
        homePageText = allText;
      }
    }
    rawFile.send();
}
if (!localStorage.school) {
  localStorage.school = "Westview";
}
if (!localStorage.optionFade) {
  localStorage.optionFade = "Normal";
}
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
var loadedApp = false;
document.body.style.overflowX = "hidden";
function loadSchool() {
  hideEverything();
  toggleObjects([loadIcon],"show");
  var pdfName = "";
  readHomeFiles();
  switch (localStorage.school) {
    case "Westview":
      pdfName = "https://docs.wixstatic.com/ugd/5db6f5_7f8fbcb5bd064026b84356a51b42f5f3.pdf";
      numberOfClasses = 32;
      break;
    case "Del Norte":
      pdfName = "http://docs.wixstatic.com/ugd/5db6f5_558a721747e245edb511714213350339.pdf";
      numberOfClasses = 60;
      break;
    case "Poway":
      pdfName = "https://docs.wixstatic.com/ugd/5db6f5_05deee3b88934aedb8e8b979bd3edc2e.pdf";
      numberOfClasses = 60;
      break;
  }
  gettext(pdfName).then(function (text) {
    catalogText = text;
    organizePDF();
    cleanDescription();
    cleanOthers();
    console.log("Done cleaning.");
    parseClasses();
    parseAchievements();
    loadedApp = true;
    homePage();
  }, function (reason) {
    console.error(reason);
  });
}
loadSchool();
