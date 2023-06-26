//your JS code here. If required.
const container = document.getElementsByClassName("container")[0];

        function show(){
            container.innerHTML = '';
            const div = document.createElement("div");
            div.id = "line";
            container.append(div);
        }

        function rotate(){
            const line = document.getElementById("line");
            line.className = "line"
            // container.append(div)
        }

        function stop(){
            show();
        }