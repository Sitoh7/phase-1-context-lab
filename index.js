/* Your Code Here */
function createEmployeeRecord([firstName,familyName,title,payRate]){
    const employeeRecord = {   
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payRate,
        timeInEvents:[],
        timeOutEvents:[],
    }
    return employeeRecord
    
    }
    
    function createEmployeeRecords(employeeRecord){
        return employeeRecord.map(createEmployeeRecord)
    }
    function createTimeInEvent(dateStamp) {
        const [date, time] = dateStamp.split(" ");
        const hour = parseInt(time, 10);
      
        this.timeInEvents.push({
          type: "TimeIn",
          date,
          hour,
        });
      
        return this;
      }
     
    
      function createTimeOutEvent(dateStamp){
        const [date, time] = dateStamp.split(" ");
        const hour = parseInt(time, 10);
      
        this.timeOutEvents.push({
          type: "TimeOut",
          date,
          hour,
        });
      
        return this;
      }
    
      function hoursWorkedOnDate(dateStamp){
        const timeIn = this.timeInEvents[0].hour
        const timeOut = this.timeOutEvents[0].hour
        return (timeOut-timeIn)/100
    }
     
    function wagesEarnedOnDate(dateStamp){
       let hours = hoursWorkedOnDate.call(this,dateStamp)
       let wage = hours * this.payPerHour
       return wage
    }
     
    function findEmployeeByFirstName(srcArray,firstName){
        return srcArray.find(function(rec){
            return rec.firstName === firstName
          })
    }

    function calculatePayroll(Array){
        return Array.reduce(function(memo, rec){
            return memo + allWagesFor.call(rec)
        }, 0)
    }
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

