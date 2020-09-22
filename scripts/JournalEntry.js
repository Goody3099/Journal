/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    console.log("HTML works?")
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <div>${entry.date}</div>
            <div>${entry.concept}<div>
            <div>${entry.entry}</div>
            <div>${entry.mood.mood}</div>
            <p>
        </section>
    `
}