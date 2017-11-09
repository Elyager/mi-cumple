# Tu Cumple

A simple npm module example that tells you the day of the week for your next birthday.

### Usage
```bash
  npm install tu-cumple
```

```javascript
const miCumple = require('mi-cumple')

let erik = miCumple('1990-01-02')

console.log(`I am ${erik.getMyAge()} years old`)
console.log(`At 1990 I was ${erik.getMyAge('1990-01-02')}`)
console.log(`I was born on a ${erik.dayOfBirth()}`)
console.log(`My next birthday it's on a ${erik.nextBirthDay()}`)
console.log(`My next birthday it's on a ${erik.nextBirthDay()}`)

```

### How to make a contribution

1. Install dependencies

```bash
  npm init
```

2. Add your tests and make your changes
3. Verify tests pass

```bash
npm run test
```

4. Make a pull request

### TODOs

- Add famous people that born the same day as you
- Add how much time is left for your next birthday
- Improve current test cases and add more
- Move "how to make a contribution" to contribution.md file
