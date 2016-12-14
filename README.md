# Probot
Final Assignment for CTH 2016

Every student knows the problem: you have an essay due, but you just can’t bring yourself to start working. As the due date approaches, you stare at the blank screen and revaluate your life choices Just how did it come to this?
But no more, because for all you procrastinators out there, there is a solution: Probot.
Probot is your personal assistant in essay writing. It tells you how much progress you are making in your writing and sends you friendly reminders to start working should you stay idle for too long. With Probot by your side, missed deadlines are a thing of the past!

How to install
---------------
Clone everything from the Probot github to your local machine and open the folder in your terminal.
Install the required modules; socket, server, chance and express by entering the following commands:

	$ npm install --save socket.io
	$ npm install --save http
	$ npm install --save chance
	$ npm install --save express

Once the required modules have been installed, run server.js by entering the following:

	$ node server.js

Probot will now be available on your localhost:8088. Open your preferred web browser and navigate to your localhost:8088.
You can now start working on your essay!

How it works
-------------
On opening the Probot webpage, you will be asked how many words you need to write. You can then start working on your essay in the built in text editor. The progress bar will show you how far you are in your word count.
If your word count doesn't increase within a certain amount of time, you will get a pop-up message with sound effect reminding you you have to start working again.

Features
----------
- randomized pop-up messages
- essay stimulating sound alarms
- progress bar showing you exactly how much you've progressed
- fully customizable text, including font, text colour and general layout
- rewarding system that really helps you stop procrastinating
