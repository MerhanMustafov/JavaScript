const Item = require('../models/ItemModel')
module.exports = {
    create,
    getAll
}

async function create(itemData) {
    const item = new Item(itemData)
    await item.save()
}
async function getAll() {
    const items = await Item.find({})
    return items
}

