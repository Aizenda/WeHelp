const chang1 = ()=>{
    let aboutDiv = document.querySelector("#about");
    let ApplicationMotivationDiv = document.querySelector("#Application-motivation");
    aboutDiv.style.display = "flex";
    ApplicationMotivationDiv.style.display = "none";
};

const chang2 = ()=>{
    let aboutDiv = document.querySelector("#about");
    let ApplicationMotivationDiv = document.querySelector("#Application-motivation");
    aboutDiv.style.display = "none";
    ApplicationMotivationDiv.style.display = "flex";

};

// 通用顯示/隱藏函式
const toggleDisplay = (showId, ...hideIds) => {
    // 顯示指定的元素
    const showDiv = document.querySelector(`#${showId}`);
    if (showDiv) showDiv.style.display = "block";

    // 隱藏其他元素
    hideIds.forEach(id => {
        const hideDiv = document.querySelector(`#${id}`);
        if (hideDiv) hideDiv.style.display = "none";
    });
};

// FrontEnd 函式
const FrontEnd = () => {
    toggleDisplay("Front-end", "Back-end", "python", "other");
};

// BackEnd 函式
const BackEnd = () => {
    toggleDisplay("Back-end", "Front-end", "python", "other");
};

// python 函式
const python = () => {
    toggleDisplay("python", "Front-end", "Back-end", "other");
};

// other 函式
const other = () => {
    toggleDisplay("other", "Front-end", "Back-end", "python");
};

// first 函式
const first = () => {
    toggleDisplay("first", "second", "third");
};

// second 函式
const second = () => {
    toggleDisplay("second", "first", "third");
};

// third 函式
const third = () => {
    toggleDisplay("third", "first", "second");
};

document.addEventListener("DOMContentLoaded", () => {

    const thumbnails = document.querySelectorAll(".img-wp");
    const modal = document.createElement("div");
    const img = document.createElement("img");

    document.body.appendChild(modal);
    modal.appendChild(img);
    modal.classList.add("modal");

    const open = (thumbnail) => {
        
        const fullSizeUrl= thumbnail.getAttribute("src");
        img.src = fullSizeUrl;

        img.classList.add("fullSize");
        modal.classList.add("show");
    };

    const close = () => {
        modal.classList.remove("show");
        img.classList.remove("fullSize");
    };

    modal.addEventListener("click", close);

    thumbnails.forEach(thumbnail => 
        thumbnail.addEventListener("click", () => open(thumbnail))
    );
});





