# MudTug
## TODOs
 - Registration
    - Add Teams
    ~~View Teams~~
 - Check in
    - ~~View Teams/Search~~
    - ~~Change team status to active~~
 - Event Day
    - ~~Build queues with active teams~~
    - ~~Build match ups~~
        - Assign match ups to mud pits
    - ~~Run the match ups~~
        - Winning Team back in queue
        - Losing Team marked as inactive
        
## Pages
- Landing page
- ~~View teams~~
- Team registration page
- ~~Team check in~~
- ~~Event management/mud pits~~

## Running the Event
1. First two teams in queue are added to pit
2. Mark winner
3. Winner goes to end of queue
4. Loser marked inactive
5. Clear pit
6. Fill pit

## Requirements
 - Register Teams (backend solution okay for now).
 -- Separate competitions for men's, women's, and coed teams.
 -- Team captain contact info.
 -- Identify teams that require interpreting services for HoH and Deaf team memebers.
 - Mark teams that have "checked in" on the day of the event.
 - Teams that have checked in should be added to a queue for their bracket. 
 -- Queue should be sorted based on time of check in, first teams to arrive are the first to tug.
 - Assign 2 teams to a pit to match up at a time.
 - Mark winner of a matchup.
 - Iterate through each queue until a winner is determined.