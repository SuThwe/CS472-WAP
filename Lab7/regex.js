
const testURL = (url) => {
    const pattern = /^https?:\/\/.+/;
    let result = pattern.test(url);
}

const testPassword = (password) => {
    const PwPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return PwPattern.test(password);
}

const formSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    console.log("Here");
}


window.onload = () => {
    const form = document.getElementById('regExForm');
    form.onsubmit = formSubmit;

}
