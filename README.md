# MudTug
## TODOs
 - Registration
    - Add Teams
    ~~View Teams~~
 - Check in
    - View Teams/Search
    - Change team status to active
 - Event Day
    - Build queues with active teams
    - Build match ups
        - Assign match ups to mud pits
    - Run the match ups
        - Winning Team back in queue
        - Losing Team marked as inactive
        
## Pages
- Landing page
- ~~View teams~~
- Team registration page
- Team check in
- ~~Event management/mud pits~~
- Team info

## Running the Event
1. Start
2. If team1 is empty, add team
3. If team2 is empty, add team
4. Repeat for all pits
5. Mark winner
6. Winner goes to end of queue
7. Loser marked inactive
8. Clear pit
9. Fill pit
10. 

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