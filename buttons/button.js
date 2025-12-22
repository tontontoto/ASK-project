// 煽り文の配列（10個）
const tauntMessages = [
    "まだやる気ないの？",
    "その程度？",
    "もっと本気出せるでしょ？",
    "本当にそれでいいの？",
    "もっと頑張れるはず！",
    "まだまだ余裕があるでしょ？",
    "本気を見せてよ！",
    "その程度の実力？",
    "もっと上を目指そうよ！",
    "諦めるのはまだ早い！"
];

// ランダムな煽り文を取得する関数
function getRandomTaunt() {
    const randomIndex = Math.floor(Math.random() * tauntMessages.length);
    return tauntMessages[randomIndex];
}

// ボタンのテキストをランダムな煽り文に変更する関数
function updateButtonText() {
    const button = document.getElementById('tauntButton');
    if (button) {
        button.textContent = getRandomTaunt();
    }
}

// ページ読み込み時にボタンのテキストを設定
window.addEventListener('DOMContentLoaded', function() {
    updateButtonText();
});

