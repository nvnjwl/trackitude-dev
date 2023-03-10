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
                }]

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
                            <td>${group.groupName}</td>
                            <td>${group.groupMembers.map(function (groupMember) {
                return `
                                    <div class="groupMember">
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
    }
    return {
        renderGroups: renderGroups,
        groups: groups
    }
}