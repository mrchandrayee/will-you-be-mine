# 🐾 Will You Be Mine? — Cute Cat Proposal

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-ff85a1?style=for-the-badge&logo=github&logoColor=white)](https://mrchandrayee.github.io/will-you-be-mine/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A very serious kitten asks "Will you be mine?" — with a real cat photo, a NO button that dodges your cursor, escalating taunts, and a heart burst celebration on YES. Pure HTML, CSS & JavaScript.

---

## ✨ Features

- 🐱 **Real kitten photo** — cute cat looking straight at you
- ❤️ **YES / NO interaction** — NO button runs away!
- 💬 **Escalating taunts** — new plea every dodge
- 💕 **Heart burst** on YES celebration
- 😻 **Cat swap** — happy cat appears on YES
- 🔈 **Sound toggle** — optional audio
- 🔁 **Ask again** button
- 📱 **Responsive** — works on mobile & desktop

---

## 🚀 Live Demo

👉 **[https://mrchandrayee.github.io/will-you-be-mine/](https://mrchandrayee.github.io/will-you-be-mine/)**

---

## 🛠️ Run Locally

```bash
open index.html
# or
python -m http.server 8000
```

---

## 📁 Project Structure

```
will-you-be-mine/
├── index.html     # Page structure and cat card
├── style.css      # Card design, browser frame & animations
├── script.js      # NO dodge, taunts, heart burst & YES logic
├── assets/        # Cat photos (cat-ask.jpg, cat-yes.jpg)
└── README.md
```

---

## 💻 Tech Highlight

```javascript
// NO is impossible
function taunt() {
  escalate(); // new plea message
  dodge();    // flee off-screen
}
noBtn.onpointerenter = taunt;

yesBtn.onclick = () => {
  swapToHappyCat();
  burstHearts(); // 💕 💕 💕
};
```

---

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee) · [Profile](https://github.com/mrchandrayee/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
