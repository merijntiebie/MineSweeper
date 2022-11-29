Facts:
	- The actual board as a constant
    Actual board:
    +-+-+
    2|2|1
    +-+-+
    *|*|2
    +-+-+
    3|*|2

	- Players view as a variable

Atomic behaviors:
	- Mark a bomb
    Players view:
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|_|_|

   ✔ Player plays middle:
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|x|_|
    +-+-+-+
    |_|_|_|

    ✔Player middle left:
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |x|_|_|
    +-+-+-+
    |_|_|_|


    - Clear a spot
    ✔bottom left:
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |x|_|_|

    ✔top right:
    +-+-+-+
    |_|_|1|
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|_|_|

	- Player is dead or not
✔Clear spot at [1, 1] -> dead
✔Clear spot at [2, 2] -> not dead

	🎈- Player wins
    +-+-+
    2|2|1
    +-+-+
    *|*|2  --> wins
    +-+-+
    3|*|2


    +-+-+
    2|2|_
    +-+-+
    *|*|2  --> doesnt win
    +-+-+
    3|*|2




		○ All the squared are cleared

	- Guards:
		○ An action can only be performed in an empty spot
		○ A grid is 3 by 3
