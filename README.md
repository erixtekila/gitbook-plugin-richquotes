Gitbook plugin : Transform annotated quotes to notes
==============

For gitbook 0.4.2+

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

Annotations are case-insensitive.

You can install this plugin via NPM :

```bash
$ npm install gitbook-plugin-richquotes
```

You can add user defined or override built-in annotations in `book.json` file:

```json
{
	"plugins"		: ["richquotes"],
	"pluginsConfig":
	{
		"richquotes":
		{
			"star": {
				"alert": "warning",
				"picto": "fa-star"
			}
		}
	}
}
```

Refer to [Bootstrap doc](http://getbootstrap.com/components/#alerts) for alert value (`alert-` prefix is not needed).

Refer to [Font Awesome doc](http://fortawesome.github.io/Font-Awesome/icons/) for picto value.
