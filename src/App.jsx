import React, { useState, useEffect, useRef } from 'react';
import Greeting from './components/Greeting';
import TauntButton from './components/TauntButton';
import Header from './components/Header';
import ScrollSection from './components/ScrollSection';
import MessagePopup from './components/MessagePopup';
import Navigation from './components/Navigation';
import FollowButton from './components/FollowButton';
import CountdownButton from './components/CountdownButton';
import './styles/index.css';

// 画像のインポート
import catImage from './images/cat.jpg';
import kurimatuImage from './images/kurimatu.jpg';
import zundamonImage from './images/zundamon.jpg';

// 画像の配列
const images = [catImage, kurimatuImage, zundamonImage];

// 煽り文の配列（短い文章）
const insults = [
  { id: 1, type: "cold", text: "ここ、お前の居場所じゃないよ。" },
  { id: 2, type: "waste", text: "時間をドブに捨ててる気分はどう？" },
  { id: 3, type: "refusal", text: "お呼びじゃないんだけど。" },
  { id: 4, type: "pity", text: "よっぽど暇なんだね。" },
  { id: 5, type: "creepy", text: "え、何しに来たの？" },
  { id: 6, type: "sarcasm", text: "いらっしゃい。" },
  { id: 7, type: "denial", text: "誰も君のこと歓迎してないよ。" },
  { id: 8, type: "provocation", text: "まだ居座るつもり？" },
  { id: 9, type: "intellectual", text: "時間の無駄だから。" },
  { id: 10, type: "ruthless", text: "帰れ。" }
];

// ボタンメッセージの配列
const buttonMessages = [
  "まだ終わらないよ？",
  "戻ろうとしてんの？",
  "進んだ気がした？ｗ",
  "同じ場所だあああ",
  "出口はないけど、",
  "よく押したな",
  "まだ続く",
  "逃げるな。",
  "よくおしたな",
  "短くなると思った？"
];

// パステルカラーの配列
const pastelColors = [
  '#FFE5E5', // 薄いピンク
  '#E5F3FF', // 薄い青
  '#E5FFE5', // 薄い緑
  '#FFF5E5', // 薄いオレンジ
  '#F0E5FF', // 薄い紫
  '#FFE5F0', // 薄いローズ
  '#E5FFFF', // 薄いシアン
  '#FFF0E5', // 薄いクリーム
  '#E5FFE5', // 薄いミント
  '#FFE5FF'  // 薄いラベンダー
];

// スクロール追従ボタン用の煽り文
const followTaunts = [
  "押さなくていいよ",
  "どうせ進むだけ",
  "それ意味ある？",
  "戻れないけど",
  "見てるだけ？",
  "まだやるの？",
  "通り過ぎるんだ",
  "ここ押す？"
];

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isNavigationVisible, setIsNavigationVisible] = useState(false);
  const [scrollSections, setScrollSections] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupImage, setPopupImage] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // 初期は白
  const [followButton, setFollowButton] = useState(null); // スクロール追従ボタン
  const [showCountdownButton, setShowCountdownButton] = useState(true); // カウントダウンボタンの表示状態
  const lastScrollYRef = useRef(0);
  const scrollThresholdRef = useRef(500);
  const recentButtonTypesRef = useRef([]); // 最近表示されたボタンタイプの履歴
  const recentInsultIdsRef = useRef([]); // 最近表示された煽り文のID履歴
  const buttonClickCountRef = useRef(0); // ボタンクリック回数
  const colorChangeButtonIdRef = useRef(null); // 色変更ボタンのIDを保持
  const followButtonBaseScrollRef = useRef(null);
  const followButtonBaseTopRef = useRef(null);

  // Headerを表示/非表示する機能
  const toggleHeader = () => {
    setIsHeaderVisible(prev => !prev);
  };

  // Headerを閉じる機能
  const closeHeader = () => {
    setIsHeaderVisible(false);
  };

  // ナビゲーションを表示/非表示する機能
  const toggleNavigation = () => {
    setIsNavigationVisible(prev => !prev);
  };

  // ナビゲーションを閉じる機能
  const closeNavigation = () => {
    setIsNavigationVisible(false);
  };

  // ポップアップメッセージを表示する機能
  const showMessage = (message) => {
    setPopupMessage(message);
    setPopupImage(null);
    setIsPopupVisible(true);
  };

  // ポップアップ画像を表示する機能
  const showImage = (image) => {
    setPopupImage(image);
    setPopupMessage('');
    setIsPopupVisible(true);
  };

  // ポップアップを閉じる機能
  const closePopup = () => {
    setIsPopupVisible(false);
    setPopupMessage('');
    setPopupImage(null);
  };

  // 背景色を変更する機能
  const changeBackgroundColor = (buttonId) => {
    // 同じボタンがクリックされた場合は何もしない
    if (colorChangeButtonIdRef.current === buttonId) {
      showMessage('同じボタンです');
      return;
    }
    
    // 新しいボタンがクリックされた場合、IDを更新して色を変更
    colorChangeButtonIdRef.current = buttonId;
    const randomColor = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    setBackgroundColor(randomColor);
    showMessage('色が変わりました');
  };

  // km計算
  const kmNow = () => {
    return window.scrollY / 1000;
  };

  // スクロール追従ボタンのクリック処理
  const handleFollowButtonClick = (buttonType) => {
    buttonClickCountRef.current++;
    const lastKnownKm = kmNow();
    let message = '';

    if (buttonType === "distance") {
      message = `${lastKnownKm.toFixed(1)} km 進んだ`;
    } else if (buttonType === "record") {
      message = `ボタンを ${buttonClickCountRef.current} 回押した<br>進んだ距離：${lastKnownKm.toFixed(1)} km`;
    } else if (buttonType === "progress") {
      message = `たぶん<br>${lastKnownKm.toFixed(1)} km<br>くらい`;
    } else if (buttonType === "taunt") {
      message = followTaunts[Math.floor(Math.random() * followTaunts.length)];
    }

    showMessage(message);
    setFollowButton(null);
    followButtonBaseScrollRef.current = null;
    followButtonBaseTopRef.current = null;
  };

  // スクロール追従ボタンを生成
  const spawnFollowButton = () => {
    if (followButton) return;

    const buttonId = Date.now();
    const left = Math.random() * (window.innerWidth - 200);
    const top = window.scrollY + window.innerHeight * 0.6;

    followButtonBaseScrollRef.current = window.scrollY;
    followButtonBaseTopRef.current = top;

    setFollowButton({
      id: buttonId,
      left: left,
      baseScroll: followButtonBaseScrollRef.current,
      baseTop: followButtonBaseTopRef.current
    });
  };

  // ボタンクリック時の処理
  const handleButtonClick = (buttonType, buttonId = null) => {
    buttonClickCountRef.current++;
    
    // 色変更ボタンの場合
    if (buttonType === 'colorchange') {
      if (buttonId) {
        changeBackgroundColor(buttonId);
      }
      return;
    }
    
    // ナビゲーションボタンの場合
    if (buttonType === 'navigation') {
      toggleNavigation();
      return;
    }
    
    // TryButtonの場合はheaderを表示
    if (buttonType === 'try') {
      toggleHeader();
      return;
    }
    
    // ページトップに戻るボタンの場合
    if (buttonType === 'backtotop') {
      alert('あーあ、ページの最初にもどちゃった');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    // その他のボタンの場合は画像を表示
    const randomImage = images[Math.floor(Math.random() * images.length)];
    showImage(randomImage);
  };

  // 被りを避けてボタンタイプを選択する関数
  const selectButtonType = () => {
    const buttonTypes = ['newupdate', 'try', 'get', 'omikuji', 'oseyo', 'colorchange', 'navigation', 'backtotop'];
    const recentTypes = recentButtonTypesRef.current;
    const maxRecentCount = 3; // 直近3個のボタンタイプを避ける
    
    // 最近表示されたボタンタイプを除外
    const availableTypes = buttonTypes.filter(type => !recentTypes.includes(type));
    
    // 利用可能なタイプがない場合は、すべてのタイプから選択
    const typesToChooseFrom = availableTypes.length > 0 ? availableTypes : buttonTypes;
    
    // ランダムに選択
    const selectedType = typesToChooseFrom[Math.floor(Math.random() * typesToChooseFrom.length)];
    
    // 履歴を更新（最大3個まで保持）
    recentButtonTypesRef.current = [
      selectedType,
      ...recentTypes.slice(0, maxRecentCount - 1)
    ];
    
    return selectedType;
  };

  // 被りを避けて煽り文を選択する関数
  const selectInsult = () => {
    const recentIds = recentInsultIdsRef.current;
    const maxRecentCount = 5; // 直近5個の煽り文を避ける
    
    // 最近表示された煽り文のIDを除外
    const availableInsults = insults.filter(insult => !recentIds.includes(insult.id));
    
    // 利用可能な煽り文がない場合は、すべての煽り文から選択
    const insultsToChooseFrom = availableInsults.length > 0 ? availableInsults : insults;
    
    // ランダムに選択
    const selectedInsult = insultsToChooseFrom[Math.floor(Math.random() * insultsToChooseFrom.length)];
    
    // 履歴を更新（最大5個まで保持）
    recentInsultIdsRef.current = [
      selectedInsult.id,
      ...recentIds.slice(0, maxRecentCount - 1)
    ];
    
    return selectedInsult;
  };

  // 初期セクションを生成（画面に入る前に配置）
  useEffect(() => {
    const initialSections = [];
    const initialSectionCount = 10; // 初期セクション数
    
    for (let i = 0; i < initialSectionCount; i++) {
      // ランダムでデザインボタンを含むかどうか（30%の確率）
      const hasRandomButton = Math.random() < 0.3;
      // ランダムでInputCheckを含むかどうか（10%の確率）
      const hasInputCheck = Math.random() < 0.1;
      
      let buttonType = null;
      let insultText = null;
      
      if (hasRandomButton) {
        buttonType = selectButtonType();
      } else if (!hasInputCheck) {
        // InputCheckがない場合、50%の確率で煽り文を表示、50%は空のセクション
        const showInsult = Math.random() < 0.5;
        if (showInsult) {
          const selectedInsult = selectInsult();
          insultText = selectedInsult.text;
        }
      }
      
      initialSections.push({
        id: `initial-${i}-${Date.now()}`,
        hasRandomButton: hasRandomButton,
        buttonType: buttonType,
        insultText: insultText,
        hasInputCheck: hasInputCheck
      });
    }
    
    setScrollSections(initialSections);
  }, []);

  // 新しいセクションを追加する関数
  const addNewSection = () => {
    // ランダムでデザインボタンを含むかどうか（30%の確率）
    const hasRandomButton = Math.random() < 0.3;
    // ランダムでInputCheckを含むかどうか（10%の確率）
    const hasInputCheck = Math.random() < 0.1;
    
    let buttonType = null;
    let insultText = null;
    
    if (hasRandomButton) {
      buttonType = selectButtonType();
    } else if (!hasInputCheck) {
      // InputCheckがない場合、50%の確率で煽り文を表示、50%は空のセクション
      const showInsult = Math.random() < 0.5;
      if (showInsult) {
        const selectedInsult = selectInsult();
        insultText = selectedInsult.text;
      }
    }
    
    setScrollSections(prev => [
      ...prev,
      {
        id: Date.now() + Math.random(),
        hasRandomButton: hasRandomButton,
        buttonType: buttonType,
        insultText: insultText,
        hasInputCheck: hasInputCheck
      }
    ]);
  };

  // スクロールイベントの処理
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;
      const bottom = currentScrollY + window.innerHeight;
      const height = document.documentElement.scrollHeight;
      
      // カウントダウンボタンは常に表示
      
      // ページの最下部に近づいたら、新しいセクションを追加（無限スクロール）
      if (height - bottom < 600) {
        addNewSection();
      }
      
      // スクロールが一定量進んだら、新しいセクションを追加
      if (scrollDelta > scrollThresholdRef.current) {
        addNewSection();
        
        lastScrollYRef.current = currentScrollY;
        // 次のセクション追加までの閾値をリセット
        scrollThresholdRef.current = 500 + Math.random() * 500; // 500px〜1000pxのランダム
      }

      // スクロール追従ボタンをランダムに生成（2.5%の確率）
      if (!followButton && Math.random() < 0.025) {
        spawnFollowButton();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [followButton, showCountdownButton]);

  return (
    <div className="app" style={{ 
      backgroundColor: backgroundColor,
      transition: 'background-color 2s ease'
    }}>
      <Header isVisible={isHeaderVisible} onClose={closeHeader} />
      
      <main>
        <Greeting message="こんにちは" />
        <Greeting message="なんでこのサイトに来たの？" />
        <Greeting message="このサイトに終わりはないよ" />

        {scrollSections.map(section => (
          <ScrollSection
            key={section.id}
            id={section.id}
            hasRandomButton={section.hasRandomButton}
            buttonType={section.buttonType}
            insultText={section.insultText}
            hasInputCheck={section.hasInputCheck}
            onToggleHeader={toggleHeader}
            isHeaderVisible={isHeaderVisible}
            onButtonClick={handleButtonClick}
          />
        ))}
        
        {showCountdownButton && (
          <section style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CountdownButton />
          </section>
        )}
      </main>
      
      <TauntButton />
      {followButton && (
        <FollowButton
          onButtonClick={handleFollowButtonClick}
          baseScroll={followButton.baseScroll}
          baseTop={followButton.baseTop}
          left={followButton.left}
        />
      )}
      <Navigation 
        isVisible={isNavigationVisible} 
        onClose={closeNavigation}
      />
      <MessagePopup 
        message={popupMessage}
        image={popupImage}
        isVisible={isPopupVisible} 
        onClose={closePopup}
      />
    </div>
  );
}

export default App;

