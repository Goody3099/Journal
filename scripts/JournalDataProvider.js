/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const eventHub = document.querySelector(".container")

let journal = [
    
]

export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood") // Fetch from the API
        .then(response => response.json())  // Parse as JSON
        .then(response => {
            journal = response
            // What should happen when we finally have the array?
        })
}

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const saveEntry = (data) =>{
    return fetch("http://localhost:8088/entries", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}
const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
}

export const deleteEntry = (data) =>{
    return fetch(`http://localhost:8088/entries/${data}`, {
        method: 'DELETE'
    })
    .then(getEntries)
    .then(dispatchStateChangeEvent)
}