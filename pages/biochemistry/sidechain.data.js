function addSideName(){
    let name = "";
    let carbon = document.getElementById("nOfC-side").value;
    let funGroup = document.getElementById("funGroup-side").value;
    let posFun = document.getElementById("funPos-side").value;
    if(funGrop != "alcohol" || funGroup != "phenyl"){
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
    }

        if(funGroup == "alkane")
            name = name + "yl";
        else if(funGroup == "amine")
            name = name + "amino";
        else if(funGroup == "alcohol")
            name = "hydroxy";
        else if(funGroup == "ether")
            name = name + "oxy";
        else if(funGroup == "phenyl")
            name = "phenyl"

    
    name = posFun + "-" + name;
}