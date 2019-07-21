
    
        var count =1;
        var mainText = document.getElementById("text_shown");
        var listItems = document.querySelectorAll("#list li");
        var list = document.querySelector("#list")
        var button = document.getElementById("btn_add");

        list.addEventListener("click" , clickItem);

        function clickItem(e){
            if(e.target.nodeName == "LI"){
                mainText.innerHTML = e.target.innerHTML;
            }
        }

        button.addEventListener("click" , addNewItem);
        
        function addNewItem(){
            list.innerHTML += "<li>new Item " +count+"</li>";
            count++;
        }