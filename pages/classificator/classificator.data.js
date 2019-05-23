/* Chemistry JS Chemical Compiund Classificator
 * Author: Yannick Abouem
 * Date: *insert end date here*
 * ============================================================================
 * Description
 * ============================================================================
 * This program analizes and sorts, based on the name, a chemical compound by
 * deviding the name in substring and recognizing which elements is made of,
 * if it is an ion, if it is a biomolecule and which functional group contains.
 * This program works only with IUPAC naming, i.e. polyethanoate instead of 
 * poliyvinil, common names are not supported since they are inconsistant and
 * they do not reveal the composition of a compound.
 * ============================================================================
 */

let molecule = document.getElementById("chemComp");
const prefix = ["meth", "eth", "prop", "but", "pent", "hex", "hept", "oct", "non", "dec"];

String.prototype.eraseExtraChar = function(){
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '-'];
  for(let i of chars)
    if(i == this.charAt(0))
      return this.substring(1, this.length-1);
  else
    return this;
}

String.prototype.findAlcohol = function(priority){
  for(let i of prefix)
    if(this.includes(i.concat()))
}

function loop(){
  let temp;
  do{temp = molecule.eraseExtraChar();}while(temp == molecule);//remove the number and other unwhanted characters at the beginning of the string molecule
  do{
    //identify secondary carbon chain
  }while(true);
}