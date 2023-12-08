# Visual Regression Testing (Golden Tests)

## Setting up Percy token

UNIX
```
export PERCY_TOKEN="web_7142d53457a92b0c4022e7aebca81f15dbefe4e5672e8790f39b5944c6eff76b"
```

Windows PowerShell
```
$Env:PERCY_TOKEN="web_7142d53457a92b0c4022e7aebca81f15dbefe4e5672e8790f39b5944c6eff76b"
```

Windows CMD
```
set PERCY_TOKEN="web_7142d53457a92b0c4022e7aebca81f15dbefe4e5672e8790f39b5944c6eff76b"
```

## Setting up Percy
```
npx percy config:create
```

## Execute Single Test
```
npx percy exec -- cypress run --spec "cypress\e2e\0-visual-regression-testing\poc.cy.js"
```

## Update Baseline Snapshots
```
npx percy exec -- cypress run
```

## percySnapshot() Documentation
https://www.browserstack.com/docs/percy/take-percy-snapshots/overview