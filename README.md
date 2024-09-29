# _devspace

Welcome to **_devspace**, an innovative pair programming platform designed to seamlessly connect developers across the globe. Whether you're looking to collaborate on a project, improve your coding skills, or network with other developers, devspace offers the tools and community to help you achieve your goals. <br /> <br/> Check out **_devspace** [here](https://devspaceorg.vercel.app/)


## 🚀 Features

- **Find and Connect:** Easily discover and connect with developers who share your interests.
- **Create Live Rooms:** Set up live rooms for video chat and real-time collaboration.
- **Screen Sharing:** Share your screen for an immersive pair programming experience.
- **Browse and Join Rooms:** Explore and join rooms that match your interests and skills.

## 🛠️ Tech Stack

- **Frontend:** Next.js, TypeScript, TailwindCSS
- **Backend:** Node.js, Express, Next.js
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** NextAuth, OAuth (GitHub)
- **Deployment:** Render, vercel

## 🌟 Why _devspace?

### For Beginners:
Pair programming is an excellent way for beginners to learn and grow. By connecting with more experienced developers, you can:

- **Learn Best Practices:** Understand coding standards and best practices through live examples.
- **Gain Confidence:** Build confidence by working on real projects with guidance.
- **Improve Problem-Solving Skills:** Learn to approach problems differently and find efficient solutions.

### For Experienced Developers:
devspace isn’t just for beginners. Experienced developers can also benefit by:

- **Mentorship Opportunities:** Share your knowledge and help shape the next generation of developers.
- **Collaborate on Projects:** Work with peers on exciting new projects and ideas.
- **Network:** Expand your professional network and discover new opportunities.

## 🎉 Getting Started

### Prerequisites
- Node.js
- PostgreSQL
- GitHub OAuth App for authentication

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/devspace.git
    cd devspace
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    DATABASE_URL=your_postgresql_database_url
    NEXTAUTH_URL=your_deployment_url
    GITHUB_ID=your_github_client_id
    GITHUB_GITHUB_SECRETCLIENT_SECRET=your_github_client_secret
    NEXTAUTH_SECRET="your_super_secret_next_auth_secret"
    NEXT_PUBLIC_GET_STREAM_API_KEY=your_Get_Stream_api_key
    GET_STREAM_SECRET_KEY="your_Get_Stream_Secret_Key"
    ```
    - for local development you can use the NEXTAUTH_URL as:
        ```
        NEXTAUTH_URL=http://localhost:3000
        ```
    - for NEXTAUTH_SECRET you can run any of the following command (run on your terminal)
        ```
        node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
        ```
        You can quickly create a good value on the command line via this openssl command.
        ```
        $ openssl rand -base64 32
        ```
4. **Run the development server:**
    ```bash
    npm run dev
    ```

5. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## 🧑‍💻 Contributing

We welcome contributions from the community! Here’s how you can help:

1. **Fork the repository**
2. **Create a new branch:**
    ```bash
    git checkout -b feature-name
    ```
3. **Make your changes and commit them:**
    ```bash
    git commit -m 'Add feature'
    ```
4. **Push to the branch:**
    ```bash
    git push origin feature-name
    ```
5. **Open a pull request**

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Ready to start coding? [Join devspace today](https://devspaceorg.vercel.app/) and take your development skills to the next level!

---

Build by [Mahendra](https://twitter.com/mahendra_dew)
