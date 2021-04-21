var backingColor = "Clear Acrylic";
var backingShape = "Text Shape";
var noenText = ".noenText1";
var lineTab = "#lineTab";
$(document).ready(function() {
    setFont('Alexa', 2, ".Alexa");
    selectLineColumn(lineTab + " li:first-child");
    getDeliverDate(21)
    $('.font-btn').click(function() {
        var font = $(this).attr('class').split(' ').pop();
        setFont(font, 2, this);

    });
    $('.color-selection').click(function() {
        var color = $(this).css('background-color');

        $(noenText).css('color', color);

    });

    if (location.protocol !== "https:" || location.protocol === "www.") {
        location.protocol = "https:";
    }

    /************* Choose backing color*************/
    $("#backingColorOption li a").click(function() {
        if (!$(this).hasClass("bg-F34EFF")) {
            $(this).addClass("bg-F34EFF")
            $($(this).parent().siblings().children()).removeClass("bg-F34EFF")
        }

        /************* clear backing*************/
        if ($(this).attr("id") == "clearBackingColor") {
            backingColor = "Clear Acrylic";
        }

        /************* white backing*************/
        if ($(this).attr("id") == "whiteBackingColor") {
            backingColor = "White";
        }

        /************* black backing*************/
        if ($(this).attr("id") == "blackBackingColor") {
            backingColor = "Black";
        }

    });
    /************* Choose Backing Shapes*************/
    $("#backingShapeOption li a").click(function() {
        if (!$(this).hasClass("bg-F34EFF")) {
            $(this).addClass("bg-F34EFF")
            $($(this).parent().siblings().children()).removeClass("bg-F34EFF")
        }

        /************* clear backing*************/
        if ($(this).attr("id") == "clearBackingColor") {
            backingColor = "Clear Acrylic";
        }

        /************* white backing*************/
        if ($(this).attr("id") == "whiteBackingColor") {
            backingColor = "White";
        }

        /************* black backing*************/
        if ($(this).attr("id") == "blackBackingColor") {
            backingColor = "Black";
        }

    });


});

function setFont(font, type, font_li) {
    $('.font-btn').removeClass('activeFont');
    var activeFont = $(font_li).addClass('activeFont');
    $(noenText).css("font-family", font);
    $(noenText).css("font-size", $(font_li).attr('data-mob') + 'px');
    $(noenText).css("line-height", $(font_li).attr('data-lineh'));
    $(noenText).css("font-family", font);
    $(noenText).css("line-height", $(font_li).attr('data-lineh'));
    $(noenText).attr("data-lineh", $(font_li).attr('data-lineh'));
    group = type;
    $("#finalfont").html($(font_li).data('class'));

}

function getDeliverDate(day) {

    var deliverDate = new Date();
    deliverDate.setDate(deliverDate.getDate() + day);
    $('.deiverDate').html(deliverDate.getMonth() + 1 + "-" + deliverDate.getDate() + "-" + deliverDate.getFullYear() + " (or earlier)");
}

function getFontSize() {

    var currentSize = $(noenText).css("font-size");
    var currentSizeNumber = parseFloat(currentSize, 12);

    return currentSizeNumber;
}
var sizeIncreament = 0;

function increaseSize() {
    var fontSize = getFontSize();
    if (fontSize < 240) {
        sizeIncreament++;
        var newFontSize = fontSize + 8;

        // $('.price').html((parseFloat($('.price').html()) + 10).toFixed(0))
        setFontSize(newFontSize);


        if ($('li.active').hasClass('one'))
            cost_calcultor($('.noenText1'));
        else if ($('li.active').hasClass('two'))
            cost_calcultor($('.noenText1'), $('.noenText2'));
        else if ($('li.active').hasClass('three'))
            cost_calcultor($('.noenText1'), $('.noenText2'), $('.noenText3'));
    }

}

function decreaseSize() {
    var fontSize = getFontSize();
    if (fontSize > 80) {
        sizeIncreament--;
        var newFontSize = fontSize - 8;
        // $('.price').html((parseFloat($('.price').html()) - 10).toFixed(0))
        setFontSize(newFontSize);

        if ($('li.active').hasClass('one'))
            cost_calcultor($('.noenText1'));
        else if ($('li.active').hasClass('two'))
            cost_calcultor($('.noenText1'), $('.noenText2'));
        else if ($('li.active').hasClass('three'))
            cost_calcultor($('.noenText1'), $('.noenText2'), $('.noenText3'));
    }

}

function setFontSize(size) {
    $(noenText).css("font-size", size);
}

function getLineHeight() {

    var lineHeight = $(noenText).css("line-height");
    var lineHeightNumber = parseFloat(lineHeight, 12);
    return lineHeightNumber;
}

function increaseLineHeight() {
    var lineHeight = getLineHeight();
    var newLineHeight = lineHeight + 4;
    setLineHeight(newLineHeight);

}

function decreaseLineHeight() {
    var lineHeight = getLineHeight();
    var newLineHeight = lineHeight - 4;
    setLineHeight(newLineHeight);
}

function setLineHeight(lineHeight) {
    $(noenText).css("line-height", lineHeight + "px");
}

function cost_calcultor(nText1, nText2, nText3) {

    var fontHeightVar = sizeIncreament;
    var finalHeight = nText1 != null && nText2 == null && nText3 == null ? parseInt(nText1.attr("data-height")) + fontHeightVar : nText1 != null && nText2 != null && nText3 == null ? ((parseInt(nText1.attr("data-height")) + fontHeightVar) + (parseInt(nText2.attr("data-height")) + fontHeightVar)) : ((parseInt(nText1.attr("data-height")) + fontHeightVar) + (parseInt(nText2.attr("data-height")) + fontHeightVar) + (parseInt(nText3.attr("data-height")) + fontHeightVar));
    // var noOfLines = nText1 != null && nText2 == null && nText3 == null ? 1 : nText1 != null && nText2 != null && nText3 == null ? 2 : 3;
    if (nText2 != null) {

        var textOBJ = get_obj_width(nText1, fontHeightVar) > get_obj_width(nText2, fontHeightVar) && nText3 == null ? nText1 : (nText3 != null && (get_obj_width(nText3, fontHeightVar) > get_obj_width(nText2, fontHeightVar)) && (get_obj_width(nText3, fontHeightVar) > get_obj_width(nText1, fontHeightVar))) ? nText3 : (nText3 != null && (get_obj_width(nText1, fontHeightVar) > get_obj_width(nText2, fontHeightVar)) && (get_obj_width(nText1, fontHeightVar) > get_obj_width(nText3, fontHeightVar))) ? nText1 : nText2;
    } else
        var textOBJ = nText1;

    finalHeight += get_height(textOBJ, fontHeightVar);
    // console.log(noOfLines + " no of lines " + textOBJ.html() + " font height  " + fontHeightVar);
    finalWidth = get_obj_width(textOBJ, fontHeightVar);
    console.log(finalWidth + "  x  " + finalHeight);
    sq = Math.sqrt(finalWidth * (finalHeight));
    if (textOBJ.attr('data-class') == 'SciFi' || textOBJ.attr('data-class') == 'Nevada' || textOBJ.attr('data-class') == 'LoveNeon' || textOBJ.attr('data-class') == 'Marquee' || textOBJ.attr('data-class') == 'NeonGlow' || textOBJ.attr('data-class') == 'Mayfair')
        manufacture_cost = sq * 4.75 * 2;
    else
        manufacture_cost = sq * 4.75 * 1
    conversion = (2.54 * 2.54 * 2.54) / 5000;
    shipping_cost = (((finalWidth + 2) * ((finalHeight) + 2) * 4) * conversion) * 9.49 + 16.3;
    total_cost = (shipping_cost + manufacture_cost) * 2;
    $('.price').html(total_cost.toFixed(0))
    $('.size').html(Math.round(finalWidth) + "x" + Math.round(finalHeight) + "inc(" + (Math.round(finalWidth) * 2.54).toFixed(0) + "x" + (Math.round(finalHeight) * 2.54).toFixed(0) + "cm)")
}

function get_height(inputOBJ, fHeightVar) {

    fontHeight = parseInt(inputOBJ.attr("data-height")) + fHeightVar;
    noOfLines = (inputOBJ.html().match(/<br>/g) || []).length > 0 ? (inputOBJ.html().match(/<br>/g) || []).length : 0;
    return (fontHeight * noOfLines);
}

function get_obj_width(textOBJ, fHeightVar) {
    noOfLines = 1;
    nChar = textOBJ.html().length;
    aspectRatio = parseFloat(textOBJ.attr('data-aspect_ratio'));
    noOfLines = (textOBJ.html().match(/<br>/g) || []).length > 0 ? (textOBJ.html().match(/<br>/g) || []).length + noOfLines : noOfLines + 0;
    height = parseInt(textOBJ.attr("data-height")) + fHeightVar;

    finalWidth = ((height / noOfLines) / aspectRatio) * nChar;
    return finalWidth;
}



function selectLineColumn(obj) {

    $(lineTab + " li").removeClass('bg-F34EFF active');
    $(obj).addClass('bg-F34EFF active');
    var getId = $(obj).children("a").attr('id');
    var no_ch, height, aspect_ratio, width, sq, manufacture_cost, conversion, shipping_cost, total_cost;
    if (getId == "three-line-tab") {
        centerAlignEle(noenText);
        noenText2 = '.noenText2'
        centerAlignEle(noenText2);
        noenText3 = '.noenText3'
        centerAlignEle(noenText3);
        $(noenText).html($("#three_text_1").val().replace(/\r\n|\r|\n/g, '<br>'));
        $(noenText2).html($("#three_text_2").val().replace(/\r\n|\r|\n/g, '<br>'));
        $(noenText3).html($("#three_text_3").val().replace(/\r\n|\r|\n/g, '<br>'));
        $(noenText + "," + noenText2 + "," + noenText3).show();
        $("#lineonefinaltext").html($("#three_text_1").val()).show();
        $("#linetwofinaltext").html("," + $("#three_text_2").val()).show();
        $("#linethreefineltext").html("," + $("#three_text_3").val()).show();

        cost_calcultor($(noenText), $(noenText2), $(noenText3))
    } else
    if (getId == "two-line-tab") {
        centerAlignEle(noenText);
        noenText2 = '.noenText2'
        centerAlignEle(noenText2);
        $(noenText3).hide();
        $(noenText).html($("#two_text_1").val().replace(/\r\n|\r|\n/g, '<br>'));
        $(noenText2).html($("#two_text_2").val().replace(/\r\n|\r|\n/g, '<br>'));
        $(noenText + "," + noenText2).show();
        $("#lineonefinaltext").html($("#two_text_1").val()).show();
        $("#linetwofinaltext").html("," + $("#two_text_2").val()).show();
        // console.log($(noenText).html().length, $(noenText2).html().length);

        cost_calcultor($(noenText), $(noenText2))
            // $("#linethreefineltext").html("," + $("#three_text_3").val()).hide();

    } else {
        noenText2 = '.noenText2';
        noenText3 = '.noenText3';
        $(noenText2 + "," + noenText3).hide();
        $(noenText).show();
        centerAlignEle(noenText);
        $(noenText).html($("#one_text_1").val().replace(/\r\n|\r|\n/g, '<br>'));
        $("#lineonefinaltext").html($("#one_text_1").val()).show();
        // console.log($(noenText));
        no_ch = $(noenText).html().length;

        cost_calcultor($(noenText))
            // $("#linetwofinaltext").html("," + $("#two_text_2").val()).hide();
            // $("#linethreefineltext").html("," + $("#three_text_3").val()).hide();
    }

}

function updateText(obj) {
    var getId = $(obj).attr('id');

    noenText = '.noenText1'
    noenText2 = '.noenText2'
    noenText3 = '.noenText3'
    if (getId == "one_text_1") {
        $(noenText).html($(obj).val().replace(/\r\n|\r|\n/g, '<br>'));
        $("#lineonefinaltext").html($(obj).val())

    } else if (getId == "two_text_1") {
        $(noenText).html($(obj).val().replace(/\r\n|\r|\n/g, '<br>'));
        $("#lineonefinaltext").html($(obj).val())
    } else if (getId == "two_text_2") {
        $(noenText2).html($(obj).val().replace(/\r\n|\r|\n/g, '<br>'));
        $("#linetwofinaltext").html("," + $(obj).val());
    } else if (getId == "three_text_1") {
        $(noenText).html($(obj).val().replace(/\r\n|\r|\n/g, '<br>'));
        $("#lineonefinaltext").html($(obj).val())
    } else if (getId == "three_text_2") {
        $(noenText2).html($(obj).val().replace(/\r\n|\r|\n/g, '<br>'));
        $("#linetwofinaltext").html("," + $(obj).val())
    } else if (getId == "three_text_3") {
        $(noenText3).html($(obj).val().replace(/\r\n|\r|\n/g, '<br>'));
        $("#linethreefineltext").html("," + $(obj).val());
    }

    if (getId == "three_text_3" || getId == "three_text_2" || getId == "three_text_1")
        cost_calcultor($(noenText), $(noenText2), $(noenText3));
    else if (getId == "two_text_1" || getId == "two_text_2")
        cost_calcultor($(noenText), $(noenText2));
    else if (getId == "one_text_1")
        cost_calcultor($(noenText));




}


function centerAlignEle(noenText) {
    var parentWidth = $(noenText).parent().parent().parent().width();
    var parentHeight = $(noenText).parent().parent().parent().height();
    var horizontalCenterPosition = (parentWidth / 2) - ($(noenText).width() / 2.5);
    var verticalCenterPosition = Math.floor(parentHeight / 4);
    if (noenText == ".noenText2") {
        verticalCenterPosition = verticalCenterPosition + 100;
    } else if (noenText == ".noenText3") {
        verticalCenterPosition = verticalCenterPosition + 200;
    } else {
        verticalCenterPosition = verticalCenterPosition;
    }
    $(noenText).css('left', horizontalCenterPosition);
    $(noenText).css('top', verticalCenterPosition);
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(e) {

    $('div.mySlides').css('background', ' url(' + $(e).attr('src') + ') center center / 100% no-repeat');
    $('div.mob_slide_image').removeClass('mobile_tab_img_active');
    $(e).addClass('mobile_tab_img_active');
    // showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");


    slides[slideIndex - 1].style.display = "block";


}