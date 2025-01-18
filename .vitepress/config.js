export default {
  title: "Flutter Fusion",
  description: "A modular flutter project starter kit with MVCs pattern.",
  base: "/flutter-fusion/",
  cleanUrls: true,
  srcDir: "./src",
  outDir: "./.vitepress/flutter-fusion",
  markdown: {
    lineNumbers: true,
    defaultHighlightLang: "dart",
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/flutter-fusion/images/favicon.png",
      },
    ],
    // [
    //   "script",
    //   {
    //     async: true,
    //     src: "https://www.googletagmanager.com/gtag/js?id=G-GKNMVN5QK0",
    //   },
    // ],
    // [
    //   "script",
    //   {},
    //   "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-GKNMVN5QK0');",
    // ],
  ],
  themeConfig: {
    logo: "/images/logo.png",
    search: {
      provider: "local",
    },
    outline: [2, 4],
    socialLinks: [
      { icon: "github", link: "https://github.com/thedevsbuddy/flutter_fusion" },
      { icon: "instagram", link: "https://www.instagram.com/iamspydey" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © 2021 - ${new Date().getFullYear()} All rights reserved by devsbuddy.com`,
    },
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Docs",
        link: "/introduction",
      },
      {
        text: "Blog",
        link: "https://devsbuddy.com/blog",
      },
      // {
      //   text: "0.7.5",
      //   items: [
      //     {
      //       text: "Changelog",
      //       link: "https://github.com/thedevsbuddy/tailwind_cli/blob/main/CHANGELOG.md",
      //     },
      //   ],
      // },
    ],
    sidebar: [
      {
        text: "Introduction",
        link: "/introduction",
      },
      {
        text: "Installation",
        link: "/installation",
      },
      // {
      //   text: "Core Concepts",
      //   items: [
      //     { text: "UI Centric", link: "/core-concepts/ui-centric" },
      //     {
      //       text: "Reusable Styles",
      //       link: "/core-concepts/reusable-styles",
      //     },
      //     { text: "Dark Mode", link: "/core-concepts/dark-mode" },
      //     {
      //       text: "Adding Custom Styles",
      //       link: "/core-concepts/adding-custom-styles",
      //     },
      //     {
      //       text: "Theme Management",
      //       link: "/core-concepts/theme-management",
      //     },
      //   ],
      // },
      // {
      //   text: "Widgets",
      //   collapsible: true,
      //   collapsed: true,
      //   items: [
      //     { text: "TwButton", link: "/widgets/tw-button" },
      //   ],
      // },
      // {
      //   text: "Colors",
      //   collapsible: true,
      //   collapsed: true,
      //   items: [
      //     { text: "Background Color", link: "/colors/background-color" },
      //     { text: "Text Color", link: "/colors/text-color" },
      //     { text: "Border Color", link: "/colors/border-color" },
      //     { text: "Gradient Color", link: "/colors/gradient-color" },
      //     { text: "Dark Theme", link: "/colors/dark-theme" },
      //   ],
      // },
      // {
      //   text: "Modulr",
      //   link: "/modulr",
      // },
    ],
  },
};
