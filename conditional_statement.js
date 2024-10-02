function launchBrowser(browserName) {


    // Function to launch browser and print messages based on input
    if (browserName == "chrome") {
        console.log("Browser is Chrome");
        }

    else if (browserName == "Edge") {
        console.log("Browser is Edge");        
    }    

    else if (browserName == "Firefox") {
        console.log("Browser is Firefox");
    }

    else {
        return "unsupported browser entered"
    }
}
let browsername = "Edge";
launchBrowser(browsername);


function runTest (testType) {

    switch (testType) {
        
        case 'Smoke':

        console.log("Smoke Test Running");
        
        break;

        case 'Regression': 
        console.log("Regression Test Running");
        break;
        
        case 'Sanity':
            console.log("Sanity Test Running");
        break;
                
    
        default:
            console.log("Running Smoke Tests by default...");
            break;
    }

}

let testType = "Sanity"
runTest(testType);

