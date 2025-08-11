# Luxury Car Garage

A modern React application for a luxury car garage showcasing premium car rental and services. This project features a beautiful, responsive design with multiple components including a header, hero section, booking functionality, car gallery, and footer.

## 🚗 Features

- **Responsive Design**: Modern, mobile-friendly interface
- **Car Gallery**: Showcase of luxury vehicles
- **Booking Section**: Interactive booking functionality
- **Hero Section**: Eye-catching landing area
- **Professional Header & Footer**: Complete navigation structure

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**

### Check your Node.js version:
```bash
node --version
npm --version
```

## 📦 Installation

1. **Clone the repository** (if you haven't already):
```bash
git clone <repository-url>
cd LuxuryCarGaarage
```

2. **Install dependencies**:
```bash
npm install
```

## 🚀 Running the Project

### Development Mode
To start the development server:

```bash
npm start
```

This will:
- Start the development server on `http://localhost:3000`
- Open the application in your default browser
- Enable hot reloading for development

### Production Build
To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Testing
To run tests:

```bash
npm test
```

### Eject (Advanced)
⚠️ **Warning**: This is a one-way operation. Once you eject, you can't go back!

```bash
npm run eject
```

## 📁 Project Structure

```
LuxuryCarGaarage/
├── public/
│   ├── img/                 # Car images and assets
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero section
│   │   ├── BookingSection.js # Booking functionality
│   │   ├── CarGallery.js   # Car showcase
│   │   └── Footer.js       # Footer component
│   ├── App.js             # Main App component
│   ├── App.css            # App styles
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🎨 Technologies Used

- **React 18.2.0** - Frontend framework
- **React DOM 18.2.0** - React rendering
- **React Scripts 5.0.1** - Build tools and development server

## 🌐 Browser Support

The application supports:
- **Production**: All browsers with >0.2% market share, excluding dead browsers and Opera Mini
- **Development**: Latest versions of Chrome, Firefox, and Safari

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🔧 Troubleshooting

### Common Issues:

1. **Port 3000 already in use**:
   - The development server will automatically suggest using a different port
   - Or manually kill the process using port 3000

2. **Node modules issues**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**:
   - Ensure all dependencies are installed
   - Check for syntax errors in your code
   - Verify Node.js version compatibility

## 📄 License

This project is part of the Luxury Car Garage application.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

**Happy coding! 🚗✨**
