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
	- Play a marker
    Players view:
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|_|_|

   🎈 Player plays middle:
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|x|_|
    +-+-+-+
    |_|_|_|

    Player bottom left:
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |_|_|_|
    +-+-+-+
    |X|_|_|




	- Player is dead or not
	- Mark a bomb
		○ Effect of players move is reflected in players View
	- Player wins
		○ All the squared are cleared

	- Guards:
		○ An action can only be performed in an empty spot
		○ A grid is 3 by 3
