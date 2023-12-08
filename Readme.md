# Visual Regression Testing (Golden Tests)

## Setting up Percy token

UNIX
```
export PERCY_TOKEN=""
```

Windows PowerShell
```
$Env:PERCY_TOKEN=""
```

Windows CMD
```
set PERCY_TOKEN=""
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