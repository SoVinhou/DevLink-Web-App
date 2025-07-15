# DevLink Freelancing Web Application

DevLink is a full-stack web application designed to connect freelancers with job opportunities efficiently. Built with React.js, it features secure authentication, integrated Stripe payment processing, and dynamic job postings with AI-generated descriptions powered by GPT. The application uses Firebase for storage and database management, ensuring real-time data handling and scalability. DevLink is optimized for performance and provides a smooth, user-friendly experience across devices.

## Prerequisites

- [Node.js & npm](https://nodejs.org/) (npm is included with Node.js)
- [Git](https://git-scm.com/)
- [Firebase Project](https://firebase.google.com/) (for authentication, Firestore, and storage)
- [Stripe Account](https://dashboard.stripe.com/register) (for payments)
- [SendGrid Account](https://sendgrid.com/) (for email)
- [OpenAI API Key](https://platform.openai.com/) (for AI job descriptions)

## Setup Instructions

1. **Clone the repository:**
   ```powershell
   git clone <your-repo-url>
   cd DevLink-Web-App
   ```

2. **Install dependencies for both frontend and backend:**
   ```powershell
   & "C:\Program Files\nodejs\npm.cmd" install
   cd server
   & "C:\Program Files\nodejs\npm.cmd" install
   cd ..
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the `server` folder with the following (replace with your actual keys):
     ```env
     STRIPE_SECRET_TEST=your_stripe_secret_key
     SENDGRID_API_KEY=your_sendgrid_api_key
     TEMPLATE_ID=your_sendgrid_template_id
     OPENAI_API_KEY=your_openai_api_key
     PORT=4000
     ```
   - For Firebase, update the config in `src/routes/utils/firebase.jsx` with your Firebase project credentials.

4. **Running the Application:**
   - Open two PowerShell terminals in VS Code:
     - **Frontend:**
       ```powershell
       & "C:\Program Files\nodejs\npm.cmd" start
       ```
     - **Backend:**
       ```powershell
       cd server
       & "C:\Program Files\nodejs\node.exe" index.js
       ```

5. **Access the App:**
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:4000](http://localhost:4000)

## Notes
- If you get npm or node not found errors, add Node.js to your PATH or use the full path as shown above.
- If you see dependency errors, use `--legacy-peer-deps` with npm install.
- Make sure all API keys and environment variables are set correctly for full functionality.

---
