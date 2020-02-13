import React from "react";
import {
    Page,
    Text,
    View,
    Document,
    StyleSheet
} from "@react-pdf/renderer";
import moment from "moment";
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
                <Text style={styles.titulo}>{`Reservas hechas en la fecha ${moment(new Date()).utc().format('DD-MM-YYYY')}`}</Text>
                {props.data ? 
                    props.data.map((a, index) => {
                            return (
                                <View key={index} style={styles.container}>
                                    <View style={styles.details}>
                                         <Text style={styles.title}>{index + 1}) Reserva #{a.id}: </Text>
                                        <View style={styles.overContainer}>
                                            <Text style={styles.text2}>
                                                {capitalize(a.name)}
                                            </Text>
                                            <Text style={styles.text}>
                                                Color {a.color}, talle {a.size}.
                                            </Text>
                                            <Text style={styles.text}>
                                                Precio total: ${a.price}
                                            </Text>
                                            <Text style={styles.text}>
                                                Stock: {a.stock} {(a.stock === 1) ? 'ud.' : 'uds.'} 
                                            </Text>
                                            <Text style={styles.text}>
                                                ID de producto: {a.prod_id}
                                            </Text>
                                            <Text style={styles.text}>
                                                ID de cliente: {a.id_user}
                                            </Text>
                                            <Text style={styles.text}>
                                                Fecha:{" "}
                                                {moment(a.date).utc().format(
                                                    " MMMM D Y"
                                                )}
                                            </Text>
                                            <Text style={styles.text}>
                                                Estado de la reserva: {(a.state === 'reserved') ? 
                                                'reservada' : 'cancelada'}
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