
(function () {
    let list_tasks = document.querySelector(".todo-list__list");
    let form = document.querySelector(".card");
    let save_btn = form.querySelector(".card__button-save");

    let saveTask = (task) => (e) => {
        e.preventDefault()
        let discription = task.querySelector(".task__discription");
        let important = task.querySelector(".task__important");
        let form = document.querySelector(".card");
        console.log("Oler");
        discription.textContent = form.discription.value;
        important.textContent = form.important.checked ? "💢" : "";
        form.reset()
    }

    list_tasks.addEventListener('click', function (e) {
        let target = e.target;
        let task = e.target.closest(".task");
        let important = task.querySelector(".task__important");
        let discription = task.querySelector(".task__discription");

        if (target.classList.contains("task__button-edit")) {
            form.discription.value = discription.textContent;
            if (important.textContent) {
                form.important.checked = true;
            } else {
                form.important.checked = false;
            };
            form.onsubmit = saveTask(task);
        };
        if (target.classList.contains("task__button-del")) {
            task.remove()
        };

    });

})();