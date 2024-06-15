const btns = document.querySelectorAll('button');
//  console.log("Hello")
for (const btn of btns) {
    btn.addEventListener("click", () => {
        console.log("btn was clicked");
        const body = document.querySelector("body");
        body.classList.add('setRed');
        setTimeout(() => {
            body.classList.remove('setRed');
        }, 50)
    })
}