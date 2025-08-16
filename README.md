# BrandProLab Landing Page

This is a marketing landing page for **BrandProLab**, built using modern web technologies like Next.js 15, TypeScript, Tailwind CSS, Sanity CMS, and Vercel.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router, SSG)
- **Styling:** Tailwind CSS
- **CMS:** Sanity
- **Testing:** Jest, React Testing Library
- **Linting & Formatting:** ESLint, Prettier, Husky
- **Deployment:** Vercel

## 🚀 Getting Started

### 1. Clone and install dependencies

```bash
git clone https://github.com/NatalyKrvch/brandprolab.com.ua.git
cd brandprolab.com.ua
npm install
```

### 2. Setup Environment Variables

Create a `.env.local` file:

```
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_VERSION=2023-01-01
SANITY_TOKEN=your_read_only_token

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2023-01-01
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🧾 Scripts

| Command            | Description                     |
| ------------------ | ------------------------------- |
| `npm run dev`      | Start dev server with Turbopack |
| `npm run build`    | Create production build         |
| `npm run start`    | Start production server         |
| `npm run lint:fix` | Lint and auto-fix issues        |
| `npm run format`   | Format with Prettier            |
| `npm run test`     | Run unit tests                  |
| `npm run prepare`  | Husky setup                     |

## 🧪 Testing

This project uses:

- **Jest** for test running
- **React Testing Library** for component testing

```bash
npm run test
```

## 🌍 Deployment

The site is deployed on **Vercel**. When you push to `main`, Vercel automatically builds and updates the live version.

## ✍️ Content Management

The content is fully editable in [Sanity Studio](https://www.sanity.io/manage). The client can log in and edit all texts and images via the Sanity dashboard.

---

## 👩‍💻 Author

Developed by Nataliia Kravchenko for BrandProLab marketing needs.
