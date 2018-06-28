//Magic 8 Ball ftw

var result = document.getElementById('result')
var activate = document.getElementById('button')

activate.onclick = function chance() {
    var answer = Math.floor(Math.random()*20) + 1;
    switch(answer){
        case 1:
            result.textContent = "It is certain.";
            break;
        case 2:
            result.textContent = "It is decidedly so.";
            break;
        case 3:
            result.textContent = "Without a doubt.";
            break;
        case 4:
            result.textContent = "Yes - definitely."
            break;
        case 5:
            result.textContent = "You may rely on it."
            break;
        case 6:
            result.textContent = "As I see it, yes"
            break;
        case 7:
            result.textContent = "Most likely."
            break;
        case 8:
            result.textContent = "Outlook good."
            break;
        case 9:
            result.textContent = "Yes."
            break
        case 10:
            result.textContent = "Signs point to yes."
            break
        case 11:
            result.textContent = "Reply hazy, try again"
            break;
        case 12:
            result.textContent = "Ask again later."
            break;
        case 13:
            result.textContent = "Better not tell you now."
            break;
        case 14:
            result.textContent = "Cannot predict now."
            break;
        case 15:
            result.textContent = "Concentrate and ask again."
            break;
        case 16:
            result.textContent = "Don't count on it."
            break;
        case 17:
            result.textContent = "My reply is no."
            break;
        case 18:
            result.textContent = "My sources say no"
            break;
        case 19:
            result.textContent = "Outlook not so good."
            break;
        case 20:
            result.textContent = "Very doubtful."
            break;
    }
}