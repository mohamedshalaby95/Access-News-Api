
var myData;

// this to put links by js start

var listLinks=['General','Health','Science','Business','Sports','Technology'];
function getlist(){
var lis="";
for(var i=0;i<listLinks.length;i++){
lis+=`<li class="nav-item">
<a class="nav-link" href="#">`+listLinks[i].toLowerCase()+`</a>
</li>`
}
document.getElementById('uls').innerHTML=lis;
}
getlist();

// this to put links by js end

getData("general");
var links=document.getElementsByClassName("nav-link");
for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
        var currentCat=e.target.text;
        getData(currentCat)
    })
}

function getData(category){ //general

    var httpReq = new XMLHttpRequest();
    
    httpReq.open("GET","http://newsapi.org/v2/top-headlines?country=eg&category="+category+"&apiKey=c375ef90b9f6432cb075e9f1b09f6748");
    
    httpReq.send();
    
    myData=[];
    
    httpReq.addEventListener("readystatechange",function(){
          
           if(httpReq.readyState==4&&httpReq.status==200)
           {
              myData=JSON.parse(httpReq.response).articles;
              console.log(myData)
              displayPosts();
           }
    
    })
}


function displayPosts(){
    var  temp=``;

    for(var i=0;i<myData.length;i++){
        temp+=`
        <div class='col-md-4'>
           <div class='post-data'>
              <img class='img-fluid' src=`+myData[i].urlToImage+` />
              <h4 class="hader">`+myData[i].title+`</h4>
              <p>`+myData[i].description+`</p>
           </div>
        </div>
        `
    }

    document.getElementById("postsRow").innerHTML=temp;

}



