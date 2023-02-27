const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onParentClick);
refs.innerChild.addEventListener('click', onParentClick);

function onParentClick(evt) {
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.currentTarget', evt.currentTarget);
}

function onChildClick(evt) {
    console.log('onChildClick');
    console.log('onChildClick -> evt.target', evt.target);
    console.log('onChildClick -> evt.currentTarget', evt.currentTarget);
}

function onInnerChildClick(evt) {
    console.log('onInnerChildClick');
    console.log('onInnerChildClick -> evt.target', evt.target);
    console.log('onInnerChildClick -> evt.currentTarget', evt.currentTarget);
}


// evt.target <--------- це де був клік на якому елементі
// evt.currentTarget <--------- це зловили клік  при вспливанні(де стоїть слушитель собитій)