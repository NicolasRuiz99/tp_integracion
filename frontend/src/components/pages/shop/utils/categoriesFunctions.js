
const changeCategories = (isActive2, list, setIsActive, setCopyList ) => {
    const {isActiveAbrigos, isActiveAccesorios, isActiveCalzado, isActiveCamisas,
        isActivePantalon, isActivePollera, isActiveRemera, isActiveRopaInterior} = isActive2;

    if (isActiveAbrigos) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 7 ))} 
    if (isActiveAccesorios) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 6 ))} 
    if (isActiveCalzado) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 1 ))} 
    if (isActiveCamisas) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 2 ))} 
    if (isActivePantalon) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 3 ))} 
    if (isActivePollera) {setCopyList(list.filter(product => product.type === 3 ))} 
    if (isActiveRemera) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 2 ))} 
    if (isActiveRopaInterior) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 5 ))} 
}

const unselectCategories = (categories, setCopyList, list, setIsActive2) => {
    if(categories !== 'all') {
        setCopyList(list.filter(product => {
            return product.genre.includes(categories); 
        }));
        setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
            isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
    }else{
        setCopyList(list);
        setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
            isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
    }
}

const unselectCategories2 = (search, setCopyList, list, setIsActive, setIsActive2) => {
    if(search !== '') {
        setCopyList(list.filter(product => {
            return (product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()));
        }));
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                     isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
    }else{
        setCopyList(list);
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: true, isActiveU: false});
    }
}

const createCountxCategoria = (list, copyList) => {
    return {
        listAll: list.length,
        listMen: list.filter(item => item.genre === 'M').length,
        listWomen: list.filter(item => item.genre === 'F').length,
        listUni: list.filter(item => item.genre === 'U').length,
        listNike: copyList.filter(item => item.brand === "nike").length,
        listLacoste: copyList.filter(item => item.brand === "lacoste").length,
        listAdidas: copyList.filter(item => item.brand === "adidas").length,
        listTaverniti: copyList.filter(item => item.brand === "taverniti").length,
    };
}

export {changeCategories, unselectCategories, unselectCategories2, createCountxCategoria};