# Json UI React

> display json ui for react

[![NPM](https://img.shields.io/npm/v/f.svg)](https://www.npmjs.com/package/f) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save json-ui-react
```

## Usage

```jsx
import React, { Component } from 'react'

import JsonDisplay from 'json-ui-react'
import 'json-ui-react/dist/index.css'

let data =[{
    "glossary": {
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}];
class Example extends Component {
  render() {
    return <JsonDisplay data={data} />
  }
}
```

![image](https://i.ibb.co/Qn53NRn/example.png)


## Props
<html>
<table>
<tr>
<th>Prop name	</th>
<th>Description	</th>
<th>Default	</th>
<th>Example	</th>
</tr>
<tr>
    <td>data</td>
    <td>the data that will be displayed ( json ) </td>
    <td>-</td>
    <td>data={[{ "name":"John", "age":30, "car":null }]}</td>
  </tr>
<tr>
    <td>height</td>
    <td>the height of the json container ( will be scrollable automatically ) </td>
    <td>auto</td>
    <td>height={400}</td>
  </tr>
  </table>
  </html>
  
## License

MIT © [Omrani-Mahmoud](https://github.com/Omrani-Mahmoud)
