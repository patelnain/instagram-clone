# Insta-Clone

A social media clone built using React, Firebase, Chakra UI, and Zustand, powered by Vite.

## 🚀 Getting Started

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (LTS version recommended) - [Download Here](https://nodejs.org/)
- **npm** or **yarn** (for package management)

Verify installation:
```sh
node -v
npm -v  # or yarn -v
```

---

## **📌 Installation**

1. **Clone the Repository**
   ```sh
   git clone <your-repo-url>
   cd insta-clone
   ```

2. **Install Dependencies**
   ```sh
   npm install  # or yarn install
   ```

3. **Set Up Firebase**
   - Create a Firebase project in [Firebase Console](https://console.firebase.google.com/)
   - Get your Firebase config and create a `firebaseConfig.js` file in the `src` directory:
   
     ```js
     import { initializeApp } from "firebase/app";

     const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
     };

     const app = initializeApp(firebaseConfig);
     export default app;
     ```

4. **Run the Development Server**
   ```sh
   npm run dev  # or yarn dev
   ```
   This will start the server at `http://localhost:5173/`

---

## **📦 Project Scripts**
| Command           | Description                          |
|------------------|----------------------------------|
| `npm run dev`    | Starts the development server    |
| `npm run build`  | Builds the project for production |
| `npm run preview` | Previews the production build   |
| `npm run lint`   | Lints the project with ESLint    |

---

## **🛠 Tech Stack**
- **React 18** - Frontend framework
- **Vite** - Fast development build tool
- **Firebase** - Authentication and Database
- **Chakra UI** - UI components
- **Zustand** - State management
- **Framer Motion** - Animations
- **React Router** - Routing

---

## **📜 License**
This project is licensed under the MIT License.

---

🚀 **Enjoy Coding!** If you have any issues, feel free to open an issue or contribute. 🎉

