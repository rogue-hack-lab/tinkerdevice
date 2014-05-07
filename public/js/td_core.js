{
		$(document).ready(function() {
			
			//auto populate our grid with a template
  			for(i = 0; i<49; i++){
				$('#main').append(_.template($('#blocktemp').html(), {count: i}));
			}
						
			$('#main').height($('#main').width());
  			$('#buttons').width($('#main').width());
  			//add more resizing logic in here if you need to
			
		});
		$(window).resize(function() {
  			$('#main').height($('#main').width());
  			$('#buttons').width($('#main').width());
   			 //add more resizing logic in here if you need to

		});
		/*
			window.addEventListener("resize", function(e) {
    			var mainElement = document.getElementById('main');
    			console.log("you're resizing!");
    			mainElement.style.height = mainElement.style.width;
    			console.log(mainElement.style.width);
			});
		*/
		
			var myfirstvariable = 25;	
			//create an array of true false values that you'll be checking the state of things with
			var currentHash;
			$(document).ready(function(){
				currentHash = hashMaker();
			
			});
			
			//hashMaker();
			/*
			for(i=0;i<49;i++){
				//console.log("hello kyle"+i);
				currentHash[i] = (false);
		
			}*/
			
			
			//set a pattern to a particular nickname
			function setPattern(hashNick){
				//clearBlocks();
				var thisone = _.findWhere(answerkey, {nickname: hashNick});
				console.log(thisone);
				if(!_.isUndefined(thisone)){
					currentHash = thisone.hash;
					var ct = 0;
					_.each(currentHash, function(q){
						var blockname = "#block" + ct;
						//console.log(blockname);
						if(q){
							$(blockname).addClass('active');
						}else{
							$(blockname).removeClass('active');
						}
						ct++; 
					});
					thisone.result();
				}
			}
			
			
			function goBack(){
  					window.history.back()
  				}
			
			
			function onoff(theblock)
				{
					$(theblock).toggleClass('active');
					//alter the hash
					//get the name of the block
					var data = window.bname = theblock.id;
					var res = bname.split("k");
				//if the value is true, change to false
				//if the value is false then change to true
				if (currentHash[res[1]]==true){
					currentHash[res[1]]=false;
					}
					else{
						currentHash[res[1]]=true;
					}
					_.each(answerkey, function(q){
						var isMatch = true;
						var count = 0;
						_.each(q.hash, function(z){
								if(z!=currentHash[count]){
									isMatch = false;
								}else{
									//isMatch = true;
								}
								count++;
							});
							if(isMatch){
								q.result(); 
							}
						}
					); 	
				}
				function hashMaker(){
					var arr = [];
					for(i=0; i<49; i++){
					 if($("#block" + i).hasClass("active")){
					 	arr[i] = true;
					 }else{
					 	arr[i]=false;
					 }
					}
					return arr;
					
				}
				
				function givereward(url, msg){
					
					//pass video url
					//make video window visible
					$("#reward").toggleClass("hiderew");
					//close window if you click outside box
					
					//set the src attribute for the vidplayer to reflect the supplied video
					$('#vidframe').attr('src', url);
					$('#congrats').html(msg);
					$('#shade').toggleClass('shadeUp');
					$('#rewlink').attr('href', url);
				}
				
				function clearBlocks(){
					var count = 0;
					_.each($('.playblocks'), function(q){
						//console.log($(q).hasClass('active'));
						$(q).removeClass('active');
						currentHash[count] = false;
						count++;
					});
				}
				
				
				function closePopUp(){
					$('#reward').toggleClass('hiderew');
					$('#vidframe').attr('src', '');
					$('#shade').toggleClass('shadeUp');
				}
}