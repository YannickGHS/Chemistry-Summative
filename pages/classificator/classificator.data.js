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

//variable for molecule
//if else statement to devide the molecule into smaller strings
//if else statement to find if its a complex, simple or bio molecule
//if complex than find all elements contained in the molecule (you might whant to create a JSON file with a periodic table)
//count the number of atoms for each element
//if simple than find the element it is made of
//if bio then do the same as complex but find for functional groups
//print to screen the molecule
//EXTRA: make a 3d model usig three.js