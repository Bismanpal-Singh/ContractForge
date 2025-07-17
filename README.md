# Smart Contract Generator for ResilientDB

A modern, AI-powered smart contract generator that uses DeepSeek LLM to create intelligent contracts for ResilientDB based on natural language descriptions.

## ✨ Features

- **AI-Powered Generation**: Uses DeepSeek LLM to understand your requirements and generate appropriate smart contracts
- **Dark Theme UI**: Beautiful, modern interface that matches your development tools
- **Modular Architecture**: Clean, maintainable codebase with reusable components
- **Detailed Contract View**: Comprehensive contract analysis with method explanations
- **ResilientDB Integration**: Generates contracts in the correct format for ResilientDB

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- DeepSeek API key

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd smart-contract-generator
```

2. Install dependencies:
```bash
npm install
```

3. Configure your DeepSeek API key (see Configuration section below)

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

## 🔧 Configuration

### DeepSeek API Setup

1. **Get your API key**: Sign up at [DeepSeek Platform](https://platform.deepseek.com/) and get your API key

2. **Configure the API key** in one of these ways:

   **Option A: Environment variables**
   ```bash
   # Create a .env file in the project root
   VITE_DEEPSEEK_API_KEY=your_actual_deepseek_api_key_here
   VITE_DEEPSEEK_BASE_URL=https://api.deepseek.com/v1
   VITE_DEEPSEEK_MODEL=deepseek-chat
   ```

   **Option B: Direct configuration**
   - Edit the relevant service file in `src/services/` to include your API key (not recommended for production).

### Using the Generator

1. **Describe Your Contract**: Enter a natural language description of what you want your smart contract to do. For example:
   ```
   "Create a contract where Alice and Bob need to approve before any changes can be made to the document"
   ```

2. **Generate**: Click "Generate Contract" and wait for the AI to create your contract

3. **Review**: View the generated contract details, methods, and JSON format

4. **Copy or Download**: Use the generated Solidity or JSON in your ResilientDB application

## 🏗️ Architecture

### Main Components

- **LandingPage**: Intro and onboarding
- **ChatbotPage**: Main chat interface for contract generation
- **Chatbot**: The core chat and contract generation logic
- **Footer**: App footer and links
- **Navbar**: App navigation and branding
- **UI assets**: Custom CSS and SVGs for styling

### Services

- **deepseekService.ts**: Handles communication with DeepSeek API
- **contractValidator.ts**: Validates and analyzes generated contracts

### File Structure

```
src/
├── components/          # React components (Navbar, Footer, etc.)
├── Pages/               # Main pages (LandingPage, ChatbotPage)
├── services/            # Business logic (deepseekService, contractValidator, Chatbot)
├── assets/              # Images and SVGs
├── App.tsx              # Main application (handles navigation)
├── main.tsx             # Entry point
├── index.css            # Global styles
└── components/ui/       # UI-specific CSS
```

- Navigation is handled via React state in `App.tsx`.

## 🔌 DeepSeek Integration

The application is configured to use DeepSeek's API for smart contract generation. The integration includes:

- **Automatic API calls** to DeepSeek's chat completions endpoint
- **Structured prompts** optimized for smart contract generation
- **Error handling** with user feedback
- **Response parsing** to extract contract details and convert to ResilientDB format

### API Configuration

The DeepSeek integration is configured via environment variables or directly in the service file:

```env
VITE_DEEPSEEK_API_KEY=your_api_key_here
VITE_DEEPSEEK_BASE_URL=https://api.deepseek.com/v1
VITE_DEEPSEEK_MODEL=deepseek-chat
```

## 🎨 Customization

### Styling

The application uses Tailwind CSS with a custom dark theme. You can customize:

- Colors in `tailwind.config.js`
- Global styles in `src/index.css`
- Component-specific styles in each component

### Contract Templates

Modify the system prompt in the DeepSeek service to change how contracts are generated.

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy

The built files in `dist/` can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- etc.

**Important**: For production deployment, use environment variables to configure your API key instead of hardcoding it in the source code.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the browser console for errors
2. Verify your DeepSeek API key is correct
3. Ensure you have a stable internet connection
4. Check the DeepSeek API status page

## 🔮 Future Enhancements

- [ ] Support for more contract frameworks (Ethereum, Solana, etc.)
- [ ] Contract validation and testing
- [ ] Template library for common contract patterns
- [ ] Integration with ResilientDB deployment
- [ ] Contract versioning and history
- [ ] Multi-language support
- [ ] Advanced contract analysis
- [ ] Support for other LLM providers (OpenAI, Anthropic, etc.)
