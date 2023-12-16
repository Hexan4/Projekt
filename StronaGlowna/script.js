document.addEventListener('DOMContentLoaded', function () {
    const text = "Miło Cię widzieć";
    let i = 0;
    const speed = 60;

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typing-effect").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
