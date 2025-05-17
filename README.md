# SoftSell

SoftSell is a single-page marketing site and lead-capture platform for selling unused software licenses. It features a modern, responsive design built with React and Bootstrap, supports light/dark mode, and includes interactive animations and a built-in FAQ chat widget.

---

## Overview

SoftSell lets users quickly upload and sell unused software licenses. It walks visitors through a three-step process (Upload → Valuation → Get Paid), displays key features, showcases testimonials, and captures leads via a contact form. A floating chat widget provides instant answers to common questions.

---

## Features

* **Responsive Design**: Mobile-first layout with Bootstrap grid and utility classes.
* **Hero Section**: Full-screen background image with overlay, headline, subheading, and CTA.
* **How It Works**: Three-step process section with icons.
* **Why Choose Us**: Feature tiles highlighting security, speed, pricing, and support.
* **Testimonials**: Customer quotes with avatar images.
* **Contact Form**: Validated lead-capture form (Name, Email, Company, License Type, Message).
* **Light/Dark Mode**: Toggle persisted in `localStorage` and respects OS preference.
* **Animations**: Entry and scroll-triggered animations via Framer Motion.
* **Chat Widget**: Built-in FAQ chatbot with hard-coded responses.
* **SEO & Social**: Meta tags for search engines, Open Graph, and Twitter cards.

---

## Tech Stack

* **React** (v19) - UI library
* **Create React App** - Project scaffolding
* **Bootstrap** (v5) - CSS framework
* **Bootstrap Icons** - Icon set
* **Framer Motion** - React animation library
* **JavaScript (ES6+)**
* **HTML5 & CSS3**

---

## Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/<your-username>/softsell.git
   cd softsell
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm start
   ```

4. **Open** `http://localhost:3000` in your browser.

---

## Available Scripts

In the project directory, you can run:

* `npm start` - Runs the app in development mode.
* `npm run build` - Builds the app for production.
* `npm test` - Launches the test runner.
* `npm run eject` - Ejects CRA configuration (use with caution).

---

## Deployment

SoftSell can be deployed to Vercel, Netlify, or GitHub Pages. For Vercel:

1. Push your code to a GitHub repository.
2. Log in to Vercel and import the project.
3. Set the build command to `npm run build` and the output directory to `build/`.
4. (Optional) Add environment variables if needed.
5. Deploy and your site will be live at `https://<your-subdomain>.vercel.app`.

---

## Design Choices

* **Utility-First CSS**: Bootstrap utilities speed up development and ensure consistency.
* **Dark Mode**: Improves readability in low-light environments and follows user preference.
* **Section-Based Layout**: Each content area is a self-contained component for modularity.
* **Animated Entrances**: Framer Motion brings subtle, non-intrusive animations.
* **Static Chat FAQ**: A lightweight, dependency-free widget avoids external API costs.

---

## Contributing

Contributions are welcome! Please:

1. Fork the repo
2. Create a new branch (`git checkout -b feature/name`)
3. Commit your changes (`git commit -m "feat: add ..."`)
4. Push to the branch (`git push origin feature/name`)
5. Open a Pull Request

---

## License

This project is open source under the MIT License. Feel free to use and customize it for your own needs.
