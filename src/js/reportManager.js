function ReportManager() {
    let reportData = CAR_LIST;
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
                                <td>${report.name}</td>
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