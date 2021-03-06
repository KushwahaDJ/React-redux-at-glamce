# React-redux-at-glamce

1. Reducer => All keep 1 reducer per page for the better code handling
2. Store => It should be always at the highest order
3. Providers=> Which provides the whole data and keep at root file that is warped all the component Pass store as props in the store   =========Separate file for the each task ===============
    1. Constants.js
    2. Actions.js. => Is function that take a actions and return an action
    3. Selectors.js => Its presty much select and grab the data from the store

==============Dispatcher =============================

It is a function that use to dispatch any type of action to the reducer you want

NOTE: whole redux paradegm is mutable but we should always make immutable.
