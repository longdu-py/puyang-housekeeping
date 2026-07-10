// 预约表单提交提示
const bookForm = document.querySelector('.book-form');
if(bookForm){
    bookForm.addEventListener('submit',function(e){
        e.preventDefault();
        alert("预约提交成功！濮阳家政客服将尽快与您联系！");
        this.reset();
    })
}

// 导航高亮
const navLinks = document.querySelectorAll('.nav a');
const path = window.location.pathname;
navLinks.forEach(link=>{
    if(link.getAttribute('href') === path){
        link.classList.add('active');
    }
})

// 页面滚动效果
window.addEventListener('scroll',()=>{
    const header = document.querySelector('.header');
    if(window.scrollY > 50){
        header.style.background = '#ffffffee';
    }else{
        header.style.background = '#fff';
    }
})
