import { generateUUID } from '../uuid'
import { getCurrentDatetime } from '../datetime'

export default class ListItem {
  constructor({ title }) {
    this._id = generateUUID()
    this.title = title
    this.createdDatetime = getCurrentDatetime()
  }
}
