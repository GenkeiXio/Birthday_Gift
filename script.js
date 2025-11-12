const messages = [
    "text1", "text2", "text3", "messageBox",
    "text4", "text5", "text6", "text7", "text8", "cappo", "finalText"
    ];

    const birthdayMessage = 
    "Wishing you a day filled with laughter, love, and sweet memories, Sayuri. You deserve all the happiness in the world today and always. 💖🎂";

    let index = 0;
        function showNextMessage() {
                if (index < messages.length) {
                    const currentId = messages[index];
                    const element = document.getElementById(currentId);

                if (currentId === "messageBox") {
                    element.style.display = "block";
                    element.style.opacity = "1";
                    typeMessage(birthdayMessage, document.getElementById("autoMessage"), () => {
                        setTimeout(() => {
                            element.style.display = "none";
                            index++;
                            showNextMessage();
                        }, 4000);
                    });
                } 
                else if (currentId === "cappo") {
                    element.style.display = "block";
                    setTimeout(() => {
                        element.style.display = "none";
                        index++;
                        showNextMessage();
                    }, 6000);
                } 
                else if (currentId === "finalText") {
                    element.style.opacity = 1;
                } 
                else {
                    element.classList.add("visible");
                    setTimeout(() => {
                        element.classList.remove("visible");
                        index++;
                        showNextMessage();
                    }, 7000);
                }
            }
        }

        function typeMessage(text, target, callback) {
        target.textContent = "";
        let i = 0;
            const interval = setInterval(() => {
                target.textContent += text.charAt(i);
                target.parentElement.style.height = "auto"; // let it grow naturally
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    callback();
                }
            }, 50);
        }

window.onload = showNextMessage;