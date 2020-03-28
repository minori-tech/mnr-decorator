# MNR Decorator

A sub module for rendering table or form

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install mnr-decorator --save
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add mnr-decorator
```

## Ussage

```js
import React, { Component } from 'react'
import { ColumnSpec } from 'mnr-decorator'

export class ListPage extends Component {
    @ColumnSpec({ label: 'Type', isFilter: 'multi' })
    readonly type: string
    @ColumnSpec({ label: 'Subject', isFilter: 'single' })
    readonly subject: string
    @ColumnSpec({ label: 'Create Date', isFilter: 'date' })
    readonly createDate: number | string
    render() {
        return <h1>Hello</h1>
    }
}

```
