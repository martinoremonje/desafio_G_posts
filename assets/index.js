const obtenerPosts = async () =>{
    const api = "https://jsonplaceholder.typicode.com/posts";
    const postData = document.getElementById("post-data");
    try {
       const response = await fetch(api);
        const data = await response.json();
        console.log(data);
        data.forEach((e)=>{
            if(e.id <= 4){

                postData.innerHTML +=  `<div>
                                          <ul>
                                              <li><span><strong>${e.title}</strong><br></span><span>${e.body}</span></li>
                                          </ul>
                                        </div>`
            }
        });             
    } catch (error) {
        console.log(error)
    }
};

document.getElementById("btn").addEventListener("click", function(){
    obtenerPosts();
});