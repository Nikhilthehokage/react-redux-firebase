const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Nikhil',
            authorLastName: 'Ishi',
            id: 123456,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })

        })

    }
};

export default createProject

