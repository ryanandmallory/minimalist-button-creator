const code = document.querySelector('.main-btn');
var btnText = document.querySelector('.text-content-value');
let htmlBtn = '&lt;' + 'a href="#" class="main-btn"' + '&gt;' + code.textContent + '&lt;' + '/a' + '&gt;';


const inputEventOutput = function(){
    var btnText = document.querySelector('.text-content-value');
    if (btnText.value === ''){
        code.textContent = 'Press Me';
    } else {
        code.textContent = btnText.value;
        htmlBtn = '&lt;' + 'a href="#" class="main-btn"' + '&gt;' + code.textContent + '&lt;' + '/a' + '&gt;';
    }
}

document.addEventListener('click', function(e){

    if (e.target.classList.contains('get-code-btn')){
        document.querySelector('.modal').style.display = 'flex';
        getCodeDisplay();

    };
    if (e.target.classList.contains('code')){
        getCodeContent();
    }
    if (e.target.classList.contains('close')){
        document.querySelector('.modal').style.display = 'none';
    };
});

const getCodeDisplay = function(){
    const codeOutput = document.querySelector('code');
    let compStyles = window.getComputedStyle(code);

    codeOutput.innerHTML = `
    <h3>&#60;!-- HTML --&#62;</h3>
    ${(htmlBtn)}<br /><br />`;

    codeOutput.innerHTML += `
    <h3>/*** CSS STYLES ***/</h3>
    a.main-btn {<br />
    &nbsp;&nbsp;align-items: center;<br/>
    &nbsp;&nbsp;background-color: ${compStyles.getPropertyValue('background-color')};<br/>
    &nbsp;&nbsp;border: ${compStyles.getPropertyValue('border-width')} solid ${compStyles.getPropertyValue('border-color')};<br/>
    &nbsp;&nbsp;border-radius: ${compStyles.getPropertyValue('border-radius')};<br/>
    &nbsp;&nbsp;box-shadow: ${compStyles.getPropertyValue('box-shadow')};<br/>
    &nbsp;&nbsp;box-sizing: border-box;<br/>
    &nbsp;&nbsp;color: ${compStyles.getPropertyValue('color')};<br/>
    &nbsp;&nbsp;cursor: pointer;<br/>
    &nbsp;&nbsp;display: flex;<br/>
    &nbsp;&nbsp;font-family: ${compStyles.getPropertyValue('font-family')};<br/>
    &nbsp;&nbsp;font-size: ${compStyles.getPropertyValue('font-size')};<br/>
    &nbsp;&nbsp;height: ${compStyles.getPropertyValue('height')};<br/>
    &nbsp;&nbsp;justify-content: center;<br/>
    &nbsp;&nbsp;padding: ${compStyles.getPropertyValue('padding')};<br/>
    &nbsp;&nbsp;text-align: center;<br/>
    &nbsp;&nbsp;text-decoration: none;<br/>
    &nbsp;&nbsp;text-transform: uppercase;<br/>
    &nbsp;&nbsp;transition: 0.7s;<br/>
    &nbsp;&nbsp;width: ${compStyles.getPropertyValue('width')};<br/>
    }<br/>
    a.main-btn:hover {<br />
        &nbsp;&nbsp;background-color: #${backgroundHoverHex};<br/>
        &nbsp;&nbsp;border-color: #${borderColorHex};<br/>
        &nbsp;&nbsp;color: #${textHoverColorHex};<br/>
    }
    `;

    
    function getCssPropertyForRule(rule, prop) {
        var sheets = document.styleSheets;
        var slen = sheets.length;
        for(var i=0; i<slen; i++) {
            var rules = document.styleSheets[i].cssRules;
            var rlen = rules.length;
            for(var j=0; j<rlen; j++) {
                if(rules[j].selectorText == rule) {
                    return rules[j].style[prop];
                }
            }
        }
    }
    
    
    alert("Hovered Colors is "+getCssPropertyForRule('a:hover', 'color'));

    
}


const getCodeContent = function(){
    const codeDisplay = document.querySelector('.code');
    // Copy Content on Click
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(codeDisplay);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    // Create Confirmation Alert
    const div = document.createElement('div');
    div.className = 'copied-message';
    const para = document.createElement('P');
    const text = document.createTextNode('Code is copied to clipboard — thank you :)');
    para.appendChild(text);
    div.appendChild(para);
    codeDisplay.appendChild(div);
    setTimeout(function(){ document.querySelector('.copied-message').remove();}, 3000);
}

document.querySelector('.text-content-value').addEventListener('input', inputEventOutput, false);