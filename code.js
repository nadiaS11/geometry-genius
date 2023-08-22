function whenClicked(e){
    const resultArea = document.getElementById('results')
    
    const firstInput =e.parentNode.parentNode.childNodes[5].childNodes[1]
    const secondInput =e.parentNode.parentNode.childNodes[5].childNodes[4]
    const base=parseFloat(firstInput.value)
    const height=parseFloat(secondInput.value)
    const area =base * height;
    const name = e.parentNode.parentNode.childNodes[1].innerText ;
    const p = document.createElement('p')
    p.innerText = name +" area = " + area.toFixed(2) + " cmsqr"
    p.style.padding = '15px'
    p.style.fontWeight = 'medium'
    
    
    console.log(resultArea.appendChild(p))
}