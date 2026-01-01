let AtkDB = [
    {id: 1, nama: "Example Item 1", jenis: "Type A", qty: 10},
    {id: 2, nama: "Example Item 2", jenis: "Type B", qty: 5},
];

let nextId = 3

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getAllAtk = async () => { //get all item
    await delay(500); 
    return JSON.parse(JSON.stringify(AtkDB));
};

export const getAtk = async (id) => { //get one item
    await delay(500);
    const item = AtkDB.find(i => i.id === id);
    if (!item) throw new Error("Item not found");
    return JSON.parse(JSON.stringify(item));
};

export const createAtk = async (nama, jenis, qty) => { //create new item
    await delay(500);
    if (!nama || !jenis || qty <= 0) throw new Error("Validation Failed");

    const newItem = {
        id: nextId++,
        nama,
        jenis,
        qty: parseInt(qty)
    };
    AtkDB.push(newItem);
    return JSON.parse(JSON.stringify(newItem));
};

export const updateAtk = async (id, nama, jenis, qty) => { //edit item
    await delay(500);
    if(!nama || !jenis || qty <= 0) throw new Error("Validation Failed");

    const item = AtkDB.find(i => i.id === id);

    if (!item) throw new Error("Item not found");

    item.nama = nama;
    item.jenis = jenis;
    item.qty = parseInt(qty);

    return JSON.parse(JSON.stringify(item));
};

export const deleteAtk = async (id) => { //delete item
    await delay(500);
    const item = AtkDB.findIndex(i => i.id === id);
    if(item === -1) throw new Error("Item not found");

    AtkDB.splice(item, 1);
    return {message: "Item deleted"};
};