let items =[    
    {id: 1, title: "Artfight 2026 1", category: 3, image_url: "images/pArt1.png"}, 
    {id: 2, title: "Amphibian", category: 4, image_url: "images/storeArt4.png"},
    {id: 3, title: "Rosetta", category: 5, image_url: "images/storeArt1.png"}, 
    {id: 4, title: "Cherrie", category: 5, image_url: "images/storeArt2.png"}, 
    {id: 5, title: "The Wisps", category: 6, image_url: "images/storeArt3.png"}, 
    {id: 6, title: "Sannikov Land", category: 6, image_url: "images/storeArt5.png"}, 
    {id: 7, title: "Woods Creature Ref", category: 5, image_url: "images/pCosW4.png"}, 
    {id: 8, title: "Woods Creature Headshot", category: 2, image_url: "images/apArt1.png"}, 
    {id: 9, title: "Goober on Zoom", category: 2, image_url: "images/pArt2.png"}, 
    {id: 10, title: "Pokemon", category: 1, image_url: "images/aboutMeImg.png"}, 
    {id: 11, title: "Doodle of myself", category: 1, image_url: "images/apArt2.png"}, 
    {id: 12, title: "Michael from TMA", category: 1, image_url: "images/apArt3.png"}, 

];

let categories = [
    {id: 1, category: "Doodle"},
    {id: 2, category: "Head-shot"},
    {id: 3, category: "Bust-up"},
    {id: 4, category: "Full-body"},
    {id: 5, category: "Ref sheet"},
    {id: 6, category: "Scene"},
];


//----------------
//By category
//Populate the select "options" with all categories in the array when the page is loaded
function loadCategories(categoryArray, selectMenu) {
  //Clear the selectMenu if it's existing
  //selectMenu.innerHTML = "";
  //Loop through all items in the categories array and add a new option to the "select" element
  for(let i=0; i < categoryArray.length; i++) {
    //Create a new option and then add it to the "select" element
    let newOption = document.createElement("option");
    newOption.text = categoryArray[i].category;
    newOption.value = categoryArray[i].id.toString();
    selectMenu.appendChild(newOption);
  }
  //Set the first item as selected option in drop-down list
  document.getElementById("categoryID").selectedIndex= "0"; 
}
//call to execute this function when loading the webpage
loadCategories(categories, document.getElementById("categoryID"));

function displayAllItems(storeItems){
  let allItems = "";
  for(let i=0; i < storeItems.length; i++){
    let item =  '<div class="item-card">'                                
    +    '<h2 id="store-sub">' + storeItems[i].title + '</h2>'
    +    '<img src=' + storeItems[i].image_url + ' height="auto" onclick="showItem(' + storeItems[i].id.toString() + ')">'
    + '</div>' ;

    allItems += item;
  }
  return allItems;
}
//          
document.getElementById("storeItems").innerHTML = displayAllItems(items);


function sortByCategory() {
  //Get the selected category "option value"
  let selectedCateogryID = document.getElementById("categoryID").value; 
  //Filter all items by category
  let filteredItems = "";
  if (selectedCateogryID == 'all') {
    filteredItems = items;
  } else {
    filteredItems = items.filter(item => {
      return item.category == selectedCateogryID;
    });
  }
  //Display the filtered items
  document.getElementById("storeItems").innerHTML = displayAllItems(filteredItems);
}