function GroupManager() {
    var groups = [
        {
            groupName: "Delhi Site",
            groupMembers: [
                {
                    carId: 1,
                    carName: 'Swift Desire :UP36AL-6790',
                    driver: 'Mohan Singh',
                },
                {
                    carId: 2,
                    carName: 'Wagon R :UP36AL-6791',
                    driver: 'Rahul Singh',
                }]
        },
        {
            groupName: "Uttar Pradesh Site",
            groupMembers: [
                {
                    carId: 3,
                    carName: 'Innova :DL36AL-6791',
                    driver: 'Ravi Verma',
                },
                {
                    carId: 4,
                    carName: 'Maruti :DL36AL-6792',
                    driver: 'Sumit Arora',
                }
            ]

        },
        {
            groupName: "Ghaziabad Site",
            groupMembers: [
                {
                    carId: 5,
                    carName: 'Swift Desire :UP36AL-6794',
                    driver: 'Gaurav Sharma',
                },
            ]

        }
    ];


    function renderGroups() {

        let groupParent = document.querySelector('#mainMenu5');
        groupParent.innerHTML = '';
        let groupElement = document.createElement('div');
        //render Group Data
        groupElement.innerHTML = `
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Group Name</th>
                        <th scope="col">Group Members</th> 
                    </tr>
                </thead>
                <tbody>
                    ${this.groups.map(function (group) {
            return `
                        <tr>
                            <td class="groupName">${group.groupName}</td>
                            <td>${group.groupMembers.map(function (groupMember) {
                return `
                                    <div class="groupMember">
                                        <div class="groupMemberId">${groupMember.carId}</div>
                                        <div class="groupMemberName">${groupMember.carName}</div>
                                        <div class="groupMemberDriver">${groupMember.driver}</div>
                                    </div>
                                `
            }).join('')}</td>
                        </tr>
                    `
        }).join('')}
                </tbody>
            </table>
        `;
        groupParent.appendChild(groupElement);
        //click event for group
        let groupMemberElements = document.querySelectorAll('.groupName');
        groupMemberElements.forEach(function (groupMemberElement) {
            
            groupMemberElement.addEventListener('click', function (event) {
               let  groupName = event.target.innerHTML; 
                showGroupOnMap(groupName);
            });
        });
    }



    function showGroupOnMap(groupName) {
        let groupData = groups.find(function (group) {
            return group.groupName === groupName;
        });
        let carArray = [];
        groupData.groupMembers.forEach(function (groupMember) {
            let carData = CAR_LIST.find(function (car) {
                return car.id === groupMember.carId;
            });
            carArray.push({
                lat: carData.lat,
                lng: carData.lng,
            });
        });
        mapManager.showMultiCar(carArray);
        
        let submenuId = 'subMenu2';
        let subMenuDiv = document.querySelector(`#${submenuId}`);
        
        //click on submenu2
        subMenuDiv.click();
        
    }
    return {
        renderGroups: renderGroups,
        groups: groups
    }
}