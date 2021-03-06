import React from "react";

const avatar =
  "data:image/jpeg;base64,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";
const colors = {
  red: {
    main: "#ff3d00",
    1000: "#ff5019",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#ffebe5",
    100: "#fff5f2",
  },
  pink: {
    main: "#f51f7e",
    1000: "#f6338a",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#fee8f2",
    100: "#fef3f8",
  },
  purpleA: {
    main: "#a200f2",
    1000: "#ab19f3",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#f5e5fd",
    100: "#faf2fe",
  },
  purpleB: {
    main: "#651dff",
    1000: "#7435ff",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#efe8ff",
    100: "#f7faff",
  },
  blueA: {
    main: "#2979ff",
    1000: "#3e86ff",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#e9f1ff",
    100: "#f4f8ff",
  },
  blueB: {
    main: "#009dff",
    1000: "#19a6ff",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#e5f5ff",
    100: "#f2faff",
  },
  cyan: {
    main: "#00bcd4",
    1000: "#19c2d8",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#e5f8fa",
    100: "#f2fbfd",
  },
  greenA: {
    main: "#00bfa5",
    1000: "#19c5ae",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#e5f8f6",
    100: "#f2fcfa",
  },
  greenB: {
    main: "#64dd17",
    1000: "#73e02e",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#effbe7",
    100: "#f7fdf3",
  },
  yellow: {
    main: "#ffab00",
    1000: "#ffb319",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#ffab00",
    100: "#fffbf2",
  },
  orange: {
    main: "#ff6f00",
    1000: "#ff7d19",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#",
    200: "#fff0e5",
    100: "#fff8f2",
  },
  gray: {
    main: "#b1b5bc",
    1000: "#b8bbc2",
    900: "#",
    800: "#",
    700: "#",
    600: "#",
    500: "#",
    400: "#",
    300: "#dfe3ea",
    200: "#eef2f8",
    100: "#f1f5fb",
  },
  default: {
    headline: "#001738",
    subtitle: "#8492a6",
    primaryButton: "#2979ff",
    icon: "#8492a6",
  },
};

const cards2 = [
  {
    logo: (
      <svg
        id="Layer_1"
        enable-background="new 0 0 512 512"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m256 117c-76.645 0-139 62.355-139 139s62.355 139 139 139 139-62.355 139-139-62.355-139-139-139zm0 248c-60.103 0-109-48.897-109-109s48.897-109 109-109 109 48.897 109 109-48.897 109-109 109z" />
          <path d="m256 81.643c8.284 0 15-6.716 15-15v-51.643c0-8.284-6.716-15-15-15s-15 6.716-15 15v51.643c0 8.284 6.716 15 15 15z" />
          <path d="m497 241h-51.643c-8.284 0-15 6.716-15 15s6.716 15 15 15h51.643c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
          <path d="m256 430.357c-8.284 0-15 6.716-15 15v51.643c0 8.284 6.716 15 15 15s15-6.716 15-15v-51.643c0-8.284-6.716-15-15-15z" />
          <path d="m81.643 256c0-8.284-6.716-15-15-15h-51.643c-8.284 0-15 6.716-15 15s6.716 15 15 15h51.643c8.284 0 15-6.716 15-15z" />
          <path d="m389.896 137.104c3.839 0 7.678-1.464 10.606-4.394l36.517-36.517c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-36.517 36.517c-5.858 5.858-5.858 15.355 0 21.213 2.93 2.93 6.769 4.394 10.607 4.394z" />
          <path d="m400.502 379.29c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.858-5.858 15.355 0 21.213l36.518 36.517c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.465 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z" />
          <path d="m111.497 379.289-36.517 36.517c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l36.517-36.517c5.858-5.858 5.858-15.355 0-21.213-5.856-5.858-15.355-5.858-21.212 0z" />
          <path d="m111.498 132.71c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-36.517-36.517c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213z" />
          <path d="m322.912 94.993c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248l19.818-47.688c3.179-7.65-.445-16.429-8.095-19.608-7.649-3.178-16.428.444-19.608 8.095l-19.818 47.688c-3.178 7.651.446 16.43 8.095 19.609z" />
          <path d="m484.303 334.636-47.688-19.818c-7.651-3.179-16.429.444-19.608 8.095-3.179 7.65.445 16.429 8.095 19.608l47.688 19.818c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248 3.179-7.649-.445-16.428-8.095-19.607z" />
          <path d="m189.088 417.007c-7.651-3.178-16.429.444-19.608 8.095l-19.818 47.688c-3.179 7.65.445 16.429 8.095 19.608 1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248l19.818-47.688c3.178-7.649-.446-16.428-8.095-19.607z" />
          <path d="m27.697 177.364 47.688 19.818c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248 3.179-7.65-.445-16.429-8.095-19.608l-47.688-19.817c-7.65-3.177-16.429.445-19.608 8.095s.445 16.429 8.095 19.608z" />
          <path d="m417.163 189.465c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139l47.734-19.707c7.657-3.161 11.303-11.931 8.142-19.589-3.162-7.658-11.934-11.302-19.589-8.141l-47.734 19.707c-7.658 3.162-11.303 11.932-8.142 19.589z" />
          <path d="m342.124 425.304c-3.161-7.658-11.933-11.301-19.589-8.141-7.658 3.161-11.303 11.931-8.142 19.589l19.707 47.735c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139 7.658-3.161 11.303-11.932 8.142-19.589z" />
          <path d="m94.837 322.535c-3.161-7.657-11.929-11.304-19.589-8.141l-47.735 19.707c-7.657 3.161-11.303 11.931-8.142 19.589 2.389 5.785 7.978 9.28 13.871 9.28 1.906 0 3.846-.366 5.718-1.139l47.735-19.707c7.658-3.162 11.303-11.932 8.142-19.589z" />
          <path d="m169.876 86.696c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139 7.658-3.161 11.303-11.931 8.142-19.589l-19.707-47.735c-3.162-7.658-11.934-11.302-19.589-8.141-7.658 3.161-11.303 11.932-8.142 19.589z" />
        </g>
      </svg>
    ),
    title: "Grow light on",
    cardColor: colors["greenB"][100],
    borderColor: colors["greenB"][200],
    iconColor: colors["greenB"][1000],
    counter: 22,
  },
  {
    logo: (
      <svg
        id="Capa_1"
        enable-background="new 0 0 512.001 512.001"
        height="512"
        viewBox="0 0 512.001 512.001"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m406 151.001c8.284 0 15-6.716 15-15 0-24.813 20.187-45 45-45 8.284 0 15-6.716 15-15s-6.716-15-15-15c-24.393 0-45-21.065-45-46 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 24.935-20.607 46-45 46-8.284 0-15 6.716-15 15s6.716 15 15 15c24.813 0 45 20.187 45 45 0 8.284 6.716 15 15 15zm-15.253-75.15c5.784-4.41 10.865-9.568 15.253-15.479 4.387 5.91 9.468 11.069 15.253 15.479-5.781 4.312-10.922 9.437-15.253 15.203-4.331-5.767-9.472-10.891-15.253-15.203z" />
          <path d="m301 106.001c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 41.355-33.645 75-75 75-8.284 0-15 6.716-15 15s6.716 15 15 15c41.355 0 75 33.645 75 75 0 8.284 6.716 15 15 15s15-6.716 15-15c0-41.355 33.645-75 75-75 8.284 0 15-6.716 15-15s-6.716-15-15-15c-41.355 0-75-33.645-75-75zm-15 125.972c-8.871-14.722-21.25-27.101-35.971-35.972 14.722-8.871 27.1-21.25 35.971-35.972 8.871 14.722 21.25 27.101 35.971 35.972-14.721 8.871-27.1 21.249-35.971 35.972z" />
          <path d="m256 512.001c128.638 0 238.83-96.522 255.862-221.298.946-6.93-3.022-13.593-9.566-16.063-6.542-2.469-13.924-.09-17.793 5.737-33.016 49.73-91.835 80.624-153.503 80.624-99.252 0-180-80.748-180-180 0-61.668 30.893-120.487 80.624-153.503 5.826-3.868 8.207-11.25 5.737-17.793-2.469-6.543-9.131-10.511-16.063-9.566-124.939 17.055-221.298 127.397-221.298 255.862 0 140.959 115.05 256 256 256zm-87.774-466.347c-29.922 37.658-47.226 85.737-47.226 135.347 0 115.794 94.206 210 210 210 49.61 0 97.688-17.304 135.347-47.226-34.932 81.747-117.091 138.226-210.347 138.226-124.617 0-226-101.383-226-226 0-93.256 56.479-175.415 138.226-210.347z" />
        </g>
      </svg>
    ),
    title: "Grow light off",
    cardColor: colors["greenA"][100],
    borderColor: colors["greenA"][200],
    iconColor: colors["greenA"][1000],
    counter: 152,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-door-open"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
        <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
      </svg>
    ),
    title: "Open Lock",
    cardColor: colors["red"][100],
    borderColor: colors["red"][200],
    iconColor: colors["red"][1000],
    counter: 97,
  },
  // {
  //   logo: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="16"
  //       height="16"
  //       fill="currentColor"
  //       class="bi bi-door-closed"
  //       viewBox="0 0 16 16"
  //     >
  //       <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
  //       <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
  //     </svg>
  //   ),
  //   title: "Close Door",
  //   cardColor: colors["purpleB"][100],
  //   borderColor: colors["purpleB"][200],
  //   iconColor: colors["purpleB"][1000],
  //   counter: 102
  // },
  {
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
</svg>
    ),
    title: "Fan on",
    cardColor: colors["orange"][100],
    borderColor: colors["orange"][200],
    iconColor: colors["orange"][1000],
    counter: 138,
  },
  {
    logo: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wind" viewBox="0 0 16 16">
  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z"/>
</svg>
    ),
    title: "Fan off",
    cardColor: colors["blueA"][100],
    borderColor: colors["blueA"][200],
    iconColor: colors["blueA"][1000],
    counter: 1,
  },

  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-thermometer"
        viewBox="0 0 16 16"
      >
        <path d="M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z" />
        <path d="M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      </svg>
    ),
    title: "Watering on",
    cardColor: colors["yellow"][100],
    borderColor: colors["yellow"][200],
    iconColor: colors["yellow"][1000],
    counter: 1,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-archive-fill"
        viewBox="0 0 16 16"
      >
        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
      </svg>
    ),
    title: "Watering off",
    cardColor: colors["purpleB"][100],
    borderColor: colors["purpleB"][200],
    iconColor: colors["purpleB"][1000],
    counter: 1,
  }
];

const cards = [
  {
    logo: (
      <svg
        id="Layer_1"
        enable-background="new 0 0 512 512"
        height="512"
        viewBox="0 0 512 512"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m256 117c-76.645 0-139 62.355-139 139s62.355 139 139 139 139-62.355 139-139-62.355-139-139-139zm0 248c-60.103 0-109-48.897-109-109s48.897-109 109-109 109 48.897 109 109-48.897 109-109 109z" />
          <path d="m256 81.643c8.284 0 15-6.716 15-15v-51.643c0-8.284-6.716-15-15-15s-15 6.716-15 15v51.643c0 8.284 6.716 15 15 15z" />
          <path d="m497 241h-51.643c-8.284 0-15 6.716-15 15s6.716 15 15 15h51.643c8.284 0 15-6.716 15-15s-6.716-15-15-15z" />
          <path d="m256 430.357c-8.284 0-15 6.716-15 15v51.643c0 8.284 6.716 15 15 15s15-6.716 15-15v-51.643c0-8.284-6.716-15-15-15z" />
          <path d="m81.643 256c0-8.284-6.716-15-15-15h-51.643c-8.284 0-15 6.716-15 15s6.716 15 15 15h51.643c8.284 0 15-6.716 15-15z" />
          <path d="m389.896 137.104c3.839 0 7.678-1.464 10.606-4.394l36.517-36.517c5.858-5.858 5.858-15.355 0-21.213-5.857-5.858-15.355-5.858-21.213 0l-36.517 36.517c-5.858 5.858-5.858 15.355 0 21.213 2.93 2.93 6.769 4.394 10.607 4.394z" />
          <path d="m400.502 379.29c-5.857-5.857-15.355-5.857-21.213 0-5.858 5.858-5.858 15.355 0 21.213l36.518 36.517c2.929 2.929 6.768 4.393 10.606 4.393s7.678-1.465 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213z" />
          <path d="m111.497 379.289-36.517 36.517c-5.858 5.858-5.858 15.355 0 21.213 2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394l36.517-36.517c5.858-5.858 5.858-15.355 0-21.213-5.856-5.858-15.355-5.858-21.212 0z" />
          <path d="m111.498 132.71c2.929 2.929 6.768 4.394 10.606 4.394s7.678-1.464 10.606-4.394c5.858-5.858 5.858-15.355 0-21.213l-36.517-36.517c-5.857-5.858-15.355-5.858-21.213 0s-5.858 15.355 0 21.213z" />
          <path d="m322.912 94.993c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248l19.818-47.688c3.179-7.65-.445-16.429-8.095-19.608-7.649-3.178-16.428.444-19.608 8.095l-19.818 47.688c-3.178 7.651.446 16.43 8.095 19.609z" />
          <path d="m484.303 334.636-47.688-19.818c-7.651-3.179-16.429.444-19.608 8.095-3.179 7.65.445 16.429 8.095 19.608l47.688 19.818c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248 3.179-7.649-.445-16.428-8.095-19.607z" />
          <path d="m189.088 417.007c-7.651-3.178-16.429.444-19.608 8.095l-19.818 47.688c-3.179 7.65.445 16.429 8.095 19.608 1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248l19.818-47.688c3.178-7.649-.446-16.428-8.095-19.607z" />
          <path d="m27.697 177.364 47.688 19.818c1.883.782 3.832 1.152 5.751 1.152 5.879 0 11.46-3.479 13.857-9.248 3.179-7.65-.445-16.429-8.095-19.608l-47.688-19.817c-7.65-3.177-16.429.445-19.608 8.095s.445 16.429 8.095 19.608z" />
          <path d="m417.163 189.465c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139l47.734-19.707c7.657-3.161 11.303-11.931 8.142-19.589-3.162-7.658-11.934-11.302-19.589-8.141l-47.734 19.707c-7.658 3.162-11.303 11.932-8.142 19.589z" />
          <path d="m342.124 425.304c-3.161-7.658-11.933-11.301-19.589-8.141-7.658 3.161-11.303 11.931-8.142 19.589l19.707 47.735c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139 7.658-3.161 11.303-11.932 8.142-19.589z" />
          <path d="m94.837 322.535c-3.161-7.657-11.929-11.304-19.589-8.141l-47.735 19.707c-7.657 3.161-11.303 11.931-8.142 19.589 2.389 5.785 7.978 9.28 13.871 9.28 1.906 0 3.846-.366 5.718-1.139l47.735-19.707c7.658-3.162 11.303-11.932 8.142-19.589z" />
          <path d="m169.876 86.696c2.389 5.785 7.979 9.28 13.871 9.28 1.907 0 3.846-.366 5.718-1.139 7.658-3.161 11.303-11.931 8.142-19.589l-19.707-47.735c-3.162-7.658-11.934-11.302-19.589-8.141-7.658 3.161-11.303 11.932-8.142 19.589z" />
        </g>
      </svg>
    ),
    title: "Grow light on",
    cardColor: colors["greenB"][100],
    borderColor: colors["greenB"][200],
    iconColor: colors["greenB"][1000],
    counter: 22,
  },
  {
    logo: (
      <svg
        id="Capa_1"
        enable-background="new 0 0 512.001 512.001"
        height="512"
        viewBox="0 0 512.001 512.001"
        width="512"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m406 151.001c8.284 0 15-6.716 15-15 0-24.813 20.187-45 45-45 8.284 0 15-6.716 15-15s-6.716-15-15-15c-24.393 0-45-21.065-45-46 0-8.284-6.716-15-15-15s-15 6.716-15 15c0 24.935-20.607 46-45 46-8.284 0-15 6.716-15 15s6.716 15 15 15c24.813 0 45 20.187 45 45 0 8.284 6.716 15 15 15zm-15.253-75.15c5.784-4.41 10.865-9.568 15.253-15.479 4.387 5.91 9.468 11.069 15.253 15.479-5.781 4.312-10.922 9.437-15.253 15.203-4.331-5.767-9.472-10.891-15.253-15.203z" />
          <path d="m301 106.001c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 41.355-33.645 75-75 75-8.284 0-15 6.716-15 15s6.716 15 15 15c41.355 0 75 33.645 75 75 0 8.284 6.716 15 15 15s15-6.716 15-15c0-41.355 33.645-75 75-75 8.284 0 15-6.716 15-15s-6.716-15-15-15c-41.355 0-75-33.645-75-75zm-15 125.972c-8.871-14.722-21.25-27.101-35.971-35.972 14.722-8.871 27.1-21.25 35.971-35.972 8.871 14.722 21.25 27.101 35.971 35.972-14.721 8.871-27.1 21.249-35.971 35.972z" />
          <path d="m256 512.001c128.638 0 238.83-96.522 255.862-221.298.946-6.93-3.022-13.593-9.566-16.063-6.542-2.469-13.924-.09-17.793 5.737-33.016 49.73-91.835 80.624-153.503 80.624-99.252 0-180-80.748-180-180 0-61.668 30.893-120.487 80.624-153.503 5.826-3.868 8.207-11.25 5.737-17.793-2.469-6.543-9.131-10.511-16.063-9.566-124.939 17.055-221.298 127.397-221.298 255.862 0 140.959 115.05 256 256 256zm-87.774-466.347c-29.922 37.658-47.226 85.737-47.226 135.347 0 115.794 94.206 210 210 210 49.61 0 97.688-17.304 135.347-47.226-34.932 81.747-117.091 138.226-210.347 138.226-124.617 0-226-101.383-226-226 0-93.256 56.479-175.415 138.226-210.347z" />
        </g>
      </svg>
    ),
    title: "Grow light off",
    cardColor: colors["greenA"][100],
    borderColor: colors["greenA"][200],
    iconColor: colors["greenA"][1000],
    counter: 152,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-door-open"
        viewBox="0 0 16 16"
      >
        <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
        <path d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
      </svg>
    ),
    title: "Open door",
    cardColor: colors["red"][100],
    borderColor: colors["red"][200],
    iconColor: colors["red"][1000],
    counter: 97,
  },
  // {
  //   logo: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       width="16"
  //       height="16"
  //       fill="currentColor"
  //       class="bi bi-door-closed"
  //       viewBox="0 0 16 16"
  //     >
  //       <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
  //       <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
  //     </svg>
  //   ),
  //   title: "Close Door",
  //   cardColor: colors["purpleB"][100],
  //   borderColor: colors["purpleB"][200],
  //   iconColor: colors["purpleB"][1000],
  //   counter: 102
  // },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-droplet"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"
        />
        <path
          fill-rule="evenodd"
          d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"
        />
      </svg>
    ),
    title: "Water the cabin",
    cardColor: colors["orange"][100],
    borderColor: colors["orange"][200],
    iconColor: colors["orange"][1000],
    counter: 138,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-gear"
        viewBox="0 0 16 16"
      >
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
      </svg>
    ),
    title: "Reset Configuration",
    cardColor: colors["blueA"][100],
    borderColor: colors["blueA"][200],
    iconColor: colors["blueA"][1000],
    counter: 1,
  },

  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-thermometer"
        viewBox="0 0 16 16"
      >
        <path d="M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z" />
        <path d="M9.5 12.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
      </svg>
    ),
    title: "Test Sensors",
    cardColor: colors["yellow"][100],
    borderColor: colors["yellow"][200],
    iconColor: colors["yellow"][1000],
    counter: 1,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-archive-fill"
        viewBox="0 0 16 16"
      >
        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
      </svg>
    ),
    title: "Test Basement",
    cardColor: colors["purpleB"][100],
    borderColor: colors["purpleB"][200],
    iconColor: colors["purpleB"][1000],
    counter: 1,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-bookshelf"
        viewBox="0 0 16 16"
      >
        <path d="M2.5 0a.5.5 0 0 1 .5.5V2h10V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-1 0V15H3v.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zM3 14h10v-3H3v3zm0-4h10V7H3v3zm0-4h10V3H3v3z" />
      </svg>
    ),
    title: "Test floors",
    cardColor: colors["greenB"][100],
    borderColor: colors["greenB"][200],
    iconColor: colors["greenB"][1000],
    counter: 1,
  },

  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-wrench"
        viewBox="0 0 16 16"
      >
        <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019l.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z" />
      </svg>
    ),
    title: "Test main pump",
    cardColor: colors["cyan"][100],
    borderColor: colors["cyan"][200],
    iconColor: colors["cyan"][1000],
    counter: 1,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-thermometer-half"
        viewBox="0 0 16 16"
      >
        <path d="M8 1.75a.25.25 0 0 1 .25.25v9.02a1.5 1.5 0 1 1-.5 0V2A.25.25 0 0 1 8 1.75z" />
        <path d="M6 2a2 2 0 1 1 4 0v7.627a3.5 3.5 0 1 1-4 0V2zm2-1a1 1 0 0 0-1 1v7.901a.5.5 0 0 1-.25.433A2.499 2.499 0 0 0 8 15a2.5 2.5 0 0 0 1.25-4.666.5.5 0 0 1-.25-.433V2a1 1 0 0 0-1-1z" />
      </svg>
    ),
    title: "Read Temperature",
    cardColor: colors["pink"][100],
    borderColor: colors["pink"][200],
    iconColor: colors["pink"][1000],
    counter: 1,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-door-closed"
        viewBox="0 0 16 16"
      >
        <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z" />
        <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z" />
      </svg>
    ),
    title: "Test Basement Door",
    cardColor: colors["purpleA"][100],
    borderColor: colors["purpleA"][200],
    iconColor: colors["purpleA"][1000],
    counter: 1,
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-gear"
        viewBox="0 0 16 16"
      >
        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
      </svg>
    ),
    title: "Reset Board",
    cardColor: colors["blueA"][100],
    borderColor: colors["blueA"][200],
    iconColor: colors["blueA"][1000],
    counter: 1,
  }
];
const ease = "cubic-bezier(0.2, 0, 0.38, 0.9)";

export default {
  avatar,
  colors,
  cards2,
  ease,
};
