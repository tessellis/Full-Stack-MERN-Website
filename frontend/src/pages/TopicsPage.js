function TopicsPage() {
    return (
    <>

<h2>Topics Page</h2>
<nav class="local-nav">
<a href="#webServers">Web Servers</a>
<a href="#frontendDesign">Frontend Design</a>
<a href="#optimizingImages">Optimizing Images</a>
<a href="#favicons">Favicons</a>
<a href="#cascadingStylesheets">CSS</a>
<a href="#javascript">JavaScript</a>
</nav>

<article>
    <h3 id="webServers">Web Servers</h3> 
    <p>
        The file name <strong>index.html</strong> in the root directory is called the <strong>designated homepage</strong> in almost all web applications. If a <strong>GET request</strong> is received for the '/' in a URL's path to the resource (for example, /index.html), the web application returns the file (designated homepage). I believe its name is fitting because it “indexes” or organizes a web by being its homepage! On the Apache web server, the standard 'index.html' format is used. On Microsoft.net platforms, the 'default.html' format is allowed for designated homepage use. Lastly, a homepage server may also take the 'index.php' or 'index.js' format.
    </p>
    <p>
        In my browser's Inspector Network tab output screen, I can see my page's status, policy, language, method, IP, cache instructions and browser version. Additionally, I can see additional information about the request acceptance (GET method). When inspecting the file's details locally (on my computer's local hard drive), I see the file's server, file type, location, and creation date.
    </p>
    <p>
        The favicon.ico file in my server has a <strong>Status Code</strong> of 200 because its <strong>HTTP request</strong> was successful. In other words, the <strong>response body</strong> has the needed information and its request was completed successfully. Status codes in the 200-299 group represent successful responses. The main.css and main.js files, on the other hand, have a 404 Status Code. The 400-499 Status Code group represent Client Errors. In this case, the 404 Status Code shows that the requested resource is not found on the server.
    </p>
    <p>
        My web server URL is: https://web.engr.oregonstate.edu/~elliste/a1-elliste/. The <strong>Scheme</strong> or <strong>Protocol</strong> of my URL is 'HTTPS', followed by a colon. The <strong>Subdomain</strong> is 'web' and 'engr', separated by periods. The <strong>Domain</strong> is 'oregonstate.edu' (although the 'edu' might also be an extension, not sure). The <strong>Path to Resource</strong> is '~elliste/' and 'a1-elliste/'.
    </p>
</article>
<article>
    <h3 id="frontendDesign">Frontend Design</h3>
    <p>
        As its name suggests, frontend design is the "front" of a website, or what the user sees and experiences on the web. Any visual aspect of a website, such as font, layout, color schemes, and content curation falls under the category of frontend design. Frontend design also focuses on <strong>interaction between the web application and the user</strong>. Frontend design and <strong>usability</strong> go hand in hand because they are highly focused on the user's experience; what they see, how they interact with an application, how to draw their attention, and how to design the best possible user experience.
    </p>
    <p>
        The five <strong>“E”s of usability</strong> are as follows:
        <dl>
        <dt><strong>Effective</strong></dt>
        <dd>Users should be able to effectively and efficiently accomplish their goals.</dd>
        <dt><strong>Efficient</strong></dt>
        <dd>Users should be able to perform and accomplish tasks with the fewest steps possible.</dd>
        <dt><strong>Easy to Navigate</strong></dt>
        <dd>Users should be able to use the webpage without needing any instruction, or without getting confused along the way.</dd>
        <dt><strong>Error-free</strong></dt>
        <dd>Users should have an error-free experience on a webpage, and not run into availability and accessibility issues.</dd>
        <dt><strong>Enjoyable</strong></dt>
        <dd>Users should feel understood, supported, and enjoy the overall webpage experience. This is the foundation of frontend design, making the web an enjoyable and accessible space for all users.</dd>
        </dl>
    </p>
    <p>
        <strong>Page layout tags</strong> are an essential aspect of HTML and frontend design. They allow us to neatly organize information and make it easier for the user to digest the information. The six major page layout tags used to create the server you are currently seeing are: header, nav, main, section, article, and footer. The <strong>header</strong> page layout tag typically includes the publisher, name, and marketing slogan of a website and denotes the masthead or banner for a site or app. The <strong>nav</strong> tag allows users to move from one page to another. The <strong>main</strong> tag denotes the main viewing port or block that holds the visual aspects of the site, such as photos, stories, galleries, etc. The <strong>section</strong> tag allows us to create a thematic grouping of content on our site or app, especially content that does not stand on its own but is related to the previous “block”. The <strong>article</strong> tag denotes a single topic and introduces a second-level headline style (h2). Lastly, the <strong>footer</strong> tag typically holds critical legal information, links to essential pages, and contact information.
    </p>
    <p>
        Anchors are a powerful tool for frontend design. Anchors link from page-to-page, to external content, and internal content as follows:
    </p>
    <ol>
        <li><strong>External Anchor:</strong> Link outside the current website. To create an external anchor, we use "href", the desired link, and a description of the link they will be taken to.</li>
        <li><strong>Internal Anchor:</strong> Link within the same page, from one text item to another. Internal anchors use ID attributes and a hashtag to define references for an anchor.</li>
        <li><strong>Page-to-Page Anchor:</strong> Link pages in a website and are stylized to allow users to easily navigate through the webpage. They are usually button-like anchors that we use to move from one section of a website to another.</li>
    </ol>
</article>
<article>
    <h3 id="optimizingImages">Optimizing Images</h3>
    <p>
        Images are a crucial part of Web Development, and thus, must be well-selected and configured. There are six major image optimization specifications: <strong>descriptive file names</strong>, which allows us to improve <strong>Search Engine Optimization (SEO)</strong> (a system of web content categorization and optimization); <strong>small file sizes,</strong> used for a web page to run smoothly and quickly, and offers faster load time; <strong>exact image dimensions,</strong> which allows us to avoid unpleasant formatting issues; <strong>correct file format,</strong> which significantly impact web page load times since each image format has a unique file and compression size; <strong>reduced resolution,</strong> which helps us achieve clear resolution throughout different web and application platforms; lastly, <strong>color mode,</strong> which directly impact how colors (and thus, images) are displayed and play an essential role in image optimization. 
    </p>
    <p>
        As mentioned above, file format is an essential part of image optimization, and thus, understanding different format options is crucial. The most common file format for images are JPG and WebP, and usually contain millions of colors and are of high resolution. For line art files (biomorphic shapes and solid colors), we generally use PNG, SVG, and GIF formats. If we correctly choose from these format options when incorporating images, we can avoid running into clarity and resolution issues on our webspaces.
    </p>
    <h3 id="favicons">Favicons</h3>
    <p>
        Favicons are used to easily and quickly identify a site on a web browser, cellphone, smartwatch, or search engine result list. Brand or institutional logos are commonly used as favicons and appear on browser tabs (which can then be saved in local Favorites Tabs) or be displayed as application icons. Favicons can be in .GIF, .PNG, .ICO, and .SVG file formats. Favicons are generally saved in multiple file formats to improve readability on different browser devices and formats. For an Apple device icon, for example, the size must be 180 × 180 pixels; whereas our web favicon must be of size 16 × 16 pixels. When creating a favicon, we must create a design that displays clearly in each browsing tool's particular size and format.
    </p>
</article>
<article>
    <h3 id="cascadingStylesheets">Cascading Style Sheets (CSS)</h3>
    <p>
        Cascading Style Sheets (CSS) is a stylesheet language that is widely used to define or construct the presentation of an HTML document. CSS define structure and visual layout to improve web page usability, legibility, readability, and overall style. Since HTML elements are predefined, CSS overrides these restrictions and uses its own syntax to achieve visual changes. As its name suggests, CSS applies style rules using a “cascading” method; making it highly convenient for visually complex web pages. CSS is a good tool for large projects that could benefit from easily inheritable formats and styles.
    </p>
    <p>
        There are five ways to incorporate styles in CSS: link to <strong> external CSS </strong> in the global head area of a website (ex. index.html); <strong> imported CSS</strong> by linking after the global .css file; <strong>embedded</strong> within a style tag, directly in HTML or JavaScript; <strong>inline</strong> call by using an attribute and color directly in HTML or JavaScript; lastly, we can manipulate a Document Object Model (DOM) in <strong> regular JavaScript</strong> to define styling elements. Out of these five style incorporation options, external CSS are more commonly used for medium or large web projects, and internal (or embedded) CSS are used for single-page or smaller projects. 
    </p>
</article>
<article>
    <h3 id="javascript">JavaScript</h3>
    <p>
        JavaScript is an interpreted language, meaning it does not need to be compiled. JavaScript's main value data types are strings, numbers, Boolean values (false or true), symbols, objects, and special 'undefined' and 'null' values. Strings are usually enclosed in single or double quotes. JavaScript only has one number type, the double-precision floating-point numbers, and automatically converts strings to numbers for arithmetic operations. The special values, null and undefined, indicate the absence of a value. 
    </p>
    <p>
        In JavaScript, objects are sets of name-value pairs, also called properties of objects. The four primary object actions are referred to as <strong>CRUD</strong>, <strong>c</strong>reate and <strong>u</strong>pdate, <strong>r</strong>ead, and <strong>d</strong>elete. We can create and add using the '.' operator on a variable. For example, in 'product.price = 52', we are setting the price property of the product to 52. We can read properties by using the '.' operator again, or the '[]' operator. For example, 'product.price', or 'product["price"]'. Lastly, we can delete properties with the 'delete' operator.
    </p>
    <p>
        Similar to other programming languages, JavaScript supports looping and branching statements, such as 'if', 'else', and 'else if'. Differently from the Python language, in JavaScript, we need to enclose conditional expressions in parentheses. Conditional statements and loops in JavaScript retain their implied processes. For example, the 'while' loop evaluates an expression, and evaluates as 'true' when the body is being executed. It will continue to execute until the expression does not evaluate as true.
    </p>
    <p>
        <strong>Object-oriented programming</strong> is a type of programming that is organized or focused on objects. Unlike other object-oriented programming languages, JavaScript does not require us to create classes to create instances or objects of that class. Instead, we are able to create objects without having to declare a class. Each object must have a state (for example, company or price), identity (each must be unique), and behavior (by adding properties which have functions as values).
    </p>

    <p>
        As its name suggests, <strong>functional programming</strong> is focused on incorporating functions. In JavaScript, functions are “first-class” values, meaning we can define functions that return functions, assign variables to a function, or define functions that take other functions as arguments. JavaScript also provides us with built-in higher-order functions (functions that receive functions).
    </p>
</article>
</>
    );
}
export default TopicsPage;
