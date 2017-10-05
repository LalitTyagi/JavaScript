function toInt(str)  // function to convert roman no to integer no
{
  var resultNum = charToInt(str.charAt(0));

  var pre, curr;

  for(var i = 1; i < str.length; i++)
  {
    curr = charToInt(str.charAt(i));
    pre = charToInt(str.charAt(i-1));
    if(curr <= pre)
    {
      resultNum += curr;
    } 
    else 
    {
      resultNum = resultNum - pre*2 + curr;
    }
  }
  return resultNum;
}

function toRoman(n) // function to convert integer no to roman no
{
    var resultRoman = '';
    var decimalsNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    var a = 0
    for (var i=a; i < decimalsNum.length; i++) {
        while (n >= decimalsNum[i]) {
            resultRoman += romanNum[i];
            n -= decimalsNum[i];
            a=i;
        }
    }
    return resultRoman;
}

function charToInt(c)
{
  switch (c)
  {
    case 'I': return 1;
    case 'V': return 5;
    case 'X': return 10;
    case 'L': return 50;
    case 'C': return 100;
    case 'D': return 500;
    case 'M': return 1000;
    default: return -1;
  }
}

function caseCheck(str)   // case check for some rule that mention on home page to check that input roman no entered by user is valid or not
{
  for(var i = 0; i < str.length-1; i++)
  {
    if(str.charAt(i) === 'M')
    {
      if((str.charAt(i+1) === 'M') && (str.charAt(i+2) === 'M') && (str.charAt(i+3) === 'M')&& (str.charAt(i+4) === 'M'))
      {
        console.log("M should not be more than 4 consecutive times in a row"); 
        break;
      }
    }
    else if(str.charAt(i) === 'C')
    {
      if((str.charAt(i+1) === 'C') && (str.charAt(i+2) === 'C') && (str.charAt(i+3) === 'C'))
      {
        console.log("C should not be more than 3 consecutive times in a row");
        break;
      }
    }
    else if(str.charAt(i) === 'X')
    {
      if((str.charAt(i+1) === 'X') && (str.charAt(i+2) === 'X') && (str.charAt(i+3) === 'X'))
      {
        console.log("X should not be more than 3 consecutive times in a row");
        break;
      }
    }
    else if(str.charAt(i) === 'I')
    {
      if((str.charAt(i+1) === 'I') && (str.charAt(i+2) === 'I') && (str.charAt(i+3) === 'I'))
      {
        console.log("I should not be more than 3 consecutive times in a row");
        break;
      }
    }
    else if(str.charAt(i) === 'V')
    {
      if((str.charAt(i+1) === 'V'))
      {
        console.log("V should not be more than 1 consecutive times in a row");
        break;
      }
    }
    else if(str.charAt(i) === 'L')
    {
      if((str.charAt(i+1) === 'L'))
      {
        console.log("L should not be more than 1 consecutive times in a row");
        break;
      }
    }
    else if(str.charAt(i) === 'D')
    {
      if((str.charAt(i+1) === 'D'))
      {
        console.log("D should not be more than 1 consecutive times in a row");
        break;
      }
    }
  }
}

function num(str)
{
  caseCheck(str);
  var intNum = toInt(str);
  var roman = toRoman(intNum);
  if(roman != str)
  {
    console.log("Not a valid number");
    return -1;
  }
  else
  return intNum;
}


function calculator(num1,num2,operator)
{
  var result=0;
  switch(operator) 
  {
      case "+":
          result = num1+num2;
          break;
      case "-":
          result = num1-num2;
          break;
      case "/":
          result = num1/num2;
          break;
      case "*":
          result = num1*num2;
          break;
      default:
      result = -1;
  }
  //console.log("result",result);
  return result;
}


function myFunction()
{
  var i1 = document.getElementById("txt1").value;   //user input
  var i2 = document.getElementById("txt3").value;

  var I1 = i1.toUpperCase();   // if user input is in lower case then convert it into upper case
  var I2 = i2.toUpperCase();

  var a = num(I1); // store the int value of roman no. in "a"
  if(a ==-1)
      {
        console.log("Input 1 is not a valid input");
        alert("Input 1 is not a valid input");  // if input 1 is not valid roman no.
        location.reload()
      }
      
  var b = num(I2);
  if(b ==-1)
      {
        console.log("Input 2 is not a valid input");
        alert("Input 2 is not a valid input");  // if input 2 is not valid roman no.
        location.reload()
      }

  if(a!=-1 && b!= -1)   // if both the roman no are valid then calculate
  {
    var c = document.getElementById("txt2").value;
    if(c!='+' && c!='-' && c!='*' && c!='/')
      {
        alert("Operator is not a valid input");
        location.reload();
      }
    var d = toRoman(calculator(a,b,c));
    console.log(d);
    console.log("Result",toRoman(c));
    document.getElementById("demo").innerHTML = d;
  }
   
}