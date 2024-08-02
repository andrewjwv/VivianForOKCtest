async function sendVolunteerEmail() {
    const data = {
        etype: "volunteer",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        phone: document.getElementById("phone").value
    };
    try {
        showLoader("volunteerform");
        const response = await fetch("https://testvivi4okx.azurewebsites.net/api/SendEmail", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        setTimeout(location.reload(), 5000);
    } catch (error) {
        console.error("There was an error submitting the form", error);
    }
}
async function sendContactEmail() {
    const data = {
        etype: "contact",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    try {
        showLoader("contactform");
        const response = await fetch("https://testvivi4okx.azurewebsites.net/api/SendEmail", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        setTimeout(location.reload(), 5000);
    } catch (error) {
        console.error("There was an error submitting the form", error);
    }
}
function showLoader(formname) {
    document.getElementById(formname).style.display = "block";
    document.getElementById("emailform").style.display = "none";
}