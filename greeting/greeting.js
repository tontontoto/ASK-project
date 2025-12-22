// 「こんにちは」テキスト表示コンポーネント
(function() {
    'use strict';

    /**
     * 「こんにちは」セクションを作成
     */
    function createGreetingSection() {
        const entranceSection = document.createElement('section');
        entranceSection.className = 'entrance-section';
        entranceSection.style.minHeight = '100vh';
        entranceSection.style.display = 'flex';
        entranceSection.style.flexDirection = 'column';
        entranceSection.style.justifyContent = 'center';
        entranceSection.style.alignItems = 'center';
        entranceSection.style.padding = '50px 20px';
        
        // 「こんにちは」テキストを追加
        const greetingText = document.createElement('h1');
        greetingText.className = 'greeting-text';
        greetingText.textContent = 'こんにちは';
        entranceSection.appendChild(greetingText);

        return entranceSection;
    }

    /**
     * 初期化
     */
    function initGreeting() {
        // main要素を取得または作成
        let main = document.querySelector('main');
        if (!main) {
            main = document.createElement('main');
            document.body.insertBefore(main, document.body.firstChild);
        }

        // 「こんにちは」セクションを最初に追加
        const greetingSection = createGreetingSection();
        main.insertBefore(greetingSection, main.firstChild);
    }

    // DOMContentLoaded時に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initGreeting);
    } else {
        initGreeting();
    }
})();

