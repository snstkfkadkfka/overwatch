/* Refactoring */ //ux/ui 화면을 건드리지 않고 그대로 효과 적용하는 것
//날짜변경
document.addEventListener("DOMContentLoaded", ()=>{
    const spanEl = document.querySelector('.logo span');
    spanEl.textContent = new Date().getFullYear();
});

//# sourceMappingURL=overwatch.be2d8632.js.map
