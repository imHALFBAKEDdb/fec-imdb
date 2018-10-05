/*





=======================================9-27=======================================
dear diary,
*hat tip*

Today I tried to create many files using fs.write but it kept crashing I don't know why. I waited about 20 minutes until I decided to force a shutdown.
 Eventually I found out that it was a memory issue because sometimes ubuntu would kill the process before a memory leak would crash my operating system.
  I wasn't even using any dummy data, just using the same entry over and over again. 


=======================================9-28=======================================
dear diary,
*hat tip*

Today in the morning we got our new coffee pot. Today was the day that i started writing in my journal. In the morning I started my attempts 
at using async await but my assumptions were incorrect in thinking that using an awaited write would let the system drain the ram.   It was a 
rude awakening.  I tried to allocate more ram to node but then i would get memory leak issues. After some eventual research it was learned that 
you'll need more time to let the ssytem drain or you can use the node version... waiting for the event emitter to emit the 'drain' event and after that
you can begin to write again. Kevin made a foolish mistake today. he made a loop that did nothing. but it's not how you start, it's how you finish. 
kevin fixed it. 

=======================================10-1=======================================

dear my fucking diary,
*hat tip*

Today i seeded my postgres database and i will begin recording more data and seeing from a preliminary standpoint which databases will query the fastest.
I had some trials to overcome using postgres... I am not familliar using this type of database
 10million query took about 9 minutes and 41 seconds.
*/

