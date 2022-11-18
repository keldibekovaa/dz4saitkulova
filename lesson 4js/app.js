const btn = document.querySelector("button");
btn.addEventListener("click",()=> {
    const request = new XMLHttpRequest()//создание запроса
    request.open("GET", "data.json");//обьявляем метод запроса и указываем
    request.setRequestHeader("Content-type", "application/json");//задание заголовка
    request.send();//отправка запроса
    request.addEventListener("load", () => {
        console.log(JSON.parse(request.response));
        const data = JSON.parse(request.response);
        document.querySelector(".surname").innerHTML=data.surname;
        document.querySelector(".name").innerHTML = data.name;
        document.querySelector(".age").innerHTML = data.age;
        document.querySelector(".date").innerHTML=data.date;
    });
});
