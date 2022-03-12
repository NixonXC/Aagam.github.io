function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/952148247785381948/k8wnHrzaK5wNc9yCPaMM6eqOwteHmuIymxrHHJAJWQMqhNiPicsbBuGYsejhIlkOaaGT");
    request.setRequestHeader('content-type', 'application/json'); 

    var aut = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;

    var myEmbed = {
    author: {
        name: email
    },
    title: aut,
    description: msg,
    color: hexToDecimal("#00ff51")
    }

    var params = {
    username: "Email test",
    embeds: [ myEmbed ]
    }

    request.send(JSON.stringify(params));
    window.alert("Message sent! " + aut);
    window.location.reload();

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
    }
}