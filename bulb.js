
const moodTitle = document.getElementById('moodTitle');
const moodEmoji = document.getElementById('moodEmoji');
const colorBox = document.getElementById('colorBox');

const happyBtn = document.getElementById('happyBtn');
const sadBtn = document.getElementById('sadBtn');
const resetBtn = document.getElementById('resetBtn');


happyBtn.addEventListener('click', function() {
    moodTitle.textContent = "感覺充滿能量！";
    moodEmoji.textContent = "✨😄✨";
    colorBox.style.backgroundColor = "#FFEB3B";
});


sadBtn.addEventListener('click', function() {
    moodTitle.textContent = "沒事的，休息一下。";
    moodEmoji.textContent = "🌧️☁️";
    colorBox.style.backgroundColor = "#B0BEC5"; 
});

// 定義「恢復原狀」按鈕的行為
resetBtn.addEventListener('click', function() {
    moodTitle.textContent = "今天心情如何？";
    moodEmoji.textContent = "😶";
    colorBox.style.backgroundColor = "transparent"; 
});