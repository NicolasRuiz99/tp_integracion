
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
                setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, 
                    isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setCategories(categoria);
                setCopyList(listado.listMen);
                break;
            case femenino:
                setIsActive({isActiveM: false, isActiveF: true, isActiveT: false, isActiveU: false});
                setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, 
                    isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setCategories(categoria);
                setCopyList(listado.listWomen);
                break;
            case unisex:
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: true});
                setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, 
                    isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setCategories(categoria);
                setCopyList(listado.listUni);
                break;
            case todos:
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: true, isActiveU: false});
                setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, 
                    isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false,  isActiveCalza: false});
                setCategories(categoria);
                setCopyList(listado.listAll);
                break;
        }
}

const selectCategorie = (CATEGORIAS, categoria, setIsActive2, setIsActive) => {
    const {accesorios, abrigos, calzado, remeras, ropaInterior, pantalones, pollera,
        medias, trajes, trajesBaño, blusa, vestido, calzas} = CATEGORIAS;
        switch (categoria) {
            case abrigos:
                setIsActive2({isActiveAbrigos: true, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false,  isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case accesorios:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: true, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false, 
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case calzado:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: true, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case remeras:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: true, isActiveRopaInterior: false, 
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false,  isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case ropaInterior:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: true, 
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case pantalones:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: true, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case pollera:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: true, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case medias:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: true, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case trajes:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: true, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case trajesBaño:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: true, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case blusa:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: true, isActiveVestido: false, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case vestido:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: true, isActiveCalza: false});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
            case calzas:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, 
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false,
                isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: true});
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
                break;
        }
}

const selectPrice = (setIsActive, setIsActive2) => {
    setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
    setIsActive2({isActivePantalon: false, isActivePollera: false, isActiveRopaInterior: false, isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado:false, 
        isActiveMedias: false, isActiveTrajes: false, isActiveTrajesBaño: false, isActiveBlusa: false, isActiveVestido: false, isActiveCalza: false});
};

const colorsLogic = (color, setColorNaranja, setColorAmarillo, setColorBlanco, setColorMagenta, setColorVerde, setColorAzul, setColorRojo, setColorPurpura,  setColorMarron, setColorNegro, setColorCeleste, setColorGris, setColorRosado) => {
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
            break;
        case 'marron':
            setColorBlanco(false);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            setColorMarron(true);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
            break;
        case 'negro':
            setColorBlanco(false);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            setColorMarron(false);
            setColorNegro(true);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
            break;
        case 'gris':
            setColorBlanco(false);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(true);
            setColorCeleste(false);
            setColorRosado(false);
            break;
        case 'celeste':
            setColorBlanco(false);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(true);
            setColorRosado(false);
            break;
        case 'rosado':
            setColorBlanco(false);
            setColorRojo(false);
            setColorVerde(false);
            setColorAzul(false);
            setColorAmarillo(false);
            setColorPurpura(false);
            setColorMagenta(false);
            setColorNaranja(false);
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(true);
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
            setColorMarron(false);
            setColorNegro(false);
            setColorGris(false);
            setColorCeleste(false);
            setColorRosado(false);
            break;
    }
};

const showList = (color, lista) => {
    let listado = lista.filter(item => item.colors.includes(color));
    return listado;
}

const showListLogic = (setCopyList, lista, colorNaranja, colorAmarillo, colorBlanco, colorMagenta, colorVerde, colorAzul, colorRojo, colorPurpura, colorMarron, colorNegro, colorCeleste, colorGris, colorRosado) => {
    if (!colorBlanco && !colorAmarillo && !colorAzul && !colorPurpura && !colorVerde && !colorMagenta && !colorRojo && !colorNaranja && !colorMarron && !colorNegro && !colorGris && !colorCeleste && !colorRosado) {
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
        if (colorMarron) {
            setCopyList(showList('marron', lista))
        }
        if (colorNegro) {
            setCopyList(showList('negro', lista))
        }
        if (colorGris) {
            setCopyList(showList('gris', lista))
        }
        if (colorCeleste) {
            setCopyList(showList('celeste', lista))
        }
        if (colorRosado) {
            setCopyList(showList('rosado', lista))
        }
    }
}



export {selectGenre, selectCategorie, selectPrice, colorsLogic, showListLogic};