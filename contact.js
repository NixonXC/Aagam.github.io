function sendMessage() {
    var request = new XMLHttpRequest();
    request.open("POST", "https://ptb.discord.com/api/webhooks/952188871108603934/dQPsus28n58scTsf5NbCPIkeFTklxfgoD97DPUBQETdCdRU86RrHatD8RFNdfSg2gnWb");
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
    username: "Message",
    embeds: [ myEmbed ]
    }

    request.send(JSON.stringify(params));
    window.alert("Message sent! " + aut);
    window.location.reload();

    function hexToDecimal(hex) {
        return parseInt(hex.replace("#",""), 16)
    }
}
document.getElementById("insta").onclick = function () {
    window.location.href = "https://www.instagram.com/aagam0/";
};
document.getElementById("ast").onclick = function () {
    window.location.href = "mailto:0aagamj@gmail.com";
};
document.getElementById("in").onclick = function () {
    window.location.href = "https://www.linkedin.com/in/aagam-jain-4b8473222/";
};
document.getElementById("beh").onclick = function () {
    window.location.href = "https://www.behance.net/aagam0";
}
console.log("Hello World!")