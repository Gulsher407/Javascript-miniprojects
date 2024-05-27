     // Function to change the background color of the body
     const changeBackgroundColor = (color) => {
        document.body.style.backgroundColor = color;
    }

    document.getElementById("purple").addEventListener("click", () => changeBackgroundColor("blue"));
    document.getElementById("red").addEventListener("click", () => changeBackgroundColor("red"));
    document.getElementById("green").addEventListener("click", () => changeBackgroundColor("green"));
    document.getElementById("yellow").addEventListener("click", () => changeBackgroundColor("yellow"));
