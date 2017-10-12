// JavaScript Document
// create by lyg
    
	function drawfile(drawobj){
		//alert("ok");
		var xmax=30;
		var ymax=30;
		//alert("ok");
		ctx=drawobj;
		var withmax=550;
		var heighttmax=750;
		var withstep=heighttmax/xmax;
		var heightstep=withmax/ymax;
		//data=filltestdate();
		drawobj=window.glob_cav;
		
		for (var i=0;i<=xmax;i++)
		{
			
			drawobj.moveTo(20+i*withstep,20);
			drawobj.lineTo(20+i*withstep,withmax+20);
			
					
		}
		drawobj.stroke();		
		for (var j=0;j<=ymax;j++) {
				drawobj.moveTo(20,20+j*heightstep);
				drawobj.lineTo(heighttmax+20,20+j*heightstep);
				
		}
		drawobj.stroke();
		data=window.glob_data;
		//drawfive
		for (var x=0;x<=xmax;x++) {
			for (var y=0;y<=ymax;y++ ) {
				//var val=data[x][y];
				
				
				var color= data[x][y];
				
				drawobj.fillStyle = 'rgb(0,0,0)';
				if (1==color) {
				drawobj.fillStyle = 'rgb(200,0,0)';
					
				}
				if (2==color) {
				drawobj.fillStyle = 'rgb(0,0,200)';
				}
				if (color>0) {
				
				drawobj.beginPath();
				drawobj.moveTo(20+x*withstep,20+y*heightstep);
				drawobj.arc(20+x*withstep,20+y*heightstep,7,0,Math.PI*2,true);  
				drawobj.fill();
				drawobj.stroke();
				
				}
				
				
			}
		}
		
		
		//drawobj.arc(20,20,5,0,Math.PI*2,true);  
		//alert("ok");
		
		
			
	}
	
		
	function initdate(){
	   
	   var arr = new Array(); 
	   
       for(var i=0;i<100;i++){   			
          arr[i]=new Array();    
          for(var j=0;j<100;j++){      
             arr[i][j]=0;
		    }
		} 		
		//alert('init');
		return arr;
	}
	
	function changedate(i,j,val){	   
	   window.glob_data[i][j]=val;
	   
	}
	function cando(i,j){
	   	//alert(window.glob_data[1][1]);
	   var val=window.glob_data[i][j];
	  // alert(i+":"+j+":"+window.glob_data[i][j]);
	   if(0==val) {
		   return true;
	   }
	   //alert('a'+val);
	   return false;
	}
	
 function documentMouseDownHandler(event){
   // alert(event.clientX);
	//alert(event.clientY);
	var curx=event.clientX-100;
	var cury=event.clientY;
	
	var xmax=30;
	var ymax=30;
	var withmax=550;
	var heighttmax=750;
	var withstep=heighttmax/xmax;
	var heightstep=withmax/ymax;
	//alert(2);
	for (var x=0;x<=xmax;x++) {
			for (var y=0;y<=ymax;y++ ) {
				
				//var val=data[x][y];
				var pointx=	20+x*withstep;
				var pointy=20+y*heightstep;
				
				if 	(Math.abs(pointx-curx)<7 && Math.abs(pointy-cury)<7 ) {	
				    
					if (cando(x,y) == true) {
						//alert("save:");
						changedate(x,y,1);
						drawfile();
						savedatatoserver();
						//getdata();
						
					}
				}
				
				
			}
	}
	
  }
  
  function initfive() {
	var $canvasC=$("#fivepaint");	
	var canvas=$canvasC[0];
	canvas.style.position = 'absolute';
    canvas.style.left = 100 + 'px';
    canvas.style.top = 0 + 'px';
  }
  
  function getdata() {
	 // alert("get:");
	   writelog("send:"+window.counter);
	   window.counter=window.counter+1;
	  $.get('http://120.78.86.110:9001/getdata',{
		  
	  }, function(data,textStatus) {
		  datatoarry(data.data);
		  drawfile();
		  writelog("back:"+data.data);
		  //alert("get:"+data.data);
	  })
  }
  
  function savedatatoserver() {
	 
	  $.post('http://120.78.86.110:9001/savedata',{
		  data:datatostr()	  
	  }, function(data,textStatus) {
		//alert("save:"+data);
	  })
  }
  
  function datatostr() {
	  var out="";	  
	  for(var i=0;i<=30;i++){   			         
          for(var j=0;j<=30;j++){      
             out=out+window.glob_data[i][j]+",";
		    }
		} 
	  
      return out;
  }
  
  function datatoarry(str) {
	  var arr=str.split(',');
	  var k=0
	  out="";
	  //alert("dd:"+arr.length);
	  if (arr.length <=10)
	  {
		  return "";
	  }
	  for(var i=0;i<=30;i++){   			         
          for(var j=0;j<=30;j++){      
             window.glob_data[i][j]=arr[k];	 
			 k=k+1;
			 
			 //window.glob_data[i][j]='0';	 
			 
		    }
		}
		
		window.glob_data[0][0]=0;	
  }
  
  function writelog(str) {
	  var $mydiv=$('#div1');
	  $mydiv.text(str);
	   // alert($mydiv.text(""));
  }
  
  
  
	
	
