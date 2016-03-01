Golang vs Node.js
=================

Comparison of Features
We can begin to see why, for some types of application development, it might be useful to use Go instead of Node.js; however, Node.js is still a very useful language in many use cases.

Let’s compare the strengths and weaknesses of each programming language, so it may be easier to choose which environment is the right tool for your next job.

Maturity	
========
* Go: Mature and robust for its age.

* Node.js: Mature, but the API is still somewhat changing. The recent IO.js Node fork changes might also become a cause for API problems for developers writing and using Node modules. How big this problem will be is not clear right now.

Performance
===========
* Go: Similar performance characteristics as with C or C++, which is to say very good.
* Node.js: Due to JS’s dynamically-typed nature, Node can not reach the raw performance of CPU or memory bound tasks that Go can achieve in many tests. However, in the common use cases where network communication or database interaction are involved, the performance of Node and Go are often equal.

Concurrency	
===========
* Go uses coroutines called goroutines. A goroutine is a lightweight thread managed by the Go runtime. Communication between goroutines is done very elegantly using channels. For more, see this video.	
* Node suffers from JavaScript’s less than elegant concurrency support using the event-callback mechanism. However, for a lot of applications, working with JS promises and the coming async generator support (also called “semi-coroutines”) will suffice. Something like the Koa framework is already supporting the async generator approach in Node.

Scalability
===========
* Go was really designed for scalability and concurrency, without too much hassle.	
* Several people and companies using Node.js have made claims that Node has some problems in environments which need to scale massively. Perhaps Node can overcome these massive scaling issues in time.

Ease of Development
===================
* Go: People coming from a JS/Node background will need to learn some new programming concepts, such as: coroutines, channels, strict typing (with compilation), interfaces, structs, pointers, and some other differences.	
* NodeJs: For a JS developer, it is really easy to get into Node programming.

Frontend & Backend
==================
* Though you can run Go code in the browser using gopherjs, JS still is the way most developers like to program the frontend. Go is aimed more at the backend, in particular for developing high-performing concurrent services on the server-side.	
* Not having to do a mental context switch while developing a JS-based client-server system is really nice.

Packages & Tooling
==================
* The number of standard Go packages is growing steadily, currently at over 100, and the Go community packages can be searched easily. Though there aren’t as many different developer-friendly application frameworks to choose from as compared to Node yet, you can take a look at the “go get”-able packages from the Go community, which currently sits at over 58,000 available for use and growing.
* The number of Node packages sits at more than 100,000 currently. This means that a lot of groundwork has been done, and that can make certain software projects a lot easier and/or cheaper to implement. Node’s tooling is also superb. The npm package manager learned from all the package managers that came before and did most things right.

Developer Mindshare
===================
* Go: A recent study showed the rise of Go to a place in the top 20. The pace at which this happened exceeded expectations. Go definitely has a lot of momentum building up, especially with the recent support of the Android mobile OS.	
* NodeJs: is much more popular at this time by many orders of magnitude. Getting good hosting support, commercial support, and Node.js freelancers for your project will be much easier for NodeJS at this point in time.

Error Handling
==============
* Error handling in Golang requires you to implement explicit error checking, which can make error troubleshooting difficult. However, some argue that you get a cleaner application overall, once you understand Golang error handling.	
* Error handling in Node.js can be inconsistent at times, but it does offer the more common throw/catch mechanism for errors that developers are accustomed to using with other languages.

Summary of Node.js vs Golang
============================
The choice between Node.js or Go very much depends on which type of development suites you best and how massive the network service needs to scale.

Go may not yet have all community packages or mindshare that Node has, but its syntactically cleaner concurrency model, better raw CPU- and memory-bound performance, and its ability to scale up better with concurrent loads could make for a better foundation for certain network application types.

If you need certain Node.js packages that are not yet available for Go and that would be difficult or expensive to re-implement in Go, then Node may be the wiser choice.

If you feel like installing Go on your Ubuntu/Linux system, have a look at our guide to installing Go. Then visit GoByExample and the online Go book for some more great tutorials.

If you wanted to give Node.js a shot, be sure to check out our guide to installing Node.js, as well as our list of free Node.js hosting services. Then head on over to NodeSchool.io for some great tutorials on programming with Node.js.
