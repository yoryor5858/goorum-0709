(function () {
  "use strict";

  var LANG_KEY = "pixel-grug-lang";
  var DEFAULT_LANG = "ko";
  var SUPPORTED = ["ko", "en", "ja"];

  var translations = {
    ko: {
      "meta.title": "Pixel Grug — Tiny Pixel Stories for Better Days",
      "meta.description": "AI가 매일 새로운 픽셀 친구를 만들어 주는 감성 마이크로 저널 앱. 하루 한 문장, 한 개의 픽셀 캐릭터, 그리고 작은 미소.",
      "a11y.navHome": "Pixel Grug 홈",
      "a11y.navMenu": "주요 메뉴",
      "a11y.footerMenu": "푸터 메뉴",
      "a11y.menuOpen": "메뉴 열기",
      "a11y.menuClose": "메뉴 닫기",
      "a11y.langSwitch": "언어 선택",
      "a11y.themeToggle": "테마 전환",
      "nav.about": "소개",
      "nav.features": "주요 기능",
      "nav.gallery": "픽셀 갤러리",
      "nav.audience": "타겟",
      "nav.tech": "기술 스택",
      "nav.cta": "시작하기",
      "hero.eyebrow": "Tiny Pixel Stories for Better Days",
      "hero.title": '매일 한 문장,<br />한 개의 <span class="accent">픽셀 친구</span>,<br />그리고 작은 미소.',
      "hero.lead": "<strong>Pixel Grug</strong>는 AI가 생성하는 픽셀 아트 캐릭터와 함께 매일 새로운 짧은 메시지를 전달하는 감성 마이크로 저널 앱입니다. 하루 10초, 그것이면 충분합니다.",
      "hero.ctaFeatures": "기능 둘러보기",
      "hero.ctaGallery": "픽셀 갤러리 보기",
      "hero.stat1Value": "10초",
      "hero.stat1Label": "하루 루틴",
      "hero.stat2Value": "매일",
      "hero.stat2Label": "새로운 캐릭터",
      "hero.stat3Value": "∞",
      "hero.stat3Label": "AI 변주",
      "hero.dailyLabel": "TODAY'S PIXEL",
      "hero.shuffleBtn": '<span aria-hidden="true">↻</span> 다른 친구 만나기',
      "about.eyebrow": "앱 소개",
      "about.title": "우리는 하루에도 수천 개의 정보를 소비합니다.",
      "about.sub": "하지만 하루를 바꾸는 것은 긴 글보다 짧은 한 문장, 그리고 작은 이미지일지도 모릅니다.",
      "about.quote1": "작은 용이 꽃을 들고 있을 수도 있고,",
      "about.quote2": "모험을 떠나는 슬라임이 등장할 수도 있으며,",
      "about.quote3": "작은 로봇이 오늘의 용기를 건네줄 수도 있습니다.",
      "about.step1": "오늘의 픽셀 친구를 만나고",
      "about.step2": "짧은 문장을 읽고",
      "about.step3": "오늘 하루를 시작합니다",
      "concept.eyebrow": "핵심 컨셉",
      "concept.title": '"AI가 매일 새로운 픽셀 친구를 만들어 준다."',
      "concept.desc": "매일의 메시지는 AI가 생성한 아래 요소 중 하나와 함께 제공됩니다.",
      "concept.tag1": "캐릭터",
      "concept.tag2": "아이템",
      "concept.tag3": "작은 풍경",
      "concept.tag4": "몬스터",
      "concept.tag5": "식물",
      "concept.tag6": "우주 생명체",
      "concept.note": '모든 이미지는 <strong>Gemini Nano Banana Image API</strong>를 이용하여 실시간 또는 사전 생성됩니다.',
      "features.eyebrow": "주요 기능",
      "features.title": "작지만 매일 다시 찾게 되는 경험",
      "features.f1desc": "매일 하나의 픽셀아트가 생성됩니다. 작은 용, 선인장 친구, 구름 고래, 모험 개구리, 우주 감자처럼 귀여운 캐릭터가 등장합니다.",
      "features.f2desc": "복잡한 자기계발 대신 하루의 작은 생각을 담은 매우 짧은 한 문장을 전합니다.",
      "features.f2quote": '"today small step become tomorrow mountain"',
      "features.f3desc": '매일 생성된 캐릭터는 자동으로 컬렉션에 저장됩니다. "오늘 만난 친구들"이라는 감성 도감을 완성해 보세요.',
      "features.f3alt1": "픽셀 여우",
      "features.f3alt2": "픽셀 슬라임",
      "features.f3alt3": "픽셀 우주 고양이",
      "features.f4desc": "같은 문장이라도 AI는 다른 표정, 다른 색상, 다른 소품, 다른 계절 버전을 생성합니다. 매일 조금씩 새로운 경험입니다.",
      "features.f4tag1": "표정",
      "features.f4tag2": "색상",
      "features.f4tag3": "소품",
      "features.f4tag4": "계절",
      "features.f5desc": "홈 화면에서도 오늘의 캐릭터와 오늘의 한 문장을 바로 만날 수 있습니다.",
      "features.f5alt": "위젯 속 구름 고래",
      "features.f6desc": "오늘의 픽셀 친구를 SNS 카드 형태로 저장하고 공유할 수 있습니다.",
      "gallery.eyebrow": "AI 이미지 생성",
      "gallery.title": "Gemini Nano Banana가 그리는 픽셀 세계",
      "gallery.sub": "캐릭터부터 사물, 자연, 감정까지 — AI가 매일 새로운 스타일을 생성합니다.",
      "gallery.alt1": "아기 용 픽셀 캐릭터",
      "gallery.alt2": "매직 포션과 행운의 동전 픽셀 오브젝트",
      "gallery.alt3": "꽃과 버섯 픽셀 자연물",
      "gallery.alt4": "용기를 건네는 로봇 가드너",
      "philosophy.eyebrow": "디자인 철학",
      "philosophy.title": '복잡한 기능보다<br /><span class="accent">감정 경험</span>을 디자인합니다.',
      "philosophy.desc": "우리는 사용자가 앱을 오래 사용하는 것이 아니라, 매일 다시 찾아오는 경험을 만들고 싶습니다.",
      "philosophy.big": "하루 10초. 그것이면 충분합니다.",
      "audience.eyebrow": "타겟 사용자",
      "audience.title": "이런 분들을 위해 만들었어요",
      "audience.c1title": "따뜻한 감성을 원하는 사람",
      "audience.c1desc": "AI 시대에도 사람의 온기와 감성을 그리워하는 분들을 위해.",
      "audience.c2title": "게임과 픽셀아트를 좋아하는 사람",
      "audience.c2desc": "이런 감성을 사랑하는 분들에게.",
      "audience.c3title": "기분 좋게 하루를 시작하고 싶은 직장인",
      "audience.c3desc": "복잡한 생산성 앱보다 간단한 루틴을 선호하는 분들에게.",
      "audience.c4title": "감성 디자인을 좋아하는 사람",
      "audience.c4desc": "미니멀한 서비스를 선호하는 분들에게.",
      "diff.eyebrow": "차별화 포인트",
      "diff.title": "기존 명언 앱과 무엇이 다를까요?",
      "diff.oldTitle": "기존 명언 앱",
      "diff.old1": "텍스트 중심",
      "diff.old2": "고정 이미지",
      "diff.old3": "단순 명언",
      "diff.old4": "이미지 없음",
      "diff.old5": "읽고 끝",
      "diff.newTitle": "Pixel Grug",
      "diff.new1": "AI 생성 픽셀 캐릭터 중심",
      "diff.new2": "매일 새로운 AI 이미지",
      "diff.new3": "이야기와 캐릭터가 있는 경험",
      "diff.new4": "Pixel Collection 제공",
      "diff.new5": "수집하는 재미",
      "tech.eyebrow": "기술 스택",
      "tech.title": "탄탄한 기술 위에 세운 감성",
      "tech.skiaNote": "(애니메이션)",
      "tech.flashNote": "(문장 생성)",
      "tech.imagenNote": "(향후 고품질 옵션)",
      "tech.authNote": "(선택)",
      "tech.schedulerNote": "(일일 콘텐츠 생성)",
      "vision.eyebrow": "장기 비전",
      "vision.quote": '"Duolingo가 학습 습관을 만들었다면,<br />Pixel Grug는 <span class="accent">작은 행복의 습관</span>을 만든다."',
      "vision.desc": '장기적으로 캐릭터는 사용자의 감정과 취향을 반영해 성장하는 <strong>AI Companion</strong>으로 확장됩니다. 생성형 AI + 감성 UX + 수집형 콘텐츠를 결합한, 나만의 작은 세계를 만들어 갑니다.',
      "vision.cta": "오늘의 픽셀 친구 만나기",
      "footer.tagline": "Tiny Pixel Stories for Better Days.",
      "footer.copyright": "하루 10초의 작은 행복.",
      "daily.altPrefix": "오늘의 픽셀 친구, ",
    },
    en: {
      "meta.title": "Pixel Grug — Tiny Pixel Stories for Better Days",
      "meta.description": "A warm micro-journal app where AI creates a new pixel friend every day. One sentence, one pixel character, and a small smile.",
      "a11y.navHome": "Pixel Grug home",
      "a11y.navMenu": "Main menu",
      "a11y.footerMenu": "Footer menu",
      "a11y.menuOpen": "Open menu",
      "a11y.menuClose": "Close menu",
      "a11y.langSwitch": "Language selection",
      "a11y.themeToggle": "Toggle theme",
      "nav.about": "About",
      "nav.features": "Features",
      "nav.gallery": "Gallery",
      "nav.audience": "Audience",
      "nav.tech": "Tech",
      "nav.cta": "Get Started",
      "hero.eyebrow": "Tiny Pixel Stories for Better Days",
      "hero.title": 'One sentence a day,<br />one <span class="accent">pixel friend</span>,<br />and a small smile.',
      "hero.lead": "<strong>Pixel Grug</strong> is a warm micro-journal app that delivers a short daily message alongside AI-generated pixel art characters. Ten seconds a day is all you need.",
      "hero.ctaFeatures": "Explore Features",
      "hero.ctaGallery": "View Gallery",
      "hero.stat1Value": "10 sec",
      "hero.stat1Label": "Daily routine",
      "hero.stat2Value": "Daily",
      "hero.stat2Label": "New character",
      "hero.stat3Value": "∞",
      "hero.stat3Label": "AI variations",
      "hero.dailyLabel": "TODAY'S PIXEL",
      "hero.shuffleBtn": '<span aria-hidden="true">↻</span> Meet another friend',
      "about.eyebrow": "About the App",
      "about.title": "We consume thousands of pieces of information every day.",
      "about.sub": "But what changes your day might be a short sentence and a tiny image—not a long article.",
      "about.quote1": "A small dragon might be holding a flower,",
      "about.quote2": "an adventurous slime might appear,",
      "about.quote3": "or a little robot might pass along today's courage.",
      "about.step1": "Meet today's pixel friend",
      "about.step2": "Read a short sentence",
      "about.step3": "Start your day",
      "concept.eyebrow": "Core Concept",
      "concept.title": '"AI creates a new pixel friend every day."',
      "concept.desc": "Each daily message comes with one of the AI-generated elements below.",
      "concept.tag1": "Character",
      "concept.tag2": "Item",
      "concept.tag3": "Tiny landscape",
      "concept.tag4": "Monster",
      "concept.tag5": "Plant",
      "concept.tag6": "Space creature",
      "concept.note": 'All images are generated in real time or pre-generated using the <strong>Gemini Nano Banana Image API</strong>.',
      "features.eyebrow": "Key Features",
      "features.title": "Small, but something you return to every day",
      "features.f1desc": "One pixel art piece is generated each day—cute characters like a small dragon, cactus friend, cloud whale, adventure frog, or space potato.",
      "features.f2desc": "Instead of complex self-help, it delivers a very short sentence with a small thought for the day.",
      "features.f2quote": '"today small step become tomorrow mountain"',
      "features.f3desc": 'Characters generated each day are automatically saved to your collection. Build an emotional catalog of "friends you met today."',
      "features.f3alt1": "Pixel fox",
      "features.f3alt2": "Pixel slime",
      "features.f3alt3": "Pixel space cat",
      "features.f4desc": "Even with the same sentence, AI generates different expressions, colors, props, and seasonal versions. A slightly new experience every day.",
      "features.f4tag1": "Expression",
      "features.f4tag2": "Color",
      "features.f4tag3": "Props",
      "features.f4tag4": "Season",
      "features.f5desc": "Meet today's character and sentence right from your home screen.",
      "features.f5alt": "Cloud whale in widget",
      "features.f6desc": "Save and share today's pixel friend as an SNS card.",
      "gallery.eyebrow": "AI Image Generation",
      "gallery.title": "A pixel world drawn by Gemini Nano Banana",
      "gallery.sub": "From characters to objects, nature, and emotions—AI generates a new style every day.",
      "gallery.alt1": "Baby dragon pixel character",
      "gallery.alt2": "Magic potion and lucky coin pixel objects",
      "gallery.alt3": "Flower and mushroom pixel nature",
      "gallery.alt4": "Robot gardener passing courage",
      "philosophy.eyebrow": "Design Philosophy",
      "philosophy.title": 'We design <span class="accent">emotional experiences</span><br />over complex features.',
      "philosophy.desc": "We don't want users to spend a long time in the app—we want them to come back every day.",
      "philosophy.big": "Ten seconds a day. That's enough.",
      "audience.eyebrow": "Target Audience",
      "audience.title": "Made for people like you",
      "audience.c1title": "Those who want warm emotion",
      "audience.c1desc": "For people who still crave human warmth and feeling in the AI era.",
      "audience.c2title": "Game and pixel art lovers",
      "audience.c2desc": "For those who love this kind of aesthetic.",
      "audience.c3title": "Workers who want a good start",
      "audience.c3desc": "For people who prefer a simple routine over complex productivity apps.",
      "audience.c4title": "Emotional design enthusiasts",
      "audience.c4desc": "For those who prefer minimal, thoughtful services.",
      "diff.eyebrow": "Differentiation",
      "diff.title": "How is it different from quote apps?",
      "diff.oldTitle": "Traditional quote apps",
      "diff.old1": "Text-focused",
      "diff.old2": "Fixed images",
      "diff.old3": "Simple quotes",
      "diff.old4": "No images",
      "diff.old5": "Read and done",
      "diff.newTitle": "Pixel Grug",
      "diff.new1": "AI-generated pixel characters",
      "diff.new2": "New AI image every day",
      "diff.new3": "Stories and characters",
      "diff.new4": "Pixel Collection",
      "diff.new5": "Joy of collecting",
      "tech.eyebrow": "Tech Stack",
      "tech.title": "Emotion built on solid technology",
      "tech.skiaNote": "(animation)",
      "tech.flashNote": "(sentence generation)",
      "tech.imagenNote": "(future high-quality option)",
      "tech.authNote": "(optional)",
      "tech.schedulerNote": "(daily content generation)",
      "vision.eyebrow": "Long-term Vision",
      "vision.quote": '"If Duolingo built learning habits,<br />Pixel Grug builds <span class="accent">small happiness habits</span>."',
      "vision.desc": 'Over time, characters grow into an <strong>AI Companion</strong> that reflects your emotions and tastes. Generative AI + emotional UX + collectible content—your own little world.',
      "vision.cta": "Meet today's pixel friend",
      "footer.tagline": "Tiny Pixel Stories for Better Days.",
      "footer.copyright": "A small happiness in ten seconds a day.",
      "daily.altPrefix": "Today's pixel friend, ",
    },
    ja: {
      "meta.title": "Pixel Grug — Tiny Pixel Stories for Better Days",
      "meta.description": "AIが毎日新しいピクセルフレンドを作ってくれる、感性マイクロジャーナルアプリ。一日一文、ピクセルキャラクターひとつ、そして小さな笑顔。",
      "a11y.navHome": "Pixel Grug ホーム",
      "a11y.navMenu": "メインメニュー",
      "a11y.footerMenu": "フッターメニュー",
      "a11y.menuOpen": "メニューを開く",
      "a11y.menuClose": "メニューを閉じる",
      "a11y.langSwitch": "言語選択",
      "a11y.themeToggle": "テーマ切替",
      "nav.about": "紹介",
      "nav.features": "主な機能",
      "nav.gallery": "ギャラリー",
      "nav.audience": "ターゲット",
      "nav.tech": "技術スタック",
      "nav.cta": "始める",
      "hero.eyebrow": "Tiny Pixel Stories for Better Days",
      "hero.title": '毎日一文、<br /><span class="accent">ピクセルフレンド</span>ひとつ、<br />そして小さな笑顔。',
      "hero.lead": "<strong>Pixel Grug</strong>は、AIが生成するピクセルアートキャラクターと一緒に、毎日新しい短いメッセージを届ける感性マイクロジャーナルアプリです。一日10秒、それで十分です。",
      "hero.ctaFeatures": "機能を見る",
      "hero.ctaGallery": "ギャラリーを見る",
      "hero.stat1Value": "10秒",
      "hero.stat1Label": "一日のルーティン",
      "hero.stat2Value": "毎日",
      "hero.stat2Label": "新しいキャラ",
      "hero.stat3Value": "∞",
      "hero.stat3Label": "AIバリエーション",
      "hero.dailyLabel": "TODAY'S PIXEL",
      "hero.shuffleBtn": '<span aria-hidden="true">↻</span> 別のフレンドに会う',
      "about.eyebrow": "アプリ紹介",
      "about.title": "私たちは一日に何千もの情報を消費します。",
      "about.sub": "でも一日を変えるのは、長い文章より短い一文と小さな画像かもしれません。",
      "about.quote1": "小さなドラゴンが花を持っているかもしれないし、",
      "about.quote2": "冒険するスライムが現れるかもしれないし、",
      "about.quote3": "小さなロボットが今日の勇気を届けてくれるかもしれません。",
      "about.step1": "今日のピクセルフレンドに会い",
      "about.step2": "短い一文を読み",
      "about.step3": "今日の一日を始めます",
      "concept.eyebrow": "コアコンセプト",
      "concept.title": "「AIが毎日新しいピクセルフレンドを作ってくれる。」",
      "concept.desc": "毎日のメッセージは、AIが生成した下記の要素のひとつと一緒に届けられます。",
      "concept.tag1": "キャラクター",
      "concept.tag2": "アイテム",
      "concept.tag3": "小さな風景",
      "concept.tag4": "モンスター",
      "concept.tag5": "植物",
      "concept.tag6": "宇宙生物",
      "concept.note": 'すべての画像は<strong>Gemini Nano Banana Image API</strong>を利用してリアルタイムまたは事前生成されます。',
      "features.eyebrow": "主な機能",
      "features.title": "小さいけれど、毎日また訪れたくなる体験",
      "features.f1desc": "毎日ひとつのピクセルアートが生成されます。小さなドラゴン、サボテンの友達、雲のクジラ、冒険カエル、宇宙イモのようなかわいいキャラクターが登場します。",
      "features.f2desc": "複雑な自己啓発の代わりに、一日の小さな思いを込めたとても短い一文を届けます。",
      "features.f2quote": '"today small step become tomorrow mountain"',
      "features.f3desc": "毎日生成されたキャラクターは自動的にコレクションに保存されます。「今日会った友達」という感性図鑑を完成させましょう。",
      "features.f3alt1": "ピクセルキツネ",
      "features.f3alt2": "ピクセルスライム",
      "features.f3alt3": "ピクセル宇宙猫",
      "features.f4desc": "同じ一文でも、AIは違う表情、色、小道具、季節バージョンを生成します。毎日少しずつ新しい体験です。",
      "features.f4tag1": "表情",
      "features.f4tag2": "色",
      "features.f4tag3": "小道具",
      "features.f4tag4": "季節",
      "features.f5desc": "ホーム画面からも今日のキャラクターと一文にすぐ出会えます。",
      "features.f5alt": "ウィジェットの雲のクジラ",
      "features.f6desc": "今日のピクセルフレンドをSNSカード形式で保存・共有できます。",
      "gallery.eyebrow": "AI画像生成",
      "gallery.title": "Gemini Nano Bananaが描くピクセル世界",
      "gallery.sub": "キャラクターから物、自然、感情まで—AIが毎日新しいスタイルを生成します。",
      "gallery.alt1": "赤ちゃんドラゴンのピクセルキャラ",
      "gallery.alt2": "魔法のポーションと幸運のコイン",
      "gallery.alt3": "花とキノコのピクセル自然",
      "gallery.alt4": "勇気を届けるロボットガーデナー",
      "philosophy.eyebrow": "デザイン哲学",
      "philosophy.title": '複雑な機能より<br /><span class="accent">感情体験</span>をデザインします。',
      "philosophy.desc": "ユーザーにアプリを長く使ってもらうのではなく、毎日また訪れたくなる体験を作りたいのです。",
      "philosophy.big": "一日10秒。それで十分です。",
      "audience.eyebrow": "ターゲットユーザー",
      "audience.title": "こんな方のために作りました",
      "audience.c1title": "温かい感性を求める人",
      "audience.c1desc": "AI時代でも人の温もりと感性を恋しがる方のために。",
      "audience.c2title": "ゲームとピクセルアートが好きな人",
      "audience.c2desc": "こういう感性を愛する方に。",
      "audience.c3title": "気持ちよく一日を始めたい社会人",
      "audience.c3desc": "複雑な生産性アプリよりシンプルなルーティンを好む方に。",
      "audience.c4title": "感性デザインが好きな人",
      "audience.c4desc": "ミニマルなサービスを好む方に。",
      "diff.eyebrow": "差別化ポイント",
      "diff.title": "既存の名言アプリと何が違う？",
      "diff.oldTitle": "既存の名言アプリ",
      "diff.old1": "テキスト中心",
      "diff.old2": "固定画像",
      "diff.old3": "シンプルな名言",
      "diff.old4": "画像なし",
      "diff.old5": "読んで終わり",
      "diff.newTitle": "Pixel Grug",
      "diff.new1": "AI生成ピクセルキャラ中心",
      "diff.new2": "毎日新しいAI画像",
      "diff.new3": "物語とキャラクターのある体験",
      "diff.new4": "Pixel Collection提供",
      "diff.new5": "コレクションの楽しみ",
      "tech.eyebrow": "技術スタック",
      "tech.title": "堅実な技術の上に築いた感性",
      "tech.skiaNote": "(アニメーション)",
      "tech.flashNote": "(文生成)",
      "tech.imagenNote": "(将来の高品質オプション)",
      "tech.authNote": "(任意)",
      "tech.schedulerNote": "(日次コンテンツ生成)",
      "vision.eyebrow": "長期ビジョン",
      "vision.quote": "「Duolingoが学習習慣を作ったなら、<br />Pixel Grugは<span class=\"accent\">小さな幸せの習慣</span>を作る。」",
      "vision.desc": "長期的にキャラクターはユーザーの感情と好みを反映して成長する<strong>AI Companion</strong>に拡張されます。生成AI + 感性UX + コレクション型コンテンツで、あなただけの小さな世界を作ります。",
      "vision.cta": "今日のピクセルフレンドに会う",
      "footer.tagline": "Tiny Pixel Stories for Better Days.",
      "footer.copyright": "一日10秒の小さな幸せ。",
      "daily.altPrefix": "今日のピクセルフレンド、",
    },
  };

  var dailyFriends = {
    ko: [
      { img: "assets/hero-dragon.png", name: "🐉 작은 용", altName: "꽃을 든 아기 용", quote: "today small step become tomorrow mountain" },
      { img: "assets/char-fox.png", name: "🦊 작은 여우", altName: "작은 여우", quote: "kind word grow biggest tree" },
      { img: "assets/char-spacecat.png", name: "🚀 우주 고양이", altName: "우주 고양이", quote: "brave hearts start with small steps" },
      { img: "assets/char-robot.png", name: "🤖 로봇 가드너", altName: "로봇 가드너", quote: "grow slow, bloom sure" },
      { img: "assets/char-slime.png", name: "🟢 모험 슬라임", altName: "모험 슬라임", quote: "small joy make a big smile" },
      { img: "assets/char-cloudwhale.png", name: "☁️ 구름 고래", altName: "구름 고래", quote: "float light, dream big" },
    ],
    en: [
      { img: "assets/hero-dragon.png", name: "🐉 Baby Dragon", altName: "baby dragon with a flower", quote: "today small step become tomorrow mountain" },
      { img: "assets/char-fox.png", name: "🦊 Small Fox", altName: "small fox", quote: "kind word grow biggest tree" },
      { img: "assets/char-spacecat.png", name: "🚀 Space Cat", altName: "space cat", quote: "brave hearts start with small steps" },
      { img: "assets/char-robot.png", name: "🤖 Robot Gardener", altName: "robot gardener", quote: "grow slow, bloom sure" },
      { img: "assets/char-slime.png", name: "🟢 Adventure Slime", altName: "adventure slime", quote: "small joy make a big smile" },
      { img: "assets/char-cloudwhale.png", name: "☁️ Cloud Whale", altName: "cloud whale", quote: "float light, dream big" },
    ],
    ja: [
      { img: "assets/hero-dragon.png", name: "🐉 小さなドラゴン", altName: "花を持った赤ちゃんドラゴン", quote: "today small step become tomorrow mountain" },
      { img: "assets/char-fox.png", name: "🦊 小さなキツネ", altName: "小さなキツネ", quote: "kind word grow biggest tree" },
      { img: "assets/char-spacecat.png", name: "🚀 宇宙猫", altName: "宇宙猫", quote: "brave hearts start with small steps" },
      { img: "assets/char-robot.png", name: "🤖 ロボットガーデナー", altName: "ロボットガーデナー", quote: "grow slow, bloom sure" },
      { img: "assets/char-slime.png", name: "🟢 冒険スライム", altName: "冒険スライム", quote: "small joy make a big smile" },
      { img: "assets/char-cloudwhale.png", name: "☁️ 雲のクジラ", altName: "雲のクジラ", quote: "float light, dream big" },
    ],
  };

  function t(key, lang) {
    lang = lang || getLang();
    var dict = translations[lang] || translations[DEFAULT_LANG];
    return dict[key] != null ? dict[key] : (translations[DEFAULT_LANG][key] || key);
  }

  function getLang() {
    var stored = localStorage.getItem(LANG_KEY);
    return SUPPORTED.indexOf(stored) !== -1 ? stored : DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key, lang);
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = t(key, lang);
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      if (!spec) return;
      var parts = spec.split(":");
      if (parts.length === 2) el.setAttribute(parts[1], t(parts[0], lang));
    });

    var title = t("meta.title", lang);
    document.title = title;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t("meta.description", lang));

    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      btn.classList.toggle("is-active", isActive);
    });

    window.dispatchEvent(new CustomEvent("languagechange", { detail: { lang: lang } }));
  }

  function initLangSwitch() {
    var langSwitch = document.getElementById("langSwitch");
    if (!langSwitch) return;

    applyLanguage(getLang());

    langSwitch.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang"));
      });
    });
  }

  function getDailyFriends(lang) {
    lang = lang || getLang();
    return dailyFriends[lang] || dailyFriends[DEFAULT_LANG];
  }

  window.PixelGrugI18n = {
    LANG_KEY: LANG_KEY,
    DEFAULT_LANG: DEFAULT_LANG,
    SUPPORTED: SUPPORTED,
    t: t,
    getLang: getLang,
    applyLanguage: applyLanguage,
    getDailyFriends: getDailyFriends,
    initLangSwitch: initLangSwitch,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLangSwitch);
  } else {
    initLangSwitch();
  }
})();
