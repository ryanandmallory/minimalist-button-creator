// MAIN ELEMENTS
const mainBtn = document.querySelector('.main-btn');
var color = document.querySelector('.color');
var fontFamilyInput = document.querySelector('.font-family-input');
var textContentInput = document.querySelector('.text-content-input');

// INPUT SLIDERS
var inputWidth = document.getElementById('width');
var inputHeight = document.getElementById('height');
var inputPadding = document.getElementById('padding');
var inputBorderRadius = document.getElementById('borderRadius');
var inputBorderSize = document.getElementById('borderSize');
var inputFontSize = document.getElementById('fontSize');
var inputBoxShadow = document.getElementById('shadow');

// INPUT TEXT
var widthText = document.querySelector('.width');
var heightText = document.querySelector('.height');
var paddingText = document.querySelector('.padding');
var borderRadiusText = document.querySelector('.border-radius');
var borderSizeText = document.querySelector('.border-size');
var fontSizeText = document.querySelector('.font-size');
var shadowSize = document.querySelector('.shadow-size');

// FONT FAMILY, CONTENT, AND CLASS SELECTORS
var colorContainer = document.querySelector('.color-container');
var colorContainerSwitch = document.querySelector('.color-container-switch');
var sliders = document.querySelectorAll('.sliders');
var changeBtnContent = document.querySelector('.text-content-value');
var fontMenu = document.querySelector('.font-menu');

// HOVER SWITCH
const checkbox = document.querySelectorAll('input[type="checkbox"]');

// SCROLL PANEL
const scrollBar = document.querySelector('.scroll-container');
const buttonDisplay = document.querySelector('.btn-controls-display');

// INITIALIZE VARIABLES AND ARRAYS
var backgroundHex = 'fff', backgroundHoverHex = 'fff', textColorHex = '938b8d', textHoverColorHex = '938b8d', borderColorHex = '938b8d', borderHoverColorHex = '938b8d', fontFamilyType ='Open Sans';

// COUNTER VARIABLE FOR SCROLL BAR
let counter = 0;

const scrollBarDisplay = function(e){

    if ( counter == 0 ){
        scrollBar.style.display = 'flex';
        setTimeout(displayFlex, 8000);
        counter++;
    }
    
    function displayFlex() {
        scrollBar.style.display = 'none';
    }
};

// Returns CSS Values
var returnCSSValue = function(){
    mainBtn.setAttribute('style', `
        background: #${ backgroundHex };
        border-color: #${ borderColorHex };
        border-radius: ${ inputBorderRadius.value }px;
        border-width: ${ inputBorderSize.value }px;
        -webkit-box-shadow: ${ inputBoxShadow.value }px ${ inputBoxShadow.value }px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: ${ inputBoxShadow.value }px ${ inputBoxShadow.value }px 5px 0px rgba(0,0,0,0.75);
        box-shadow: ${ inputBoxShadow.value }px ${ inputBoxShadow.value }px 5px 0px rgba(0,0,0,0.75);
        color: #${ textColorHex };
        font-size: ${ inputFontSize.value }px;
        font-family: "${ fontFamilyType }";
        height: ${inputHeight.value}px;
        padding: ${inputPadding.value}px;
        width: ${inputWidth.value}px;
    `);

    var css = `.main-btn:hover{
        background-color: #${backgroundHoverHex} !important;
        border-color: #${borderHoverColorHex} !important;
        color: #${textHoverColorHex} !important;
    }`;
    var style = document.createElement('style');

    if (style.stylesheet){
        style.stylesheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    mainBtn.appendChild(style);

    widthText.placeholder = inputWidth.value + 'PX';
    heightText.placeholder = inputHeight.value + 'PX';
    paddingText.placeholder = inputPadding.value + 'PX';
    borderRadiusText.placeholder = inputBorderRadius.value + 'PX';
    borderSizeText.placeholder = inputBorderSize.value + 'PX';
    fontSizeText.placeholder = inputFontSize.value + 'PX';
    shadowSize.placeholder = inputBoxShadow.value + 'PX';

    if (inputBoxShadow.value == 0){
        mainBtn.style.removeProperty('box-shadow');
    }
}

const clickEvent = function(e){
    if (e.target.classList.contains('color')){
        
        var selectMainBackgroundColors = document.querySelectorAll('.background-color');
        selectMainBackgroundColors.forEach(selectMainBackgroundColor => 
        selectMainBackgroundColor.classList.add('background-main-color'));

        var selectMainTextColors = document.querySelectorAll('.text-color');
        selectMainTextColors.forEach(selectMainTextColor => 
        selectMainTextColor.classList.add('text-main-color'));

        var selectMainBorderColors = document.querySelectorAll('.border-color');
        selectMainBorderColors.forEach(selectMainBorderColor => 
        selectMainBorderColor.classList.add('border-main-color'));

        if (e.target.classList.contains('background-main-color')){
            backgroundHex = e.target.getAttribute('data-background');
        }
        if (e.target.classList.contains('text-main-color')){
            textColorHex = e.target.getAttribute('data-text');
        }
        if (e.target.classList.contains('border-main-color')){
            borderColorHex = e.target.getAttribute('data-border');
        }
        return returnCSSValue();
    };
}

const inputEventColors = function(e){
    if (e.target.classList.contains('background-value')){ backgroundHex = e.target.value.slice(1); }
    if (e.target.classList.contains('text-value')){ textColorHex = e.target.value.slice(1); }
    if (e.target.classList.contains('border-value')){ borderColorHex = e.target.value.slice(1); }
    return returnCSSValue();
}

// const inputEventBtn = function(){
//     var btnText = document.querySelector('.text-content-value');
//     mainBtn.textContent = btnText.value;
// }

const checkHoverBackground = function(){
    const buttonControlsDisplay = document.querySelector('.btn-controls-display');
    const scrollDisplayPara = document.querySelector('.scroll-display p');
    const hexValues = document.querySelectorAll('.hex-value');

    if (checkbox[0].checked){
        buttonControlsDisplay.style.backgroundColor = '#F4F0F0';
        hexValues.forEach(hexValue => 
        hexValue.style.display = 'inline-block');
        scrollBar.style.display = 'none';
    } else {
        hexValues.forEach(hexValue => 
        hexValue.style.display = 'none');
        scrollDisplayPara.innerHTML = 'Hover Mode';
        scrollBar.style.display = 'flex';
        buttonControlsDisplay.style.backgroundColor = '#e0d7d7';
    }
}

const inputColorsHover = function(e){
    
    if (e.target.classList.contains('slider-one')){
        if (checkbox[0].checked == false){
            checkHoverBackground();

            // ADD BACKGROUND COLOR HOVERS
            var selectBackgroundColors = document.querySelectorAll('.background-color');
            selectBackgroundColors.forEach(selectBackgroundColor => 
            selectBackgroundColor.classList.add('background-hover'));

            var removeSelectColors = document.querySelectorAll('.background-color');
            removeSelectColors.forEach(removeSelectColor => 
            removeSelectColor.classList.remove('color'));

            // ADD TEXT COLOR HOVERS
            var selectTextColors = document.querySelectorAll('.text-color');
            selectTextColors.forEach(selectTextColor => 
            selectTextColor.classList.add('text-hover'));

            var removeSelectColors = document.querySelectorAll('.text-color');
            removeSelectColors.forEach(removeSelectColor => 
            removeSelectColor.classList.remove('color'));

            // ADD BORDER COLOR HOVERS
            var selectBorderColors = document.querySelectorAll('.border-color');
            selectBorderColors.forEach(selectBorderColor => 
            selectBorderColor.classList.add('border-hover'));

            var removeSelectColors = document.querySelectorAll('.border-color');
            removeSelectColors.forEach(removeSelectColor => 
            removeSelectColor.classList.remove('color'));
        }

        if (checkbox[0].checked == true){
            checkHoverBackground();

            // REMOVE BACKGROUND COLOR HOVERS
            var selectBackgroundColors = document.querySelectorAll('.background-color');
            selectBackgroundColors.forEach(selectBackgroundColor => 
            selectBackgroundColor.classList.add('color'));

            var removeBackgroundHovers = document.querySelectorAll('.background-color');
            removeBackgroundHovers.forEach(removeBackgroundHover => 
            removeBackgroundHover.classList.remove('background-hover'));

            // REMOVE TEXT COLOR HOVERS
            var selectTextColors = document.querySelectorAll('.text-hover');
            selectTextColors.forEach(selectTextColor => 
            selectTextColor.classList.add('color'));

            var removeSelectColors = document.querySelectorAll('.text-color');
            removeSelectColors.forEach(removeSelectColor => 
            removeSelectColor.classList.remove('.text-hover'));

            // REMOVE BORDERS COLOR HOVERS
            var selectTextColors = document.querySelectorAll('.border-hover');
            selectTextColors.forEach(selectTextColor => 
            selectTextColor.classList.add('color'));

            var removeBorderColors = document.querySelectorAll('.border-color');
            removeBorderColors.forEach(removeBorderColor => 
            removeBorderColor.classList.remove('.border-hover'));
        }
    }


    if (e.target.classList.contains('background-hover')){
        if (e.target.hasAttribute('data-background')){
            backgroundHoverHex = e.target.getAttribute('data-background');
        }
    }
    if (e.target.classList.contains('text-hover')){
        if (e.target.hasAttribute('data-text')){
            textHoverColorHex = e.target.getAttribute('data-text');
        }
    }
    if (e.target.classList.contains('border-hover')){
        if (e.target.hasAttribute('data-border')){
            borderHoverColorHex = e.target.getAttribute('data-border');
        }
    }
    return returnCSSValue();
}



const clickSliders = function(e){
    return returnCSSValue();
}

const runFontFamily = function(e){
    fontMenu.addEventListener('change', newSelection, false);
}

const newSelection = function(){
    const select = document.querySelector('.font-menu');
    const option = select.getElementsByTagName('option')[select.selectedIndex];
    const font = option.getAttribute('data-font');
    if (font === null){ 
        return 
    } 
    else { 
        fontFamilyType = font;
        return fontFamilyType; 
    }
}

// EVENT LISTENERS
buttonDisplay.addEventListener('mouseover', scrollBarDisplay, false);
colorContainer.addEventListener('click', clickEvent, false);
colorContainer.addEventListener('input', inputEventColors, false);
document.addEventListener('click', inputColorsHover, false);
sliders.forEach(slider => { slider.addEventListener('input', clickSliders, false); });
fontMenu.addEventListener('click', runFontFamily, false);
// changeBtnContent.addEventListener('input', inputEventBtn, false);

