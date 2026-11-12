let items =[{id: 1, title: "Rosetta", category: 1, stock: "Stock: 1", price:"price: $80 NZD", image_url: "images/storeArt1.png"}, 
    {id: 2, title: "Cherrie", category: 1, stock: "Stock: 1", price:"price: $60 NZD", image_url: "images/storeArt2.png"}, 
    {id: 3, title: "The Wisps", category: 2, stock: "Stock: unlimited", price:"price: $10 NZD", image_url: "images/storeArt3.png"}, 
    {id: 4, title: "Amphibian", category: 1, stock: "Stock: 1", price:"price: $45 NZD", image_url: "images/storeArt4.png"}, 
    {id: 5, title: "Sannikov Land", category: 2, stock: "Stock: unlimited", price:"price: $8 NZD", image_url: "images/storeArt5.png"}, 
];

let categories = [
    {id: 1, category: "Characters"},
	{id: 2, category: "Prints"}
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
    +    '<h2 id="store-sub">' + storeItems[i].stock + '</h2>'
    +    '<h2 id="store">' + storeItems[i].price + '</h2>'
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