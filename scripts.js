let clickCount = 0;
let gameCleared = false;

// 按鈕點擊事件
document.getElementById('startButton').addEventListener('click', function() {
    resetIdleTimer();  // 重置計時器
    clickCount++;
    const message = document.getElementById('message');
    const quiz = document.getElementById('quiz');
    const container = document.querySelector('.container');
    const overlay = document.getElementById('overlay');
    const overlayMessage = document.getElementById('overlayMessage');

    if (gameCleared) {
        container.style.filter = 'blur(10px)';
        overlay.classList.remove('hidden');
        overlayMessage.textContent = "這個遊戲很無聊吧\n恭喜你被耍了😁";
        setTimeout(() => {
            overlay.classList.add('hidden');
            container.style.filter = 'none';
        }, 5000);
        return;
    }

    switch (clickCount) {
        case 1:
            break;
        case 2:
            message.textContent = "按這個按鈕沒有用喔";
            message.style.color = "#ff6f61";
            break;
        case 3:
            message.textContent = "真的沒有用啦";
            message.style.color = "#fda085";
            break;
        case 4:
            message.textContent = "就跟你說沒有用了😡";
            message.style.color = "#ff4a3d";
            break;
        case 5:
            message.textContent = "很煩欸，就跟你說沒用你還按";
            message.style.color = "#36d1dc";
            break;
        case 6:
            message.textContent = "算了不理你了";
            message.style.color = "#00c6ff";
            break;
        case 7:
            message.textContent = "";
            break;
        case 8:
            message.textContent = "";
            quiz.classList.remove('hidden');
            break;
        default:
            break;
    }
});

// 提交答案事件
document.getElementById('submitButton').addEventListener('click', function() {
    resetIdleTimer();  // 重置計時器
    const answer = document.getElementById('answer').value;
    const container = document.querySelector('.container');
    const overlay = document.getElementById('overlay');
    const overlayMessage = document.getElementById('overlayMessage');
    const message = document.getElementById('message');

    if (answer === "2") {
        message.textContent = "";
        container.style.filter = 'blur(10px)';
        overlay.classList.remove('hidden');
        overlayMessage.textContent = "恭喜通關此遊戲!!";
        document.getElementById('quiz').classList.add('hidden');
        gameCleared = true;
        setTimeout(() => {
            overlay.classList.add('hidden');
            container.style.filter = 'none';
        }, 5000);
    } else {
        message.textContent = "答案錯誤，請再試一次。";
        message.style.color = "#ff4a3d";
    }
});

// 不再顯示“你還在嗎？”彩蛋
function resetIdleTimer() {
    // 清除之前的計時器
}
