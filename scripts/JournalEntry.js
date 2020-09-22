/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

import {deleteEntry} from './JournalDataProvider.js'

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteEntry")) {
        let [x, y] = event.target.id.split("--")
        deleteEntry(y)

    }
})
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div>${entry.date}</div>
            <div>${entry.concept}<div>
            <div>${entry.entry}</div>
            <div>${entry.mood.mood}</div>
            <button id="deleteEntry--${entry.id}">Delete</button>
            <p>
        </section>
    `
}