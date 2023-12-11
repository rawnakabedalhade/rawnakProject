const addbtn = document.querySelector(".addbtn");
let typeofelement = document.querySelector(".newelement");
const submitbtn = document.querySelector(".submit");
let element;
let flag = false;
let bgcElement, width, height, textcontainer, font, textColor, fontSize;
addbtn.addEventListener("click", function () {
  typeofelement = document.querySelector(".newelement");
  bgcElement = document.querySelector(".bgc-e");
  width = document.querySelector(".width");
  height = document.querySelector(".height");
  textcontainer = document.getElementById("text-container");
  font = document.getElementById("font");
  textColor = document.getElementById("textColor");
  fontSize = document.getElementById("fontsize");

  element = createElement(
    typeofelement.value || "div",
    bgcElement.value || "transparent",
    width.value || "100",
    height.value || "100",
    textcontainer.value || "",
    font.value,
    textColor.value,
    fontSize.value
  );
  AddElementToBody(element);
});

function createElement(
  typeofelement,
  bgcElement,
  width,
  height,
  textcontainer,
  font,
  textColor,
  fontsize,
  id
) {
  return {
    type: typeofelement,
    backgroundColor: bgcElement,
    width: width,
    height: height,
    content: textcontainer,
    textColor: textColor,
    fontSize: fontsize,
    fontFamily: font,
  };
}
function AddElementToBody(element) {
  // Create a new element based on the provided type
  let newElement = document.createElement(element.type);
  newElement.classList.add("classDiv");

  // Set the background color if specified
  if (element.backgroundColor) {
    newElement.style.backgroundColor = element.backgroundColor;
  }

  // Set other properties if specified
  if (element.width) {
    newElement.style.width = +element.width + "px";
  }

  if (element.height) {
    newElement.style.height = +element.height + "px";
  }

  if (element.content) {
    newElement.textContent = element.content;
  }

  if (element.textColor) {
    newElement.style.color = element.textColor;
  }

  if (element.fontSize) {
    newElement.style.fontSize = +element.fontSize + "px";
  }

  if (element.fontFamily) {
    newElement.style.fontFamily = element.fontFamily;
  }
  // Append the new element to the body
  document.body.appendChild(newElement);
}

let elements = [];

// function saveToLocalStorage() {
//   elements.push(element);
//   localStorage.setItem("elements", JSON.stringify(elements));
// }

window.saveData = () => {
  checkInput();
  if (flag) {
    elements.push(element);
    localStorage.setItem("elements", JSON.stringify(elements));
  } else {
    alert("Please Fill The inputs");
  }
};

function Update() {
  let eArray = JSON.parse(localStorage.getItem("elements"));
  if (eArray) {
    eArray.forEach((element) => {
      createElement(element);
    });
  }
}

function checkInput() {
  if (
    typeofelement.value === "" ||
    bgcElement.value === "" ||
    width.value === "" ||
    height.value === "" ||
    textcontainer.value === "" ||
    textColor.value === "" ||
    font.value === "" ||
    fontSize.value === ""
  ) {
    // alert("Please Fill The inputs");
    flag = false;
  } else {
    flag = true;
  }
}
