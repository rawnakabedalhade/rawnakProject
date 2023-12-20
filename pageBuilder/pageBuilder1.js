const addbtn = document.querySelector(".addbtn");
let typeofelement = document.querySelector(".newelement");
const submitbtn = document.querySelector(".submit");
const deleteBtn = document.querySelector(".delete");
let element;
let flag = false;
let bgcElement, width, height, textcontainer, font, textColor, fontSize;

let elements = [];
let newElements = [];

// Initialize the elements array from local storage
let data = localStorage.getItem("elements");
console.log(data);
if (data) {
  elements = JSON.parse(data);
  for (let element of elements) {
    let e = createElement(
      element.type,
      element.backgroundColor,
      element.width,
      element.height,
      element.content,
      element.fontFamily,
      element.textColor,
      element.fontSize
    );
    AddElementToBody(e);
    console.log(e);
    // document.body.appendChild(e);
  }
} else {
  elements = []; // Initialize as an empty array if no data is found in local storage
}

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
  addToArray(element);
  // elements.forEach((element) => AddElementToBody(element));
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
  fontsize
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
  let newElement;
  // Create a new element based on the provided type
  newElement = document.createElement(element.type);
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
  addToArrayElement(newElement);
  document.body.appendChild(newElement);

  console.log(newElement);
}

function addToArray(element) {
  elements.push(element);
  console.log(elements);
}

window.saveData = () => {
  checkInput();
  if (flag) {
    localStorage.setItem("elements", JSON.stringify(elements));
    clearInputs();
  } else {
    alert("Please Fill The inputs");
  }
};

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
    flag = false;
  } else {
    flag = true;
  }
}

function clearInputs() {
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
  });
  document.querySelector("textarea").value = "";
}

window.Delete = () => {
  newElements.forEach((element) => document.body.removeChild(element));
  newElements = [];
  elements = [];
  console.log(elements);
  localStorage.setItem("elements", JSON.stringify(elements));
  clearInputs();
};

function addToArrayElement(newElement) {
  newElements.push(newElement);
  console.log(newElements);
}
