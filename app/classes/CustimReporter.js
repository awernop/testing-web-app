function _GETDATE() {
    const date = new Date();
    const [day, month, year, hours, minutes] = [
        date.getDate(),
        date.getMonth(),
        date.getFullYear(),
        date.getHours(),
        date.getMinutes()
    ];

    return `${day}.${month + 1}.${year} ${hours}:${minutes}`;
}

class CReporter  {
    constructor() {
        this.date = _GETDATE();
        this.result = '';
        this.allTests = [];
        this.testsListSucsess = [];
        this.testsListFailed = [];
    }

    testRun(test, result) {

        let error; 
        if (result.error) {
            error = result.error.message();
        } else {
            error = false;
        }

        const testCase = {}

        if(error){
            testCase = {
                name: `${test.parent.title} | ${test.title}`,
                result: result.status,
                error: error
            }     
        }
        else{
            testCase = {
                name: `${test.parent.title} | ${test.title}`,
            }    
        }

        this.allTests.push(testCase);
        
        if (error) { 
            this.testsListFailed.push(testCase)
        }
        else{
            this.testsListSucsess.push(testCase)
        }
    }

    async onEnd(result) {

        const TestReport = { 
            date: _GETDATE(),
            result: result.status,
            testsCount: this.allTests.length,
            successCount: this.testsListSucsess.length,
            successTests: this.testsListSucsess,
            failedCount: this.testsListFailed.length,
            failedTests: this.testsListFailed
        }

        console.log(TestReport); 

        const URL = './testResults.json'
        
        await fetch(URL, {
            method: 'POST',
            body: JSON.stringify(TestReport)
        })
    }
}

export default CReporter;