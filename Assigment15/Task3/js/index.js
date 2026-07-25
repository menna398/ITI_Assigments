const productName = document.querySelector("#name");
const productPrice = document.querySelector("#price");
const productCategory = document.querySelector("#category");
const productDescription = document.querySelector("#description");
const productImage = document.querySelector("#image");
const buttonSubmit = document.querySelector("#button");

async function GetData() {
  try {
    let res = await fetch(`https://fakestoreapi.com/products`);
    if (res.ok) {
      let Data = await res.json();
      console.log(Data);
    } else {
      console.log("no data");
    }
  } catch (ex) {
    console.log(ex);
  }
}
GetData();


async function postData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: productName.value,
        price: productPrice.value,
        description: productDescription.value,
        category: productCategory.value,
        image: productImage.value,
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

buttonSubmit.addEventListener("click",async(e)=>{
    e.preventDefault();
    await postData();
    ShowData();
});

function ShowData() {
    //to get img
    const imageURL = productImage.files.length
        ? URL.createObjectURL(productImage.files[0])
        : "https://placehold.co/120x120";

    let content = `
    <div class="container my-5">
      <div class="row align-items-center border rounded-3 shadow-sm p-3 bg-light">

        <div class="col-md-2 text-center">
          <img
            src="${imageURL}"
            alt="Product Image"
            class="img-fluid rounded"
          />
        </div>

        <div class="col-md-8">
          <h4 class="fw-bold mb-2">${productName.value}</h4>

          <p class="mb-1"><strong>Price:</strong> ${productPrice.value}</p>

          <p class="mb-1"><strong>Category:</strong> ${productCategory.value}</p>

          <p class="text-muted mb-0">${productDescription.value}</p>
        </div>

      </div>
    </div>
    `;

    let myDiv = document.querySelector(".divv");
    myDiv.innerHTML += content;
}