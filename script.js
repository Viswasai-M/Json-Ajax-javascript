$(document).ready(function(){
$('#btn').click (function(){
   var reqData=$('#movieProd').val()+$('#txtId').val();
    var result=$('#results');
    $.ajax({
    url:"https://api.themoviedb.org/3/movie/66?api_key=8ecef8931aa10a61ac7c888d41905273",
        method: 'GET',
        data:{id:66},

        dataType: 'jsonp',
        success: function(data){
          var id= 66;
            result.html('name: '+data.production_companies[0].name+'<br>'+ 'id'+ data.production_companies[0].id);
            for( var i=0;i<=id;i++){

              id++;
              console.log(id);
            }
        }
    })
});

});



















// $(document).ready(function(){
//     $('#btn').click (function(){
//        var reqdata=$('#txtCity').val()+','+$('#txtCountry').val();
//         var result=$('#results');
//         $.ajax({
//             url: "http://samples.openweathermap.org/data/2.5/weather",
//             method: 'GET',
//             data:{q:requestData},
//             dataType: 'json',
//             success: function(data){
//                 result.html('weather: '+data.weather[0].main+'<br>'+ 'Description'+ data.weather[0].description);
//             }
//         })
//     });
//
// });













// function setup(){
//   loadJSON("https://itunes.apple.com/search?term=jack+johnson", gotData,'jsonp');
//
// }
//
//
// function gotData(data){
//
//   console.log(data);
// }


// var btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//   var ourRequest=new XMLHttpRequest();
//   ourRequest.open("GET","https://itunes.apple.com/search?term=jack+johnson");
//   ourRequest.onload = function(){
//     var ourData = JSON.parse(ourRequest.responseText);
//     consol.log(ourData[0]);
//   };
// ourRequest.send();
//
// })
