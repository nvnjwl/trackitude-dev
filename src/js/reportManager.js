function ReportManager() {
    let reportData = [

        {
            carId: 1,
            carName: 'Swift Desire :UP36AL-6790',
            driver: 'Mohan Singh',
            runningKM: '256 KM',
            IdleTime: '3.5 Hours',
            runningTime: '5.5 Hours',
            averageSpeed: '67 KMPH',
            maxSpeed: '90 KMPH',
        },
        {
            carId: 2,
            carName: 'Wagon R :UP36AL-6791',
            driver: 'Rahul Singh',
            runningKM: '356 KM',
            IdleTime: '3.5 Hours',
            runningTime: '5.5 Hours',
            averageSpeed: '67 KMPH',
            maxSpeed: '90 KMPH',
        },
        {
            carId: 3,
            carName: 'Innova :DL36AL-6791',
            driver: 'Ravi Verma',
            runningKM: '286 KM',
            IdleTime: '4.5 Hours',
            runningTime: '5.5 Hours',
            averageSpeed: '67 KMPH',
            maxSpeed: '90 KMPH',
        }

    ]
    function renderReports() {
        let reportsParent = document.querySelector('#mainMenu1');
        let reportParent = document.createElement('div');
        reportParent.classList.add('reportParent');
        reportsParent.appendChild(reportParent);
        let reportElement = document.createElement('div');
        reportElement.classList.add('report');
        //render report in tabular form
        reportElement.innerHTML = `

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Car Name</th>
                        <th scope="col">Driver</th> 
                        <th scope="col">Running KM</th> 
                        <th scope="col">Idle Time</th>  
                        <th scope="col">Running Time</th>
                        <th scope="col">Average Speed</th>
                        <th scope="col">Max Speed</th>
                    </tr>
                </thead>
                <tbody>
                    ${reportData.map(function (report) {
            return `
                            <tr>
                                <td>${report.carName}</td>
                                <td>${report.driver}</td>
                                <td>${report.runningKM}</td>
                                <td>${report.IdleTime}</td>
                                <td>${report.runningTime}</td>
                                <td>${report.averageSpeed}</td>
                                <td>${report.maxSpeed}</td>
                            </tr>
                        `   
                    }).join('')}
                </tbody>
            </table>
        `;
        reportParent.appendChild(reportElement);
        
                
    }

    return {
        renderReports: renderReports
    }
}