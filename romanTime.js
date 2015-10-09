var hours = process.argv[2];
var minutes = process.argv[3];
var romanHours = ArabicToRoman(hours);
var romanMinutes = ArabicToRoman(minutes);
if (hours>=24 || hours<0 || minutes>59 || minutes<0)
	{
		console.log('Время указано не верно');
	}
	else
		{
			console.log(romanHours+' : '+romanMinutes);
		}

function ArabicToRoman(arabicValue)
    {
        var romanValue='';
        if (arabicValue==='0')
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
        if (arabicValue==9)
            {
                romanValue+=('IX');
                arabicValue-=9;
            }
        while (arabicValue>=5)
            {
                romanValue+=('V');
                arabicValue-=5;
            }
        if (arabicValue==4)
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
