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

- `> **Caution** Caution`

Lowercase are allowed for annotations too.


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

