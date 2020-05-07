export const defaultState = {
    users: [{
        id: "U1",
        name: "Dev",
        friends: [`U2`]
    }, {
        id: "U2",
        name: "C. Eeyo",
        friends: []
    }],
    groups: [{
        name: "Running",
        id: "G1",
        owner: "U1"
    }, {
        name: "Stopped",
        id: "G2",
        owner: "U1"
    }, {
        name: "Maintainance",
        id: "G3",
        owner: "U1"
    }
    ],
    machines: [{
        name: "Machine 0",
        id: "T0",
        group: "G1",
        owner: "U1",
        isComplete: false,
    }, {
        name: "Machine 1",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: true,
    }, {
        name: "Machine 2",
        id: "T2",
        group: "G2",
        owner: "U2",
        isComplete: false,
    }, {
        name: "Machine 3",
        id: "T3",
        group: "G2",
        owner: "U1",
        isComplete: true,
    }, {
        name: "Machine 4",
        id: "T4",
        group: "G3",
        owner: "U1",
        isComplete: false,
    }, {
        name: "Machine 5",
        id: "T5",
        group: "G3",
        owner: "U1",
        isComplete: true,
    }, {
        name: "Machine 6",
        id: "T6",
        group: "G1",
        owner: "U1",
        isComplete: true,
    }],
    MacFinding: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C2",
        task: "T1",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C3",
        task: "T1",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C1",
        task: "T2",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C2",
        task: "T2",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C3",
        task: "T0",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C1",
        task: "T0",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C2",
        task: "T0",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C3",
        task: "T0",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C1",
        task: "T3",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C2",
        task: "T4",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C3",
        task: "T4",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C1",
        task: "T6",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C2",
        task: "T5",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C3",
        task: "T5",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C1",
        task: "T6",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C2",
        task: "T6",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }, {
        owner: "U1",
        id: "C3",
        task: "T6",
        name: "ODM diameters differs",
        desc: "ODM diameters should always be equal,however their mean value systematically differ",
        severity: 9,
        Brand: "Blue Brand 01"
    }]
};