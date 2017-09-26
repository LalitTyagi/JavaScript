function userData() {
    	var x = document.getElementById("year").value;
    	console.log("Value of x is.:",x)

        var data = document.getElementById('textArea').value;
        var obj = JSON.parse(JSON.stringify(data));
        var obj1 = JSON.parse(obj)

        var date = [];
        var month = [];
        var year = [];
        var newName = [];
        for(var i=0;i<obj1.length;i++)
        {
        	
        	var res = obj1[i].birthday.split("/");
        	var res1 = obj1[i].name.split(" ");
        	
        	date.push(res[0]);
        	month.push(res[1]);
        	year.push(res[2]);

        	var str = [];
        	str.push(res1[0][0]);
        	str.push(res1[1][0]);
        	var str1 = str.join("");

        	newName.push(str1);
        }

        for(var i=0;i<obj1.length-1;i++)
        {
            for(var j=i+1;j<obj1.length;j++)
            {
                if(year[j]>year[i])
                {
                    var temp = year[j];
                    year[j]=year[i];
                    year[i]=temp;

                    var temp1=newName[j];
                    newName[j]=newName[i];
                    newName[i]=temp1;

                    var temp2=date[j];
                    date[j]=date[i];
                    date[i]=temp2;

                    var temp3=month[j];
                    month[j]=month[i];
                    month[i]=temp3;

                }
            }
        }

        var sunDay = [];
        var monDay = [];
        var tuesDay = [];
        var wednesDay = [];
        var thursDay = [];
        var friDay = [];
        var saturDay = [];
        var weekMap = {};

        
        for(var i=0;i<obj1.length;i++)
        {
        	var d = new Date();
    		d.setFullYear(x, month[i], date[i]);
    		//document.getElementById("demo").innerHTML = d;
    		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    		//console.log(days[d.getDay()])
    		if(days[d.getDay()]=="Sunday") 
    			{
    				sunDay.push(newName[i])
    			}
    		if(days[d.getDay()]=="Monday") 
    			{
    				monDay.push(newName[i])
    			}
    		if(days[d.getDay()]=="Tuesday") 
    			{
    				tuesDay.push(newName[i])
    			}
    		if(days[d.getDay()]=="Wednesday") 
    			{
    				wednesDay.push(newName[i])
    			}
    		if(days[d.getDay()]=="Thursday") 
    			{
    				thursDay.push(newName[i])
    			}
    		if(days[d.getDay()]=="Friday") 
    			{
    				friDay.push(newName[i])
    			}
    		if(days[d.getDay()]=="Saturday") 
    			{
    				saturDay.push(newName[i])
    			}
        }

        weekMap['monday'] = monDay;
        weekMap['tuesday'] = tuesDay;
        weekMap['wednesday'] = wednesDay;
        weekMap['thursday'] = thursDay;
        weekMap['friday'] = friDay;
        weekMap['saturday'] = saturDay;
        weekMap['sunday'] = sunDay;

        for(var key in weekMap){
            var len = Math.ceil(Math.sqrt(weekMap[key].length));
            var width = (150/len);
            var fontsize = 12;
            if(width-5 < fontsize){
                fontsize = width - 5;
            }

            var that = document.getElementById(key);
            while (that.hasChildNodes()) {
                that.removeChild(that.lastChild);
            }
            
            for(var i=0;i<weekMap[key].length;i++){
                var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
                var str = '<span class="spanEle" style="width:'+width+'px;,color: white; height:'+width+'px; background-color:'+hue+';font-size:'+fontsize+';"><span>'+weekMap[key][i]+'</span></span>';
                document.getElementById(key).insertAdjacentHTML( 'beforeend', str );
            }
        }
        
    }