🎭 Playwright Demo Project

📖 Description  
This project contains automated end-to-end tests using Playwright framework for web application testing. It includes comprehensive test suites for user registration, login, product ordering, and API testing. It also demonstrates the use of fixture - logged in user state.

✨ Features  

Page Object Model (POM) architecture  
API Testing with utilities  
Cross-browser testing (Chrome, Firefox, Safari)  
Test data management with JSON files  
GitHub Actions CI/CD integration  
Headless and headed execution modes  

🚀 Prerequisites  
Before running this project, make sure you have:  

Node.js (version 14 or higher)  
npm or yarn package manager  
Git for version control  

🛠️ Installation  

Clone the repository  
bash git clone https://github.com/ShobhitDeshwal/PlayWright_Demo.git  
cd PlayWright_Demo  

Install dependencies  
bash npm install  

Install Playwright browsers  
bash npx playwright install  

Set up environment variables  
bashcp .env.example .env  
# Edit .env file with your configuration  


🎯 Usage  
Running Tests  
Run all tests:  
bashnpm test  
# or  
npx playwright test  
Run specific test file:  
bashnpx playwright test tests/login.spec.ts  
Run tests in headed mode:  
bashnpx playwright test --headed  
Run tests in specific browser:  
bashnpx playwright test --project=chromium  
npx playwright test --project=firefox  
Run API tests only:  
bashnpx playwright test tests/API/  
Viewing Test Reports  
bash npx playwright show-report  


📁 Project Structure  
```
playwright_demo/
├── 📂 fixture
│   └── 📄 loginfixture.ts 
├── 📂 page_objects/          # Page Object Model files
│   ├── 📂 cart/              # Cart related pages
│   └── 📄 home-page.ts       # Home page object
├── 📂 tests/                 # Test files
│   ├── 📂 API/               # API test cases
│   └── 📄 login.spec.ts      # Login test scenarios
├── 📂 test_data/             # Test data files
│   ├── 📄 register.ts        # Registration test data
│   └── 📄 registeredUsers.json
├── 📂 utils/                 # Utility functions
│   ├── 📄 apiUtils.ts        # API testing utilities
│   └── 📄 fileUtils.ts       # File handling utilities
├── 📂 types/                 # TypeScript type definitions
├── 📄 playwright.config.ts   # Playwright configuration
└── 📄 package.json           # Project dependencies
```

🧪 Test Scenarios  
UI Tests  
✅ User Registration  
✅ User Login  
✅ Product Search & Filter  
✅ Order Management  

API Tests  
✅ User Registration API  
✅ Authentication API  

Fixture Tests  
✅ Matching User profile  


📊 Test Reports  
After running tests, reports are generated in:  

playwright-report/ - HTML reports  
test-results/ - Screenshots and videos  

🌐 CI/CD  
This project uses GitHub Actions for continuous integration:  
yaml- name: Run Playwright tests  
  run: npx playwright test  
  
- name: Upload test results  
  uses: actions/upload-artifact@v3  
  if: failure()  
🤝 Contributing  

Fork the repository  
Create a feature branch: git checkout -b feature/new-feature  
Commit your changes: git commit -m "Add new feature"  
Push to the branch: git push origin feature/new-feature  
Submit a pull request  


🐛 Troubleshooting  
Common Issues:  
Browser not found  
bashnpx playwright install  

Test failures  
bash# Run with debug mode  
npx playwright test --debug  


📄 License  
This project is licensed under the MIT License - see the LICENSE file for details. 

👨‍💻 Author  
Shobhit Deshwal  

GitHub: @ShobhitDeshwal  

🙏 Acknowledgments  
Playwright Documentation  
TypeScript Documentation  
Community contributors and testers  


⭐ If you find this project helpful, please give it a star! ⭐  
