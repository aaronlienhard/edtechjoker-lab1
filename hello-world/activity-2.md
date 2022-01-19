1. Open package.json and look at the scripts devDependencies and dependencies sections. What do you think each section does here? What commands can you run?

Answer: The script are the commands you can run for the file. For my partner's file, it's analyze and start. The dependencies shows that the file uses lit ver. 2.0.2 to create the hello world element. The devDependencies tells us the version of the commands that can be used. 

2. The "demo" for your hello-world element is found in index.html. Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript?

Answer: This file contains javascript in the script element. It imports the hello-world.js, which defines the element from the HelloWorld class. "<my-element></my-element>" is where the demo takes place. In javascript under the render, html can be written by using html`'.

3. The Definition of your element is in your-element-name.js, while the class JS object is found in src/YourElementName.js. Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object? Leaving comments either in the source via // or in your

Answer: I think these are in two separate files to oganize the code. The definiation should be kept in one file and the creation of element objects should be in a separate file. You may also define multiple objects in the HelloWorld.js/YourElementName.js file.

4. Try to explain what Lit is providing to the repo. What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever? 

Answer: We aren't tied to a certain number of elements, now developers all over world can create their own element. These elements can also be shared with people, so we don't constantly have to reinvent something. We can spend time interating over these elements to make it better. Also, we can make these elements as specific as possible.