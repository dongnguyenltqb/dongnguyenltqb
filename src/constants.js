export const pageTranstion = {
  incoming: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.0, 0.0, 0.2, 1],
      duration: 0.1,
      opacity: { duration: 0.1 },
    },
  },
}

export const postTranstion = {
  incoming: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.0, 0.0, 0.2, 1],
      duration: 0.1,
      opacity: { duration: 0.1 },
    },
  },
}

export const menus = [
  {
    title: "About",
    path: "/about",
    icon: "user",
  },
  {
    title: "Blog",
    path: "/blog",
    icon: "file-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: "message-square",
  },
]
