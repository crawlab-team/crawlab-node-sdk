# Crawlab Node.js SDK

Node.js SDK for Crawlab.

## Installation

You can install the SDK via npm, yarn, or pnpm.

```bash
npm install @crawlab/sdk 
# or
yarn add @crawlab/sdk 
# or
pnpm add @crawlab/sdk
```

Alternatively, you can include the SDK in your `package.json` file.

```json
{
  "dependencies": {
    "@crawlab/sdk": "^0.7.0"
  }
}
```

## Usage

Use JavaScript or TypeScript to import the SDK and call the functions.

```javascript
// JavaScript
const { saveItem } = require('@crawlab/sdk');

saveItem({
  hello: 'world',
});
```

```typescript
// TypeScript
import { saveItem } from '@crawlab/sdk';

saveItem({
  hello: 'world',
});
```
