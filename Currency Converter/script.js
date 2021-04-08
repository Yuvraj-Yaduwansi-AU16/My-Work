(async function getData(){
    const content = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=095eac3ce07d4a5af027852e25f98729&format=1')
    const data = await content.json();
    Calculate.currencydata = data;
    LoadContent.loadUIcontent(data.rates)
})();

class LoadContent{
    static load(baseValue){
        if(baseValue ==='EUR') document.getElementById('btnGroupDrop1').innerText = baseValue
        else document.getElementById('btnGroupDrop2').innerText = baseValue

    }

    static loadUIcontent(ratesObj){
        const ui1 =document.getElementById('ui-elements-1');
        const ui2 =document.getElementById('ui-elements-2');
        for (const key in ratesObj) {
            if (Object.hasOwnProperty.call(ratesObj, key)) {
                const value = ratesObj[key];
                UI.createLIelements(ui1,key)
                UI.createLIelements(ui2,key)
                if(key ==='INR'|| key==='EUR'){
                    LoadContent.load(key);
                }
                
            }
        }
    }

    static loadbtn1OnClick(e){
        if(e.target.classList.contains('dropdown-item')) {
            document.getElementById('btnGroupDrop1').innerText = e.target.innerText;
            e.preventDefault();
        }
    }

    static loadbtn2OnClick(e){
        if(e.target.classList.contains('dropdown-item')) {
            document.getElementById('btnGroupDrop2').innerText = e.target.innerText;
            e.preventDefault();
        }
    }


}

class UI{
    static createLIelements(ui,key){
        const li = document.createElement('li')
        const a = document.createElement('a')
        a.className = 'dropdown-item'
        a.innerText = key;
        a.href = '';
        li.appendChild(a)
        ui.appendChild(li)
        
        
    }
    static createConversionText(id,rateValue){
        if(id ==='input-div-1') document.getElementById('display-rate').innerText = `1 ${document.getElementById('btnGroupDrop1').innerText} = ${rateValue} ${document.getElementById('btnGroupDrop2').innerText}`
        else document.getElementById('display-rate').innerText = `1 ${document.getElementById('btnGroupDrop2').innerText} = ${rateValue} ${document.getElementById('btnGroupDrop1').innerText}`

        
    }

    static displayFinalAMt(id,amt){
        if(id ==='input-div-1'){
            document.getElementById('input-btn-2').value = amt;
        }
        else document.getElementById('input-btn-1').value = amt;

    }

    static swap(e){
        let btn1 =document.getElementById('btnGroupDrop1').innerText;
        let btn2 =document.getElementById('btnGroupDrop2').innerText;
        document.getElementById('btnGroupDrop1').innerText = btn2;
        document.getElementById('btnGroupDrop2').innerText = btn1;
        e.preventDefault();
    }
}

class Calculate{
    static currencydata;

    static onNumberInput(e){
        e.preventDefault();
        let converValueFactor = 1.0;
        let convertedrate = 0;
        let finalAmt = 1;
        let btn1;
        let btn2;
        if(e.target.parentElement.id ==='input-div-1'){
            btn1 =document.getElementById('btnGroupDrop1').innerText;
            btn2 =document.getElementById('btnGroupDrop2').innerText;

        }else{
            btn2 =document.getElementById('btnGroupDrop1').innerText;
            btn1 =document.getElementById('btnGroupDrop2').innerText; 
        }
        for (const key in Calculate.currencydata.rates) {
            if (Object.hasOwnProperty.call(Calculate.currencydata.rates, key)) {
                const value = Calculate.currencydata.rates[key];
                if(key ===btn1){
                    converValueFactor/= value;
                }
                if(key === btn2){
                    convertedrate = value;
                }
                
            }
        }
        convertedrate*=converValueFactor;
        UI.createConversionText(e.target.parentElement.id,convertedrate);
        finalAmt=convertedrate*e.target.value;
        UI.displayFinalAMt(e.target.parentElement.id,finalAmt)
    }
}

document.getElementById('input-btn-1').addEventListener('input',Calculate.onNumberInput)
document.getElementById('input-btn-2').addEventListener('input',Calculate.onNumberInput)
document.getElementById('swap').addEventListener('click',UI.swap)
document.querySelector('.first').addEventListener('click',LoadContent.loadbtn1OnClick)
document.querySelector('.second').addEventListener('click',LoadContent.loadbtn2OnClick)