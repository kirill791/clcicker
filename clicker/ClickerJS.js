let clickBtn = document.getElementById('ClickBtn');
let clickText = document.getElementById('TextClick');

let upgrade1 = document.getElementById('upgrade1');
let upgrade2 = document.getElementById('upgrade2');
let upgrade3 = document.getElementById('upgrade3');
let upgrade4 = document.getElementById('upgrade4');

let upgradeAnim1 = document.getElementById('upgradeAnim1');
let upgradeAnim2 = document.getElementById('upgradeAnim2');
let upgradeAnim3 = document.getElementById('upgradeAnim3');
let upgradeAnim4 = document.getElementById('upgradeAnim4');

let backMenu = document.getElementById('back');
let Shop = document.getElementById('OpenShop');
let animBtn = document.getElementById('animBtn');
let rbText = document.getElementById('rb');
let animText = document.getElementById('an')
let click = 0;
let plus = 1;
let animPlus = 5;

//фикс бага с кнопкой enter
document.addEventListener('keydown', function(event){
    if(event.keyCode == 13){
        clickBtn.blur()
    }
})

//клик!
clickBtn.addEventListener('click', function(){
    click = click + plus;
    clickText.textContent='Денег заработано:' + click;
});

//покупка улучшений
upgrade1.addEventListener('click', function(){
    if(click<200){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Не хватает денег!',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#FF0000'
          })
    }
    else{
        click = click - 200;
        plus = plus + 10;
        clickText.textContent='Денег заработано:' + click;
        Swal.fire({
            icon: 'success',
            title: 'Вы купили улучшение!',
            text: 'Теперь у вас меньше денег:)',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#008000'
          })
    }
})

upgrade2.addEventListener('click', function(){
    if(click<1000){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Не хватает денег!',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#FF0000'
          })
    }
    else{
        click = click - 1000;
        plus = plus + 50;
        clickText.textContent='Денег заработано:' + click;
        Swal.fire({
            icon: 'success',
            title: 'Вы купили улучшение!',
            text: 'Теперь у вас меньше денег:)',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#008000'
          })
    }
})

upgrade3.addEventListener('click', function(){
    if(click<5000){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Не хватает денег!',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#FF0000'
          })
    }
    else{
        click = click - 5000;
        plus = plus + 100;
        clickText.textContent='Денег заработано:' + click;
        Swal.fire({
            icon: 'success',
            title: 'Вы купили улучшение!',
            text: 'Теперь у вас меньше денег:)',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#008000'
          })
    }
})

upgrade4.addEventListener('click', function(){
    if(click<10000){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Не хватает денег!',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#FF0000'
          })
    }
    else{
        click = click - 10000;
        plus = plus + 300;
        clickText.textContent='Денег заработано:' + click;
        Swal.fire({
            icon: 'success',
            title: 'Вы купили улучшение!',
            text: 'Теперь у вас меньше денег:)',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#008000'
          })
    }
})

//покупка улучшений для анимации
upgradeAnim1.addEventListener('click', function(){
    if(click<600){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Не хватает денег!',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#FF0000'
          })
    }
    else{
        click = click - 600;
        animPlus = animPlus + 5;
        clickText.textContent='Денег заработано:' + click;
        Swal.fire({
            icon: 'success',
            title: 'Вы купили улучшение!',
            text: 'Теперь у вас меньше денег:)',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#008000'
          })
    }
})

upgradeAnim2.addEventListener('click', function(){
    if(click<1500){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Не хватает денег!',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#FF0000'
          })
    }
    else{
        click = click - 1500;
        animPlus = animPlus + 30;
        clickText.textContent='Денег заработано:' + click;
        Swal.fire({
            icon: 'success',
            title: 'Вы купили улучшение!',
            text: 'Теперь у вас меньше денег:)',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#008000'
          })
    }
})

upgradeAnim3.addEventListener('click', function(){
    if(click<10000){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Не хватает денег!',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#FF0000'
          })
    }
    else{
        click = click - 10000;
        animPlus = animPlus + 50;
        clickText.textContent='Денег заработано:' + click;
        Swal.fire({
            icon: 'success',
            title: 'Вы купили улучшение!',
            text: 'Теперь у вас меньше денег:)',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#008000'
          })
    }
})

upgradeAnim4.addEventListener('click', function(){
    if(click<15000){
        Swal.fire({
            icon: 'error',
            title: 'Ошибка!',
            text: 'Не хватает денег!',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#FF0000'
          })
    }
    else{
        click = click - 15000;
        animPlus = animPlus + 100;
        clickText.textContent='Денег заработано:' + click;
        Swal.fire({
            icon: 'success',
            title: 'Вы купили улучшение!',
            text: 'Теперь у вас меньше денег:)',
            timer: '10000',
            background: '#D3D3D3',
            iconColor: '#008000'
          })
    }
})

//вход и выход из магазина
Shop.addEventListener('click', function(){
    upgrade1.classList.remove('hidden');
    upgrade2.classList.remove('hidden');
    upgrade3.classList.remove('hidden');
    upgrade4.classList.remove('hidden');
    upgradeAnim1.classList.remove('hidden');
    upgradeAnim2.classList.remove('hidden');
    upgradeAnim3.classList.remove('hidden');
    upgradeAnim4.classList.remove('hidden');
    backMenu.classList.remove('hidden');
    rbText.classList.remove('hidden');
    animText.classList.remove('hidden');
    Shop.classList.add('hidden');
    clickText.classList.add('hidden');
    clickBtn.classList.add('hidden');
    animBtn.classList.add('hidden')
})

backMenu.addEventListener('click', function(){
    upgrade1.classList.add('hidden');
    upgrade2.classList.add('hidden');
    upgrade3.classList.add('hidden');
    upgrade4.classList.add('hidden');
    upgradeAnim1.classList.add('hidden');
    upgradeAnim2.classList.add('hidden');
    upgradeAnim3.classList.add('hidden');
    upgradeAnim4.classList.add('hidden');
    backMenu.classList.add('hidden');
    rbText.classList.add('hidden');
    animText.classList.add('hidden');
    Shop.classList.remove('hidden');
    clickText.classList.remove('hidden');
    clickBtn.classList.remove('hidden');
    animBtn.classList.remove('hidden')
})

let blockMove = anime({
    targets: '#block',
    translateX: 300,
    translateY:300,
    easing: 'easeInOutSine',
    autoplay: false,
    borderRadius: '50%',
    backgroundColor: '#4B0082',
    rotate: '360',
    direction: 'alternate'
  });

//анимировать!
animBtn.addEventListener('click', function(){
    blockMove.restart();
    animBtn.blur();
    animBtn.classList.add('hidden')
    setTimeout(function(){
        click = click + animPlus;
        clickText.textContent='Денег заработано:' + click;
        animBtn.classList.remove('hidden')
    }, 2000)
})