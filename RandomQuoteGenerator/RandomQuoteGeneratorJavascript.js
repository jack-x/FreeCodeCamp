var arrp=['1','2','3','4','5','6','7','8','9','0','a','b','c','d','e','f'];
var quoteTag=['movies','famous'];

$(document).ready(function(){
	
var quoteTagRandom=Math.floor(Math.random()*2);

$.ajax({
headers : {
	"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
	"Content-Type":"application/x-www-form-urlencoded",
	"Accept":"application/json"
	},
url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat="+quoteTag[quoteTagRandom],
success: gotQuoteFirst
});

var Random= Math.random();
	Random = Math.floor(Random*16);
	console.log(Random)
	var colorString="#";
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	$("#FullBody").animate({"background-color": colorString},{duration:5000, queue: false});
$("#TitleText").animate({"color": colorString},{duration:5000, queue: false});
$("#innerQuote").animate({"color": colorString},{duration:5000, queue: false});
$("#OuterQuote").animate({"color": colorString},{duration:5000, queue: false});
// $(".QuoteButton").animate({"color": colorString},{duration:5000, queue: false});
$(".QuoteButton").animate({"background-color": colorString},{duration:5000, queue: false});
	
});

function gotQuoteFirst(response)
{
	var r = JSON.parse(response);
	console.log(r);
	$("#innerQuote").text('');
	$("#OuterQuote").text('');
	var responseText=r.quote;
	var responseLength=responseText.length;
	
				
			if(responseLength > 80 && responseLength < 140)
			{
			$(".CenterQuoteBlock").css("font-size","170%");
			}
			if (responseLength > 140 )
			{
				$(".CenterQuoteBlock").css("font-size","150%");
			}
	
	    $('#innerQuote').text(r.quote).fadeIn(500);
        $('#OuterQuote').text(r.author).fadeIn(3000);
		
			  
	 var url = "https://twitter.com/intent/tweet?button_hashtag";
	  var hashtag="QuoteFreeCodeCamp";
	  var finalString=url+"="+hashtag +"&text="+ encodeURIComponent(r.quote + " - " + r.author);
	  console.log(finalString);
 	  $("#tweetbutton").attr("href",finalString);
	  
	  url = "https://www.tumblr.com/widgets/share/tool?canonicalUrl=http%3A%2F%2Ffreecodecamp.com&posttype=text&title=RandomQuote&";
	  var tags="Quote,RandomQuotes,FreeCodeCamp";
	   finalString=url+"tags="+encodeURIComponent(tags) + "&content="+encodeURIComponent(r.quote + " - " + r.author);
	  $("#tumblrButton").attr("href",finalString);
}	
			
			
		    
	
	

function GenerateColor()
{	
	$('*').stop(true);
	
	console.log(arrp)
	console.log("I am here"); 
	console.log("I am here");
	var Random= Math.random();
	Random = Math.floor(Random*16);
	console.log(Random)
	var colorString="#";
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	
	Random=Math.floor(Math.random()*16);
	colorString=colorString+arrp[Random];
	console.log("ColorString:" + colorString);
// document.getElementById("TitleText").style.color = colorString;
// document.getElementById("innerQuote").style.color = colorString;
// document.getElementById("OuterQuote").style.color = colorString;

$("#FullBody").animate({"background-color": colorString},{duration:2000, queue: false});
$("#TitleText").animate({"color": colorString},{duration:2000, queue: false});
$("#innerQuote").animate({"color": colorString},{duration:2000, queue: false});
$("#OuterQuote").animate({"color": colorString},{duration:2000, queue: false});
//$(".QuoteButton").animate({"color": colorString},{duration:2000, queue: false});
$(".QuoteButton").animate({"background-color": colorString},{duration:5000, queue: false});

var quoteTagRandom=Math.floor(Math.random()*2);

$.ajax({
headers : {
	"X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
	"Content-Type":"application/x-www-form-urlencoded",
	"Accept":"application/json"
	},
url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=" + quoteTag[quoteTagRandom],
success: gotQuote
});

function gotQuote(r)
{
	
			console.log(r);
			response = JSON.parse(r)
		  //$("#innerQuote").text(response.quoteText);
		  //$("#OuterQuote").text(response.quoteAuthor);
			$("#innerQuote").text('');
			$("#OuterQuote").text('');
			var responseText=response.quote;
			var responseLength=responseText.length;
			
			if(responseLength > 80 && responseLength < 140)
			{
			$(".CenterQuoteBlock").css("font-size","170%");
			}
			if (responseLength > 140 )
			{
				$(".CenterQuoteBlock").css("font-size","150%");
			}
			
		     $('#innerQuote').fadeOut(500, function() {
        $(this).text(response.quote).fadeIn(500);
      });
	  $('#OuterQuote').fadeOut(500, function() {
        $(this).text(response.author).fadeIn(3000);
      });
	  
	 var url = "https://twitter.com/intent/tweet?button_hashtag";
	  var hashtag="QuoteFreeCodeCamp";
	  var finalString=url+"="+hashtag +"&text="+ encodeURIComponent(response.quote + " - " + response.author);
 	  $("#tweetbutton").attr("href",finalString);
	
	url = "https://www.tumblr.com/widgets/share/tool?canonicalUrl=http%3A%2F%2Ffreecodecamp.com&posttype=text&title=RandomQuote&";
	  var tags="Quote,RandomQuotes,FreeCodeCamp";
	   finalString=url+"tags="+encodeURIComponent(tags) + "&content="+encodeURIComponent(response.quote + " - " + response.author);
	  
	  $("#tumblrButton").attr("href",finalString);
	  
	  console.log(finalString);
	   console.log($("#tweetbutton").attr("href"));
	   console.log($("#tumblrButton").attr("href"));
}		  
			
			
  }

 