var button = document.getElementById("btn_generate");
        var image = document.getElementById("img_user");
        var fullName = document.getElementById("fullName");
        var email = document.getElementById("email");
        var phone = document.getElementById("phone");
        var cell = document.getElementById("cell");

        var Request = new XMLHttpRequest();
        Request.open("GET" , "https://randomuser.me/api/");
        Request.onload = function(){
            var data = JSON.parse(Request.responseText);
            renderUser(data);
        }
        Request.send();

        button.addEventListener("click" , btnClick);

        function btnClick(){
            Request.open("GET" , "https://randomuser.me/api/");
        Request.onload = function(){
            var data = JSON.parse(Request.responseText);
            renderUser(data);
        }
        Request.send();
        }
        function renderUser(data){
            image.src = data.results[0].picture.medium;
            fullName.innerHTML = "Name : " + data.results[0].name.first + " " + data.results[0].name.last;
            email.innerHTML = "Email : " + data.results[0].email;
            phone.innerHTML = "PhoneNumber : " + data.results[0].phone;
            cell.innerHTML = "Cell : " + data.results[0].cell;
        }
  //text.insertAdjacentHTML('beforeend' , htmlString)