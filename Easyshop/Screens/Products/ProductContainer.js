import { FlatList, StyleSheet, View, Text, Keyboard, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Productlist from './Productlist'
import { SearchBar } from '@rneui/themed'
import Header from '../../Shared/Header'
import SearchedProducts from './SearchedProducts'
import Banner from '../../Shared/Banner'
import CategoryFilter from './CategoryFilter'
const { width } = Dimensions.get('screen')
const ProductContainer = (props) => {

    const data = [{
        "_id": {
            "$oid": "5f15d8852a025143f9593a7c"
        },
        "image": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "brand": "PS3",
        "price": 250,
        "rating": 1,
        "numReviews": 0,
        "isFeatured": true,
        "name": "FIFA 20",
        "description": "The most hard FIFA ever",
        "category": {
            "$oid": "5f15d5cdcb4a6642bddc0fe9"
        },
        "countInStock": 25,
        "__v": 0
    }, {
        "_id": {
            "$oid": "5f15d92ee520d44421ed8e9b"
        },
        "image": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "brand": "IKEA",
        "price": 350.9,
        "rating": 5,
        "numReviews": 0,
        "isFeatured": true,
        "name": "Garden Chair",
        "description": "beautiful chair for garden",
        "category": {
            "$oid": "5f15d5b7cb4a6642bddc0fe8"
        },
        "countInStock": 10,
        "__v": 0
    }, {
        "_id": {
            "$oid": "5f15d964e520d44421ed8e9c"
        },
        "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "brand": "OBI",
        "price": 1350.9,
        "rating": 5,
        "numReviews": 0,
        "isFeatured": true,
        "name": "Swimming Pool",
        "description": "beautiful Swimming Pool for garden",
        "category": {
            "$oid": "5f15d5b7cb4a6642bddc0fe8"
        },
        "countInStock": 10,
        "__v": 0
    }, {
        "_id": {
            "$oid": "5f15d9b3e520d44421ed8e9d"
        },
        "image": "https://static1.squarespace.com/static/5a51022ff43b55247f47ccfc/5a567854f9619a96fd6233bb/5b74446c40ec9afbc633e555/1534346950637/Husqvarna+545FR+%282%29.png?format=1500w",
        "brand": "OBI",
        "price": 490.9,
        "rating": 5,
        "numReviews": 0,
        "isFeatured": true,
        "name": "Grass Cut Machine",
        "description": "Grass Cut Machine for garden",
        "category": {
            "$oid": "5f15d5b7cb4a6642bddc0fe8"
        },
        "countInStock": 5,
        "__v": 0
    }, {
        "_id": {
            "$oid": "5f15da13e520d44421ed8e9e"
        },
        "image": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D",
        "brand": "Mobilix",
        "price": 1000,
        "rating": 5,
        "numReviews": null,
        "isFeatured": true,
        "name": "Sofa",
        "description": "Big Sofa for living room",
        "category": {
            "$oid": "5f15d5b2cb4a6642bddc0fe7"
        },
        "countInStock": 2,
        "__v": 0
    }]


    const categoryjson =
        [{
            "_id": {
                "$oid": "5f15d5cdcb4a6642bddc0fe9"
            },
            "name": "Electronics",
            "__v": 0
        }, {
            "_id": {
                "$oid": "5f15d545f3a046427a1c26e2"
            },
            "name": "Beauty",
            "__v": 0
        }, {
            "_id": {
                "$oid": "5f15d54cf3a046427a1c26e3"
            },
            "name": "Computers",
            "__v": 0
        }, {
            "_id": {
                "$oid": "5f15d5b2cb4a6642bddc0fe7"
            },
            "name": "Home",
            "__v": 0
        }, {
            "_id": {
                "$oid": "5f15d5b7cb4a6642bddc0fe8"
            },
            "name": "Garden",
            "__v": 0
        }, {
            "_id": {
                "$oid": "5f15d5cdcb4a6642bddc0f99"
            },
            "name": "Games",
            "__v": 0
        }]

    const [product, setproduct] = useState([])
    const [ProductFilter, setsearchedProduct] = useState([])
    const [focus, setfocus] = useState(false)
    const [searchtext, setsearchtext] = useState('')
    const [categories, setcategories] = useState([]);
    const [isactive, setactive] = useState(-1)
    const [initialstate, setinitialstate] = useState(data)
    const [productfltctg, setproductfiltrctg] = useState([])


    useEffect(() => {
        setproduct(data)
        setsearchedProduct(data)
        setfocus(false)
        setcategories(categoryjson)
        setactive(-1)
        setinitialstate(data)
        setproductfiltrctg(initialstate)

        return () => {
            setproduct([])
            setfocus(false)
            setsearchedProduct([])
            setinitialstate([])
            setcategories([])
            setactive(-1)
            setproductfiltrctg([])
        }
    }, [])





    const handlesearchtext = (text) => {
        if (text) {
            const data = product.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
            setsearchedProduct(data)
            setsearchtext(text)
        }
        else {
            setsearchtext(text)
            setsearchedProduct(data)
        }
    }


    const onfocus = () => {
        console.log("onfe")
        setfocus(true)
    }

    const onblur = () => {
        setfocus(false)
    }

    const onClear = () => {
        setfocus(false)
        Keyboard.dismiss();
    }



    const FilterCategory = (ctg) => {

        {
            ctg === 'all' ? [
                setproductfiltrctg(initialstate),
                setactive(-1)
            ] : [
                setproductfiltrctg(
                    product.filter((item) => item.category.$oid === ctg._id.$oid)
                ),
                setactive(ctg._id.$oid)
            ]
        }
    }


    return (
        <View style={{ flex: 1, width: '100%' , backgroundColor:'white' }}>
            <SearchBar
                value={searchtext}
                onFocus={onfocus}
                containerStyle={styles.containerStyle}
                placeholder="Search Here..."
                lightTheme={true}
                onBlur={onblur}
                onChangeText={(e) => handlesearchtext(e)}
                inputStyle={styles.inutstyle}
                inputContainerStyle={styles.inputContainerStyle}
                onClear={onClear}
            />

            <View style={{ marginVertical: 10 }}>
                <Banner />
            </View>

            {
                focus === true ? (
                    <SearchedProducts navigation={props.navigation} ProductFilter={ProductFilter} />
                ) : (
                    <>
                        <View>
                            <CategoryFilter FilterCategory={FilterCategory} setactive={setactive} isactive={isactive} categories={categories} />
                        </View>

                        {
                            productfltctg?.length > 0 ? (
                                <FlatList
                                    numColumns={2}
                                    data={productfltctg}
                                    renderItem={({ item }) => <Productlist key={item.id} item={item} navigation={props.navigation} />}
                                    keyExtractor={item => item.name}
                                />
                            ) : (
                                <View style={styles.nofoundview}>
                                    <Text style={styles.text}>No product Found with this categgory</Text>
                                </View>
                            )
                        }


                    </>
                )
            }

        </View>

    )
}

export default ProductContainer

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: 'white',
        padding: 8,
        borderBlockColor: 'white',
        marginVertical: 5
    },
    inputContainerStyle: {
        color: 'black',
        paddingHorizontal: 8,
        borderRadius: 30
    },
    inutstyle: {
        color: 'black',
    },
    nofoundview: {
        height: width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'black',
        fontWeight: '800',
        fontSize: 20
    }
})