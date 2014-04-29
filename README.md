Gitbook plugin : Transform annoted quotes to notes
==============

Annotated notes are an extension of markdown blockquotes.
Supported annotations :

- `> **Info** Info`
- `> **Note** Note`
- `> **Tag** Tag`
- `> **Comment** Comment`
- `> **Hint** Hint`
- `> **Success** Success`
- `> **Warning** Warning`
- `> **Caution** Caution`
- `> **Danger** Danger`
- `> **Quote** Quote`

Lowercase are allowed for annotations too.

You can use special annotations for editorial purpose

- `> **todo** TODO`
- `> **fixme** FIXME`
- `> **xxx** XXX`


Be sure too activate the option from the `book.json` file :

```json
{
	"plugins"   	: ["richquotes"]
	,"pluginsConfig":
	{
		"richquotes" :
		{
			"todos" : true /*false by default*/
		}
	}
}
```


You can use install it via NPM:

```bash
$ npm install gitbook-plugin-richquotes
```

And use it for your book by adding `book.json`

```js
{
	"plugins" : "richquotes"
}
```

