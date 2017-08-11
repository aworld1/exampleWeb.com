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
      headerInputP.innerHTML = classes[getIdByClassName(myClasses[((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)])];
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
  console.log("Done credit calculation.");
}
var achievementInput = document.getElementById("achievementInput");
achievementInput.onkeyup = function () {
  if (achievementInput.value == "iHelpeD") {
    addAchieve(2,1);
  }
  else if (achievementInput.value == "iMETPLANpal!") {
    addAchieve(2,0);
  }
}
function hideEverything() {
  toggleObjects([achievementContainer,schoolHead,header,triClasses,nine,ten,eleven,twelve,classA,classB,classC,classD,classE,classF,classG,classH,search,searchImage,loadIcon,backButton,creditPage,universityCreditPage,gpaPageContain,verifyHead,counselorContainer,optionsContain,popUpDiv],"hide");
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
    } // Westview ends
    else if (myClasses[i] != undefined && localStorage.school == "Poway") {
      if (universityCredits[getIdByClassName(myClasses[i])].indexOf('“') > -1) {
        if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].indexOf('“') + 1) == "A") {
          unCredA[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].indexOf('“') + 1) == "B") {
          unCredB[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].indexOf('“') + 1) == "C") {
          unCredC[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].indexOf('“') + 1) == "D") {
          unCredD[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].indexOf('“') + 1) == "E") {
          unCredE[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].indexOf('“') + 1) == "F") {
          unCredF[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].indexOf('“') + 1) == "G") {
          unCredG[0]++;
        }
      }
      if (universityCredits[i].replace(/[^“]/g, "").length > 1) {
        if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].lastIndexOf('“') + 1) == "A") {
          unCredA[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].lastIndexOf('“') + 1) == "B") {
          unCredB[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].lastIndexOf('“') + 1) == "C") {
          unCredC[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].lastIndexOf('“') + 1) == "D") {
          unCredD[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].lastIndexOf('“') + 1) == "E") {
          unCredE[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].lastIndexOf('“') + 1) == "F") {
          unCredF[0]++;
        }
        else if (universityCredits[getIdByClassName(myClasses[i])].charAt(universityCredits[getIdByClassName(myClasses[i])].lastIndexOf('“') + 1) == "G") {
          unCredG[0]++;
        }
      }
    } // Poway ends
  } // For loop
}
function counselorPage() {
  hideEverything();
  counselorContainer.style.display = "block";
  counselorContainer.style.visibility = "visible";
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
  createHomeBox("info", "AP Classes", "AP classes boost your weighted GPA, but not your unweighted one. It's recommended not to take AP classes if you aren't ready for them.");
  createHomeBox("check", "Add Classes", "Go to the menu and start building your plan!");
  createHomeBox("info", "Credits", "While regular credits are required for graduating high school, university credits are only needed if applying to a UC/CSU college.");
  createHomeBox("feature", "Creator", "The creator of this planner is Aworld. The following program has a provisonal patent filed.");
  createHomeBox("check", "Home Page Moderation", "Want a spot on this home page? Send us an email on the contact page and we will consider putting your note as a notification!");
  createHomeBox("warning", "Remember", "Remember to keep both GPAs up, weighted and unweighted");
  //loadHomeBoxes();
}
function checkDups(myArr) {
	var dupValues = [];
  var arr = myArr;
  arr.concat().sort();
	for (var i = 0; i < arr.length - 1; i++) {
  	if (arr[i] == arr[i + 1]) {
    	dupValues.push(arr[i]);
      var duplicate = arr[i]
      while (duplicate == arr[i+1] && i < arr.length - 1) {
      	i++;
      }
    }
  }
  return dupValues;
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
      createVerifyBox("Duplicate Class: " + duplicateClasses[i]);
    }
    else if (!offRollBool) {
      createVerifyBox("You are taking more than one Off Roll, this is not recommended");
      offRollBool = true;
    }
  }
  if (!(checkCategory("English",0,7))) {
    createVerifyBox("You must take an English class in 9th Grade");
  }
  if (!(checkCategory("Mathematics",0,7))) {
    createVerifyBox("You must take a Math class in 9th Grade");
  }
  if (!(checkCategory("PhysicalEducation",0,7))) {
    createVerifyBox("You must take a Physical Education class in 9th Grade");
  }
  if (!(checkClass(myClasses,"ENS 1-2",0,7) || checkClass(myClasses,"ENS 1-2 ONLINE",0,7)) && localStorage.school != "Poway") {
    createVerifyBox("You must take ENS 1-2 in 9th Grade");
  }
  if (!(checkCategory("English",8,15))) {
    createVerifyBox("You must take an English class in 10th Grade");
  }
  if (!(checkCategory("Mathematics",8,15))) {
    createVerifyBox("You must take a Math class in 10th Grade");
  }
  if (!(checkCategory("SocialSciences",8,15))) {
    createVerifyBox("You must take a Social Science class in 10th Grade");
  }
  if (!(checkCategory("English",16,23))) {
    createVerifyBox("You must take an English class in 11th Grade");
  }
  if (!(checkCategory("SocialSciences",16,23))) {
    createVerifyBox("You must take a Social Science class in 11th Grade");
  }
  if (!(checkCategory("English",24,31))) {
    createVerifyBox("You must take an English class in 12th Grade");
  }
  if (!(checkCategory("SocialSciences",24,31))) {
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
    if (getCategory(getIdByClassName(myClasses[x])) == categoryName) {
      return true;
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
  for (var i = 0; i < descriptions.length; i++) {
    reachedPeriod = false;
    storedCategory = [];
    spaceCount = 0;
    while (!reachedPeriod) {
      currentChar = descriptions[i].charAt(descriptions[i].length - 1);
      if (localStorage.school == "Westview") {
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
      else if (localStorage.school == "Del Norte") {
        if (descriptions[i].charAt(descriptions[i].length - 1) != "." && descriptions[i] != "") {
          descriptions[i] = descriptions[i].slice(0,-1);
        }
        else {
          if (descriptions[i] == "") {
            descriptions[i] = "None";
          }
          reachedPeriod = true;
        }
      }
      else if (localStorage.school == "Poway") {
        descriptions[i] = descriptions[i].trim();
        if (descriptions[i] == "") {
          descriptions[i] = "None";
        }
        reachedPeriod = true;
      }
    } // While reachedPeriod
  } // For loop
}
function getCategory(placement) {
  if (localStorage.school == "Poway") {
    return categories[placement];
  }
  else {
    var indexOfCategory = -1;
    for (var x = 0; x < categoryPlacement.length; x++) {
      if (placement >= categoryPlacement[x]) {
        indexOfCategory++;
      }
    }
    return categories[indexOfCategory];
  }
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
    discontinuedP.innerHTML = "<b>Warning! This class is discontinued/only available for special education students and may not be available. Please advise a counselor before taking this class.</b>";
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
        isAp = (checkWord("AP ",myClasses[Math.floor(i/2)],0) || checkWord("ADVANCED PLACEMENT ",myClasses[Math.floor(i/2)],0) || descriptions[getIdByClassName(myClasses[Math.floor(i/2)])].indexOf("A=5, B=4, C=3") > -1);
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
  else if (localStorage.school == "Del Norte") {
    for (var x = 0; x < classes.length; x++) {
      if (classes[x].indexOf("COURSE TITLE COURSE NUMBER") > -1) {
        categories[categories.length] = classes[x].slice(0,classes[x].indexOf("COURSE TITLE COURSE NUMBER") - 2);
        categoryPlacement.push(x);
        if (checkWord("PE / ATHLETICS",categories[categories.length - 1],0)) {
          categories[categories.length - 1] = "PE / ATHLETICS";
        }
        if (checkWord("PHYSICAL EDUCATION St",categories[categories.length - 1],0)) {
          categories[categories.length - 1] = "PHYSICAL EDUCATION";
        }
        classes[x] = classes[x].slice(classes[x].indexOf("COURSE TITLE COURSE NUMBER") + 26,classes[x].length);
      }
    }
    for (var i = 0; i < classes.length;i++) {
      classes[i] = classes[i].trim();
      if (checkWord("CAHSEE.",classes[i],0)) {
        classes[i] = classes[i].substr(7);
        classes[i] = classes[i].trim();
        if (checkWord("51",classes[i],0)) {
          classes[i] = classes[i].substr(2);
          classes[i] = classes[i].trim();
        }
      }
      if (checkWord("D COMPUTER ANIMATION",classes[i],0)) {
        classes[i] = "3" + classes[i];
      }
      else if (checkWord("VID ",classes[i],0)) {
        classes[i] = "A" + classes[i];
      }
      else if (checkWord("NTRO ",classes[i],0)) {
        classes[i] = "I" + classes[i];
      }
      else if (checkWord("ORK ",classes[i],0)) {
        classes[i] = "W" + classes[i];
      }
      else if (checkWord("IBRARY ",classes[i],0)) {
        classes[i] = "L" + classes[i];
      }
      else if (checkWord("FFICE ",classes[i],0)) {
        classes[i] = "O" + classes[i];
      }
    }
    for (var i = 0; i < categories.length; i++) {
      if (checkWord("EALTH",categories[i],0)) {
        categories[i] = "H" + categories[i];
      }
    }
  }
  else if (localStorage.school == "Poway") {
    for (var i = 0; i < classes.length; i++) {
      if (checkWord("O.C.I.S. PE program.",classes[i],0)) {
        classes[i] = classes[i].substring(27);
      }
      else if (checkWord("OUN",classes[i],0)) {
        classes[i] = classes[i].substring(3);
      }
      else if (checkWord("AB.",classes[i],0)) {
        classes[i] = classes[i].substring(3);
      }
      else if (checkWord("BC.",classes[i],0)) {
        classes[i] = classes[i].substring(3);
      }
      else if (checkWord("D COMPUTER",classes[i],0)) {
        classes[i] = "3" + classes[i];
      }
      else if (checkWord("AGRICULTURE",classes[i],0) && i==0) {
        classes[i] = classes[i].substring(11);
      }
      if (categories[i] == "") {
        categories[i] = "Elective";
      }
      else if (categories[i] == "ife Science") {
        categories[i] = "Life Science";
      }
      else if (categories[i] == "ine Art") {
        categories[i] = "Fine Art";
      }
      else if (categories[i] == "lective") {
        categories[i] = "Elective";
      }
      classes[i] = classes[i].trim();
      universityCredits[i] = universityCredits[i].trim();
      grades[i] = grades[i].trim();
      preReqs[i] = preReqs[i].trim();
      categories[i] = categories[i].trim();
      if (classes[i].indexOf("  ") > -1) {
        classes[i] = classes[i].substring(classes[i].indexOf("  "));
        classes[i] = classes[i].trim();
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
  }
  else {
    fadeInFadeOut(false,1000,'CONFIRM not typed');
  }
}
modalOk.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflowY = "scroll";
  myClasses[((gradeSelected - 9) * (numberOfClasses/4)) + (classSelected - 1)] = classes[savePlacement];
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
  for (var j = 0; j < 192; j++) {
    if (classes[j] == string) {
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
localStorage.myClasses;
localStorage.myGrades;
if (!localStorage.optionFade) {
  localStorage.optionFade = "Normal";
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
  var currentType = "class";
  var storedLetters = "";
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
    categories[categories.length] = "English";
    categoryPlacement[categoryPlacement.length] = 0;
    // Start Organizing
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
      else if (isClass(catalogText,i) && currentType == "description") {
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
          classes[classes.length] = storedLetters;
          currentType = "universityCredit";
        }
        else {
          alert("Something went wrong...1");
        }
        storedLetters = "";
      }
      else if (checkWord("Grade Level: ",catalogText,i) && (currentType == "class" || currentType == "universityCredit")) {
        if (currentType == "class") {
          classes[classes.length] = storedLetters;
          universityCredits[universityCredits.length] = "None";
          currentType = "grade";
          i += 13;
        }
        else if (currentType == "universityCredit") {
          universityCredits[universityCredits.length] = storedLetters;
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
          grades[grades.length] = storedLetters;
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
          preReqs[preReqs.length] = storedLetters;
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
          categories[categories.length] = storedLetters;
          currentType = "description";
        }
        else {
          alert("Something went wrong...8");
        }
        storedLetters = "";
      }
      else if (isClass(catalogText,i) && currentType == "description") {
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
    // Final Data
    descriptions[descriptions.length] = storedLetters;
    for (var x = 0; x < classes.length; x++) {
      credits.push(5);
      codes.push("Poway HS does not provide Class Code information");
      interests.push("Poway HS does not provide Class Interest information");
      linkedCourses.push("Poway HS does not provide Linked Course information");
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
          classes[classes.length] = storedLetters;
          currentType = "code";
        }
        else {
          alert("Something went wrong...1");
        }
        storedLetters = "";
      }
      else if (checkWord("Recommended Completion of: ",catalogText,i) && currentType == "code") {
        if (currentType == "code") {
          codes[codes.length] = storedLetters;
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
          preReqs[preReqs.length] = storedLetters;
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
          grades[grades.length] = storedLetters;
          currentType = "description";
        }
        else if (currentType == "preReq") {
          preReqs[preReqs.length] = storedLetters;
          grades[grades.length] = "Not Specified";
          i++;
        }
        else {
          alert("Something went wrong...8");
        }
        storedLetters = "";
      }
      else if (isClass(catalogText,i) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i - 1) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i - 2) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i - 3) && !checkWord("AVID 5-6  AVID 7-8 follows the weekly str",catalogText,i - 4) && (currentType == "description" || currentType == "preReq")) {
        if (currentType == "description") {
          descriptions[descriptions.length] = storedLetters;
          currentType = "class";
        }
        else if (currentType == "preReq") {
          preReqs[preReqs.length] = storedLetters;
          descriptions[descriptions.length] = "None";
          grades[grades.length] = "Not Specified";
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
    // Final Data
    descriptions[descriptions.length] = storedLetters;
    for (var x = 0; x < classes.length; x++) {
      credits.push(5);
      linkedCourses.push("Del Norte does not provide Linked Course information");
      universityCredits.push("Del Norte does not provide UC/CSU Credit information");
      interests.push("Del Norte does not provide Class Interest information");
    }
    console.log("Done organizing.");
  } // Close If Statement
} // Close Function
var homePageText;
var myAchievements = [[],[],[]];
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
  if (localStorage.school == "Westview") {
    pdfName = "https://docs.wixstatic.com/ugd/5db6f5_7f8fbcb5bd064026b84356a51b42f5f3.pdf";
    numberOfClasses = 32;
  }
  else if (localStorage.school == "Del Norte") {
    pdfName = "http://docs.wixstatic.com/ugd/5db6f5_558a721747e245edb511714213350339.pdf";
    numberOfClasses = 60;
  }
  else if (localStorage.school == "Poway") {
    pdfName = "https://docs.wixstatic.com/ugd/5db6f5_05deee3b88934aedb8e8b979bd3edc2e.pdf";
    numberOfClasses = 60;
  }
  gettext(pdfName).then(function (text) {
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
    parseClasses();
    parseAchievements();
  }, function (reason) {
    console.error(reason);
  });
}
loadSchool();
