# symfonia-ebiuro-node

## Install

```
npm install symfonia-ebiuro-node
```

# Usage

## Send message

```js
import { Symfonia } from "symfonia-ebiuro-node"

const symfonia = new Symfonia("email@company.com", "password123")
const companies = await symfonia.listCompanies()

```
