import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet
} from "@react-pdf/renderer";
import { capitalize } from "../../utils/adminFunctions";


const styles = StyleSheet.create({
    page: {
        backgroundColor: "#F0E68C"
    },
    container: {
        backgroundColor: "#F0E68C",
        flexDirection: "row",
        padding: 5,
    },
    details: {
        marginLeft: 5
    },
    title: {
        fontSize: 15,
        marginBottom: 10,
        backgroundColor: "black",
        color: "white",
    },
    titulo: {
        fontSize: 23,
        marginBottom: 10,
        color: "black",
        textAlign:'center',
        textDecoration: 'underline',
        fontFamily:'Helvetica'
    },
    text: {
        fontSize: 10,
        marginLeft: 4
    },
    text2: {
        fontSize: 18,
        marginLeft: 4
    },
    overContainer: {
        minHeight: 110,
        textAlign:'center'
    }
});

export default function PdfDocument(props) {
    return (
        <Document>
            <Page style={styles.page}>
                <Text style={styles.titulo}>Productos con poco stock</Text>
                {props.data ? 
                    props.data.map((a, index) => {
                            return (
                                <View key={index} style={styles.container}>
                                    <View style={styles.details}>
                                         <Text style={styles.title}>{index + 1}) Producto #{a.id}: </Text>
                                        <View style={styles.overContainer}>
                                            <Text style={styles.text2}>
                                                {capitalize(a.name)}
                                            </Text>
                                            <Text style={styles.text}>
                                                Marca {a.brand}, material: {a.material}.
                                            </Text>
                                            <Text style={styles.text}>
                                                Precio: ${a.price} {(a.discount === 0) ? null : (`con descuento del ${a.discount}%`)} 
                                            </Text>
                                            <Text style={styles.text}>
                                                Stock: {a.stock} {(a.stock === 1) ? 'ud.' : 'uds.'} 
                                            </Text>
                                            <Text style={styles.text}>
                                                Estado del producto: {(a.active) ? 
                                                'activado' : 'desactivado'}
                                            </Text>
                                        </View>
                                     </View>
                                 </View>
                            );
                        })
                : null}
            </Page>
        </Document>
    );
}