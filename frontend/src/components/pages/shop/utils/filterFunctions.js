
const listaParcial = (list) => {
    return {
        listAll: list,
        listMen: list.filter(item => item.genre === 'M'),
        listWomen: list.filter(item => item.genre === 'F'),
        listUni: list.filter(item => item.genre === 'U'), 
    }
};

const selectGenre = (GENEROS, categoria, setIsActive, setCategories, setIsActive2, setCopyList, lista) => {
    const listado = listaParcial(lista);
    const {masculino, femenino, todos, unisex} = GENEROS;
        switch (categoria) {
            case masculino:
                setIsActive({isActiveM: true, isActiveF: false, isActiveT: false, isActiveU: false});
                setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, isActiveCamisas: false});
                setCategories(categoria);
                setCopyList(listado.listMen);
                break;
            case femenino:
                setIsActive({isActiveM: false, isActiveF: true, isActiveT: false, isActiveU: false});
                setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, isActiveCamisas: false});
                setCategories(categoria);
                setCopyList(listado.listWomen);
                break;
            case unisex:
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: true});
                setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, isActiveCamisas: false});
                setCategories(categoria);
                setCopyList(listado.listUni);
                break;
            case todos:
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: true, isActiveU: false});
                setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, isActiveCamisas: false});
                setCategories(categoria);
                setCopyList(listado.listAll);
                break;
        }
}

const selectCategorie = (CATEGORIAS, categoria, setIsActive2, setIsActive) => {
    const {accesorios, abrigos, calzado, camisas, remeras, ropaInterior, pantalones, pollera} = CATEGORIAS;
        switch (categoria) {
            case abrigos:
                setIsActive2({isActiveAbrigos: true, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case accesorios:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: true, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case calzado:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: true, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case camisas:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: true,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case remeras:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: true, isActiveRopaInterior: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case ropaInterior:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: true});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case pantalones:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: true, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case pollera:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: true, isActiveRemera: false, isActiveRopaInterior: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
        }
}

const selectPrice = (setIsActive, setIsActive2) => {
    setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
    setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, isActiveCamisas: false});
};

const colorsLogic = (color, setColorNaranja, setColorAmarillo, setColorBlanco, setColorMagenta, setColorVerde, setColorAzul, setColorRojo, setColorPurpura) => {
    switch (color) {
        case 'blanco':
            setColorBlanco(true);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            break;
        case 'amarillo':
            setColorAmarillo(true);
            setColorBlanco(false);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            break;
        case 'azul':
            setColorAzul(true);
            setColorAmarillo(false);
            setColorBlanco(false);
            setColorRojo(false);
            setColorVerde(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            break;
        case 'verde':
            setColorVerde(true);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorBlanco(false);
            setColorRojo(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            break;
        case 'rojo':
            setColorRojo(true);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorBlanco(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            break;
        case 'purpura':
            setColorPurpura(true);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorBlanco(false);
            setColorMagenta(false);
            setColorNaranja(false);
            break;
            case 'naranja':
                setColorPurpura(false);
                setColorRojo(false);
                setColorVerde(false);
                setColorAzul(false);
                setColorAmarillo(false);
                setColorBlanco(false);
                setColorMagenta(false);
                setColorNaranja(true);
                break;
            case 'magenta':
                setColorPurpura(false);
                setColorRojo(false);
                setColorVerde(false);
                setColorAzul(false);
                setColorAmarillo(false);
                setColorBlanco(false);
                setColorMagenta(true);
                setColorNaranja(false);
                break;
        default:
            setColorBlanco(false);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            break;
    }
};

const showList = (color, lista) => {
    let listado = lista.filter(item => item.colors.includes(color));
    return listado;
}

const showListLogic = (setCopyList, lista, colorNaranja, colorAmarillo, colorBlanco, colorMagenta, colorVerde, colorAzul, colorRojo, colorPurpura) => {
    if (colorBlanco === false && colorAmarillo === false && colorAzul === false && colorPurpura === false && colorVerde === false && colorMagenta && false && colorRojo === false && colorNaranja === false) {
        return;
    }else {
        if (colorBlanco) {
            setCopyList(showList('blanco', lista));
        };
        if (colorAmarillo) {
         setCopyList(showList('amarillo', lista));
        };
        if (colorAzul) {
         setCopyList(showList('azul', lista));
        };
        if (colorPurpura) {
         setCopyList(showList('purpura', lista));
        };
        if (colorRojo) {
         setCopyList(showList('rojo', lista));
        };
        if (colorNaranja) {
            setCopyList(showList('naranja', lista));
        };
        if (colorMagenta) {
            setCopyList(showList('magenta', lista));
        };
        if (colorVerde) {
            setCopyList(showList('verde', lista))
        }
    }
}



export {selectGenre, selectCategorie, selectPrice, colorsLogic, showListLogic};