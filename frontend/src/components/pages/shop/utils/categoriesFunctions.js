

const changeCategories = (isActive2, list, setIsActive, setCopyList ) => {
    const {isActiveAbrigos, isActiveAccesorios, isActiveCalzado, 
        isActivePantalon, isActivePollera, isActiveRemera, isActiveRopaInterior, isActiveMedias,
        isActiveTrajes, isActiveTrajesBaño, isActiveBlusa, isActiveVestido, isActiveCalza} = isActive2;
        
    if (isActiveAbrigos) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 7 ))} 
    if (isActiveAccesorios) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 6 ))} 
    if (isActiveCalzado) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 1 ))} 
    if (isActivePantalon) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 3 ))} 
    if (isActivePollera) {setCopyList(list.filter(product => product.type === 10 ))} 
    if (isActiveRemera) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 2 ))} 
    if (isActiveRopaInterior) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 5 ))} 
    if (isActiveMedias) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 4 ))} 
    if (isActiveTrajes) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 8 ))} 
    if (isActiveTrajesBaño) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 9 ))} 
    if (isActiveBlusa) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 11 ))} 
    if (isActiveVestido) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 12 ))} 
    if (isActiveCalza) {
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setCopyList(list.filter(product => product.type === 13 ))} 
}

const unselectCategories = (categories, setCopyList, list, setIsActive2) => {
    if(categories !== 'all') {
        setCopyList(list.filter(product => {
            return product.genre.includes(categories); 
        }));
        setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
            isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,isActiveMedias: false,
            isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false });
    }else{
        setCopyList(list);
        setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
            isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,isActiveMedias: false,
            isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
    }
}

const unselectCategories2 = (search, setCopyList, list, setIsActive, setIsActive2) => {
    if(search !== '') {
        setCopyList(list.filter(product => {
            return (product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()));
        }));
        setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
        setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                     isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,isActiveMedias: false,
                     isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
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
      let brown = 0;
      let black = 0;
      let lightBlue = 0;
      let gray = 0;
      let pink = 0;
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
              if (value === 'marron') {
                return brown = brown + 1;
              }
              if (value === 'negro') {
                return black = black + 1;
              }
              if (value === 'celeste') {
                return lightBlue = lightBlue + 1;
              }
              if (value === 'gris') {
                return gray = gray + 1;
              }
              if (value === 'rosado') {
                return pink = pink + 1;
              }
          });
      });
      return {yellow, blue, green, red, white, purple, orange, magenta, brown, black, gray, lightBlue, pink};
}

//Metodos de ordenamiento
const ordenarAlfabeticamente = (metodo, lista) => {
    let listado;
    if(metodo  === 'descendente') {
        listado = lista.sort((a,b) => {
            if (a.name < b.name) {
                return -1;
              }
              else if (a.name > b.name) {
                return 1;
              }
              // si a es igual que b
              return 0;
        });
    }else if (metodo === 'ascendente'){
        listado = lista.sort((a,b) => {
            if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              // si a es igual que b
              return 0;
        });
    }
    return listado;
};

const ordenarxPrecio = (metodo, lista) => {
    let listado;
    if (metodo === 'mayor') {
        listado = lista.sort((a,b) => a.price - b.price);
    }else if (metodo === 'menor') {
        listado = lista.sort((a,b) => b.price - a.price);
    }
    return listado;
}



export {changeCategories, unselectCategories, unselectCategories2, createCountxCategoria, countColors, ordenarAlfabeticamente, ordenarxPrecio};