
$(document).ready(function(){
        
    $('#searchButton').click(function() { 
        $("#searchResults").empty(); 
        var search_term = document.getElementById("search_box").value; 
      
        $.ajax({                    
             url: 'https://en.wikipedia.org/w/api.php?action=query',  
            type: 'GET', 
            dataType: 'json',  
            data: {
               list: 'search', 
               srsearch: search_term,
               format: 'json',
               origin: '*'
           }, 
                    
            success: function (data) {
                var hits = data.query.searchinfo.totalhits;
                if (hits > 0) {
                for (i=0; i< data.query.search.length; i++) {
                    var title = data.query.search[i].title;
                    var title_link = 'https://en.wikipedia.org/wiki/'+ title;                
                   $("#randomResults").attr("src", "about:blank");                                                                                        
                   $("#searchResults").append('<a href="' + title_link + '" target="blank">' + data.query.search[i].title + ':' +'<br/>'+'</a>');                                             
               $("#searchResults").append('<p>' + data.query.search[i].snippet + '...' +'<br/>'+'</p>');
                }        
              }
              
              else {
                $("#searchResults").empty();
                                      
                $("#randomResults").attr("src", "about:blank");
                $("#searchResults").html("No results found.  Try again...")
              }
            },               
                        
            error: function error(){
                  alert ("Error");
            }    
        });
     });  
  
$("#search_box").keypress(function(e){
    if(e.which == 13){ 
        $("#searchButton").click(); 
        return false; 
    } 
}); 
  
$('.randomResults').css('height', $(window).height()+'px'); 
      $('#randomButton').click(function() { 
          $("#searchResults").empty(); 
          $("#search_box").val('');
          $("#randomResults").attr("src", "https://en.wikipedia.org/wiki/Special:Random");  
       });  
  
  }); 


