var array=[
['()      ()','()()    ()','()  ()  ()','()    ()()','()      ()'],
 ['()','()','()','()','()'],
  ['()      ()','()      ()','  ()    ()','  ()  ()','    ()'],
  ['()      ()',' ()  ()','    ()','  ()  ()','()      ()'],
  ['()','()','()','()','()()()()()']];
var colon=['      ','  ()  ','      ','  ()  ','      '];
var hours = process.argv[2];
var minutes = process.argv[3];
var romanHours = ArabicToRoman(hours);
var romanMinutes = ArabicToRoman(minutes);
console.log(romanHours+' : '+romanMinutes);


/*for (var i=1; i <= 5; i++)
    {
        for (var j=1; j <= romanHours.length+romanMinutes+1; j++)
            {
                if (j<=romanHours.length)
                    {
                        console.log(i,j);
                        letterOutput = findLetter(romanHours[j]);
                        console.log(romanHours[j]);
                        console.log(letterOutput);
                    }
                if (j==(romanHours.length + 1))
                    {
                        console.log('11');
                        console.log(colon[i-1]);
                    }
                if (j>(romanHours.length+1))
                    {
                        letterOutput = findLetter(romanMinutes[j]);
                        console.log(romanMinutes[j]);
                        console.log(letterOutput);
                    }
            }    
    }
function findLetter(letter)
{
    if (letter = 'L')
        {
            return array[4][i-1];
        }
    if (letter = 'X')
        {
            return array[3][i-1];
        }
    if (letter = 'V')
        {
            return array[2][i-1];
        }
    if (letter = 'I')
        {
            return array[1][i-1];
        }
    if (letter = 'N')
        {
            return array[0][i-1];
        }
}
*/

function ArabicToRoman(arabicValue)
    {
        var romanValue='';
        if (arabicValue==0)
            {
                romanValue+='N';
            }
        if (arabicValue>=50) 
            {
                romanValue+=('L');
                arabicValue-=50;
            }
        if (arabicValue>=40) 
            {
                romanValue+=('XL');
                arabicValue-=40;
            }
        while (arabicValue>=10)
            {
                romanValue+=('X');
                arabicValue-=10;
            }
        if (arabicValue===9)
            {
                romanValue+=('IX');
                arabicValue-=9;
            }
        while (arabicValue>=5)
            {
                romanValue+=('V');
                arabicValue-=5;
            }
        if (arabicValue===4)
            {
                romanValue+=('IV');
                arabicValue-=4;
            }
        while (arabicValue>0)
            {
                romanValue+=('I');
                arabicValue-=1;
            }
        return romanValue;
    }
