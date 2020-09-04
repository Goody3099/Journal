import {EntryListComponent} from './JournalEntryList.js'
import { getEntries } from './JournalDataProvider.js'
import {JournalFormComponent} from "./JournalForm.js"

getEntries().then(_ => {
JournalFormComponent()
EntryListComponent()
})

