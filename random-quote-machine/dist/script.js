$(document).ready(function(){
  var quoteList = [ // create an array to contain all the existing quotes.
      'A woman\'s mind is cleaner than a man\'s: She changes it more often.'
      ,'I want my children to have all the things I could not afford. Then I want to move in with them.'
      ,'Don\'t talk about yourself; it will be done when you leave.'
      ,'If I want to knock a story off the front page, I just change my hairstyle.'
      ,'The first time I sang in the church choir; two hundred people changed their religion.'
      ,'A pessimist is a person who has had to listen to too many optimists.'
    ];
  
  this.displayIntro = function(){
     var introduction = "Click the button to get a quote. Currently, there are <strong>" + quoteList.length + "</strong> amazing quotes available.";
  $("#intro").html(introduction);
  };

  $("#getQuote").on("click", function(){
    var quoteLen = quoteList.length;
    var idx = Math.floor((Math.random() * quoteLen) + 1)-1;
    var msg = quoteList[idx];
    $("#newQuote").hide();
    $("#quote").html(msg);
    $('#twitterQuote').show();
    var twitterURL = 'https://twitter.com/intent/tweet?hashtags=funnyquote&text=\"' + msg + ' - from BoCode\"';
    $('#twitterQuote').attr('href', twitterURL);
});
  
  this.insertQuote = function(){
    var x = document.forms["addQuoteForm"]["userQuote"].value;
    if (x === '') // If form is empty
      $("#newQuote").html("Please enter a valid quote");
    else if ($.inArray(x, quoteList) > -1) // If quote already exists
      $("#newQuote").html("This quote already exists in the list. Please enter another quote.");             
    else { 
      quoteList.push(x);
      var msg = "New quote has been added: <p>" + x;
      $("#newQuote").show();  // Display new qutoe
      $("#newQuote").html(msg);
      this.displayIntro();     
    }    
  };
  
this.displayIntro(); // This is called when page is loaded.
$('#twitterQuote').hide(); 
});