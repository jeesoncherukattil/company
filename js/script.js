// Script to expand and collapse the [+] contents to views the more details in services and careers page // 
function expandFun(ele, pageClass) {
    target_id = (ele.parentElement.getAttribute('for'));
    if (ele.innerHTML == '+') {
        servDescArr = document.getElementsByClassName(pageClass);
        expandIconsArr = document.getElementsByClassName('plus-expand');
        for (i = 0; i < servDescArr.length; i++) {
            servDescArr[i].style.display = 'none';
            expandIconsArr[i].innerHTML = '+'
            expandIconsArr[i].style.background = '#463bbb';
        }
        document.getElementById(target_id).nextElementSibling.style.display = 'block';
        ele.innerHTML = '-'
        ele.style.background = '#5c5c5c';
    } else {
        document.getElementById(target_id).nextElementSibling.style.display = 'none';
        ele.innerHTML = '+'
        ele.style.background = '#463bbb';
    }
    if (pageClass == 'career-desc') {
        document.getElementById(target_id).nextElementSibling.scrollIntoView(true);
    }
}