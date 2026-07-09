# Pixel Grug — Landing Page

> **Tiny Pixel Stories for Better Days.**
> 매일 한 문장, 한 개의 픽셀 캐릭터, 그리고 작은 미소.

AI가 매일 새로운 픽셀 친구를 만들어 주는 감성 마이크로 저널 앱 **Pixel Grug**의 제품 소개 랜딩페이지입니다. 순수 HTML/CSS/JS로 제작되었으며, 디자인 테마는 **Anthropic Light / Dark Theme**를 따릅니다.

## 미리보기

![Pixel Grug 히어로 캐릭터](assets/hero-dragon.png)

## 기술 스택

- **HTML5** — 시맨틱 마크업, `data-i18n` 다국어 마크업
- **CSS3** — CSS 커스텀 프로퍼티(디자인 토큰), Grid/Flex 레이아웃, 반응형, 라이트/다크 테마
- **Vanilla JavaScript** — 프레임워크 없는 순수 인터랙션
- **Google Fonts** — Fraunces(세리프), Inter(산세리프), Press Start 2P(픽셀)
- **AI 픽셀아트 에셋** — 생성형 이미지로 캐릭터/오브젝트 제작

## 프로젝트 구조

```
goorum-0709/
├── index.html          # 12개 섹션 시맨틱 마크업 + 언어/테마 설정 UI
├── css/
│   └── styles.css      # 라이트/다크 디자인 토큰 + 전체 스타일 + 반응형
├── js/
│   ├── main.js         # 모바일 메뉴, 스크롤 리빌, Daily Pixel 데모
│   ├── i18n.js         # 한국어/영어/일본어 번역 + localStorage
│   └── theme.js        # 라이트/다크 테마 전환 + localStorage
├── assets/             # AI 생성 픽셀아트 이미지 (8종)
│   ├── hero-dragon.png
│   ├── char-fox.png
│   ├── char-spacecat.png
│   ├── char-robot.png
│   ├── char-slime.png
│   ├── char-cloudwhale.png
│   ├── obj-nature.png
│   └── obj-items.png
├── ref/                # 제품 기획 스펙 문서
└── README.md
```

## 디자인 (Anthropic Light / Dark Theme)

CSS 커스텀 프로퍼티(`:root`, `[data-theme="dark"]`)로 디자인 토큰을 정의했습니다.

| 항목 | Light | Dark |
| --- | --- | --- |
| 배경 | 웜 아이보리 `#F0EEE6` | 웜 차콜 `#141310` |
| 카드 | `#FAF9F5` | `#24211C` |
| 텍스트 | 잉크 `#1A1915` | `#F4F1E9` |
| 액센트 | 클레이·코랄 `#CC785C` | `#D4896A` |
| 폰트 | 헤딩 Fraunces · 본문 Inter · 강조 Press Start 2P | 동일 |
| 스타일 | 넉넉한 여백, 소프트 라운드, 미묘한 그림자 | 동일 |

## 주요 섹션

1. **고정 네비게이션** — 스크롤 시 배경/그림자 변화 + 언어/테마 설정
2. **히어로** — 인터랙티브 "오늘의 픽셀" 카드 + CTA
3. **앱 소개** — 인용 블록 + 3단계 루틴
4. **핵심 컨셉** — "AI가 매일 새로운 픽셀 친구를 만들어 준다" (다크 대비 섹션)
5. **주요 기능 6종** — Daily Pixel / Tiny Wisdom / Pixel Collection / AI Variation / Widget / Share Card
6. **AI 픽셀 갤러리** — Character / Object / Nature / Emotion
7. **디자인 철학** — "하루 10초, 그것이면 충분합니다"
8. **타겟 사용자** — 레퍼런스 앱 태그 포함 4종
9. **차별화 포인트** — 기존 명언 앱 vs Pixel Grug 대비
10. **기술 스택** — Front-end / AI / Backend
11. **장기 비전** — Duolingo 인용 + 최종 CTA
12. **푸터**

## 다국어 / 테마 지원

### 다국어 (i18n)

- 지원 언어: **한국어(기본)** / **영어** / **일본어**
- 네비게이션 `KO | EN | JP` 버튼으로 전환
- `js/i18n.js` — 번역 데이터 + `applyLanguage()` + `localStorage` (`pixel-grug-lang`)
- HTML `data-i18n`, `data-i18n-html`, `data-i18n-attr` 마크업으로 전체 섹션 텍스트 갱신
- Daily Pixel 데모 캐릭터 이름·alt 텍스트도 언어별 연동

### 다크 테마

- 네비게이션 `☀ / 🌙` 토글로 라이트/다크 전환
- `js/theme.js` — `applyTheme()` + `localStorage` (`pixel-grug-theme`)
- 시스템 `prefers-color-scheme: dark` 최초 방문 시 자동 적용
- `<head>` 인라인 스크립트로 FOUC(깜빡임) 방지

## 인터랙션 (JavaScript)

- **모바일 햄버거 메뉴** — 토글 + 접근성(`aria-expanded`, `aria-label`) 속성
- **스크롤 리빌** — `IntersectionObserver` 기반 페이드/슬라이드 등장
- **네비 스크롤 상태** — 스크롤 위치에 따른 배경/그림자 전환
- **Daily Pixel 데모** — "다른 친구 만나기" 버튼으로 6종 캐릭터/문장 순환 전환 (이미지 프리로드 포함)
- **언어 전환** — `languagechange` 이벤트로 Daily Pixel 카드 텍스트 동기화
- **테마 전환** — `data-theme` 속성 기반 CSS 변수 스왑

## 접근성 / 반응형

- 모바일 우선 반응형 (브레이크포인트 720 / 960px)
- 이미지 `alt` 텍스트, 시맨틱 태그 사용
- 언어/테마 컨트롤에 `role="group"`, `aria-pressed` 적용
- 모바일 햄버거 메뉴 하단에 언어/테마 설정 배치
- `prefers-reduced-motion` 대응으로 모션 최소화 옵션 지원

## 실행 방법

정적 파일이므로 `index.html`을 브라우저에서 바로 열거나, 로컬 서버로 실행할 수 있습니다.

```bash
# 프로젝트 루트에서 (Python)
python -m http.server 8123

# 또는 Node.js
npx serve -l 8123

# 브라우저에서 http://localhost:8123 접속
```

## 이번 작업 주요 내용

### 1. 다국어 지원 추가

- `js/i18n.js` 신규 작성 — `ko` / `en` / `ja` 3개 locale
- `index.html` 전체 텍스트에 `data-i18n` 마크업 적용 (약 100+ 문자열)
- 네비게이션 `KO | EN | JP` 언어 전환 UI 추가
- Daily Pixel `friends` 데이터를 locale별로 분리, `languagechange` 이벤트 연동
- `document.documentElement.lang`, `<meta name="description">` 동적 갱신

### 2. 다크 테마 추가

- `js/theme.js` 신규 작성 — 라이트/다크 토글 + localStorage 저장
- `css/styles.css`에 `[data-theme="dark"]` 웜 다크 팔레트 토큰 추가
- 하드코딩 색상을 CSS 변수(`--nav-bg`, `--section-dark-bg`, `--on-dark` 등)로 통합
- 네비게이션 `☀ / 🌙` 테마 토글 UI 추가
- FOUC 방지용 `<head>` 인라인 스크립트 추가

### 3. 변경 파일

| 파일 | 작업 |
| --- | --- |
| `index.html` | i18n 마크업, 설정 UI, FOUC 스니펫, 스크립트 로드 |
| `css/styles.css` | 다크 토큰, 색상 변수화, 설정 UI 스타일 |
| `js/i18n.js` | **신규** — 번역 데이터 + applyLanguage |
| `js/theme.js` | **신규** — applyTheme + 토글 이벤트 |
| `js/main.js` | Daily Pixel i18n 연동, aria-label 갱신 |

## 개발 과정 및 오류 수정 사항

작업 중 발견하여 수정한 주요 이슈입니다.

### 초기 랜딩페이지

- **모바일 히어로 카드 가로 오버플로우 수정**
  - 증상: 모바일 뷰에서 "오늘의 픽셀" 카드(고정 `max-width: 360px`)가 컨테이너 가용 폭(약 342px)보다 넓어, CSS Grid 트랙이 확장되면서 카드 우측이 뷰포트 밖으로 잘림.
  - 원인: Grid 아이템의 자동 최소 크기(`min-width: auto`)가 카드의 고정 폭을 따라가며 트랙이 컨테이너를 초과.
  - 해결: 모바일 브레이크포인트에서 `.hero__visual { min-width: 0 }`, `.daily-card { max-width: 100% }`를 적용하여 카드가 컨테이너 안에 맞도록 수정.

- **모바일 타이포/패딩 정리**
  - 증상: 인용문/카드 텍스트가 뷰포트 우측에 과도하게 붙음.
  - 해결: 모바일에서 히어로 타이틀·인용문 폰트 크기와 카드 패딩을 축소하여 여백을 확보.

### 다국어 / 다크 테마 작업

- **하드코딩 색상으로 인한 다크 테마 미적용**
  - 증상: `.nav`, `.section--concept`, `.share-card` 등에 `#f4f1e9`, `rgba(240,238,230,...)` 등이 직접 지정되어 다크 모드 전환 시 일부 영역만 색상이 바뀜.
  - 해결: `--nav-bg`, `--section-dark-bg`, `--on-dark`, `--card-gradient-from/to` 등 시맨틱 CSS 변수로 통합 후 `[data-theme="dark"]`에서 오버라이드.

- **다크 모드에서 concept/vision 섹션 대비 깨짐**
  - 증상: `--ink`를 배경·텍스트 양쪽에 사용하면 다크 모드에서 배경이 밝은 색으로 바뀌는 문제.
  - 해결: `--section-dark-bg`(섹션 배경)와 `--on-dark`(밝은 텍스트)를 분리하여 라이트/다크 모두에서 대비 유지.

- **테마 전환 시 깜빡임(FOUC)**
  - 증상: 페이지 로드 시 잠깐 라이트 테마가 보인 뒤 다크 테마로 전환됨.
  - 해결: `<head>`에 localStorage/system 설정을 즉시 적용하는 인라인 스크립트 추가.

- **모바일 설정 UI 배치**
  - 증상: 언어/테마 컨트롤이 데스크톱 네비에만 최적화되어 모바일 메뉴에서 접근이 불편.
  - 해결: 720px 이하에서 햄버거 메뉴 하단에 `.nav__settings`를 전체 너비로 배치.

## 라이선스

이 프로젝트는 학습/데모 목적으로 제작되었습니다.
