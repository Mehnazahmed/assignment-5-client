# Sports Facility Booking Platform - Frontend

This repository contains the frontend code for the Sports Facility Booking Platform. The platform allows users to browse and book various sports facilities, providing a modern and responsive interface for facility management, user registration, booking, and payments. The project uses React, Redux, TypeScript, and other modern technologies to deliver a seamless user experience.

## Technologies Used

### Core Libraries:

- **React**: A JavaScript library for building user interfaces.
- **Redux**: A predictable state container for managing application state.
- **TypeScript**: A typed superset of JavaScript that helps with development scalability.
- **Ant Design**: A React UI framework with customizable components.
- **Tailwind CSS**: A utility-first CSS framework for building custom UI designs efficiently.

### Additional Technologies:

- **Toast Notifications**: Notifications are managed using the `sonner` library for displaying messages and alerts to users.

### DevOps:

- **pnpm**: An efficient package manager (optional).
- **npm**: The default package manager.

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your local development machine:

- Node.js (v14+)
- npm or pnpm package manager
- Git

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/Mehnazahmed/assignment-5-client.git
cd assignment-5-client


```

```bash
Install all required dependencies using npm or pnpm:

npm install

```

```bash
Running the Development Server
To start the development server, use the following command:

bash
Copy code
npm run dev

```

```bash
Building for Production
To create a production build of the project, run:

bash
Copy code
npm run build

```

```
###Features:

- **Responsive Design**: Built using Tailwind CSS and Ant Design, the platform is fully responsive and mobile-friendly.
Facility Management: Fa**cility owners can add, update, or delete facilities.
-**User Management:** Users can register, log in, and view their bookings.
****Booking System:** Users can view available time slots and make bookings.

**Notifications:** Real-time toast notifications are used to inform users of their actions (e.g., successful booking, errors).

```

```bash
Configuration
Make sure to configure the necessary environment variables in a .env file at the root of the project. Example:

bash
Copy code
NEXT_PUBLIC_API_URL=http://your-api-url.com
NEXT_PUBLIC_STRIPE_KEY=your-stripe-public-key
NEXTAUTH_SECRET=your-auth-secret
NODE_ENV= development
PORT=5000
DATABASE_URL=mongodb+srv://"":""@cluster0.sn1j5xu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


JWT_ACCESS_SECRET=
JWT_ACCESS_EXPIRES_IN=2d
JWT_REFRESH_SECRET=

JWT_REFRESH_EXPIRES_IN=3d
SUPER_ADMIN_PASSWORD=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

STORE_ID=
SIGNATUREKEY=
PAYMENT_URL=
PAYMENT_VERIFY_URL=
```
