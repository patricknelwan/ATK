let AtkDB = [
    {id: 1, nama: "Example Item 1", jenis: "Type A", qty: 10},
    {id: 2, nama: "Example Item 2", jenis: "Type B", qty: 5},
];

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getAllAtk = async () => {
    await delay(500); 
    return JSON.parse(JSON.stringify(AtkDB));
};

export const getAtk = async (id) => {
    await delay(500);
    const item = AtkDB.find(i => i.id === id);
    if (!item) throw new Error("Item not found");
    return JSON.parse(JSON.stringify(item));
};

