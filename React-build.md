window cmd 기준

## 🟢 Node.js 설치

https://nodejs.org 에서 LTS 버전 설치

<br/>

# 🔨 프로젝트 빌드

### 1. Yarn 설치 명령어 (전역 설치)

npm install -g yarn

### 2. Vite + React + TypeScript 프로젝트 생성

yarn create vite my-app --template react-ts

<!-- 의존성 설치 -->

### 3. 프로젝트로 이동

cd my-app

### 4. 패키지 설치

yarn

<br/>

<!-- 개발 서버 실행 -->

# 👀배포 테스트

### 5. 개발 서버 실행

yarn dev

<!-- 빌드 (배포용 번들 생성) -->

### 6. yarn build

http://localhost:4173 에서 최종 결과물 확인 가능

<!-- 배포 테스트 (로컬 preview) -->

### 7. yarn preview

### 8. .gitignore 확인/추가

node_modules/
dist/

<!-- 생성된 폴더 구조 -->
<!--
my-app/
├── index.html              ← 실제 HTML 문서
├── vite.config.ts          ← Vite 설정 (TypeScript)
├── tsconfig.json           ← TypeScript 설정
├── package.json
├── yarn.lock
├── /src
│   ├── main.tsx            ← 진입점
│   ├── App.tsx             ← 기본 컴포넌트
│   └── vite-env.d.ts       ← 타입 선언
└── node_modules/
-->

<br/>

<!-- 리액트 라이브러리 -->

# 📥 Basic Library

### 페이지 이동/라우팅 구현

- yarn add react-router-dom
- yarn add -D @types/node

### SCSS(Sass) 설치

- yarn add -D sass

### 미디어쿼리

yarn add react-responsive

# optimize Library

### 코드 오류 감지(ESLint) + 코드 정리(Prettier) + 타입스크립트 지원

- yarn add -D eslint prettier eslint-plugin-react eslint-config-prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser

### Node 환경에서 타입 인식 지원

- yarn add -D @types/node

### TypeScript 컴파일러 (tsc 명령어용)

- yarn add -D typescript

### 캐시된 빌드 파일/폴더 삭제 도구 (윈도우에서도 잘 작동) → clean 스크립트용

- yarn add -D rimraf

### ESLint + TypeScript + React 코드 문법 검사 설정

- yarn add -D eslint
- yarn add -D @typescript-eslint/parser
- yarn add -D @typescript-eslint/eslint-plugin
- yarn add -D eslint-plugin-react

### 코드 정리 도구 Prettier + ESLint와 충돌 방지 설정

- yarn add -D prettier
- yarn add -D eslint-config-prettier

### 개발 서버 및 번들러 (Vite)

- yarn add -D vite

# props Library

### 아이콘 라이브러리

- yarn add lucide-react
- yarn add react-icons

### 툴팁 라이브러리

- yarn add react-tooltip

### SVG 파일을 React 컴포넌트처럼 import 해서 사용

- yarn add -D vite-plugin-svgr

### 등장, 페이드 인, 슬라이드 등 애니메이션

- yarn add framer-motion

# Style Library

### 유틸리티 기반 CSS 프레임워크 Tailwind 설치 + 설정 초기화

- yarn add -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p

<br/>

## 🔗 Git 등록

git init

git add .

git commit -m "초기 세팅: Vite + React + TypeScript + Yarn"
