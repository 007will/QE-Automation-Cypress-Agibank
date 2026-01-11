# 🧪 QA Automation Project — AgiBank

![Cypress](https://img.shields.io/badge/Cypress-Automation-green?logo=cypress)
![CI](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-success)
![API](https://img.shields.io/badge/API-Testing-orange)
![QA](https://img.shields.io/badge/Quality-Assurance-blue)

---

## 🎯 Overview

This repository contains a **professional QA automation project** built with **Cypress**, focused on validating real user and API flows of the **AgiBank Blog**.

The project demonstrates **best practices in test automation**, including clean architecture, reusable components, dynamic test data, CI/CD integration and automated reporting.

---

## 🛠️ Tech Stack

- Cypress
- JavaScript
- API Testing
- GitHub Actions
- Allure Reports
- Faker

---

## 📁 Project Structure

```
qa-automation-cypress-agibank/
├── cypress/
│   ├── e2e/
│   │   ├── ui/
│   │   │   └── newsletter.cy.js
│   │   └── api/
│   │       └── newsletter-api.cy.js
│   ├── pages/
│   │   └── NewsletterPage.js
│   ├── utils/
│   │   └── dataFactory.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .github/workflows/
│   └── cypress.yml
├── cypress.config.js
├── package.json
└── README.md
```

---

## ⚙️ Prerequisites

- Node.js (LTS)
- npm or yarn

---

## 📦 Installation

```bash
npm install
```

---

## ▶️ Running Tests

```bash
npx cypress open
npx cypress run
```

---

## 🧪 Test Coverage

- Newsletter subscription
- Email validations
- Blog search
- UI and API testing

---

## 👤 Author

José Willams  
https://github.com/007will
