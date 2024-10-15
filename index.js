// DRY - DONT REPEAT YOURSELF

// --- GLOBAL CONSTANTS --- //

const newSightingForm = document.querySelector('#new-sighting-form')
const sightingsList = document.querySelector('#sightings-list')


// --- HELPER FUNCTIONS --- //

async function unverifySighting(id, li) {
    console.log("unverify id:", id)

    if (response.ok) {
            li.remove()
    }
}

// async function removeVerification(sighting, li, verifyButton) {
//     sighting.verifications--
    
//     if (sighting.verifications > 0) {
//         const response = await fetch(`http://localhost:3000/ufo-sightings/${sighting.id}`, {
//             method: 'PATCH',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify( { verifications: sighting.verifications } )
//         })
        
//         verifyButton.textContent = `${sighting.verifications} Verifications`
//     } else {
//         const response = await fetch(`http://localhost:3000/ufo-sightings/${id}`, {
//             method: 'delete'
//         })
//         li.remove()
//     }
// } 

async function addVerification(sighting, verifyButton) {
    sighting.verifications++

    const response = await fetch(`http://localhost:3000/ufo-sightings/${sighting.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( { verifications: sighting.verifications } )
    })

    verifyButton.textContent = `${sighting.verifications} Verifications`
} 


function addSightingToList(sighting) {
    const li = document.createElement('li')
    li.textContent = sighting.content
    sightingsList.append(li)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'unverify'
    li.append(deleteButton)
    deleteButton.addEventListener('click', () => unverifySighting(sighting.id, li))

    const verifyButton = document.createElement('button')
    verifyButton.textContent = `${sighting.verifications} Verifications`
    li.append(verifyButton)
    verifyButton.addEventListener('click', () => addVerification(sighting, verifyButton))
}


async function submitNewSighting(event) {
    event.preventDefault()
    const input = document.querySelector('input')
    const userInput = input.value

    const response = await fetch('http://localhost:3000/ufo-sightings', {
        method: "POST",
        headers: { "Content-Type": 'application/json' },
        body: JSON.stringify( { content: userInput, verifications: 1 } )
    })

    const newSighting = await response.json()
    addSightingToList(newSighting)

    newSightingForm.reset()
}

// --- FETCH ON LOAD --- //

async function getAllSightings() {
    const response = await fetch('http://localhost:3000/ufo-sightings')
    const data = await response.json()
    console.log('data:', data)

    data.forEach(addSightingToList)
}

getAllSightings()

// --- EVENT LISTENERS --- //

newSightingForm.addEventListener("submit", submitNewSighting)