let akHomeElements = document.querySelectorAll('.k-categories-list li');
let akHomeElementsQty = akHomeElements.length;
let akHomeHolder = document.getElementsByClassName('k-categories-holder');
let akHomeElementList = document.getElementsByClassName('k-categories-list')[0];
let akHomeStep = 20;
function akHomeResize() {
    let holderWidth = akHomeHolder[0].offsetWidth;
    if ( window.matchMedia( '(min-width: 75rem)' ).matches ) {
        let newWidth = holderWidth * .2;
        akHomeStep = newWidth;
        for ( let i = 0; i < akHomeElementsQty; i++ ) {
            akHomeElements[i].style.flex = '0 0 ' + newWidth + 'px';
        }
    }
}
window.addEventListener('resize', akHomeResize);
akHomeResize();


akHomeElementList.style.left = '0px';
document.querySelector('.k-categories-holder a.left').addEventListener('click', function (e) {
    e.preventDefault();
    let newLeft = parseFloat( akHomeElementList.style.left ) - akHomeStep;
    let limit = -1 * ( akHomeHolder[0].offsetWidth - ( akHomeHolder[0].offsetWidth * .2 ));
    if ( newLeft < limit ) {
        newLeft = limit
    }
    akHomeMoveList( newLeft );


});
document.querySelector('.k-categories-holder a.right').addEventListener('click', function (e) {
    e.preventDefault();
    let newLeft = parseFloat( akHomeElementList.style.left ) + akHomeStep
    if ( newLeft > 0 ) {
        newLeft = 0;
    }
    akHomeMoveList( newLeft );

});
function akHomeMoveList( left ) {
    akHomeElementList.style.left = left + 'px';
}