
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

const createCountxCategoria = (list) => {
    return {
        listAll: list.length,
        listMen: list.filter(item => item.genre === 'M').length,
        listWomen: list.filter(item => item.genre === 'F').length,
        listUni: list.filter(item => item.genre === 'U').length,
    };
};

const countColors = (vector) => {
      //Variables de colores
      let yellow = 0;
      let blue = 0;
      let red = 0;
      let green = 0;
      let white = 0;
      let purple = 0;
      let orange = 0;
      let magenta = 0;
      vector.forEach(item => {
          let colores = item.colors;
          colores.forEach(value => {
              if (value === 'amarillo') {
                  return yellow = yellow + 1;
              }
              if (value === 'azul') {
                  return blue = blue + 1;
              }
              if (value === 'verde') {
                  return green = green + 1;
              }
              if (value === 'blanco') {
                  return white = white + 1;
              }
              if (value === 'rojo') {
                  return red = red + 1;
              }
              if (value === 'purpura') {
                  return purple = purple + 1;
              }
              if (value === 'naranja') {
                  return orange = orange + 1;
              }
              if (value === 'magenta') {
                  return magenta = magenta + 1;
              }
          });
      });
      return {yellow, blue, green, red, white, purple, orange, magenta};
}


export {changeCategories, unselectCategories, unselectCategories2, createCountxCategoria, countColors};