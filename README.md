# Accessible Contact Page

A small single-page contact page built with plain HTML, CSS and JavaScript. I made it to practice responsive layout, semantic HTML and accessible forms. The on-screen texts are in Turkish.

## Live demo

<!-- Add your GitHub Pages link here -->

## Screenshots

<!-- Create a `screenshots/` folder, add your images and keep or edit these lines -->
![Desktop view](screenshots/desktop.png)
![Mobile view](screenshots/mobile.png)

## Features

- **Responsive layout:** mobile-first CSS with flexbox and a media query at 720px.
- **Mobile menu:** a toggle button that opens and closes the menu and updates `aria-expanded`.
- **Accessible form:** every field has a `label`, error messages are linked with `aria-describedby`, invalid fields get `aria-invalid`, and focus moves to the first invalid field.
- **Form validation in JavaScript:** name, email format and minimum message length are checked on submit.
- **Keyboard support:** a "skip to content" link, visible focus outlines and a logical tab order.
- **Readable colors:** dark text on a white background and white text on the accent color (about 6.4:1 contrast).

## Accessibility check

| Tool | Result |
|------|--------|
| Lighthouse (Accessibility) | __ / 100 |

<!-- Run Lighthouse in Chrome DevTools and fill in your real score -->

Tested in: <!-- e.g. Chrome, Firefox, phone browser -->

## Tech stack

HTML5, CSS3 (custom properties, flexbox, media queries), vanilla JavaScript.

## How to run

1. Download or clone this folder.
2. Open `index.html` in your browser.

Optional: open the folder in VS Code and use the Live Server extension to reload automatically.

## Project structure

```
contact-page/
├── index.html   # page structure and content
├── style.css    # layout, colors, responsive rules
├── script.js    # menu toggle and form validation
└── README.md
```

## Limitations

- The form does not send data anywhere. There is no backend; it only validates the input and shows a confirmation message.
- Validation runs in the browser only.

## AI assistance

I used an AI assistant (Claude) to help build the first version of the code. I reviewed it, changed the texts and learned how each part works.