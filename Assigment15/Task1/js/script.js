
async function GetData() {
  try {
    let res = await fetch("https://forkify-api.jonas.io/api/v2/recipes?search=pizza");

    if (res.ok) {
      let resData = await res.json();
      let myData = resData.data.recipes;
        Displayy(myData);
        console.log(resData.data.recipes);
      for (const item of resData.data.recipes) {
        console.log(item.image_url);
        console.log(item.title);
      }
    } else {
      console.log("no data found");
    }
  } catch (error) {
    console.log(`An error Accuored ${error}`);
  }
}
GetData();

let cardsDiv = document.querySelector("#cardsContainer");

function Displayy(dataArr){
    let contentContainer =` `;
    for (const item of dataArr) {
        contentContainer+=` 
        <div class="col-md-3">
            <div class="card h-100">
                <img src="${item.image_url}" height="200px" class="card-img-top" alt="">
                <div class="card-body text-center">
                    <p class="card-text">${item.title}</p>
                </div>
            </div>
        </div>
        `
        if(item.id == 32) break;
    }
    cardsDiv.innerHTML = contentContainer;
}