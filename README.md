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

![Preview of richquotes](preview.png)

Annotations are case-insensitive.

#### Installation

Add this plugin to your `book.json`:

```js
{
	"plugins": ["richquotes"]
}
```

Then run `gitbook install` to download and install the plugin.

#### Override built-in annotations

You can add user defined or override built-in annotations in `book.json` file:

```js
{
	"plugins": ["richquotes"],
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


#### Disable default quote

By default `richquote` will show a quote annotation. You can disable this behaviour in `book.json` file:

```js
{
	"plugins": ["richquotes"],
	"pluginsConfig":
	{
		"richquotes":
		{
			"default": false
		}
	}
}
```
