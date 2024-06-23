# Project Setup Instructions

This project is built using [Next.js](https://nextjs.org/) and was bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. **Run the SQL Script:**
    - Execute the `import.sql` script in your database management tool to set up the necessary database schema and
      initial data. You can find it in `root/doc/import.sql`.

        2. **Set Environment Variables:**
            - Create an `.env` file in the root of your project.
                - Define environment variables required for your project, such as database connection strings or API
                  keys. Example:
                  ```plaintext
                  host=127.0.0.1
                  user=root
                  database=minty_media
                  Authorization=Basic 072dee999ac1a7931c205814c97cb1f4d1261559c0f6cd15f2a7b27701954b8d
                  ```

3. **Run the Project:**
    - Start the development server using one of the following commands:
      ```bash
      npm run dev
      # or
      yarn dev
      # or
      pnpm dev
      # or
      bun dev
      ```
    - Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### Notes

- Ensure your database credentials and configuration in the `.env` file match your local setup.
- Modify the SQL script and environment variables as per your project's requirements.
