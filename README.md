# Pop Doll Fashion

A modern fashion e-commerce website built with Next.js and TypeScript, specializing in designer clothes for Labubu dolls and collectible figures.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- 🛒 Shopping cart functionality with persistent storage
- ❤️ Wishlist system
- 🔍 Product search and filtering
- 📱 Mobile-first responsive design
- ⚡ Fast performance with Next.js 14
- 🎭 Smooth animations with Framer Motion
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Heroicons & Lucide React
- **UI Components:** Radix UI
- **State Management:** React Context API
- **Image Optimization:** Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/anthony-xiao/pop-doll-fashion-site.git
cd pop-doll-fashion-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── Navigation.tsx   # Main navigation component
│   ├── ProductCard.tsx  # Product display component
│   ├── Footer.tsx       # Footer component
│   └── ...
├── contexts/           # React Context providers
│   ├── CartContext.tsx # Shopping cart state management
│   └── WishlistContext.tsx # Wishlist state management
├── products/           # Product pages
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx           # Home page
public/
└── images/            # Static images
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Detail

### Theme System
- Light, dark, and system theme support
- Persistent theme selection
- Smooth theme transitions

### Shopping Cart
- Add/remove items
- Quantity management
- Persistent storage
- Real-time total calculation

### Product Management
- Product cards with hover effects
- Color and size variants
- Rating and review display
- Badge system (New, Sale, Limited, etc.)

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- Website: [Pop Doll Fashion](https://popdollfashion.com)
- Email: contact@popdollfashion.com
- Instagram: [@popdollfashion](https://instagram.com/popdollfashion)

---

Made with ❤️ for the doll fashion community