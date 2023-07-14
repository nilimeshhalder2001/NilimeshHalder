const apicall=(method,url)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);
    xhr.send();
    xhr.onload=()=>{
        let data=xhr.response;
        console.log(data);
    }
}
apicall("GET",'https://jsonplaceholder.typicode.com/photos');