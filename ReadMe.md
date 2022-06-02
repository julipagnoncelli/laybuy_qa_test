API Testing using Jest;
API Testing located in __test__ folder;


UI Testing using Cypress;
UI Testing located in cypress/integration/UI Testing Laybuy folder;

IMPORTANT:
Please notice that there is an error in Laybuy website, please follow the steps to find it:
1. Open https://www.laybuy.com/nz/
2. Go to "Developer Tools"
3. Open the tap "Console"
4. The following error is showing:
    Uncaught Error: Appboy must be initialized before calling methods.
    at e (appboy.min.js:228:244)
    at Object.Te [as subscribeToInAppMessage] (appboy.min.js:236:133)
    at i.<anonymous> (<anonymous>:1:159)
    at i.n (analytics.min.js:20:18023)
    at o.emit (analytics.min.js:20:18769)
    at i.emit (analytics.min.js:20:12311)
    at t.r (analytics.min.js:4:19069)
    at t.n (analytics.min.js:20:18023)
    at o.emit (analytics.min.js:20:18769)
    at n.ready (analytics.min.js:1:65448)

I created an exception to be possible proceed with the testes.