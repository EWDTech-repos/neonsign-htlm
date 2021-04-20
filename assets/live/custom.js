
	var customTemplate ="name"
	var lightStatus="off"
	var textInputAmount = 3;
	var inputTextID = "1";

	var backingWidth;
	var backingHeight;
	var textWidth;
	var textHeight;
	var scene="Bridal";
	var installation= ["Screws","Switch"];
	var tubeLength=0;
	var weight=0;
	var price=0;
	var deliverDate=new Date(new Date().getTime() + (1000*60*60*24)*21).toLocaleDateString().split('/').join('-'); //need 21 days to deliver
	var backingColor = "Clear Acrylic";
	var backingShape = "Text Shape";
	var backingSize="";			


	var textStr1=$("#input_text1").val();
	var textFont1="13";
	var miniFontSize1="36";
	var textFontSize1="80";
	var textLineHeight1="80";
	var textSize1="";
	var textAlign1="Left";
	var tubeColor1 = "Hot-Pink";


	var textStr2=$("#input_text2").val();
	var textFont2="13";
	var miniFontSize2="80";
	var textFontSize2="80";
	var textLineHeight2="80";
	var textSize2="";
	var textAlign2="Left";
	var tubeColor2 = "Purple";


	var textStr3=$("#input_text3").val();
	var textFont3="15";
	var miniFontSize3="40";
	var textFontSize3="40";
	var textLineHeight3="40";
	var textSize3="";
	var textAlign3="Left";
	var tubeColor3 = "Dark Blue";

	var infoTextStr="";
	var infoTextFonts="";
	var infoTubeColors="";
	var infoTextFontSize="";
	var infoTextLineHeight="";
	var infoTextAlign="";

$(document).ready(function(){
	
	Date.prototype.format = function(format) {
	    /*
	     * eg:format="YYYY-MM-dd hh:mm:ss";

	     */
	    var o = {
	        "M+" :this.getMonth() + 1, // month
	        "d+" :this.getDate(), // day
	        "h+" :this.getHours(), // hour
	        "m+" :this.getMinutes(), // minute
	        "s+" :this.getSeconds(), // second
	        "q+" :Math.floor((this.getMonth() + 3) / 3), // quarter
	        "S" :this.getMilliseconds()// millisecond
	    }
	    if (/(y+)/.test(format)) {
	        format = format.replace(RegExp.$1, (this.getFullYear() + "")
	                .substr(4 - RegExp.$1.length));
	    }
	    for ( var k in o) {
	        if (new RegExp("(" + k + ")").test(format)) {
	            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
	                    : ("00" + o[k]).substr(("" + o[k]).length));
	        }
	    }
	    return format;
	}


	$("#input_text1").focus(function(){
		inputTextID = "1";
		updateInfo();
	})

	$("#input_text2").focus(function(){
		inputTextID = "2";
		updateInfo();
	})

	$("#input_text3").focus(function(){
		inputTextID = "3";
		updateInfo();
	})




	/************* Choose sence1*************/
	$("#sence-tab a").click(function(){
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
			$($(this).siblings()).removeClass("active")

			if ($(this).attr("id")=="sence1"){
				$("#sence").css("background","url(custom/images/room_wall.jpg) center no-repeat");
				$("#sence").css("background-size","auto 100%");
			}

			if ($(this).attr("id")=="sence2"){
				$("#sence").css("background","url(assets/img/hedge_wall.jpg) center no-repeat");
				$("#sence").css("background-size","auto 100%");
			}
			
			if ($(this).attr("id")=="sence3"){
				$("#sence").css("background","url(assets/img/bridal_wall.jpg) center no-repeat");
				$("#sence").css("background-size","auto 100%");
			}
			
			if ($(this).attr("id")=="sence4"){
				$("#sence").css("background","url(assets/img/baby_room.jpg) center no-repeat");
				$("#sence").css("background-size","auto 100%");
			}
			
			if ($(this).attr("id")=="sence5"){
				$("#sence").css("background","url(assets/img/night_room.jpg) center no-repeat");
				$("#sence").css("background-size","auto 100%");
			}
		}
	});
	

	/************* Drag Mock Up*************/
	$("div.mockup").mousedown(function(e) {
	    var senceDiv = $("#sence").offset();
	    var dragDiv = $(this)
	    var dragDivOffset = dragDiv.offset();
	    var dragDivOffsetWidth = dragDiv.outerWidth(true)
	    var dragDivOffsetHeight = dragDiv.outerHeight(true)
	    var distanceX = e.pageX - dragDivOffset.left;
	    var distanceY = e.pageY - dragDivOffset.top;

	    var divID = $(this).attr('id');
		inputTextID = divID.substr(divID.length-1,1);
		//updateOptions();

	    $(document).mousemove(function(e) {
	        var x = e.pageX - distanceX;
	        var y = e.pageY - distanceY;

	        if (x < senceDiv.left) {
	            x = senceDiv.left;
	        } else if (x > (senceDiv.left + $("#sence").width() - dragDivOffsetWidth)) {
	            x = senceDiv.left + $("#sence").width() - dragDivOffsetWidth;
	        }

	        if (y < senceDiv.top) {
	            y = senceDiv.top;
	        } else if (y > (senceDiv.top + $("#sence").height() - dragDivOffsetHeight)) {
	            y = senceDiv.top + $("#sence").height() - dragDivOffsetHeight;
	        }
	        
	        $(dragDiv).css({
	        	'position': 'absolute',
	            'left': x-senceDiv.left + 'px',
	            'top': y-senceDiv.top  + 'px'
	        });
	    });

	    $(document).mouseup(function() {
	        $(document).off('mousemove');
	        updateInfo();
	    });
	});



	/************* Update Opitons*************/
	function updateOptions(){
		
		$("#font-options a").removeClass("active");
		$("#font-options a[id="+eval("textFont"+inputTextID)+"]").addClass("active");

		$("#textAlignOption button").removeClass("active");
		$("#textAlignOption button[id=align"+eval("textAlign"+inputTextID)+"]").addClass("active");
		
		
		$("#color-options a").each(function(){
			var colorClass = $(this).attr("class");
			// if on, turn it off
			if(colorClass.indexOf("-on")>=0){
					$(this).removeClass(colorClass);
					$(this).addClass(colorClass.replace("-on",""));
					colorClass = $(this).attr("class");
				}

			// if clicked, turn it on
			if($(this).attr("id") == eval("tubeColor"+inputTextID)){
				if(colorClass.indexOf("-on")<0){
					$(this).removeClass(colorClass);
					$(this).addClass(colorClass+"-on");
				}	
			};
		});
	};


	function updateBackingPadding(){
		var lowerCase=0;
		var upperCase=0;
		var number=0;
		var other=0;
		var upLowerLetter=0;
		var downLowerLetter=0;
		var tLetter=0;
		var TTLetter=0;

		textStr = $("#input_text"+inputTextID).val().replace(/\n/g,"").replace(/\ /g,"").replace(".","").replace("''","");
		length = textStr.length;

		if(length>0){
			for (var i=0; i<length; i++) {
				letter = textStr.charAt(i);
				if (letter >='a' &&  letter <='z') {
					lowerCase++;
					if($.inArray(letter,["b","d","f","h","k","l"]) >= 0){
						upLowerLetter++;
					}
					if($.inArray(letter,["f","g","j","p","q","y"]) >= 0){
						downLowerLetter++;
					};
					if($.inArray(letter,["t"]) >= 0){
						tLetter++;
					};
					
				} else if (letter >='A' && letter  <='Z') {
					upperCase++;
					if($.inArray(letter,["T"]) >= 0){
						TTLetter++;
					};
				} else if (letter >='0' && letter  <='9') {
					number++;
				} else {
					other++;
				}
			}
		}

		if($.inArray(eval("textFont"+inputTextID),["11","12","16","17"]) >= 0){

			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"4%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"4%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}
			
			if(upLowerLetter>0 || upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"4%");
				$("#NeonSignText"+inputTextID).css('padding-top',"4%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
				$("#NeonSignText"+inputTextID).css('padding-top',"0");
			}
		}

		else if($.inArray(eval("textFont"+inputTextID),["15"]) >= 0){
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"9%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"9%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}

			if(upLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"9%");
				$("#NeonSignText"+inputTextID).css('padding-top',"9%");
			}
			else if(upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"3%");
				$("#NeonSignText"+inputTextID).css('padding-top',"3%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
				$("#NeonSignText"+inputTextID).css('padding-top',"0");
			}
		}

		else if($.inArray(eval("textFont"+inputTextID),["18","27"]) >= 0){
			$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
			$("#NeonSignText"+inputTextID).css('padding-top',"0");
			if(downLowerLetter>0 || upLowerLetter>0 || upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"3%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"3%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}
		}


		else if($.inArray(eval("textFont"+inputTextID),["19"]) >= 0){
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"10%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"10%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}

			if(upLowerLetter>0 || upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"10%");
				$("#NeonSignText"+inputTextID).css('padding-top',"10%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
				$("#NeonSignText"+inputTextID).css('padding-top',"0");
			}
		}

		else if($.inArray(eval("textFont"+inputTextID),["23"]) >= 0){
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"4%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"4%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}

			if(upLowerLetter>0 || upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"4%");
				$("#NeonSignText"+inputTextID).css('padding-top',"4%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
				$("#NeonSignText"+inputTextID).css('padding-top',"0");
			}
		}


		else if($.inArray(eval("textFont"+inputTextID),["25","26","32"]) >= 0){
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"5%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"5%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}

			if(upLowerLetter>0 || upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"3%");
				$("#NeonSignText"+inputTextID).css('padding-top',"3%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
				$("#NeonSignText"+inputTextID).css('padding-top',"0");
			}
		}

		else if($.inArray(eval("textFont"+inputTextID),["30"]) >= 0){
			$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
			$("#NeonSignText"+inputTextID).css('padding-top',"0");
			if(upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"4%");
				$("#NeonSignText"+inputTextID).css('padding-top',"4%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
				$("#NeonSignText"+inputTextID).css('padding-top',"0");
			}
		}

		else if($.inArray(eval("textFont"+inputTextID),["31","35"]) >= 0){
			$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
			$("#NeonSignText"+inputTextID).css('padding-top',"0");
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"1.5%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"1.5%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}
		}

		else if($.inArray(eval("textFont"+inputTextID),["33"]) >= 0){
			$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
			$("#NeonSignText"+inputTextID).css('padding-top',"0");
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"4%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"4%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}
		}


		else if($.inArray(eval("textFont"+inputTextID),["37"]) >= 0){
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"10%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"10%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}

			if(upLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"10%");
				$("#NeonSignText"+inputTextID).css('padding-top',"10%");
			}
			else if(upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"2%");
				$("#NeonSignText"+inputTextID).css('padding-top',"2%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
				$("#NeonSignText"+inputTextID).css('padding-top',"0");
			}
		}

		else if($.inArray(eval("textFont"+inputTextID),["38"]) >= 0){
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"2%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"2%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}

			if(upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"3%");
				$("#NeonSignText"+inputTextID).css('padding-top',"3%");
			}
			else if(upLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-top',"1%");
				$("#NeonSignText"+inputTextID).css('padding-top',"1%");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding-top',"0");
				$("#NeonSignText"+inputTextID).css('padding-top',"0");
			}
		}

		else if($.inArray(eval("textFont"+inputTextID),["42","43","46"]) >= 0){
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"3%");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"3%");
			}
			else{
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}
		}

		else{
			if(downLowerLetter>0){
				$("#NeonSignBacking"+inputTextID).css('padding-bottom',"0");
				$("#NeonSignText"+inputTextID).css('padding-bottom',"0");
			}

			if(upperCase>0){
				$("#NeonSignBacking"+inputTextID).css('padding',"0");
				$("#NeonSignText"+inputTextID).css('padding',"0");
			}
			else {
				$("#NeonSignBacking"+inputTextID).css('padding',"0");
				$("#NeonSignText"+inputTextID).css('padding',"0");
			}
		}

	}

	/************* Update backing size*************/
	function updateInfo(){

		updateOptions();

		/* adjust to minimum font size */
		if($.inArray(eval("textFont"+inputTextID),["11"]) >= 0){
				eval("miniFontSize"+inputTextID+"=90");
		}
		else if($.inArray(eval("textFont"+inputTextID),["25","38"]) >= 0){
				eval("miniFontSize"+inputTextID+"=60");
		}
		else if($.inArray(eval("textFont"+inputTextID),["15"]) >= 0){
				eval("miniFontSize"+inputTextID+"=70");
		}
		else if($.inArray(eval("textFont"+inputTextID),["19","30","32","35","43"]) >= 0){
				eval("miniFontSize"+inputTextID+"=60");
			}
		else if($.inArray(eval("textFont"+inputTextID),["41","42","44","46"]) >= 0){
				eval("miniFontSize"+inputTextID+"=50");
			}
		else if($.inArray(eval("textFont"+inputTextID),["45"]) >= 0){
				eval("miniFontSize"+inputTextID+"=30");
			}
		else{
			eval("miniFontSize"+inputTextID+"=80");

		}
		if(eval("textFontSize"+inputTextID+"<"+"miniFontSize"+inputTextID)){
			eval("textFontSize"+inputTextID+"="+"miniFontSize"+inputTextID);
			eval("textLineHeight"+inputTextID+"="+"miniFontSize"+inputTextID);
		}

		/* Update Font Size */
		$("#NeonSignText"+inputTextID).css("font-size", eval("textFontSize"+inputTextID)+"px");
		$("#NeonSignBacking"+inputTextID).css("font-size", eval("textFontSize"+inputTextID)+"px");

		/* Update Text Line Height */
		$("#NeonSignText"+inputTextID).css("line-height", eval("textLineHeight"+inputTextID)+"px");
		$("#NeonSignBacking"+inputTextID).css("line-height", eval("textLineHeight"+inputTextID)+"px");

		/* Update Font */
		$("#NeonSignText"+inputTextID).css("font-family", "font-"+eval("textFont"+inputTextID));
		$("#NeonSignBacking"+inputTextID).css("font-family", "font-"+eval("textFont"+inputTextID));

		/* Update Color */
		$("#NeonSignText"+inputTextID).css("color", $("#"+eval('tubeColor'+inputTextID)).css("color"));
		$("#NeonSignText"+inputTextID).css("text-shadow", $("#"+eval("tubeColor"+inputTextID)).css("text-shadow"));

		$("#NeonSignBacking"+inputTextID).css("color", $("#"+eval('tubeColor'+inputTextID)).css("color"));
		$("#NeonSignBacking"+inputTextID).css("text-shadow", $("#"+eval("tubeColor"+inputTextID)).css("text-shadow"));

		/* Update Mockup Text */
		var textHtml = $("#input_text"+inputTextID).val().replace(/\n/g,"<br/>").replace(/\ /g,"&nbsp;");
		$(eval("'#NeonSignText" +inputTextID+"'")).html(textHtml);
    	$(eval("'#NeonSignBacking" +inputTextID+"'")).html(textHtml);

    	/* Update Font Option Text */
    	$(".font-text").html(textHtml.replace(/\n/g,"").replace(/\ /g,"").substring(0,4));

		/* Update Backing option */
		updateBackingOption();

		/* Update Backing padding */
		updateBackingPadding();

		calBackingSize();

		/* update custom detail info */
		infoTextFonts = "";
		infoTubeColors = "";;
		infoTextFontSize = "";
		infoTextStr="";
		infoTextLineHeight="";

		for (var i=1;i<=textInputAmount;i++){
			if(eval("textStr"+i)!=""){
				infoTextFonts=infoTextFonts+"#"+eval("textFont"+i)+",";
				infoTubeColors=infoTubeColors+eval("tubeColor"+i)+",";
				infoTextFontSize=infoTextFontSize+eval("textFontSize"+i)+",";
				infoTextStr=infoTextStr+eval("textStr"+i)+" ";
				infoTextLineHeight=infoTextLineHeight+eval("textLineHeight"+i)+" ";
			}
		}
		$("#infoTextStr").html(infoTextStr);
		$("#infoTextFont").html(infoTextFonts);
		$("#infoTextLineHeight").html(infoTextLineHeight);
		$("#infoTubeColor").html(infoTubeColors);
		$("#infoBackingSize").html(backingSize);
		$("#infoBackingColor").html(backingColor);
		$("#infoBackingShape").html(backingShape);
		$("#infoInstallation").html(installation.join(","));
		$("#infoDeliverDate").html(deliverDate);

		updatePrice();
		$("#infoPrice").html("<strong>Price: </strong>"+price + "USD");

	};
	updateInfo();


	/************* Update Text*************/
	$("textarea.input_text").keyup(function(){
		var input_id = $(this).attr('id');
		input_id = input_id.substring(input_id.length-1,input_id.length)
		eval("textStr" +input_id + "= $(this).val();")
		updateInfo();
    });



	/************* Text Align Option*************/
	$("#textAlignOption button").click(function(){
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
			$($(this).siblings()).removeClass("active")
		}

		if($(this).attr("id")=="alignLeft") {
			$("#NeonSignText"+inputTextID).css("text-align","left");
			$("#NeonSignBacking"+inputTextID).css("text-align","left");
			eval("textAlign"+inputTextID+"='Left'");
		}	

		if($(this).attr("id")=="alignCenter") {
			$("#NeonSignText"+inputTextID).css("text-align","center");
			$("#NeonSignBacking"+inputTextID).css("text-align","center");
			eval("textAlign"+inputTextID+"='Center'");
		}

		if($(this).attr("id")=="alignRight") {
			$("#NeonSignText"+inputTextID).css("text-align","right");
			$("#NeonSignBacking"+inputTextID).css("text-align","right");
			eval("textAlign"+inputTextID+"='Right'");
		}
		updateInfo();
	});



	/************* Decrease Text Line Height*************/
	$("#decreaseLineHeight").click(function(){
		var textFontSize = parseFloat($("#NeonSignText"+inputTextID).css('font-size'));
		var textLineHeight = parseFloat($("#NeonSignText"+inputTextID).css('line-height'));
		var NeonSignTextPaddingTop = parseFloat($("#NeonSignText"+inputTextID).css('padding-top'));
		var NeonSignTextPaddingBottom = parseFloat($("#NeonSignText"+inputTextID).css('padding-bottom'));

		var reg = /[\r\n]+/g;
		if(reg.test($("#input_text"+inputTextID).val())){
			if(textLineHeight>40){
				textLineHeight = textLineHeight-4;
				eval("textLineHeight"+inputTextID+"=textLineHeight");
				/*** Ajust backing size while ajust text line height ****/
				if((textLineHeight-textFontSize)<=0){
					$("#NeonSignText"+inputTextID).css("padding-top", (NeonSignTextPaddingTop+2)+"px");
					$("#NeonSignText"+inputTextID).css("padding-bottom", (NeonSignTextPaddingBottom+2)+"px");

					$("#NeonSignBacking"+inputTextID).css("padding-top", (NeonSignTextPaddingTop+2)+"px");
					$("#NeonSignBacking"+inputTextID).css("padding-bottom", (NeonSignTextPaddingBottom+2)+"px");
				}
			}
		}
		updateInfo();
	});

	/************* Increase Text Line Height*************/
	$("#increaseLineHeight").click(function(){
		var textFontSize = parseFloat($("#NeonSignText"+inputTextID).css('font-size'));
		var textLineHeight = parseFloat($("#NeonSignText"+inputTextID).css('line-height'));
		var NeonSignTextPaddingTop = parseFloat($("#NeonSignText"+inputTextID).css('padding-top'));
		var NeonSignTextPaddingBottom = parseFloat($("#NeonSignText"+inputTextID).css('padding-bottom'));

		var reg = /[\r\n]+/g;
		if(reg.test($("#input_text"+inputTextID).val())){

			if(textLineHeight<160){
				textLineHeight = textLineHeight+4;
				eval("textLineHeight"+inputTextID+"=textLineHeight");
				/*** Ajust backing size while ajust text line height ****/
				if((NeonSignTextPaddingTop)>0){
					$("#NeonSignText"+inputTextID).css("padding-top", (NeonSignTextPaddingTop-2)+"px");
					$("#NeonSignText"+inputTextID).css("padding-bottom", (NeonSignTextPaddingBottom-2)+"px");

					$("#NeonSignBacking"+inputTextID).css("padding-top", (NeonSignTextPaddingTop-2)+"px");
					$("#NeonSignBacking"+inputTextID).css("padding-bottom", (NeonSignTextPaddingBottom-2)+"px");
				}
			}
		}
		updateInfo();
		});

	/************* Decrease Text Size*************/
	$("#decreaseTextSize").click(function(){
		var textFontSize=parseFloat($("#NeonSignText"+inputTextID).css('font-size'));
		var textLineHeight=parseFloat($("#NeonSignText"+inputTextID).css('line-height'));
		textWidth=parseFloat($("#NeonSignText"+inputTextID).css('width'));
		textHeight=parseFloat($("#NeonSignText"+inputTextID).css('height'));
		var miniFontSize = eval("miniFontSize"+inputTextID)

		if(textFontSize > miniFontSize){
			eval("textFontSize"+ inputTextID +"= textFontSize - 8");
			eval("textLineHeight"+ inputTextID +"= textLineHeight - 8");
			//textLineHeight = textLineHeight - 8;
		}
		updateInfo();
	});

	/************* Increase Text Size*************/
	$("#increaseTextSize").click(function(){
		var textFontSize=parseFloat($("#NeonSignText"+inputTextID).css('font-size'));
		var textLineHeight=parseFloat($("#NeonSignText"+inputTextID).css('line-height'));
		textWidth=parseFloat($("#NeonSignText"+inputTextID).css('width'));
		textHeight=parseFloat($("#NeonSignText"+inputTextID).css('height'));
		var miniFontSize = eval("miniFontSize"+inputTextID)
		if(textFontSize<240){
			eval("textFontSize"+ inputTextID +"= textFontSize + 8");
			eval("textLineHeight"+ inputTextID +"= textLineHeight + 8");
			//textFontSize = textFontSize + 8;
			//textLineHeight = textLineHeight + 8;
		}
		updateInfo();
	});


	/************* Choose font*************/
	$("#font-options a").click(function(){
		eval("textFont"+inputTextID+"= $(this).attr('id')")
		updateInfo();
	});

	/************* Choose tube color*************/
	$("#color-options a").click(function(){
		eval("tubeColor"+inputTextID+"= $(this).attr('id')")
		updateInfo();
	});


	/************* Choose backing shape*************/
	$("#backingShapeOption a").click(function(){
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
			$($(this).siblings()).removeClass("active")
		}

		if($(this).attr("id")=="textShapeBacking") {
			backingShape = "Text Shape";
		}	

		if($(this).attr("id")=="rectangleBacking") {
			backingShape = "Rectangle";
		}

		if($(this).attr("id")=="cutToLetterBacking") {
			backingShape = "Invisible";
		}				
		updateInfo();
	});


	/************* Choose backing color*************/
	$("#backingColorOption a").click(function(){
		if (!$(this).hasClass("active")) {
			$(this).addClass("active")
			$($(this).siblings()).removeClass("active")
		}

		/************* clear backing*************/
		if($(this).attr("id")=="clearBackingColor") {
			backingColor = "Clear Acrylic";
		}	

		/************* white backing*************/
		if($(this).attr("id")=="whiteBackingColor") {
			backingColor = "White";
		}

		/************* black backing*************/
		if($(this).attr("id")=="blackBackingColor") {
			backingColor = "Black";
		}				
		updateInfo();
	});



	/************* Choose installation*************/
	$("#installationOption a").click(function(){

		if ($(this).attr("id")=="screws") {
			if(!$(this).hasClass("active")) {
				installation.push("Screws");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Screws",installation),1); //delete
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}
		}	



		if ($(this).attr("id")=="fishline") {
			if(!$(this).hasClass("active")) {
				installation.push("Fishline");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Fishline",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}
		}	


		if ($(this).attr("id")=="chain") {
			if(!$(this).hasClass("active")) {
				installation.push("Chain");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Chain",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}
		}	


		if ($(this).attr("id")=="ceilingChain") {
			if(!$(this).hasClass("active")) {
				installation.push("Ceiling Chain");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Ceiling Chain",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}
		}

		/************* Stand*************/
		if ($(this).attr("id")=="stand") {
			if(!$(this).hasClass("active")) {
				installation.push("Stand");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Stand",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}
		}	

		/************* Outdoor*************/

		if($(this).attr("id")=="outdoor") {
			if(!$(this).hasClass("active")) {
				installation.push("Outdoor");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Outdoor",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}

		}	

		/************* rushOrder*************/

		if($(this).attr("id")=="rushOrder") {
			if(!$(this).hasClass("active")) {
				installation.push("Rush Order");
				$(this).removeClass("deactive")
				$(this).addClass("active")
				deliverDate=new Date(new Date().getTime() + (1000*60*60*24)*10).toLocaleDateString().split('/').join('-'); //need 10 days for rush order
				deliverDate = deliverDate + "(RushOrder)";
			}
			else {
				installation.splice($.inArray("Rush Order",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
				deliverDate=new Date(new Date().getTime() + (1000*60*60*24)*21).toLocaleDateString().split('/').join('-');//need 21 days to deliver
			}

		}	

		/************* Switch*************/
		if ($(this).attr("id")=="switch") {
			if(!$(this).hasClass("active")) {
				installation.push("Switch");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Switch",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}
		}

		/************* Dimmer*************/
		if ($(this).attr("id")=="dimmer") {
			if(!$(this).hasClass("active")) {
				installation.push("Dimmer");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Dimmer",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}
		}	

		/************* Blink*************/
		if ($(this).attr("id")=="blink") {
			if(!$(this).hasClass("active")) {
				installation.push("Blink");
				$(this).removeClass("deactive")
				$(this).addClass("active")
			}
			else {
				installation.splice($.inArray("Blink",installation),1);
				$(this).removeClass("active")
				$(this).addClass("deactive")
			}
		}	


		updateInfo();
	});


	/************* Custom Name Sign Template*************/
	$("#custom-name").click(function(){

		customTemplate = "name";

		$("#mockup1").css({"left":"40%","top":"150px"});
		$("#mockup2").css({"left":"40%","top":"150px"});

		$("#input_text1").val("Nikko");
		$("#input_text2").val("");
		$("#input_text3").val("");
		$("#input_text1").css({"display":""});
		$("#input_text2").css({"display":"none"});
		$("#input_text3").css({"display":"none"});

		textStr1=$("#input_text1").val();
		textFont1="13";
		textFontSize1="80";
		textLineHeight1="80"
		textAlign1="Left";
		tubeColor1="Hot-Pink";


		textStr2=$("#input_text2").val();
		textFont2="44";
		textFontSize2="80";
		textLineHeight2="80"
		textAlign2="Left";
		tubeColor2="Purple";

		inputTextID = "3";
		updateInfo();
		inputTextID = "2";
		updateInfo();
		inputTextID = "1";
		updateInfo();

	});



	/************* Custom Wedding Sign Template*************/
	$("#custom-wedding").click(function(){

		customTemplate = "wedding";
		//$("#sence").css({"background":"#000"})
		$("#mockup1").css({"left":"200px","top":"150px"});
		$("#mockup2").css({"left":"340px","top":"300px"});

		$("#input_text1").val("The\r  Neonsignkingdom");
		$("#input_text2").val("EST. 2021");
		$("#input_text3").val("");
		$("#input_text1").css({"display":""});
		$("#input_text2").css({"display":""});
		$("#input_text3").css({"display":"none"});

		textStr1=$("#input_text1").val();
		textFont1="13";
		textFontSize1="80";
		textLineHeight1="60"
		textAlign1="Left";
		tubeColor1="Sky-Blue";


		textStr2=$("#input_text2").val();
		textFont2="45";
		textFontSize2="30";
		textLineHeight2="30"
		textAlign2="Left";
		tubeColor2="Sky-Blue";

		inputTextID = "3";
		updateInfo();
		inputTextID = "2";
		updateInfo();
		inputTextID = "1";
		updateInfo();
	});



	/************* Custom Business Sign Template*************/
	$("#custom-business").click(function(){

		customTemplate = "business";
		//$("#sence").css({"background":"#000"})
		$("#mockup1").css({"left":"40%","top":"150px"});
		$("#mockup2").css({"left":"40%","top":"200px"});

		$("#input_text1").val("HAIR BY");
		$("#input_text2").val("Nikko");
		$("#input_text3").val("");
		$("#input_text1").css({"display":""});
		$("#input_text2").css({"display":""});
		$("#input_text3").css({"display":"none"});

		textStr1=$("#input_text1").val();
		textFont1="45";
		textFontSize1="40";
		textLineHeight1="40"
		textAlign1="Left";
		tubeColor1="Hot-Pink";


		textStr2=$("#input_text2").val();
		textFont2="13";
		textFontSize2="80";
		textLineHeight2="80"
		textAlign2="Left";
		tubeColor2="Purple";

		inputTextID = "3";
		updateInfo();
		inputTextID = "2";
		updateInfo();
		inputTextID = "1";
		updateInfo();
	});

	/************* Custom Business Sign Template*************/
	$("#custom-sign").click(function(){

		customTemplate = "custom-sign";
		//$("#sence").css({"background":"#000"})
		$("#mockup1").css({"left":"40%","top":"150px"});
		$("#mockup2").css({"left":"40%","top":"200px"});

		$("#input_text1").val("Custom");
		$("#input_text2").val("Your");
		$("#input_text3").val("NeonSign");
		$("#input_text1").css({"display":""});
		$("#input_text2").css({"display":""});
		$("#input_text3").css({"display":""});

		textStr1=$("#input_text1").val();
		textFont1="45";
		textFontSize1="40";
		textLineHeight1="40"
		textAlign1="Left";
		tubeColor1="Hot-Pink";


		textStr2=$("#input_text2").val();
		textFont2="13";
		textFontSize2="80";
		textLineHeight2="80"
		textAlign2="Left";
		tubeColor2="Purple";

		textStr2=$("#input_text3").val();
		textFont2="13";
		textFontSize2="80";
		textLineHeight2="80"
		textAlign2="Left";
		tubeColor2="Ice-Blue";

		inputTextID = "3";
		updateInfo();
		inputTextID = "2";
		updateInfo();
		inputTextID = "1";
		updateInfo();
	});
	function getBlob(canvas){ //获取blob对象
	　　var data = canvas.toDataURL("image/jpeg", 1);
	　　data = data.split(',')[1];
	　　data = window.atob(data);
	　　var ia = new Uint8Array(data.length);
	　　for(var i = 0; i < data.length; i++) {
	　　　　ia[i] = data.charCodeAt(i);
	　　}
	　　return new Blob([ia], {
	　　　　type: "image/jpeg"
	　　});
	}



	/************* Magento Order*************/
	$('#magento-order').click(function(){
   		if(infoTextStr==""){
   			alert("Please input some text!");
   			$("#input_text"+inputTextID).css("background-color", "#f4f9e7");
   			$("#input_text"+inputTextID).focus();
   			return;
   		}

		$("#placeOrder").css("display","none");
		$("#uploading").css("display",""); 



		html2canvas(document.querySelector("#sence"),{useCORS:true})
		.then(canvas => {
			dataUrl=canvas.toDataURL("image/jpeg", 1.0);  //图片二进制格式   

			var fd = new FormData();
        	fd.append("data", dataUrl);//image
// console.log(fd,"there is code finding")
			fd.append("backingWidth",backingWidth);
			fd.append("backingHeight",backingHeight);
			fd.append("scene",scene);
			fd.append("infoTextStr",infoTextStr);
			fd.append("infoTextFonts",infoTextFonts);
			fd.append("infoTextFontSize",infoTextFontSize);
			fd.append("infoTextLineHeight",infoTextLineHeight);
			fd.append("infoTextAlign",infoTextAlign);
			fd.append("infoTubeColors",infoTubeColors);
			fd.append("backingColor",backingColor);
			fd.append("backingShape",backingShape);
			fd.append("backingSize",backingSize);
			fd.append("installation",installation.join(","));
			fd.append("deliverDate",deliverDate);
			fd.append("tubeLength",tubeLength);
			fd.append("weight",weight);
			fd.append("price",price);

        	// Submit Form and upload file
			$.ajax({
				url:"custom-order2.php", //save upload image
				type:"POST",
				data: fd,  //submit formData
				contentType:false,
				processData:false,
				async: false,
				beforeSend: function(){
				// disable submit button prevent duplicate order
					$("#placeorder").attr("disabled",true);
					 },
				complete: function () {
					$("#placeorder").css("display",""); 
					

				},
				success: function (res) {
					if(res=="success"){
						$("#uploading").css("display","none"); 
						$("#infoPrice").css("visibility","visible"); 
						$("#placeorder").css("display",""); 
						parent.location.href="./checkout/cart/";
						}
					else {
						$("#uploading").css("display","none"); 
						$("#infoPrice").css("visibility","visible"); 
						$("#placeorder").css("display",""); 
						alert("Please try again after one minute. Contact us if still not working!");
						console.log(res);
					}
				},
				error:function (err) {
			    	console.error(err);
			    	//alert(err);
				}
			});

		});
	});


	/************* Place order*************/
   $('#placeOrder').click(function(){
   		if(infoTextStr==""){
   			alert("Please input some text!");
   			$("#input_text"+inputTextID).css("background-color", "#f4f9e7");
   			$("#input_text"+inputTextID).focus();
   			return;
   		}

		$("#placeOrder").css("display","none");
		$("#uploading").css("display",""); 


		var priceUrl=[[100,1663288754],
						[130,1663288760],
						[150,1663288768],
						[170,1663288772],
						[200,1663288776],
						[250,1663288782],
						[270,1663288786],
						[310,1663288792],
						[360,1663288806],
						[370,1663288810],
						[380,1663288816],
						[390,1663288818],
						[450,1663288832],
						[480,1663288836],
						[510,1663288840],
						[540,1663288844],
						[590,1663288850],
						[610,1663288854],
						[640,1663288858],
						[650,1663288860],
						[680,1663288868],
						[690,1663288872],
						[750,1663288876],
						[760,1663288878],
						[770,1663288880],
						[110,1679094955],
						[120,1679094957],
						[140,1679094961],
						[160,1679094965],
						[180,1679094971],
						[190,1679094975],
						[210,1679094977],
						[220,1679094981],
						[230,1679094983],
						[240,1679094985],
						[260,1679094989],
						[280,1679094993],
						[290,1679094995],
						[300,1679094999],
						[320,1679095003],
						[330,1679095007],
						[340,1679095013],
						[350,1679095015],
						[400,1679095033],
						[410,1679095037],
						[420,1679095041],
						[430,1679095043],
						[440,1679095045],
						[460,1679095047],
						[470,1679095049],
						[490,1679095051],
						[500,1679095053],
						[520,1679095055],
						[530,1679095057],
						[550,1679095061],
						[560,1679095063],
						[570,1679095067],
						[580,1679095069],
						[600,1679095071],
						[620,1679095073],
						[630,1679095077],
						[660,1679095083],
						[670,1679095087],
						[700,1679095091],
						[710,1679095095],
						[720,1679095097],
						[730,1679095099],
						[780,1679095103],
						[790,1679095107],
						];
		var i,j;
		var priceVariation
		for(var i=0;i<priceUrl.length;i++){
			if(price==priceUrl[i][0]) {
				priceVariation = priceUrl[i][1];
				break;
			}
		}
		

		alert("Custom detail has been copied, just paste to personalisation when order on etsy.");
		//window.location.href=orderPage;
/*
		domtoimage.toBlob(document.getElementById('sence'))
		domtoimage.toJpeg(document.getElementById('sence'),{ quality: 0.95 })
		.then(function (blob) {	
			window.saveAs(blob, 'custom-neon-sign.jpg');
			window.location.href = orderPage;
		});


		
		//$("#sence").css("background",'#000'); // black to take screen capture
	   	domtoimage.toJpeg(document.getElementById('sence'),{ quality: 0.95 })
		.then(function (dataUrl) {
			//console.log(dataUrl);
			//window.saveAs(dataUrl, 'custom-neon-sign.jpg');*/
		html2canvas(document.querySelector("#sence"),{useCORS:true})
		.then(canvas => {
			dataUrl=canvas.toDataURL("image/jpeg", 1.0);  //图片二进制格式   

			var fd = new FormData();
        	fd.append("data", dataUrl);//image
			fd.append("backingWidth",backingWidth);
			fd.append("backingHeight",backingHeight);
			fd.append("infoTextStr",infoTextStr);
			fd.append("infoTextFonts",infoTextFonts);
			fd.append("infoTextFontSize",infoTextFontSize);
			fd.append("infoTextLineHeight",infoTextLineHeight);
			fd.append("infoTextAlign",infoTextAlign);
			fd.append("infoTubeColors",infoTubeColors);
			fd.append("backingColor",backingColor);
			fd.append("backingShape",backingShape);
			fd.append("backingSize",backingSize);
			fd.append("installation",installation.join(","));
			fd.append("deliverDate",deliverDate);
			fd.append("tubeLength",tubeLength);
			fd.append("weight",weight);
			fd.append("price",price);

        	// Submit Form and upload file
			$.ajax({
				url:"custom-etsy.php", //save upload image
				type:"POST",
				data: fd,  //submit formData
				contentType:false,
				processData:false,
				dataType:"json",
				async: false,
				beforeSend: function(){
				// disable submit button prevent duplicate order
					$("#placeorder").css("display","none");
					 },
				complete: function () {
					$("#placeorder").css("display",""); 
					

				},
				success: function (res) {

					if(res.status=="success"){
						//$("#uploading").css("display","none"); 
						$("#placeorder").css("display",""); 

						//$("#infoMockupUrl").html(res.mockup);

						// copy to clipboard
						$("#copy_content").html($("#customSignDetail").text());
						var tmpClipBoard =  document.getElementById("copy_content");
						//tmpClipBoard.value = "Send below message to vendor if too long to fill in personalization field when order\n" + $("#copy_content").text().replace(/\t/g,"").replace(";","\r") +"Phone:\nMockup: "+res.mockup;
						tmpClipBoard.value = $("#copy_content").text().replace(/\t/g,"").replace(";","\r").replace("Text:","").replace("Font:","").replace("Color:","").replace("Size:","").replace("Backing::","").replace("Install:","").replace("Deliver:","").replace("Price:","") +"Phone:\n "+res.mockup;
						tmpClipBoard.select();
						document.execCommand("Copy");
						$("#uploading").html('❤❤❤1. Screenshot upload successfully.<br>❤❤❤2. Custom detail has been copied, just paste to personalisation when order on etsy later.<br>❤❤❤3. Will direct you to etsy order page!<br>❤❤❤4. If failed to redirect to etsy automatically, please save screenshot, and <a class="blink" href="https://www.etsy.com/listing/711074384/diy-design-quote-custom-neon-sign-name"><strong>click here to order</strong></a>.<br><br><br>');
						//alert(tmpClipBoard.value);
						var orderPage="https://www.etsy.com/listing/711074384/diy-design-quote-custom-neon-sign-name?variation0="+priceVariation;
						window.location.href=orderPage;
						}
					else {
						//$("#uploading").css("display","none"); 
						$("#placeorder").css("display",""); 
						alert("Please try again after one minute. Contact us if still not working!");
						//console.log(res);
					}
				},
				error:function (err) {
			    	console.error(err);
			    	alert(err);
				}
			});
		});
	});
 });