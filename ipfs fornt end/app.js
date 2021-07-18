let files = [];
const url = "http://localhost:3000/api/upload";
const formData = new FormData();

document.getElementById("submit").onclick = (e) => {
  const file = $("#mfile")[0].files[0];
  formData.append("image", file);
};

document.getElementById("show").onclick = (e) => {
  axios
    .post(url, {
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
