import { FlatList, StyleSheet, View, Text, Keyboard, Dimensions, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Productlist from './Productlist'
import { SearchBar } from '@rneui/themed'
import SearchedProducts from './SearchedProducts'
import Banner from '../../Shared/Banner'
import CategoryFilter from './CategoryFilter'
import { data } from '../../assets/data/data'
import { categoryjson } from '../../assets/data/data'
const { width } = Dimensions.get('screen')
const ProductContainer = (props) => {

  

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