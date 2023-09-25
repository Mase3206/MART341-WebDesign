# assignment-04 ReadMe

1. Explain how web browsers function
	1. The user enters google.com into their web browser.
	2. The Browser Engine asks the configured DNS server (such as Cloudflare's 1.1.1.1) what IP address corresponds to google.com, and the DNS server responds with `142.250.69.206`. 
	3. The Browser Engine then asks the server at `142.250.69.206` to send it the required elements of the web page, making subsequent requests if something is missing.
	4. A snippet of JavaScript code may be run JavaScript Interpreter by the at inital load which could, for example, check to see if login credentials are stored somewhere in local storage. If there are, it will send them to a login server to authenticate the user.
	5. The Rendering Engine converts the HTML source into the DOM (Display Object Model) and the CSS source into the CCSOM (Cascading Style Sheet Object Model). It then combines the two into the render tree.
	6. The Rendering Engine makes a rough layout of the content from the HTML file and then passes back over them to apply styling and structure from the render tree.
	7. The JavaScript Interpreter then listens to inputs from the user (such as a button press), executes some code, and returns the result. This could be a number, some text, or a different webpage.

2. Define and describe DOM
	- The DOM is the intermediary layer between the HTML source and the rendering engine. It is a translation the tag-based structure of HTML into an object-based structure that includes only visible elements which is then sent to the Rendering Engine. The DOM can also fill in missing or incorrect syntax from the HTML source to make it valid before it gets rendered.
	
3. What is the difference between HTML, XML, and XHTML? 
	- All three languages are tag-based, but they serve different purposes. HTML is designed to provide the structure and content of a web page and uses a (relatively) relaxed syntax. XML is designed to hold data in an easily parsable format, like JSON or YAML, and uses a very strict syntax. XHTML is lesser-used a hybrid of the two, incorporating the strict syntactical rules into the function of web page structure and content. XHTML does take longer to write, but, due to its requirement of much more stringent syntactical compliance, it is often more portable, reliable, and cross-version compatible than HTML.

4. What are the 4 elements your HTML pages need? 
	- Each HTML file requires:
		- *one* `<!DOCTYPE html>` tag in the very first line
		- *one set* of `<html>` opener and `</html>` closer tags (aka root tags) on the second and last lines of the file
		- *one set* of `<head>` opener and `</head>` closer tags between the root opener tag and before the body tags
		- *at least one set* of `<body>` opener and `</body>` closer tags after the header tags and before the root closer tag
	- Example:
	```html
	<!DOCTYPE html>
	<html>
		<head>
			<title>Example</title>
		</head>
		
		<body>
			<h1>Content</h1>
			<p>
				Dude, you have to check out this website!
			</p>
		</body>
	</html>
	```

5. What is the index.html page for? Where does it go? 
	- The `index.html` page is the universal landing page for any website. There will always be one in the website root for the web server to load. It will only automatically load the `index.html` page, and, if not present, will instead display a browsable tree of files as if it were a file server. 
	- `index.html` pages can also be placed within subdirectories to "clean up" the URL. In this case, the URL would look something like "example.com/foo/" instead of "example.com/foo.html".

6. Review: What are some of the best naming practices?
	- Pages and files within a website should:
		- use dashes instead of spaces or underscores
			- or use "camel case", where every word after the first is capitalized
			- Ex: `my-sick-example-file.html` or `mySickExampleFile.html`
		- not contain capitals (unless using camel case)
		- follow a consistent naming scheme, regardless of what that scheme is