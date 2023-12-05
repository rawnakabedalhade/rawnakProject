const addbtn = document.querySelector('.addbtn');
const newelement = document.querySelector('.newelement');
const form = document.querySelector('.form');
const submitbtn=document.getElementsByClassName('submit');
let new1, html;
let element;
let flag = 1; // Initialize the flag variable


let bgcElement,width,height,textcontainer,font,textColor,fontSize;
addbtn.addEventListener('click', function () {

    if (flag === 1) {
        // Create a new element based on user input
        new1 = document.createElement(newelement.value);
        // Add a class to the new element
        new1.className = "classDiv";
        // Append the new element to the body
        document.body.appendChild(new1);
        // Create and append additional HTML for the background color input
        html = `<label for="bgcInput">צבע רקע</label><br>
            <input type="text" name="bgcInput" class="bgc-e"><br>`;
        form.insertAdjacentHTML('beforeend', html);

    }

    else if (flag === 2) {
        // Retrieve the background color element
        bgcElement = document.querySelector('.bgc-e');

        // Set the background color of the created element
        new1.style.backgroundColor = bgcElement.value;

        // Create and append additional HTML for width and height inputs
        html = `<label for="widthInput">רוחב</label><br>
            <input type="text" name="widthInput" class="width"><br>
            <label for="heightInput">גובה</label><br>
            <input type="text" name="heightInput" class="height"><br>`;
        form.insertAdjacentHTML('beforeend', html);
    }
else if (flag == 3) {
        width = document.querySelector('.width');
        height = document.querySelector('.height');
        new1.style.width = width.value + 'px';
        new1.style.height = height.value + 'px';
        html = ` <label for="">תוכן</label><br>
            <textarea name="" id="text-container"></textarea><br>`
        form.insertAdjacentHTML('beforeend', html);
    }
    else if (flag == 4) {
        textcontainer = document.getElementById('text-container');
        // add text to element
        new1.appendChild(document.createTextNode(textcontainer.value));
        html = `   <label for="">צבע הגופן</label><br>
            <input type="text" name="textColor" id="textColor"><br>
            <label for="">גודל הגופן</label><br>
            <input type="text" name="fontsize" id="fontsize"><br>
            <label for="">סוג הגופן</label><br>
            <input type="text" name="font" id="font"><br>`
        form.insertAdjacentHTML('beforeend', html);
    }
    else if (flag == 5) {
        font = document.getElementById('font');
        textColor = document.getElementById('textColor');
        fontSize = document.getElementById('fontsize');
        new1.style.color = textColor.value;
        new1.style.fontSize = fontSize.value + 'px';
        new1.style.fontFamily = font.value;
    }
    // Increment the flag after each click
    flag++;
    if (flag==6) {
                element= createElement(newelement.value,bgcElement.value,width.value,height.value,textcontainer.value,font.value,textColor.value,fontSize.value,font.value);
                saveToLocalStorage();

    }
});


function createElement(newelement,bgcElement,width,height,textcontainer,font,textColor,fontsize,font){
    return {
        type:newelement,
        backgroundColor:bgcElement,
        width:width,
        height:height,
        content:textcontainer,
        textColor:textColor,
        fontsize:fontsize,
        font:font
    };
}

function saveToLocalStorage(){
    localStorage.setItem("element",JSON.stringify(element));
}


window.SaveData=()=>{
    let data = localStorage.getItem('element');
    if (!data) {
        element = JSON.parse(data);
        console.log(element);
    }
}




