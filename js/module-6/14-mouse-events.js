// собитія мишкі
// - mouseenter i mouseleave(це ховер)
// - mouseover i mouseout
// - mousemove (chatty event - болтливое собитіє)



const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseleave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box--active');
}

function onMouseleave(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');
}

function onMouseMove(event) {
   console.log(event);
}