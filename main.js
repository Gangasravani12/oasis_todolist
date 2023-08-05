document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#push').addEventListener('click', function(){
        var inputField = document.querySelector('#newtask input');
        var taskName = inputField.value;

        if(taskName.length == 0){
            alert("Kindly Enter Task Name!!!!");
        }
        else {
            document.querySelector('#tasks').innerHTML += `
                <div class="task">
                    <span class="taskname">
                        ${taskName}
                    </span>
                    <button class="delete">
                    <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            `;

            var current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].addEventListener('click', function(){
                    this.parentNode.remove();
                });
            }

            // Clear the input field
            inputField.value = "";
        }
    });
});
