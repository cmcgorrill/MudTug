# MudTug
## Running the app
Requirements:
- Python3
- pipenv
- npm/Node.js

Make sure python, pipenv, and npm are installed. Activate a virtual environment for the backend with `pipenv shell`. 
In `./backend/` run:
- `python manage.py makemigrations`
- `python manage.py migrate`
- `python manage.py runserver`
In `./frontend/` run `npm start`.

React app: http://localhost:3000/
Django app: http://localhost:8000/

## TODOs
 - ~~Registration~~
    - ~~Add Teams~~
    - ~~View Teams~~
 - ~~Check in~~
    - ~~View Teams/Search~~
    - ~~Change team status to active~~
 - ~~Event Day~~
    - ~~Build queues with active teams~~
    - ~~Build match ups~~
        - ~~Assign match ups to mud pits~~
    - ~~Run the match ups~~
        - ~~Winning Team back in queue~~
        - ~~Losing Team marked as inactive~~
        
## Pages
- ~~View teams/team check in~~
- ~~Team registration page~~
- ~~Event management/mud pits~~

## Running the Event
1. First two teams in queue are added to a pit
2. Mark a winner
3. Winner goes to end of queue
4. Loser marked inactive, removed from queue
5. Next two teams in queue match up
6. Rinse, repeat

## General Requirements
 - Register Teams (backend admin okay for now).
 -- Separate competitions for men's, women's, and coed teams.
 -- Team captain contact info.
 -- Identify teams that require interpreting services for HoH and Deaf team memebers.
 - Mark teams that have "checked in" on the day of the event.
 - Teams that have checked in should be added to a queue for their bracket. 
 -- Queue should be sorted based on time of check in/last match won, first teams to arrive are the first to tug.
 - Assign 2 teams to a pit to match up at a time.
 - Mark winner of a matchup.
 - Iterate through each queue until a winner is determined.
 
## v2
 - Landing page
 - Add/remove pits
 -- generalize the queue to be spread across all pit instead of designating them to a specific bracket
 - Team info page
 -- Team record
 -- Spot in line
 
 ## v3
 - User authentication for event management
 - Additional validation on registration (team name uniqueness)
 - Estimate wait time for teams before their next matchup
 - Async page updates to handle multiple screen displays at the event
 - Accept team payment during registration
 
 