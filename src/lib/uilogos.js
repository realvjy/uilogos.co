export function getFullList(logoData) {
    const some = [["mark", "color"], ["type", "color"], ["mark", "black"], ["type", "black"]]

    const fullList = []
    let id = 1;

    let data = logoData.sort((a, b) => {
        const nameA = a.name.toLowerCase(); // Convert names to lowercase for case-insensitive comparison
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) {
            return -1; // a should come before b in the sorted order
        }
        if (nameA > nameB) {
            return 1; // a should come after b in the sorted order
        }
        return 0; // names are equal
    });

    data.map(((rowData, i) => {
        const row = []
        some.map((element) => {
            const finalElement = {
                name: rowData.name,
                type: element[0],
                style: element[1],
                id: id
            };
            row.push(finalElement)
            id += 1;
        });
        fullList.push(...row)
    }))
    return fullList;
};