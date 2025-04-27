 # AI Safety Incident Dashboard

An interactive and stylish web application to track and manage AI safety incidents.

## 🚀 Project Features
- Display list of AI incidents with Title, Severity, and Reported Date.
- Filtering incidents by Severity ("All", "Low", "Medium", "High").
- Sorting incidents by Reported Date (Newest First, Oldest First).
- Expand/Collapse incident details with a "View Details" button.
- Report new incidents via a form (with input validation).
- Responsive and modern design using Flexbox/Grid and custom CSS.
- Built with **ReactJS**, **HTML**, **CSS**, and **JavaScript** (no TailwindCSS).

## 📦 How to Run Locally

### 1. Clone the repository
```bash
git clone  https://github.com/KeerthiKumarK/AI-Safety-Incident
cd AI-Safety-Incident
```
### 2. Install dependencies
   ```bash
 npm install
```
### 3. Start the development server
   ```bash
 npm start
```
   
The app will be available at [http://localhost:3000/](http://localhost:3000/) by default.

## 🛠️ Technologies Used
- **Frontend**: ReactJS
- **Styling**: HTML5, CSS3, JavaScript
- **State Management**: React `useState`

## ✨ Design Decisions
- Chose Flexbox and Grid for layout to ensure responsiveness.
- Managed expanded/collapsed state with a simple `useState` hook for clarity.
- Used basic form validation to enhance user experience without external libraries.

## ❗ Notes
- Dates are handled in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`).
- No external CSS frameworks (like TailwindCSS) are used to maintain custom styling.

---

Made with ❤️ for a better understanding of incident reporting!

