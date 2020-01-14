
const selectGenre = (GENEROS, categoria, setIsActive, setCategories) => {
    const {masculino, femenino, todos, unisex} = GENEROS;
        switch (categoria) {
            case masculino:
                setIsActive({isActiveM: true, isActiveF: false, isActiveT: false, isActiveU: false});
                setCategories(categoria);
                break;
            case femenino:
                setIsActive({isActiveM: false, isActiveF: true, isActiveT: false, isActiveU: false});
                setCategories(categoria);
                break;
            case unisex:
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: true});
                setCategories(categoria);
                break;
            case todos:
                setIsActive({isActiveM: false, isActiveF: false, isActiveT: true, isActiveU: false});
                setCategories(categoria);
                break;
        }
}

const selectCategorie = (CATEGORIAS, categoria, setIsActive2) => {
    const {accesorios, abrigos, calzado, camisas, remeras, ropaInterior, pantalones, pollera} = CATEGORIAS;
        switch (categoria) {
            case abrigos:
                setIsActive2({isActiveAbrigos: true, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case accesorios:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: true, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case calzado:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: true, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case camisas:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: true,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case remeras:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: true, isActiveRopaInterior: false});
                break;
            case ropaInterior:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: true});
                break;
            case pantalones:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: true, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
                break;
            case pollera:
                setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: true, isActiveRemera: false, isActiveRopaInterior: false});
                break;
        }
}

export {selectGenre, selectCategorie};