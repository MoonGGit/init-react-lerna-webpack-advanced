# **React Project Basic Settings**

Based `Webpack` and `Lerna` configured with `Typescript`

<br />

Some additional preference packages:

- react-router-dom
- emotion
- storybook

<br />

# Install

```console
yarn install
```

<br />

# Run

_If you run in VSCODE, Add prefix `yarn`_

**myapp**

```console
lerna run dev --scope=myapp
```

**storybook**

```console
lerna run storybook
```

<br />

# Packages Tree

```text
.
├── common
│   ├── design-system
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── atoms
│   │   │   │   ├── buttons
│   │   │   │   │   ├── TestButton.tsx
│   │   │   │   │   ├── buttons.stories.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   └── index.ts
│   │   │   ├── index.ts
│   │   │   ├── modules
│   │   │   ├── molecules
│   │   │   └── theme
│   │   │       ├── GlobalStyle.tsx
│   │   │       ├── color
│   │   │       │   ├── index.ts
│   │   │       │   ├── neutral.ts
│   │   │       │   └── stories.mdx
│   │   │       ├── index.ts
│   │   │       └── typography
│   │   │           ├── assets
│   │   │           │   ├── index.ts
│   │   │           │   └── woff2
│   │   │           │       ├── Galmuri7.woff2
│   │   │           │       └── index.ts
│   │   │           ├── fontFaceStyle.ts
│   │   │           ├── fontFamily.ts
│   │   │           ├── fontSize.ts
│   │   │           ├── fontWeight.ts
│   │   │           ├── index.ts
│   │   │           └── stories.mdx
│   │   └── tsconfig.json
│   └── types
│       ├── package.json
│       └── src
│           ├── Falsy.ts
│           ├── Nullish.ts
│           └── index.ts
└── myapp
    ├── package.json
    ├── src
    │   ├── components
    │   │   └── Test.tsx
    │   └── index.tsx
    ├── tsconfig.json
    └── webpack.config.js
```
