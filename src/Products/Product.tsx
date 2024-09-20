import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const imageMap = {
    'americano.jpg': require('../assests/images/americano.jpg'),
    'CafeLatte.jpg': require('../assests/images/CafeLatte.jpg'),
    'Cappuccino.jpg': require('../assests/images/Cappuccino.jpg'),
    'Latte.jpg': require('../assests/images/Latte.jpg'),
};

const Product: React.FC = () => {
    const route = useRoute();
    const { product } = route.params;
    const productImage = imageMap[product.image] || require('../assests/images/Latte.jpg');

    return (
        <ScrollView style={styles.container}>
            <Image source={productImage} style={styles.productImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>{product.price}</Text>
                <Text style={styles.productInfo}>{product.description}</Text>
                <View style={styles.quantityContainer}>
                    <Text style={styles.label}>Select Size:</Text>
                    <View style={styles.quantityOptions}>
                        <Text style={[styles.sizeOption, styles.active]}>Small</Text>
                        <Text style={styles.sizeOption}>Medium</Text>
                        <Text style={styles.sizeOption}>Large</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.addToCartText}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
    },
    productImage: {
        width: '100%',
        height: 300,
        borderRadius: 15,
        marginBottom: 20,
    },
    contentContainer: {
        padding: 20,
        backgroundColor: '#1E1E1E',
        flex: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 10,
    },
    price: {
        fontSize: 22,
        color: '#A96B56',
        marginVertical: 10,
    },
    productInfo: {
        color: '#999',
        marginBottom: 20,
        fontSize: 16,
        lineHeight: 24,
    },
    quantityContainer: {
        marginBottom: 20,
    },
    label: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 10,
    },
    quantityOptions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    sizeOption: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        color: '#FFF',
        fontSize: 16,
    },
    active: {
        backgroundColor: '#A96B56',
    },
    addToCartButton: {
        backgroundColor: '#A96B56',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    addToCartText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default Product;
