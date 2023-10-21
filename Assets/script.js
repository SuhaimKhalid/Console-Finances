var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942], 
    ['Sep-2013', -1196225], 
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099],
  ];

 // * The total number of months included in the dataset.
  var total_arrays = finances.length;



var total_amount = 0;           //Declare a vaiable to store all amount in one
var previous_month = 0;         //Declare a vaiable to store Previous month amount
var current_month = 0;          //Declare a vaiable to store Current month amount
var each_month_average = 0;     //Declare a vaiable to store Each month average
var total_average = 0;          //Declare a vaiable to store sum up of all each month number

var min_number = 0;             //Delcare a variable to store min number 
var min_date = "";              //Delcare a variable to store min date 
var max_number = 0;             //Delcare a variable to store max number   
var max_date = "";              //Delcare a variable to store max date  

// Use for loop for iteration in array
for(var i=0; i<finances.length; i++)
{
    // * The net total amount of Profit/Losses over the entire period.
    // * Sum up all the amount of the given aray in a single variable
    total_amount += finances[i][1];

    // only run when index goes to second line
    if(i>0){

    // * The average of the **changes** in Profit/Losses over the entire period.
    // First we calculate the difference between each mounth profit/losee
    previous_month= finances[i-1][1];   //Store the value of previous month
    current_month= finances[i][1];      //Store the value of Current month

    each_month_average = current_month - previous_month;   //Getting average of each month

    //Sum up the all month average to one single variable
    total_average += each_month_average;    
           
    
    //   * You will need to track what the total change in Profit/Losses are from month to month and then find the average. (`Total/(Number of months - 1)`)
    var  average = total_average/(finances.length-1);

    // ====================================================================================
    // Greates Increase
    // * The greatest increase in Profit/Losses (date and amount) over the entire period.
    // First make condition to compare who is the higest amount
    if(each_month_average > max_number)
    {
        max_number = each_month_average;   // assing the highest value amount to max_number variable
        max_date = finances[i][0];         // assing the highest value date to max_date variable
    }

    //=======================================================================================
    // Greates Decrease
    // * The greatest increase in Profit/Losses (date and amount) over the entire period.
    // First make condition to compare who is the higest amount
    if(each_month_average < min_number)
    {
        min_number = each_month_average;   // assing the lowest value amount to min_number variable
        min_date = finances[i][0];         // assing the lowest value date to min_date variable
    }
    }

} //End of For Loop


console.log("Financial Analysis ");
console.log("----------------");
// Display Total Number of month 
console.log("Total Months: " + total_arrays);
//Display Total Amount
console.log("Total: $" + total_amount);      
//Display Average Change
console.log("Average Change: " + average.toFixed(2)); 
//Display Greatest Increase
console.log("Greatest Increase in Profits/Losses: " + max_date + " ($" + max_number + ")" ); 
//Display Greatest Decrease
console.log("Greatest Decrease in Profits/Losses: " + min_date + " ($" + min_number + ")" ); 
