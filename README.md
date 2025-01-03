# symfonia-ebiuro-node

## Install

```
npm install symfonia-ebiuro-node
```

# Usage

## Send message

```js
import { Symfonia } from "telegram-bot-api-nodejs"

const symfonia = new Symfonia("email@company.com", "password123")
const companies = await symfonia.listCompanies()

```
