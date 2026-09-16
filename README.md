# NegarTime

> Where Time Meets Style.

NegarTime is a premium watch e-commerce experience built with modern frontend technologies, focusing on elegant visual design, smooth interactions, responsive layouts, and a scalable architecture ready for future backend integration.

The project is designed as a complete digital storefront for discovering, exploring, and managing premium watches.

## ✨ Features

- Premium dark luxury interface
- Fully responsive RTL design
- Persian typography with Vazirmatn
- Product catalog and product detail pages
- Product search and filtering
- Category and collection browsing
- Product sorting
- Wishlist functionality
- Shopping cart with persistent state
- Cart drawer and dedicated cart page
- Product variants
- Product specifications
- Product ratings and reviews UI
- Related products
- New arrivals and featured products
- Collection showcases
- 3D product viewing architecture
- Interactive navigation and mobile menu
- FAQ page
- Privacy policy page
- Account dashboard
- Orders page architecture
- Contact page
- SEO-ready metadata structure
- Accessible UI patterns
- Reduced-motion support
- Scalable data and component architecture

## 🛠 Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Zustand
- Lucide React

### 3D

- Three.js
- React Three Fiber
- Drei

### Styling

- Tailwind CSS
- Vazirmatn
- Custom design tokens
- RTL-first layout system

### Developer Experience

- ESLint
- Prettier
- Prettier Tailwind Plugin

## 🎨 Design System

NegarTime uses a dark luxury visual language built around neutral surfaces and warm metallic accents.

| Token            | Value     |
| ---------------- | --------- |
| Background       | `#0A0A0A` |
| Surface          | `#111111` |
| Elevated Surface | `#171717` |
| Foreground       | `#F5F1E8` |
| Muted            | `#A7A39B` |
| Accent           | `#C6A15B` |
| Accent Light     | `#DEC27F` |
| Accent Dark      | `#98773B` |
| Success          | `#7DA47D` |
| Danger           | `#C97878` |

The interface is built around:

- High contrast
- Minimal visual noise
- Generous spacing
- Rounded components
- Subtle motion
- Warm metallic accents
- Editorial product presentation

## 🛒 Commerce Experience

The storefront currently includes the core frontend architecture required for a premium watch shop.

### Product Discovery

Users can:

- Browse all products
- Search products
- Filter by category
- Filter by collection
- Filter by availability
- Filter by price range
- Sort products
- Explore featured products
- Explore new arrivals

### Product Pages

Each product can include:

- Multiple product images
- Product gallery
- Product information
- Pricing
- Product variants
- Stock information
- Specifications
- Ratings
- Related products
- 3D model support

### Cart

The shopping cart supports:

- Add to cart
- Remove items
- Quantity management
- Variant selection
- Persistent cart state
- Subtotal calculation
- Shipping calculation
- Discount architecture
- Total calculation

### Wishlist

The wishlist supports:

- Add and remove products
- Persistent wishlist state
- Wishlist count
- Wishlist page
- Wishlist buttons across product cards and product pages

## 🧩 State Management

Client-side commerce state is handled using Zustand.

Current stores include:

```text
Cart Store
Wishlist Store
```

The architecture is prepared for future integration with:

```text
Authentication
Backend APIs
Database
Orders
Payments
Customer profiles
Inventory
Promotions
```

## 🌐 Routing

Main routes include:

```text
/
├── shop
│   └── [slug]
├── collections
│   └── [slug]
├── categories
│   └── [slug]
├── about
├── contact
├── faq
├── privacy
├── account
│   └── orders
├── wishlist
└── cart
```

The route structure is designed to support future authenticated areas and additional commerce functionality.

## 📱 Responsive Design

NegarTime is designed for:

- Mobile
- Tablet
- Laptop
- Desktop
- Large displays

The navigation, product grids, filters, galleries, cart experience, and content sections adapt to different viewport sizes.

## ♿ Accessibility

Accessibility is considered throughout the interface with:

- Semantic HTML
- Keyboard-friendly interactions
- Visible focus states
- Accessible button labels
- Responsive touch targets
- Reduced-motion support
- RTL document structure

## 🔍 SEO

The project includes a centralized SEO architecture with:

- Default metadata
- Page-specific metadata
- Canonical URLs
- Open Graph metadata
- Twitter metadata
- Robots configuration
- Persian keywords
- Product and collection route metadata

## 🚀 Getting Started

### Requirements

- Node.js 20+
- npm 10+

### Installation

```bash
git clone https://github.com/SinaAghajani/negartime.git

cd negartime

npm install
```

### Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production Build

```bash
npm run build
```

### Production Start

```bash
npm run start
```

## 📦 Environment Variables

Environment-specific configuration can be added through:

```text
.env.local
```

Example:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Production secrets and backend credentials should never be committed to the repository.

## 🔮 Future Roadmap

The current project is structured to support future development including:

- Authentication
- Customer profiles
- Backend API
- Database integration
- Product management
- Inventory management
- Order management
- Online payment
- Discount and coupon system
- Customer reviews
- Admin dashboard
- Order tracking
- Real-time inventory
- Advanced product search
- CMS integration
- Analytics
- Production-grade 3D product models

## 📸 Product Presentation

NegarTime is designed around visual product presentation.

The asset architecture supports:

```text
Product Images
Collection Images
Category Images
Marketing Banners
Brand Assets
3D Watch Models
Textures
Icons
```

This separation makes it possible to replace or expand the visual catalog without changing the core application architecture.

## 🧠 Project Goals

NegarTime was built around several principles:

- Design should communicate product quality.
- Components should remain reusable.
- Commerce logic should stay independent from presentation.
- The frontend should be ready for backend integration.
- Performance should be considered from the beginning.
- Responsive behavior should be part of the architecture.
- The codebase should remain maintainable as the product grows.

## 📄 License

This project is a personal portfolio and development project.

All product names, visual assets, branding, and demonstration content are used for project presentation purposes unless otherwise specified.

## 👨‍💻 Author

### Sina Aghajani

Frontend Developer & Educational Technology Researcher

- GitHub: [SinaAghajani](https://github.com/SinaAghajani)
- LinkedIn: [Sina Aghajani](https://www.linkedin.com/in/sina-aghajani1/)

---

<p align="center">
  Built with Next.js, React, TypeScript and a passion for elegant interfaces.
</p>

<p align="center">
  <strong>NegarTime — Where Time Meets Style.</strong>
</p>
