const init = () => {
    const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = document.querySelector("input#searchByID");

        fetch(`http://localhost:3000/movies/${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            const title = document.querySelector(`section#movieDetails h4`);
            title.innerText = data.title;
            const summary = document.querySelector(`section#movieDetails p`);
            summary.innerText = data.summary;
        });
    });
};
    
    
    
    
    /*const inputForm = document.querySelector("form");
    inputForm.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(event.target.children[1].value);
        event.target.children[1].value;
    });
}
*/
document.addEventListener('DOMContentLoaded', init);