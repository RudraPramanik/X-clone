# Build and Deploy: X clone with React, Tailwind, Next, Prisma, Mongo, NextAuth & Vercel (2024)

package used:
react-icon
zustand
prisma -npm install -d prisma(run: npx prisma init)
#for database run npx prisma db push



# Authentication login register controller

npm i @prisma/client
create libs/
npm i brypt
npm i -d @types/bcrypt
npm i next/auth
npm i @next-auth/prisma-adapter
npm i swr
npm i axios



front end integration
npm i react-hot-toast

This is a repository for a FullStack Twitter clone tutorial using React, NextJS, TailwindCSS & Prisma.



We are going to learn funcionalities such as:

- Authentication system
- Notification system
- Image Upload using Base64 strings
- Prisma ORM with MongoDB
- Responsive Layout
- 1 To Many Relations (User - Post)
- Many To Many Relations (Post - Comment)
- Following functionality
- Comments / Replies
- Likes functionality
- Vercel Deployment

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |

self learn:
41-modal
107- mongodbatlas
114- prisma
