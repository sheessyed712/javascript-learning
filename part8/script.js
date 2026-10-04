
//1
document.getElementById('changeTextButton').addEventListener('click',function (){

    let paragraph=document.getElementById('myParagraph');
    paragraph.textContent="the paragraph is Changed"
})


//2

document.getElementById('highlightFirstCity').addEventListener('click',function(){
        let citiesList=document.getElementById('citiesList');
        citiesList.firstElementChild.classList.add("highlight");
})

//3
document.getElementById("changeOrder").addEventListener('click',function(){
    let coffee=document.getElementById("coffeeType");
    coffee.textContent="Espresso";
    //we can also add css here
    coffee.style.backgroundColor="brown";
    coffee.style.padding="5px";

})

//4


document.getElementById("addNewItem").addEventListener('click',function(){
    let list=document.getElementById("shoppingList");
    let element=document.createElement("li");
    element.textContent="eggs"
    list.appendChild(element);
})

//5

document.getElementById("removesLastTask").addEventListener('click',function(){
    let item=document.getElementById("taskList");
    item.lastElementChild.remove();
})


//ex 6
document.getElementById("clickMeButton").addEventListener('mousehover',function(){
    alert("chaicode");
});

//ex7

document.getElementById('teaList').addEventListener('click',function(event){
    // console.log(event.target);
    if(event.target && event.target.matches('.teaItem')){
        console.log(event.target.textContent);
    }
})


//ex8 form handling

document.getElementById('feedbackForm').addEventListener('submit', function(event){
       event.preventDefault();
    let feedback=document.getElementById('feedbackInput').value;
    console.log(feedback);
    document.getElementById('feedbackDisplay').textContent=`feedback is ${feedback}`;
})


//ex 9

document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('domStatus').textContent="DOM fully loaded";
})


//ex 10
document.getElementById('toggleHighlight').addEventListener('click',function(){
    document.getElementById('descriptionText').style("background-color:white");
    
})
 
