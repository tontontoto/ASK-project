// デバッグ用ナンバリングボタンコンポーネント
(function() {
    'use strict';

    let buttonCounter = 1; // ボタンのナンバリング用カウンター

    /**
     * ナンバリングされたボタンを作成
     * @param {number} count - 作成するボタンの数
     * @returns {HTMLElement} ボタンコンテナ
     */
    function createNumberedButtons(count = 1) {
        const container = document.createElement('div');
        container.className = 'numbered-buttons-container';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.gap = '10px';
        container.style.padding = '20px';
        container.style.justifyContent = 'center';

        for (let i = 0; i < count; i++) {
            const button = document.createElement('button');
            button.className = 'numbered-button';
            button.id = `numbered-button-${buttonCounter}`;
            button.textContent = `Button ${buttonCounter}`;
            button.type = 'button';
            
            // クリックイベント：サイトを伸ばす
            button.addEventListener('click', function() {
                extendSite();
            });

            container.appendChild(button);
            buttonCounter++;
        }

        return container;
    }

    /**
     * サイトを伸ばす機能
     */
    function extendSite() {
        const main = document.querySelector('main');
        if (!main) return;

        // 新しいセクションを作成
        const newSection = document.createElement('section');
        newSection.className = 'extended-section';
        
        // セクションの高さをランダムに設定（500px〜2000px）
        const randomHeight = Math.floor(Math.random() * (2000 - 500 + 1)) + 500;
        newSection.style.minHeight = randomHeight + 'px';
        newSection.style.padding = '50px 20px';
        newSection.style.display = 'flex';
        newSection.style.flexDirection = 'column';
        newSection.style.justifyContent = 'center';
        newSection.style.alignItems = 'center';
        newSection.style.position = 'relative';

        // セクション内にランダムにボタンを配置
        const buttonCount = Math.floor(Math.random() * 5) + 1; // 1〜5個のボタン
        const buttonContainer = createNumberedButtons(buttonCount);
        newSection.appendChild(buttonContainer);

        // mainに追加
        main.appendChild(newSection);

        // サイトの高さを更新
        updateSiteHeight();
    }

    /**
     * サイトの高さを更新
     */
    function updateSiteHeight() {
        const main = document.querySelector('main');
        if (main) {
            const currentHeight = main.scrollHeight;
            document.body.style.minHeight = currentHeight + 'px';
        }
    }

    /**
     * 初期化
     */
    function initNumberedButtons() {
        // main要素を作成（存在しない場合）
        let main = document.querySelector('main');
        if (!main) {
            main = document.createElement('main');
            document.body.appendChild(main);
        }

        // 初期のサイトの高さを設定（10000px程度）
        main.style.minHeight = '10000px';
        document.body.style.minHeight = '10000px';

        // 最初のボタンセクションを作成
        const initialSection = document.createElement('section');
        initialSection.className = 'initial-section';
        initialSection.style.minHeight = '100vh';
        initialSection.style.display = 'flex';
        initialSection.style.flexDirection = 'column';
        initialSection.style.justifyContent = 'center';
        initialSection.style.alignItems = 'center';
        initialSection.style.padding = '50px 20px';

        // 最初のボタンを配置
        const initialButton = createNumberedButtons(1);
        initialSection.appendChild(initialButton);
        main.appendChild(initialSection);
    }

    // DOMContentLoaded時に初期化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNumberedButtons);
    } else {
        initNumberedButtons();
    }
})();

