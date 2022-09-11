let modal = document.getElementById("mymodal");
let btn = document.getElementsByClassName("signupbtn")[0];
let close = document.getElementsByClassName("close-modal")[0];
btn.onclick = function () {
  modal.style.display = "flex";
};
close.onclick = function () {
  modal.style.display = "none";
};
//  ---------------------------------
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5a0ac9c18amshbb05d9344e9ffd0p1cf3a6jsn49aa092661f0",
    "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
  },
};

function fetchitem(url, dom_element) {
  fetch(url, options)
    .then((Response) => {
      if (Response.ok) {
        return Response.json();
      } else {
        throw new Error("somthing went wrong");
      }
    })
    .then((Data) => showitems(Data, dom_element))
    .catch((err) => console.error(err));
}

showitems = (items, sam) => {
  for (let item of items.data) {
    let imgelement = document.createElement("img");
    let itemel = document.getElementsByClassName("myclass")[0];
    imgelement.src = item.images;
    itemel.appendChild(imgelement);
  }
};

fetchitem(
  "https://airbnb19.p.rapidapi.com/api/v1/searchProperty?category=TAB_8225&totalRecords=10&currency=USD&adults=1",
  "myclass"
);
