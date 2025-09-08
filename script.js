// document.querySelectorAll(".element").forEach((elem)=>{
//     elem.addEventListener("mousemove",(e) => {
//         // console.log(e.clientY, e.clientX);
//         let elemPos = elem.getBoundingClientRect();
//         let x = e.clientX - elemPos.left;
//         let y = e.clientY - elemPos.top;

//         let pfp = elem.querySelector("img");
//         // pfp.style.opacity = 1;
//         pfp.style.display = 'initial';
//         pfp.style.left = `${x - 88}px`;
//         pfp.style.top = `${y - 88}px`;
        
//         console.log(x, y);
        
//     });
//     elem.addEventListener("mouseleave", (e)=>{
//         let pfp = elem.querySelector("img");
//         // pfp.style.opacity = 0;
//         pfp.style.display = 'none';
//     });
// });

document.querySelectorAll(".element").forEach((elem) => {
    let pfp = elem.querySelector("img");
    let prevX = 0;

    function moveImage(e){
        let elemPos = elem.getBoundingClientRect();
        let x = e.clientX - elemPos.left;
        let y = e.clientY - elemPos.top;

        pfp.style.left = `${x - 88}px`;
        pfp.style.top = `${y - 88}px`;

        let difference = x - prevX;
        if(difference > 50){
            difference = 50;
        }
        else if (difference < -50){
            difference = -50;
        }

        pfp.style.transform = `rotate(${difference}deg)`;

        prevX = x;
    }

    elem.addEventListener("mouseenter",()=>{
        pfp.style.opacity = `0.9`;
        elem.addEventListener("mousemove", moveImage);
    });

    elem.addEventListener("mouseleave",()=>{
        pfp.style.opacity = `0`;
        elem.removeEventListener("mousemove", moveImage);
    });
});