//add documentation

Array.prototype.increase = function(){
    let temp = this;
    let j = 0;
    let newArr = new Array(temp.length +1);
    for(let i of temp){
        newArr[j] = i;
        j++
    }
    return newArr
}

let sidechain = new Array(0);

function addSide(){
    sidechain = sidechain.increase();
    for(i = 0; i < sidechain.length; i++){
        sidechain[i] = document.createElement("object");
        sidechain[i].setAttribute("data", "./sidechain.page.html");
        sidechain[i].setAttribute("width", "750");
        sidechain[i].setAttribute("height", "150");
    }
    document.getElementById("sidechain").appendChild(sidechain[sidechain.length -1]);
}

//document.getElementById("addSide").addEventListener("click", addSide);

//=======================================================================================
function generateName(){
    var name = "";
    let carbon = document.getElementById("nOfC").value;
    let funGroup = document.getElementById("funGroup").value;
    let posFun = document.getElementById("funPos").value;
    let halo = document.getElementById("halo").value;
    let cyclo = document.getElementById("cyclo").value;
    try{
        switch(carbon){
            case "1": name = name + "meth"; break;
            case '2': name = name + "eth"; break;
            case '3': name = name + "prop"; break;
            case '4': name = name + "but"; break;
            case '5': name = name + "pent"; break;
            case '6': name = name + "hex"; break;
            case '7': name = name + "hept"; break;
            case '8': name = name + "oct"; break;
            case '9': name = name + "non"; break;
            case '10': name = name + "pent"; break;
            default: throw "not a valid number. Field: number of carbons";
        }

        if(funGroup != "alkane" && funGroup != ""){
            if(funGroup == "alkyne"){
                name = name + "-" + posFun + "-";
                name = name + "yne";
            }
            else if(funGroup == "alkene"){
                name = name + "-" + posFun + "-";
                name = name + "ene";
            }
            else if(funGroup == "amine"){
                name = name + "ane-" + posFun + "-";
                name = name + "amine";
            }
            else if(funGroup == "alcohol"){
                name = name + "an-" + posFun + "-";
                name = name + "ol";
            }
            else if(funGroup == "ketone"){
                name = name + "ane-" + posFun + "-";
                name = name + "one";
            }
            else if(funGroup == "aldehyde"){
                name = name + "ane-" + posFun + "-";
                name = name + "al";
            }
            else if(funGroup == "amide"){
                name = name + "ane-" + posFun + "-";
                name = name + "amide";
            }
            else if(funGroup == "ester"){
                name = name + "ane-" + posFun + "-";
                name = name + "oate";
            }
            else if(funGroup == "carboxylic acid"){
                name = name + "ane-" + posFun + "-";
                name = name + "oic acid";
            }
        }
        else{

        if(funGroup == "alkane")
            name = name + "ane";
        else if(funGroup == "alkyne")
            name = name + "yne";
        else if(funGroup == "alkene")
            name = name + "ene";
        else if(funGroup == "amine")
            name = name + "amine";
        else if(funGroup == "alcohol")
            name = name + "anol";
        else if(funGroup == "ketone")
            name = name + "anone";
        else if(funGroup == "aldehyde")
            name = name + "anal";
        else if(funGroup == "amide")
            name = name + "amide";
        else if(funGroup == "ester")
            name = name + "anoate";
        else if(funGroup == "carboxylic acid")
            name = name + "anoic acid";
        }

        if(halo != ""){
            let temp = halo.split(" ");
            for(i = 0; i < temp.length; i++)
                temp[i].trim();
            temp.sort();
            temp.reverse();
            for(let i of temp){
                if(i == "I")
                    name = "iodide" + name;
                else if(i == "F")
                    name = "fluoride" + name;
                else if(i == "Cl")
                    name = "cloride" + name;
                else if(i == "Br")
                    name = "bromide" + name;
                else
                    throw "not a valid parameter. Filed: Halogens"
            }
        }
        else{
            if(cyclo == "Yes" && (funGroup == "alkane" || funGroup == "alkene"))
                name = "cyclo" + name;
        }
        document.getElementById("resoult").innerHTML = name;
    }catch(err){
        alert(err);
    }
    console.log(carbon + " " + funGroup + " " + posFun + " " + halo + " " + cyclo);
}

document.getElementById("submit").addEventListener("click", generateName);
