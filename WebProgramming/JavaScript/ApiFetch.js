

const makeRequest=(method,url,data)=>{
    const xhr=new XMLHttpRequest();
    xhr.open(method,url);

    xhr.setRequestHeader('Content-type': 'application/json; charset=UTF-8');

    xhr.onload=()=>{
        let data=xhr.response;
        document.getElementsByClassName("para")[0].innerHTML=data;
    }

    xhr.onerror=()=>{
        document.write("400 error");
    }
    xhr.send(JSON.stringify(data));
    
}
const getdata=()=>{
    makeRequest("GET","https://jsonplaceholder.typicode.com/photos");
}
const senddata=()=>{
    makeRequest("POST","https://jsonplaceholder.typicode.com/posts"),{
    title: 'foo',
    body: 'bar',
    userId: 1,
};
}
getdata();
senddata();