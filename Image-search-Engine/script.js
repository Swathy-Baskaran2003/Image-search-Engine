const accessKey="iJT5YiF84L6CEEQADAWOF5GA0uiRNzdx5P6arK7JX58";

const searchForm =document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showmore=document.getElementById("show-more");

let keyword="";
let page=1;
async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
   
    
    const results = data.results;
    if(page === 1){
        searchResult.innerHTML="";
    }
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        image.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        showmore.style.display="block";
    })
}
searchForm.addEventListener("submit",(e)=>
{
    e.preventDefault();
    page=1;
    searchImages(); 
})
showmore.addEventListener("click",()=>{
    page++;
    searchImages();
})
