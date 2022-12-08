Why is our game worth 100 points?
We believe our game should get close to full points for the following reasons:
1. It is a fun competitive game, that is fairly bbalanced. Due to it being player vs player, that allows for replayability, since the loser of each
	round will most likely want to rematch, and the running score at the bottom is a constant reminder that someone is behind, driving them to want a 
	rematch, or to swap characters.
2. The option to only collect 5 cheeses or ALL 8 cheeses provides an optionality difficulty increase for the mouse player, since they can, but dont have to, 
	perform the additional task
3. the code did bring up some difficulties, for example we never really learned "best practice collisions" and had to modify how we did collisions in 
	an earlier assignment via coordinates. This provided a challenge as we had to have check to see if the mouse had colided with each of the 8 pieces,
	and we didnt want to write 8 separate collision checks so we used arrays to store the coordinates for each piece and a for loop to beb able to check
	for the collisions.
4. We HAD to do collision generation for each individual piece of cheese, in order to stop the mouse from just being able to pick up the same piece of
	cheese 5 different times, they actually have to collect different cheeses, as well as keeping track of which cheeses had been collected, so the code
	knew not to redraw them onto the canvas
5. We also had a challenge of trying to figure when exactly we needed to be performing checks and when to draw each piece of cheese, the cat & mouse, and
	the hole, because we found out that when the functions were called in the wrong order, some of the images would not be drawn onto the canvas.
6. We do realize that it is not the most visually appealing, but we think it is displayed in an easy-to-digest manner, and while we did not have the
	the time to dedicate to css, the current design does not hinder the ability to play the game
7. Something we learned from this process, is an appreciation for pre-made game developement engines, as not being able to detect collisions between objects
	and needing to rely on x and y coordinates, brought up a lot of difficulties in making sure our math and >/< statements were properly developed
	to check if the images were overlaping as a "collision". If we had to ability to add a collision detector, almost like an event listener this project
	would have gone a lot more smoothly.
