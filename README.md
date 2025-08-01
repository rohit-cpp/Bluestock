# 🚀 Upcoming IPO Frontend Platform (ReactJS)

> A **pixel-perfect**, fully responsive, and component-based React application showcasing **Upcoming IPOs** and a basic **IPO Admin Dashboard**, as per Figma design specs. Built with scalability and modern UI/UX in mind.


---

## 🎯 Features

### ✅ Upcoming IPO Page
- 📋 Lists all upcoming IPOs in an attractive card layout
- 🔍 **Search** IPOs by company name
- 🗓️ **Filter** by date and sector
- 📅 Shows Open/Close Date, Price Band, Lot Size, Listing Date
- 🏷️ Status Tags: `Upcoming`, `Ongoing`, `Closed`, `Listed`
- 📱 Fully **responsive** (Mobile, Tablet, Desktop)
- 📄 Detailed IPO view on click
- 🌙 (Optional) Dark/Light Mode toggle

### ✅ Admin Dashboard
- 🔐 **Login Authentication** (with basic static form validation)
- 🧾 IPO Management Table: Add / Edit / Delete IPOs
- 📝 IPO Form with:
  - Form validation
  - All required fields (Company Name, RHP Link, Dates, etc.)
  - Success and Error Messages

---

## 🛠️ Technology Stack

- ⚛️ **ReactJS** (with Hooks & Component-based architecture)
- 🎨 **TailwindCSS** (utility-first responsive styling)
- 🌐 **Vite** (for lightning-fast dev & build)
- 📦 Static JSON as fallback (mock API)

---

## 📱 Responsiveness

| Device     | Width Range     | Support |
|------------|------------------|---------|
| 📱 Mobile   | `<768px`         | ✅ Yes   |
| 💻 Tablet   | `768px–1024px`   | ✅ Yes   |
| 🖥️ Desktop | `>1024px`        | ✅ Yes   |

Built with **media queries** and Tailwind's responsive breakpoints.

---

## 🧑‍🎨 UI & UX Design

- 🎨 Designed **pixel-perfect** to match shared Figma mockups
- 🧭 Consistent spacing, padding, and typography
- ♿ **Accessibility**: Semantic tags, labels, `aria-*` attributes
- ⚙️ Custom constants used from `.env` and config files

---

## 🧪 Testing & QA

- ✅ Chrome DevTools used for responsive testing
- ✅ Static analysis with ESLint
- ✅ Mobile/tablet/Desktop simulation done
- ✅ Forms and filter behavior tested

---

## 🚧 Dev Guidelines

- No inline CSS used
- All assets are optimized
- No hardcoded values – constants used
- Folder structure supports **scalability**
- Comments added for complex UI logic
- Fully **build-ready** using:

---

## 🖼️ Screenshots

<img width="1870" height="887" alt="Screenshot 2025-08-01 114326" src="https://github.com/user-attachments/assets/0af9af9c-fa23-43b6-bbdf-4622eaafa64e" />
<img width="1862" height="890" alt="Screenshot 2025-08-01 114303" src="https://github.com/user-attachments/assets/eb2b2faa-6002-4437-bc5f-64c69da6775a" />
<img width="1861" height="876" alt="Screenshot 2025-08-01 114240" src="https://github.com/user-attachments/assets/eea32061-7eac-4dc5-b2ec-a539ad30bec4" />
<img width="1876" height="889" alt="Screenshot 2025-08-01 114341" src="https://github.com/user-attachments/assets/bc8c19e7-572b-4801-81d0-fca131a25a3f" />


git clone [https://github.com/your-username/ipo-platform-frontend](https://github.com/rohit-cpp/Bluestock).git
cd frontend
npm install
npm run dev


---

## 🧩 Sample Static JSON (IPO Data)
[
  
    "id": 1,
    "companyName": "Tata Technologies",
    "openDate": "2025-08-10",
    "closeDate": "2025-08-12",
    "priceBand": "₹475 - ₹500",
    "lotSize": 30,
    "sector": "Automobile",
    "status": "Upcoming"
  
]

---

## 📄 License
- This project is part of a frontend assignment and is not intended for commercial distribution. All code is original and manually written without the use of AI tools.
  

