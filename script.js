function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

}

function copyEmail(button) {
    const email = button.dataset.email;

    const showCopied = () => {
        button.classList.add("copied");
        clearTimeout(button._copyTimeout);
        button._copyTimeout = setTimeout(() => {
            button.classList.remove("copied");
        }, 1500);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(showCopied).catch(() => {
            fallbackCopy(email, showCopied);
        });
    } else {
        fallbackCopy(email, showCopied);
    }
}

function fallbackCopy(text, onSuccess) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand("copy");
        onSuccess();
    } catch (err) {
        // Clipboard access unavailable; silently ignore.
    } finally {
        document.body.removeChild(textarea);
    }
}