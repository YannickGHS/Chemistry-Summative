/* ChemistryJs Equilibrium Calculatro tool
 * Autho: Yannick Abouem
 * Date: 6/1/2019
 * ========================================================================
 * Description
 * ========================================================================
 * The following program will, given a reaction and the solution, calculate
 * the equilibrium constant.
 * ========================================================================
*/

function kForward(id){
    let coefficent1 = document.getElementById(id[0]).value;
    let concentration1 = document.getElementById(id[1]).value;
    let coefficent2 = document.getElementById(id[2]).value;
    let concentration2 = document.getElementById(id[3]).value;

    document.getElementById("kfResult").innerHTML = Math.pow(concentration1, coefficent1) * Math.pow(concentration2, coefficent2);
}

function kReverse(id){
    let coefficent1 = document.getElementById(id[0]).value;
    let concentration1 = document.getElementById(id[1]).value;
    let coefficent2 = document.getElementById(id[2]).value;
    let concentration2 = document.getElementById(id[3]).value;

    document.getElementById("krResult").innerHTML = Math.pow(concentration1, coefficent1) * Math.pow(concentration2, coefficent2);
}

function equilibrium(){
    try {
        let coefficent1 = document.getElementById("coefficen1").value;
        let concentration1 = document.getElementById("concentration1").value;
        let coefficent2 = document.getElementById("coefficen2").value;
        let concentration2 = document.getElementById("concentration2").value;
        let coefficent3 = document.getElementById("coefficen3").value;
        let concentration3 = document.getElementById("concentration3").value;
        let coefficent4 = document.getElementById("coefficen4").value;
        let concentration4 = document.getElementById("concentration4").value;
    
        let divisor = Math.pow(concentration1, coefficent1) * Math.pow(concentration2, coefficent2);
        let dividend = Math.pow(concentration3, coefficent3) * Math.pow(coefficent4, concentration4);
        if(isNaN(dividend) || isNaN(divisor)) throw "not a number exception";
        else if(!isFinite(dividend) || !isFinite(divisor)) throw "large number exception"
        else if(divisor === 0) throw "division by zero exception"
        else document.getElementById("resoult").innerHTML = dividend/divisor;

    } catch (error) {
        alert(error);
    }
}

document.getElementById("button").addEventListener("click", equilibrium);

function change(){
    let concentration1 = document.getElementById("conIni1").value;
    let concentration2 = document.getElementById("conIni2").value;
    let concentration3 = document.getElementById("conIni3").value;
    let concentration4 = document.getElementById("conIni4").value;

    let Ke = document.getElementById("Ke").value; //get from document

    let a = Ke - 1;
    let b = -1 * (Ke * concentration1 + Ke * concentration2 + 1 * concentration3 + 1 * concentration4);
    let c = Ke * concentration1 * concentration2 - concentration3 * concentration4;

    document.getElementById("resoult2").innerHTML = (-1 *b + Math.sqrt(Math.pow(b, 2) - (4 * a * c)))/(2 * a);
}

document.getElementById("change").addEventListener("click", change);

document.getElementById("Kf").addEventListener("click", kForward(["kf0", "kf1", "kf2", "kf3"]));

document.getElementById("Kr").addEventListener("click", kReverse(["kr0", "kr1", "kr2", "kr3"]));


