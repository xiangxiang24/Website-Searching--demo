function loginpage() {
    const password = document.getElementById("passw").value;
    const error = document.getElementById("error");
    const correctPass = "ega";

    if (password == "") {
        error.textContent = "กรุณาป้อนรหัสผ่าน";
    } else if (password !== correctPass) {
        error.textContent = "กรุณากรอกรหัสผ่านให้ถูกต้อง";
    } else if (password === correctPass) {
        // window.open = "index.html", "_blank";
        window.location.href = "file:///Users/xiangxiang/Desktop/WEB-DEMO-GAME/Html/index.html";
    }
}

// function SearchforCategories() {
//     //Categories from options
//     const optionCat = document.getElementById("searchlist").value;
//     //Search from input
//     const inputCat = document.getElementById("searchType").value.toLowerCase();
//     //rows that will showed
//     const rows = document.querySelectorAll("#table-body tr")

//     rows.forEach((row) => {
//         let TextCheck = "";
//         const cell = document.getElementsByTagName("td")
//         if (optionCat === "all") {
//             TextCheck = rows.innerText.toLowerCase();
//         } else if (optionCat === "no") {

//         } else if (optionCat === "name") {
//             TextCheck = row.querySelector("#name").innerText.toLowerCase();
//         } else if (optionCat === "Nname") {
//             TextCheck = row.querySelector("#Nname").innerText.toLowerCase();
//         } else if (optionCat === "role") {
//             TextCheck = row.querySelector("#role").innerText.toLowerCase();
//         } else if (optionCat === "egarole") {
//             TextCheck = row.querySelector("#egarole").innerText.toLowerCase();
//         } else if (optionCat === "org") {
//             TextCheck = row.querySelector("#org").innerText.toLowerCase();
//         } else if (optionCat === "busi") {
//             TextCheck = row.querySelector("#busi").innerText.toLowerCase();
//         } else if (optionCat === "add") {
//             TextCheck = row.querySelector("#add").innerText.toLowerCase();
//         } else if (optionCat === "tel") {
//             TextCheck = row.querySelector("#tel").innerText.toLowerCase();
//         }

//         if (TextCheck.includes(inputCat)) {
//             row.style.display = "";
//         } else {
//             row.style.display = "none";
//         }
//     })
// }

function SearchforCategories() { //Just demo how's illustration of the data in table//

    const optionCat = document.getElementById("searchlist").value
    const inputCat = document.getElementById("searchType").value.toLowerCase()

    const rows = document.querySelectorAll("#table-body tr");

    rows.forEach((row) => { // access to each row

        const cells = row.getElementsByTagName("td"); //get the the name of id from each td in 1 row

        let TextCheck = "";

        if (optionCat === "all") {
            TextCheck = row.innerText.toLowerCase(); //every row in table
        } else if (optionCat === "fullname") {
            TextCheck = cells[1].innerText.toLowerCase(); //change the elememt to be String for check
        } 
        else if (optionCat === "nickname") {
            TextCheck = cells[2].innerText.toLowerCase();
        } 
        else if (optionCat === "position") {
            TextCheck = cells[3].innerText.toLowerCase();
        } 
        else if (optionCat === "ega") {
            TextCheck = cells[4].innerText.toLowerCase();
        } 
        else if (optionCat === "organization") {
            TextCheck = cells[5].innerText.toLowerCase();
        } 
        else if (optionCat === "business") {
            TextCheck = cells[6].innerText.toLowerCase();
        } 
        else if (optionCat === "address") {
            TextCheck = cells[7].innerText.toLowerCase();
        } 
        else if (optionCat === "phone") {
            TextCheck = cells[8].innerText.toLowerCase();
        }

        if (TextCheck.includes(inputCat)) { // use like contains in Java array
            row.style.display = "";
        } else {
            row.style.display = "none";
        }

    });
}