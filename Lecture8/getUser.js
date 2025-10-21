const button = document.getElementById("load");
const userDiv = document.getElementById("user");

button.addEventListener("click", getUser);

async function getUser() {
  userDiv.textContent = "Loading...";

  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();

    // Destructure and use template strings
    const { first, last } = data.results[0].name;
    const { country } = data.results[0].location;

    userDiv.innerHTML = `
      <p><strong>Name:</strong> ${first} ${last}</p>
      <p><strong>Country:</strong> ${country}</p>
      <img src="${data.results[0].picture.medium}" alt="user photo">
    `;
  } catch (error) {
    userDiv.textContent = "Oops! Something went wrong.";
  }
}
