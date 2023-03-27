const API_URL = "http://localhost:3000/api";

const HTMLResponse = document.querySelector("#app");

const obtenerID = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    console.log(id);
    return id;   
}

fetch(`${API_URL}/courses/${obtenerID()}`)
    .then((response) => response.json())
    .then((courses) => {
        console.log(courses);
        const tpl = `<li>${courses.title} - ${courses.description} </li>`;
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
        // const tpl = courses.map((course) => `<li>${course.title} - ${course.description} </li>`);
        // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    }).catch( err => {
        console.log(err);
    });
    
    

