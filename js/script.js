
//this is for procticing JS objects
const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

//create empty object and add properties with dot notation
const learning = {};
learning.topic = "JS";
learning.learningGoals = [
  "Build JS Programs",
  "Create Portfolio Site",
  "Learn Mobile First Design",
  "Learn Data Structure"
];
learning.category = "Front End Development";
learning.topicImportance = "High";
console.log(learning);

//edit property information
learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);

//use template literal to show text on webpage using object property
topicElement.innerText = `I'm learning ${learning.topic}.`;
topicElement.classList.remove("hide");

countElement.innerText = `I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
