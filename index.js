var cheerio = require( "cheerio" )
	,$
;

module.exports = {
	book : {
		assets: "./book",
		css   : [
			"plugin.css"
		]
	},
	hooks: {
		// For all the hooks, this represent the current generator
		// This is called before the book is generated
		init  : function ()
		{
			//console.log( "init!" );
		},

		// This is called after the book generation
		finish: function ()
		{
			//console.log( "finish!" );
		},

		// This is called for each page of the book
		// It can be used for modifing page content
		// It should return the new page
		page  : function ( page )
		{
			var section
				,$bq
				,$this
				,$strong
				,alert = "info"
				,picto = "fa-info"
				;
			for ( var i in page.sections )
			{
				section = page.sections[i];
				if ( section.type == "normal" )
				{
					$ = cheerio.load( page.sections[i].content );
					$bq = $( "blockquote" );
					if( $bq )
					{
						$bq.each
						(
							function ( j, el )
							{
								$this = $( this );
								$strong = $this.find( "p > strong" );
								if( $strong )
								{
									switch ( $strong.text().toLowerCase() )
									{
										/* info */
										case "info" :
											alert = "info";
											picto = "fa-info";
											break;
										case "note" :
											alert = "info";
											picto = "fa-edit";
											break;
										case "tag" :
											alert = "info";
											picto = "fa-tag";
											break;
										case "comment" :
											alert = "info";
											picto = "fa-comment-o";
											break;
										/* success */
										case "hint" :
										case "success" :
											alert = "success";
											picto = "fa-lightbulb-o";
											break;
										/* warning */
										case "warning" :
										case "caution" :
											alert = "warning";
											picto = "fa-exclamation-triangle";
											break;
										/* danger */
										case "danger" :
											alert = "danger";
											picto = "fa-times-circle";
											break;
										/* quote */
										case "quote" :
											alert = "quote";
											picto = "fa-quote-left";
											break;
										// Not a note
										default :
											return;
									}

									$strong
										.addClass( 'fa fa-4x ' + picto )
										.empty()
										.remove()
										;
									$this.addClass( 'alert alert-' + alert );
									$this.prepend( $strong );

									// Replace by transform
									section.content = $.html();
								}
							}
						);
					}
				}
			}

			return page;
		}
	}
};
