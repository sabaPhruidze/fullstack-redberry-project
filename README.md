## Start

1. connected to github.
2. cleaned the project with additional files and code.
3. installed tailwind for style.
4. installed react-router-dom.
5. Created Home page and added as Route ,also added \* which means all routes that are not written will be forwarded to / this path
6. added lazy/loading for faster first retrieve. page will display through Loader before all data retrieved and than will display landing page

   stacks: react.js, typescript, tailwind

## Home page

1. retrieved images and icons for home page
2. Created Main layout which consists Header,main part and footer
3. tailwind.config.ts added for saving oftenly used colors
4. build Header correctly for not authorized case
5. added more colors in tailwind.config.ts and finished header part for unauthorized case
6. build hero Section and added button ui component
7. started startLearning component and card needs to be added
8. installed axios and tanstack query since It will need CRUD methods to be used and added necessary folders and files for using them (currently for card's data fetching in home page).
9. displayed fetched data in StartLearning so currently it displays correctly. Since index 2 data avgRating was null I made it zero and adjusted also starts with the next logic if avgRating is null than empty start (it will not be yellow) else if it is less than or is same as 4 than half star and if it is above 4 than full start (fully yellow).Hope this is what the goal was .
