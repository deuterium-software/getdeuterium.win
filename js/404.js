function auto_set_frame_size(frame, resize_obj) {
    console.log(resize_obj.getBoundingClientRect());
    console.log(frame.getBoundingClientRect());
    if (resize_obj.getBoundingClientRect().width >
        frame.getBoundingClientRect().width) {
        frame.style.width = (resize_obj.getBoundingClientRect().width + 15).toString();
    }
}
function start_404_animation() {
    var last_message;
    var messages = document.getElementById("console-messages");
    var start_msg = document.getElementById("first-command-text"); // i have renamed this 2 times because of Cannot redeclare block-scoped variable error
    var prefix = "";
    if (navigator.platform.indexOf("Win") === 0) {
        prefix = "C:\\getdeuterium-win>";
    }
    else if (navigator.platform.indexOf("Mac") === 0 || navigator.platform.indexOf("Linux") === 0 || navigator.platform.indexOf("iPhone") === 0) {
        prefix = "deuterium@deuterium:/tmp/getdeuterium-win $";
    }
    start_msg
        ? (start_msg.innerText =
            "Deuterium Website [Version 4.0.4]\n" +
                "Deuterium non-corporation 😢.\n\n" +
                "".concat(prefix, " dt dd ") + document.location.pathname)
        : null;
    last_message = start_msg;
    setTimeout(function () {
        var dir_removed = document.createElement("li");
        dir_removed.innerHTML = "<h3>Directory successfully removed.</h3>";
        messages === null || messages === void 0 ? void 0 : messages.appendChild(dir_removed);
        last_message = dir_removed;
    }, 2000);
    setTimeout(function () {
        var normal_dir_msg = document.createElement("li");
        normal_dir_msg.innerHTML = "<h3>C:\\getdeuterium-win>";
        normal_dir_msg.classList.add("blinking-right");
        messages === null || messages === void 0 ? void 0 : messages.appendChild(normal_dir_msg);
        last_message = normal_dir_msg;
    }, 2100);
    setTimeout(function () {
        last_message
            ? (last_message.innerHTML =
                "<h3>C:\\getdeuterium-win> why are you still on the 404 page lol")
            : null;
    }, 30000); // 30 seconds
    setTimeout(function () {
        last_message === null || last_message === void 0 ? void 0 : last_message.classList.remove("blinking-right");
        var final_msg = document.createElement("li");
        final_msg.innerHTML = "<h3>C:\\getdeuterium-win> bro its been one minute 💀";
        final_msg.classList.add("blinking-right");
        messages === null || messages === void 0 ? void 0 : messages.appendChild(final_msg);
        last_message = final_msg;
    }, 60000); // one minute (i think thats obvious though)
}
start_404_animation();
