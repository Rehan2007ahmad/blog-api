# Blog API

A simple RESTful API for a blog platform, built with Node.js and Express.

## Features
- User authentication and role-based access control
- CRUD operations for posts and categories
- Image upload support (Cloudinary & Multer)
- Modular code structure (controllers, models, routes, middleware)

## Project Structure
```
app.js
package.json
config/
  cloudinary.js
  db.js
  multer.js
controllers/
  category.controller.js
  post.controller.js
  user.controller.js
middleware/
  auth.middleware.js
  role.middleware.js
models/
  category.models.js
  post.models.js
  user.models.js
routes/
  category.routes.js
  post.routes.js
  role.routes.js
  user.routes.js
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Rehan2007ahmad/blog-api/
   cd blog
   ```
2. Install dependencies:
   ```sh
   npm init -y
   npm i express  bcryptjs cors slugify dotenv  jsonwebtoken mongoose nodemailer
   ```
3. Set up environment variables (e.g., database URI, Jwt Secret ) in a `.env` file.
   ```sh
    PORT=3000
    JWT_SECRET=your_jwt_secret
    MONGO_URI=your mongodb url
    NODEMAILER_USER=your email
    NODEMAILER_PASS=your password


### Running the App
```sh
node app.js || nodemon app.js
```

## API Endpoints

### Category API Endpoints (`/api/category`)

| Method | Endpoint              | Description                                                      | Access                |
|--------|----------------------|------------------------------------------------------------------|-----------------------|
| POST   | `/create`            | Create a new category                                            | Admin, Editor         |
| PUT    | `/:id`               | Update a category by ID                                          | Admin, Editor         |
| DELETE | `/:id`               | Delete a category by ID                                          | Admin, Editor         |
| GET    | `/by-name/:name`     | Get a category by its name                                       | Public                |
| GET    | `/`                  | Get all categories                                               | Public                |
| GET    | `/:id`               | Get a category by ID                                             | Public                |

#### Usage Examples

- **Create Category**
  - `POST /api/category/create`
  - Body: `{ "name": "Technology" }`
  - Requires authentication and role (admin/editor)

- **Get All Categories**
  - `GET /api/category/`
  - Public access

- **Get Category by Name**
  - `GET /api/category/by-name/Technology`
  - Public access

- **Update Category**
  - `PUT /api/category/:id`
  - Body: `{ "name": "New Name" }`
  - Requires authentication and role (admin/editor)

- **Delete Category**
  - `DELETE /api/category/:id`
  - Requires authentication and role (admin/editor)


### Post API Endpoints (`/api/post`)

| Method | Endpoint      | Description                                 | Access         |
|--------|--------------|---------------------------------------------|---------------|
| POST   | `/`          | Create a new post (with up to 10 images)    | Admin, Editor |
| PUT    | `/:id`       | Update a post by ID (with images)           | Admin, Editor |
| DELETE | `/:id`       | Delete a post by ID                         | Admin, Editor |
| GET    | `/`          | Get all posts                               | Public        |
| GET    | `/:id`       | Get a post by ID                            | Public        |

#### Usage Examples

- **Create Post**
  - `POST /api/post/`
  - Form Data: `title`, `description`, `author`, `category`, `images` (up to 10 files)
  - Requires authentication and role (admin/editor)

- **Get All Posts**
  - `GET /api/post/`
  - Public access

- **Get Post by ID**
  - `GET /api/post/:id`
  - Public access

- **Update Post**
  - `PUT /api/post/:id`
  - Form Data: `title`, `description`, `author`, `category`, `images` (optional)
  - Requires authentication and role (admin/editor)

- **Delete Post**
  - `DELETE /api/post/:id`
  - Requires authentication and role (admin/editor)



### User API Endpoints (`/api/user`)

| Method | Endpoint           | Description                                         | Access  |
|--------|--------------------|-----------------------------------------------------|---------|
| POST   | `/register`        | Register a new user                                 | Public  |
| POST   | `/login`           | Login and get JWT token                             | Public  |
| GET    | `/`                | Get all users                                       | Public  |
| GET    | `/:id`             | Get a user by ID                                    | Public  |
| PUT    | `/:id`             | Update a user by ID                                 | Public  |
| DELETE | `/:id`             | Delete a user by ID                                 | Public  |
| POST   | `/send-otp`        | Send OTP to user's email for password reset         | Auth    |
| POST   | `/verify-otp`      | Verify OTP sent to email                            | Auth    |
| POST   | `/change-password` | Change password after OTP verification (with token) | Auth    |

#### Password Reset Flow

1. **Send OTP**
   - `POST /api/user/send-otp`
   - Body: `{ "email": "user@example.com" }`
   - Requires authentication (JWT token)
   - An OTP will be sent to the user's email address.

2. **Verify OTP**
   - `POST /api/user/verify-otp`
   - Body: `{ "otp": 123456 }`
   - Requires authentication (JWT token)
   - If valid, a temporary token is returned for password change.

3. **Change Password**
   - `POST /api/user/change-password?token=<tempToken>`
   - Body: `{ "newPassword": "newpassword123" }`
   - Requires authentication (JWT token)
   - Changes the user's password if the token is valid.

#### Usage Examples

- **Register User**
  - `POST /api/user/register`
  - Body: `{ "firstName": "John", "lastName": "Doe", "email": "john@example.com", "password": "secret123", "role": "user" }`
  - Public access

- **Login User**
  - `POST /api/user/login`
  - Body: `{ "email": "john@example.com", "password": "secret123" }`
  - Public access

- **Get All Users**
  - `GET /api/user/`
  - Public access

- **Get User by ID**
  - `GET /api/user/:id`
  - Public access

- **Update User**
  - `PUT /api/user/:id`
  - Body: `{ "firstName": "Jane", "lastName": "Smith", ... }`
  - Public access

- **Delete User**
  - `DELETE /api/user/:id`
  - Public access

- **Send OTP**
  - `POST /api/user/send-otp`
  - Body: `{ "email": "user@example.com" }`
  - Requires authentication (JWT token)

- **Verify OTP**
  - `POST /api/user/verify-otp`
  - Body: `{ "otp": 123456 }`
  - Requires authentication (JWT token)

- **Change Password**
  - `POST /api/user/change-password?token=<tempToken>`
  - Body: `{ "newPassword": "newpassword123" }`
  - Requires authentication (JWT token)

#### Usage Examples

- **Register User**
  - `POST /api/user/register`
  - Body: `{ "firstName": "John", "lastName": "Doe", "email": "john@example.com", "password": "secret123", "role": "user" }`
  - Public access

- **Login User**
  - `POST /api/user/login`
  - Body: `{ "email": "john@example.com", "password": "secret123" }`
  - Public access

- **Get All Users**
  - `GET /api/user/`
  - Public access

- **Get User by ID**
  - `GET /api/user/:id`
  - Public access

- **Update User**
  - `PUT /api/user/:id`
  - Body: `{ "firstName": "Jane", "lastName": "Smith", ... }`
  - Public access

- **Delete User**
  - `DELETE /api/user/:id`
  - Public access

---


## License
MIT
