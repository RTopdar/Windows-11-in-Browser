const taskbar = document.querySelector(`.taskbar`);
const startmenu = document.querySelector(`.startmenu`);

taskbar.addEventListener(`click`, ()=>{
    console.log(`clicked`)
    if(startmenu.style.bottom == `55px`){
        startmenu.style.bottom = `-650px`;
        
    }
    else{
        startmenu.style.bottom = `55px`;
    }
})

const github = document.querySelector(`.gitImg`);
github.addEventListener(`click`,()=>{
    console.log(`clicked`);
    window.open(`https://github.com/RTopdar`);
});
